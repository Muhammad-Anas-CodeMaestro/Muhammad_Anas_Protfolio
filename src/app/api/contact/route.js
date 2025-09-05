import nodemailer from 'nodemailer'

export async function POST(req) {
  try {
    const { name, email, location, budget, subject, message } = await req.json()
    
    if (!name || !email || !location || !budget || !subject || !message) {
      return new Response(JSON.stringify({ error: 'All fields are required.' }), { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })

    await transporter.sendMail({
      from: `"${email}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Location: ${location}
        Budget: ${budget}
        Subject: ${subject}
        Message: ${message}
      `,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    })

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ success: false }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}