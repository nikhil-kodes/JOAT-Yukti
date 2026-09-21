import { RegistrationForm } from "@/components/forms/register";
import { Footer } from "@/components/sections/landing";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Access Request | JOAT",
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
