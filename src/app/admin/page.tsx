export const dynamic = "force-dynamic";

import { Panel } from "@/components/ui/panel";
import { createAdminClient } from "@/lib/supabase/server";

export default async function AdminOverviewPage() {
  const supabase = createAdminClient();
  const { count: total, error } = await supabase
    .from("registrations")
    .select("*", { count: "exact", head: true });

  const { count: confirmed } = await supabase
    .from("registrations")
    .select("*", { count: "exact", head: true })
    .eq("status", "confirmed");

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto">
      <h1 className="text-2xl font-mono uppercase tracking-widest text-text-primary mb-8">System Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Panel className="p-6 border-accent-500/30">
          <div className="font-mono text-xs text-text-muted uppercase tracking-wider mb-2">Total Registrations</div>
          <div className="text-4xl font-mono text-text-primary">{error ? "-" : total}</div>
        </Panel>
        
        <Panel className="p-6 border-accent-500/30">
          <div className="font-mono text-xs text-text-muted uppercase tracking-wider mb-2">Confirmed</div>
          <div className="text-4xl font-mono text-accent-500">{error ? "-" : confirmed}</div>
        </Panel>

        <Panel className="p-6 border-text-muted/20">
          <div className="font-mono text-xs text-text-muted uppercase tracking-wider mb-2">System Status</div>
          <div className="text-xl font-mono text-text-primary mt-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse"></span>
            Online
          </div>
        </Panel>
      </div>
    </div>
  );
}
