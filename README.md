This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Copy `.env.example` to `.env.local` and fill in your credentials:

```bash
cp .env.example .env.local
```

**Email Configuration (Gmail):**
- `EMAIL_USER`: Your Gmail address
- `EMAIL_PASS`: [Gmail App Password](https://support.google.com/accounts/answer/185833) (not your regular password)
- `EMAIL_TO`: The email address where contact form submissions will be sent

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Security & Recent Improvements

### Contact API (`/api/contact`)
- ✅ **Input Validation**: All form fields are validated and trimmed
- ✅ **Sanitization**: Prevents XSS attacks by escaping HTML/special characters
- ✅ **Email Validation**: Validates email format before processing
- ✅ **Rate Limiting**: Prevents spam by limiting 3 requests per IP per minute
- ✅ **Error Handling**: Safe, user-friendly error messages; detailed logging for debugging
- ✅ **Reply-To Header**: Contact emails can be replied to directly from your inbox

### Environment Variables
All sensitive credentials are now managed via `.env.local` (not committed to git). See `.env.example` for required variables.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

**Important:** When deploying to Vercel, add your environment variables in the project settings → Environment Variables.
