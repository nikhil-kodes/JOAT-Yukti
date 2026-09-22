"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function CsvExportButton({ data }: { data: any[] }) {
  const [filter, setFilter] = useState("all");

  const exportCsv = () => {
    if (!data || !data.length) return;
    
    let filteredData = data;
    if (filter !== "all") {
      filteredData = data.filter(r => r.status === filter);
    }
    if (!filteredData.length) {
      alert("No data for this filter");
      return;
    }

    const headers = Object.keys(filteredData[0]).join(",");
    const rows = filteredData.map(row => {
      return Object.values(row).map(value => {
        const str = String(value ?? "");
        return `"${str.replace(/"/g, '""')}"`;
      }).join(",");
    });
    
    const csvContent = [headers, ...rows].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `joat_registrations_${filter}_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex items-center gap-2">
      <select 
        value={filter} 
        onChange={(e) => setFilter(e.target.value)}
        className="bg-bg-surface border border-text-muted/20 text-text-primary text-xs rounded px-2 py-2 font-mono outline-none"
      >
        <option value="all">Export All</option>
        <option value="pending">Pending Only</option>
        <option value="approved">Approved Only</option>
        <option value="waitlisted">Waitlisted Only</option>
      </select>
      <Button onClick={exportCsv} variant="outline" size="sm" className="font-mono shadow-[0_0_10px_rgba(0,255,156,0.1)]">
        Download
      </Button>
    </div>
  );
}
