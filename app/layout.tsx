import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vesta Step — Borderless driving buddy",
  description:
    "The operating system for new residents in the United States — connecting licensing, vehicles, insurance, legal, accounting, and cross-border lending in one platform, in their language.",
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Vesta Step — Borderless driving buddy",
    description:
      "Mobility & financial infrastructure for new Americans. Licensing, vehicles, insurance, legal, accounting, and cross-border lending — in one platform.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#08090a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
