import { Analytics } from '@vercel/analytics/next';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Muhammad Anas | Front-End Developer",
  description: "Portfolio of Muhammad Anas, a front-end developer specializing in React, Next.js, Tailwind CSS, and responsive UI/UX design.",
  keywords: [
    "Front-End Developer",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Portfolio",
    "UI/UX Design",
    "Web Development",
  ],
  icons: [
    {
      rel: "icon",
      url: "/DP.png",
    },
  ],
  openGraph: {
    title: "Muhammad Anas | Front-End Developer",
    description: "Portfolio of Muhammad Anas, a front-end developer specializing in React, Next.js, Tailwind CSS, and responsive UI/UX design.",
    type: "website",
    locale: "en_US",
    siteName: "Muhammad Anas Portfolio",
    images: [
      {
        url: "/DP.png",
        width: 1200,
        height: 630,
        alt: "Profile picture of Muhammad Anas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Anas | Front-End Developer",
    description: "Front-end developer portfolio of Muhammad Anas showcasing responsive web apps and UI/UX work.",
    images: ["/DP.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
