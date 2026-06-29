import nodemailer from 'nodemailer'

// Simple in-memory rate limiter (stores IP → timestamp)
const rateLimitMap = new Map()
const RATE_LIMIT_WINDOW = 60000 // 1 minute in ms
const MAX_REQUESTS_PER_WINDOW = 3

// Helper: Sanitize string inputs to prevent XSS
function sanitizeInput(input) {
  if (typeof input !== 'string') return ''
  return input
    .trim()
    .slice(0, 1000) // Limit length
    .replace(/[<>]/g, '') // Remove angle brackets
}

// Helper: Validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email) && email.length <= 254
}

// Helper: Get client IP from request
function getClientIP(req) {
  const forwarded = req.headers.get('x-forwarded-for')
  return forwarded ? forwarded.split(',')[0].trim() : 'unknown'
}

// Helper: Check rate limit
function checkRateLimit(ip) {
  const now = Date.now()
  const lastRequest = rateLimitMap.get(ip) || []
  
  // Remove old timestamps outside window
  const recentRequests = lastRequest.filter(timestamp => now - timestamp < RATE_LIMIT_WINDOW)
  
  if (recentRequests.length >= MAX_REQUESTS_PER_WINDOW) {
    return false // Rate limit exceeded
  }
  
  rateLimitMap.set(ip, [...recentRequests, now])
  return true
}

// Helper: Escape HTML to prevent XSS in emails
function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  }
  return text.replace(/[&<>"']/g, m => map[m])
}

export async function POST(req) {
  try {
    // Check environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.EMAIL_TO) {
      console.error('Missing email configuration environment variables')
      return new Response(JSON.stringify({ error: 'Server configuration error' }), { status: 500 })
    }

    // Rate limiting
    const clientIP = getClientIP(req)
    if (!checkRateLimit(clientIP)) {
      return new Response(JSON.stringify({ error: 'Too many requests. Please try again later.' }), { status: 429 })
    }

    const body = await req.json()
    let { name, email, location, budget, subject, message } = body

    // Validate and sanitize all inputs
    name = sanitizeInput(name)
    email = sanitizeInput(email)
    location = sanitizeInput(location)
    budget = sanitizeInput(budget)
    subject = sanitizeInput(subject)
    message = sanitizeInput(message)

    // Check required fields
    if (!name || !email || !location || !budget || !subject || !message) {
      return new Response(
        JSON.stringify({ error: 'All fields are required and cannot be empty.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email address.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Configure email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })

    // Escape data for safe HTML rendering
    const escapedName = escapeHtml(name)
    const escapedEmail = escapeHtml(email)
    const escapedLocation = escapeHtml(location)
    const escapedBudget = escapeHtml(budget)
    const escapedSubject = escapeHtml(subject)
    const escapedMessage = escapeHtml(message)

    // Send email
    await transporter.sendMail({
      from: `"${escapedName}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `New Contact Form Submission: ${escapedSubject}`,
      text: `
Name: ${escapedName}
Email: ${escapedEmail}
Location: ${escapedLocation}
Budget: ${escapedBudget}
Subject: ${escapedSubject}
Message: ${escapedMessage}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapedName}</p>
        <p><strong>Email:</strong> <a href="mailto:${escapedEmail}">${escapedEmail}</a></p>
        <p><strong>Location:</strong> ${escapedLocation}</p>
        <p><strong>Budget:</strong> ${escapedBudget}</p>
        <p><strong>Subject:</strong> ${escapedSubject}</p>
        <p><strong>Message:</strong></p>
        <p>${escapedMessage.replace(/\n/g, '<br>')}</p>
      `
    })

    return new Response(
      JSON.stringify({ success: true, message: 'Message sent successfully!' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Error in contact API:', error.message)
    return new Response(
      JSON.stringify({ error: 'Failed to send message. Please try again later.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}