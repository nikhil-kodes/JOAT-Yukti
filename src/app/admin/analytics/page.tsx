export const dynamic = "force-dynamic";

import { createAdminClient } from "@/lib/supabase/server";
import { AnalyticsCharts } from "@/components/admin/analytics-charts";

export default async function AdminAnalyticsPage() {
  const supabase = createAdminClient();
  const { data: registrations } = await supabase.from("registrations").select("branch, year, programming_experience");

  // Aggregate by Branch
  const branchMap = registrations?.reduce((acc, curr) => {
    acc[curr.branch] = (acc[curr.branch] || 0) + 1;
    return acc;
  }, {} as Record<string, number>) || {};
  const branches = Object.keys(branchMap).map(k => ({ name: k, value: branchMap[k] })).sort((a,b) => b.value - a.value);

  // Aggregate by Year
  const yearMap = registrations?.reduce((acc, curr) => {
    acc[curr.year] = (acc[curr.year] || 0) + 1;
    return acc;
  }, {} as Record<string, number>) || {};
  const years = Object.keys(yearMap).map(k => ({ name: k, value: yearMap[k] })).sort((a,b) => a.name.localeCompare(b.name));

  // Aggregate by Exp
  const expMap = registrations?.reduce((acc, curr) => {
    const key = curr.programming_experience.replace('_', ' ');
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {} as Record<string, number>) || {};
  const exps = Object.keys(expMap).map(k => ({ name: k.charAt(0).toUpperCase() + k.slice(1), value: expMap[k] })).sort((a,b) => b.value - a.value);

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto">
      <h1 className="text-2xl font-mono uppercase tracking-widest text-text-primary mb-8">System Analytics</h1>
      <AnalyticsCharts branches={branches} years={years} exps={exps} />
    </div>
  );
}
