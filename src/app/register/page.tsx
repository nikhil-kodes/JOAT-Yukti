import { RegistrationForm } from "@/components/forms/register";
import { Footer } from "@/components/sections/landing";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register Now – Jack of All Trades",
  description:
    "Register for Jack of All Trades, the ultimate 120-minute offline multi-domain technical sprint by Yuktikula at GL Bajaj Institute of Technology & Management, Greater Noida. Limited to 150 seats. First come, first served.",
  keywords: [
    "Jack of All Trades registration",
    "Yuktikula registration",
    "GLBITM coding event register",
    "GL Bajaj hackathon registration",
    "Greater Noida tech event signup",
  ],
  openGraph: {
    title: "Register – Jack of All Trades | Yuktikula",
    description:
      "Secure your spot in the ultimate technical gauntlet. Only 150 seats available. Register now before it's too late.",
    url: "/register",
    images: [{ url: "/assets/card-front.png", width: 1200, height: 630 }],
  },
  alternates: { canonical: "/register" },
};

export default function RegisterPage() {
  return (
    <main className="flex flex-col min-h-screen relative overflow-hidden bg-bg-base">
      <div className="absolute inset-0 bg-[url('/assets/grain-texture-1.png')] bg-repeat opacity-10 mix-blend-overlay pointer-events-none"></div>
      
      <header className="p-6 relative z-10 flex justify-between items-center border-b border-text-muted/10 bg-bg-surface/50 backdrop-blur-md">
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative w-8 h-8 opacity-70 group-hover:opacity-100 transition-opacity">
             <Image src="/assets/joat-logo-Photoroom.png" alt="JOAT" fill className="object-contain" />
          </div>
          <span className="font-mono text-sm tracking-widest text-text-muted group-hover:text-accent-500 transition-colors uppercase hidden sm:block">
            System Back
          </span>
        </Link>
        <div className="font-mono text-xs uppercase tracking-widest text-text-metallic">
          Status: Access Request
        </div>
      </header>
      
      <div className="flex-1 flex flex-col items-center justify-center p-6 py-12 relative z-10">
        <RegistrationForm />
      </div>
      
      <Footer />
    </main>
  );
}
