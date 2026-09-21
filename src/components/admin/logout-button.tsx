"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function LogoutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  };

  return (
    <Button variant="outline" size="sm" onClick={handleLogout} disabled={loading} className="text-text-muted hover:text-warn-500 hover:border-warn-500/50 hover:bg-warn-500/10 transition-colors">
      {loading ? "..." : "Logout"}
    </Button>
  );
}
