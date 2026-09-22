"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function StatusSelector({ participantId, currentStatus }: { participantId: string, currentStatus: string }) {
  const [status, setStatus] = useState(currentStatus || 'pending');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleStatusChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value;
    setStatus(newStatus);
    setLoading(true);

    try {
      const res = await fetch('/api/admin/registrations/status', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ participantId, status: newStatus })
      });
      if (res.ok) {
        router.refresh();
      }
    } catch (err) {
      console.error(err);
      setStatus(currentStatus); // revert on error
    } finally {
      setLoading(false);
    }
  };

  let colorClass = 'bg-text-muted/10 text-text-muted border-text-muted/20';
  if (status === 'approved') colorClass = 'bg-accent-500/10 text-accent-500 border-accent-500/20';
  if (status === 'waitlisted') colorClass = 'bg-warn-500/10 text-warn-500 border-warn-500/20';

  return (
    <select 
      value={status}
      onChange={handleStatusChange}
      disabled={loading}
      className={`inline-flex items-center px-2 py-1 rounded text-[10px] font-mono uppercase border outline-none cursor-pointer appearance-none ${colorClass}`}
    >
      <option value="pending" className="bg-bg-void text-text-muted">PENDING</option>
      <option value="approved" className="bg-bg-void text-accent-500">APPROVED</option>
      <option value="waitlisted" className="bg-bg-void text-warn-500">WAITLISTED</option>
    </select>
  );
}
