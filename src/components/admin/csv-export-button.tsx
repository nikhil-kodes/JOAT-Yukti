"use client";
import { Button } from "@/components/ui/button";

export function CsvExportButton({ data }: { data: any[] }) {
  const exportCsv = () => {
    if (!data || !data.length) return;
    
    const headers = Object.keys(data[0]).join(",");
    
    const rows = data.map(row => {
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
    link.setAttribute("download", `joat_registrations_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button onClick={exportCsv} variant="outline" size="sm" className="font-mono shadow-[0_0_10px_rgba(0,255,156,0.1)]">
      Export CSV
    </Button>
  );
}
