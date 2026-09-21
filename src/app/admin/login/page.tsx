"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Panel } from "@/components/ui/panel";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        setError("Invalid credentials or system error.");
        return;
      }
      
      router.push("/admin");
      router.refresh();
    } catch (err) {
      setError("Network error.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-bg-base flex items-center justify-center relative p-6">
      <div className="absolute inset-0 bg-[url('/assets/grain-texture-1.png')] bg-repeat opacity-10 mix-blend-overlay pointer-events-none"></div>
      
      <Panel className="max-w-sm w-full p-8 relative z-10">
        <div className="flex justify-center mb-8">
          <div className="relative w-12 h-12 opacity-80">
            <Image src="/assets/joat-logo-Photoroom.png" alt="JOAT" fill className="object-contain" />
          </div>
        </div>
        
        <h1 className="text-xl font-mono uppercase tracking-widest text-center text-text-primary mb-2">Control Room</h1>
        <p className="text-xs font-mono text-center text-text-muted mb-8 uppercase tracking-wider">Authorized Personnel Only</p>
        
        {error && (
          <div className="mb-6 p-3 border border-warn-500/50 bg-warn-500/10 text-warn-500 text-xs font-mono text-center">
            {error}
          </div>
        )}
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-mono text-text-muted uppercase tracking-wider">Admin ID / Email</label>
            <Input 
              type="email" 
              required 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
              className="font-mono text-sm"
              placeholder="admin@yuktikula.org"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-mono text-text-muted uppercase tracking-wider">Passcode</label>
            <Input 
              type="password" 
              required 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
              className="font-mono text-sm tracking-widest"
              placeholder="••••••••"
            />
          </div>
          
          <Button type="submit" className="w-full mt-4" disabled={isLoading}>
            {isLoading ? "Authenticating..." : "Initialize Session"}
          </Button>
        </form>
      </Panel>
    </div>
  );
}
