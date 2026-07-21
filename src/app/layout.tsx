import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Siddhant Rajan | Software Engineering & AI",
    template: "%s | Siddhant Rajan",
  },

  description:
    "Portfolio of Siddhant Rajan, a Computer Science student at IIT Patna exploring software engineering, artificial intelligence, and product development.",

  keywords: [
    "Siddhant Rajan",
    "IIT Patna",
    "Computer Science",
    "Software Engineering",
    "Artificial Intelligence",
    "Machine Learning",
    "AI",
    "Software Development",
  ],

  authors: [
    {
      name: "Siddhant Rajan",
    },
  ],

  creator: "Siddhant Rajan",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    title: "Siddhant Rajan | Software Engineering & AI",
    description:
      "Computer Science student at IIT Patna exploring software engineering, artificial intelligence, and product development.",
    siteName: "Siddhant Rajan",
  },

  twitter: {
    card: "summary_large_image",
    title: "Siddhant Rajan | Software Engineering & AI",
    description:
      "Computer Science student at IIT Patna exploring software engineering, artificial intelligence, and product development.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}