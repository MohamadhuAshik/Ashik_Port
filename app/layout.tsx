import type { Metadata } from "next";
import { MotionProvider } from "@/components/ui/MotionProvider";
import "./globals.css";

const siteUrl = "https://mohamadhuashik.dev";
const siteTitle = "Mohamadhu Ashik S — Full Stack Developer";
const siteDescription =
  "Full Stack Developer with 2+ years of experience building web applications using React.js, Next.js, Node.js, and Express.js. Experienced in REST APIs, microservices, and payment gateway integration.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s — Mohamadhu Ashik S",
  },
  description: siteDescription,
  keywords: [
    "Mohamadhu Ashik S",
    "Mohamadhu Ashik",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Microservices",
    "Portfolio",
  ],
  authors: [{ name: "Mohamadhu Ashik S" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: siteTitle,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#05070b",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- rule targets pages/_document.js; this is the App Router root layout, so the stylesheet correctly applies to every route */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
        />
      </head>
      <body className="min-h-screen bg-void font-sans text-text-primary antialiased">
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-md bg-accent-blue px-4 py-2 text-sm font-medium text-white transition-transform focus:translate-y-0"
        >
          Skip to main content
        </a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
