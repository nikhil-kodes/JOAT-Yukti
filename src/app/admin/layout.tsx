import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LogoutButton } from "@/components/admin/logout-button";

import { cookies } from "next/headers";
import { verifyAdminToken } from "@/lib/auth/jwt";

export const metadata: Metadata = {
  title: "Control Room | JOAT Admin",
};

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const token = cookieStore.get(process.env.ADMIN_SESSION_COOKIE_NAME || "joat_admin_session")?.value;
  let isLoggedIn = false;
  if (token) {
    const payload = await verifyAdminToken(token);
    if (payload) isLoggedIn = true;
  }
  return (
    <div className="min-h-screen bg-bg-base flex flex-col font-sans">
      <div className="absolute inset-0 bg-[url('/assets/grain-texture-1.png')] bg-repeat opacity-10 mix-blend-overlay pointer-events-none fixed"></div>
      
      <header className="border-b border-text-muted/20 bg-bg-surface p-4 relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sticky top-0">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 w-full md:w-auto">
          <Link href="/admin" className="flex items-center gap-3">
             <div className="relative w-6 h-6 opacity-80">
               <Image src="/assets/joat-logo-Photoroom.png" alt="JOAT" fill className="object-contain" />
             </div>
             <span className="font-mono font-bold text-accent-500 uppercase tracking-widest text-sm shrink-0">Control Room</span>
          </Link>
          {isLoggedIn && (
            <nav className="flex items-center gap-4 font-mono text-[10px] sm:text-xs uppercase tracking-wider overflow-x-auto pb-1 md:pb-0 w-full md:w-auto hide-scrollbar">
               <Link href="/admin" className="text-text-muted hover:text-text-primary transition-colors whitespace-nowrap">Overview</Link>
               <Link href="/admin/registrations" className="text-text-muted hover:text-text-primary transition-colors whitespace-nowrap">Registrations</Link>
               <Link href="/admin/analytics" className="text-text-muted hover:text-text-primary transition-colors whitespace-nowrap">Analytics</Link>
            </nav>
          )}
        </div>
        
        <div className="flex items-center justify-between w-full sm:w-auto sm:justify-end gap-6">
           <Link href="/">
             <Button variant="ghost" size="sm" className="text-text-muted hover:text-accent-500 font-mono text-xs">
               ← Main Site
             </Button>
           </Link>
           {isLoggedIn && <LogoutButton />}
        </div>
      </header>
      
      <main className="flex-1 relative z-10">
        {children}
      </main>
    </div>
  );
}
