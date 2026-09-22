export const dynamic = "force-dynamic";

import { Panel } from "@/components/ui/panel";
import { createAdminClient } from "@/lib/supabase/server";
import { CsvExportButton } from "@/components/admin/csv-export-button";
import { StatusSelector } from "@/components/admin/status-selector";

export default async function AdminRegistrationsPage() {
  const supabase = createAdminClient();
  const { data: registrations } = await supabase
    .from("registrations")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="p-6 md:p-8 w-full">
      <div className="flex justify-between items-center mb-8 max-w-7xl mx-auto">
        <h1 className="text-2xl font-mono uppercase tracking-widest text-text-primary">Registrations Database</h1>
        <CsvExportButton data={registrations || []} />
      </div>
      
      <Panel className="overflow-x-auto mx-auto w-full max-w-[95vw]">
        <table className="w-full text-left text-xs whitespace-nowrap">
          <thead className="bg-bg-base/80 border-b border-text-muted/20 font-mono text-text-muted uppercase tracking-wider">
            <tr>
              <th className="px-4 py-3 font-medium">Participant ID</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Full Name</th>
              <th className="px-4 py-3 font-medium">Roll Number</th>
              <th className="px-4 py-3 font-medium">College Email</th>
              <th className="px-4 py-3 font-medium">Phone Number</th>
              <th className="px-4 py-3 font-medium">Branch</th>
              <th className="px-4 py-3 font-medium">Year</th>
              <th className="px-4 py-3 font-medium">Section</th>
              <th className="px-4 py-3 font-medium">Exp. Level</th>
              <th className="px-4 py-3 font-medium">Language</th>
              <th className="px-4 py-3 font-medium">GitHub URL</th>
              <th className="px-4 py-3 font-medium">Registered At</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-text-muted/10 font-sans">
            {registrations?.map((reg) => (
              <tr key={reg.participant_id} className="hover:bg-bg-base/50 transition-colors">
                <td className="px-4 py-3 font-mono text-accent-500">{reg.participant_id}</td>
                <td className="px-4 py-3">
                  <StatusSelector participantId={reg.participant_id} currentStatus={reg.status} />
                </td>
                <td className="px-4 py-3 text-text-primary font-medium">{reg.full_name}</td>
                <td className="px-4 py-3 text-text-muted font-mono">{reg.roll_number}</td>
                <td className="px-4 py-3 text-text-muted">{reg.college_email}</td>
                <td className="px-4 py-3 text-text-muted font-mono">{reg.phone_number}</td>
                <td className="px-4 py-3 text-text-muted">{reg.branch}</td>
                <td className="px-4 py-3 text-text-muted">{reg.year}</td>
                <td className="px-4 py-3 text-text-muted">{reg.section || "N/A"}</td>
                <td className="px-4 py-3 text-text-muted capitalize">{reg.programming_experience.replace('_', ' ')}</td>
                <td className="px-4 py-3 text-text-muted capitalize">{reg.preferred_language}</td>
                <td className="px-4 py-3 text-text-muted truncate max-w-[150px]">
                  {reg.github_url ? <a href={reg.github_url} target="_blank" rel="noreferrer" className="text-accent-500 hover:underline">{reg.github_url}</a> : "N/A"}
                </td>
                <td className="px-4 py-3 text-text-muted font-mono text-[10px]">
                  {new Date(reg.created_at).toLocaleString()}
                </td>
              </tr>
            ))}
            {!registrations?.length && (
              <tr>
                <td colSpan={13} className="px-4 py-8 text-center text-text-muted font-mono text-sm">
                  No registrations found in the database.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </Panel>
    </div>
  );
}
