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
  title: "Jack of All Trades | Yuktikula",
  description: "Can you actually solve technical problems when nobody tells you what to do? An underground technical challenge system by Yuktikula.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased bg-bg-base text-text-primary`}>
      <body className="min-h-screen flex flex-col bg-bg-base overflow-x-hidden selection:bg-accent-500/30 selection:text-text-primary">
        {children}
      </body>
    </html>
  );
}
