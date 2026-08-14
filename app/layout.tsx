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
  title: "Eminioluwa Akinrinade | Full-Stack Engineer & Mobile Developer",
  description:
    "Portfolio of Eminioluwa Akinjide Akinrinade — a Full-Stack Software Engineer and Mobile Developer based in Lagos, Nigeria. Building scalable web & mobile applications with React, Next.js, Node.js, and AI-powered solutions.",
  keywords: [
    "Full-Stack Developer",
    "Software Engineer",
    "Mobile Developer",
    "React Developer",
    "Next.js",
    "Node.js",
    "Lagos Nigeria",
    "Eminioluwa Akinrinade",
    "AI Solutions",
    "React Native",
  ],
  authors: [{ name: "Eminioluwa Akinjide Akinrinade" }],
  creator: "Eminioluwa Akinjide Akinrinade",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://emini.fun",
    title: "Eminioluwa Akinrinade | Full-Stack Engineer & Mobile Developer",
    description:
      "Building scalable web & mobile applications from Lagos to the world.",
    siteName: "Eminioluwa Akinrinade Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eminioluwa Akinrinade | Full-Stack Engineer",
    description:
      "Building scalable web & mobile applications from Lagos to the world.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
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
