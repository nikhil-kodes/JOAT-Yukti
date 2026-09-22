"use client";

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, PieChart, Pie, Cell } from "recharts";
import { Panel } from "@/components/ui/panel";

const COLORS = ['#00ff9c', '#00b870', '#e2483a', '#ffffff', '#888888'];

export function AnalyticsCharts({ branches, years, exps, langs, classes }: { branches: any[], years: any[], exps: any[], langs: any[], classes: any[] }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
      
      <Panel className="p-6 border-accent-500/30 bg-bg-surface/50 backdrop-blur-md h-[400px] flex flex-col">
        <h2 className="font-mono text-sm text-accent-500 uppercase tracking-wider mb-6 border-b border-accent-500/20 pb-2">Branch Distribution</h2>
        <div className="flex-1 w-full min-h-0">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={branches} margin={{ top: 10, right: 10, left: -20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
              <XAxis dataKey="name" stroke="#888" tick={{ fill: '#888', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis stroke="#888" tick={{ fill: '#888', fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip 
                cursor={{ fill: '#ffffff0a' }} 
                contentStyle={{ backgroundColor: '#090a0f', borderColor: '#333', color: '#00ff9c', fontFamily: 'monospace' }}
              />
              <Bar dataKey="value" fill="#00ff9c" radius={[4, 4, 0, 0]} barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Panel>

      <Panel className="p-6 border-accent-500/30 bg-bg-surface/50 backdrop-blur-md h-[400px] flex flex-col">
        <h2 className="font-mono text-sm text-accent-500 uppercase tracking-wider mb-6 border-b border-accent-500/20 pb-2">Year Distribution</h2>
        <div className="flex-1 w-full min-h-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={years}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
                stroke="none"
              >
                {years.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ backgroundColor: '#090a0f', borderColor: '#333', color: '#00ff9c', fontFamily: 'monospace' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center gap-4 mt-2 font-mono text-xs text-text-muted">
           {years.map((y, i) => (
             <div key={y.name} className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[i % COLORS.length] }}></span>
                Year {y.name}
             </div>
           ))}
        </div>
      </Panel>

      <Panel className="p-6 border-accent-500/30 bg-bg-surface/50 backdrop-blur-md h-[400px] flex flex-col lg:col-span-2">
        <h2 className="font-mono text-sm text-accent-500 uppercase tracking-wider mb-6 border-b border-accent-500/20 pb-2">Technical Experience</h2>
        <div className="flex-1 w-full min-h-0">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={exps} layout="vertical" margin={{ top: 10, right: 30, left: 20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" horizontal={false} />
              <XAxis type="number" stroke="#888" tick={{ fill: '#888', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis dataKey="name" type="category" stroke="#888" tick={{ fill: '#888', fontSize: 12 }} axisLine={false} tickLine={false} width={100} />
              <Tooltip 
                cursor={{ fill: '#ffffff0a' }} 
                contentStyle={{ backgroundColor: '#090a0f', borderColor: '#333', color: '#00ff9c', fontFamily: 'monospace' }}
              />
              <Bar dataKey="value" fill="#00b870" radius={[0, 4, 4, 0]} barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Panel>

      <Panel className="p-6 border-accent-500/30 bg-bg-surface/50 backdrop-blur-md h-[400px] flex flex-col">
        <h2 className="font-mono text-sm text-accent-500 uppercase tracking-wider mb-6 border-b border-accent-500/20 pb-2">Language Preference</h2>
        <div className="flex-1 w-full min-h-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={langs}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
                stroke="none"
              >
                {langs.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ backgroundColor: '#090a0f', borderColor: '#333', color: '#00ff9c', fontFamily: 'monospace' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center gap-4 mt-2 font-mono text-xs text-text-muted flex-wrap">
           {langs.map((l, i) => (
             <div key={l.name} className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[i % COLORS.length] }}></span>
                {l.name}
             </div>
           ))}
        </div>
      </Panel>

      <Panel className="p-6 border-accent-500/30 bg-bg-surface/50 backdrop-blur-md h-[400px] flex flex-col lg:col-span-2">
        <h2 className="font-mono text-sm text-accent-500 uppercase tracking-wider mb-6 border-b border-accent-500/20 pb-2">Class Distribution (Year-Branch-Section)</h2>
        <div className="flex-1 w-full min-h-0">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={classes} margin={{ top: 10, right: 10, left: -20, bottom: 40 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
              <XAxis dataKey="name" stroke="#888" tick={{ fill: '#888', fontSize: 10 }} axisLine={false} tickLine={false} angle={-45} textAnchor="end" height={60} />
              <YAxis stroke="#888" tick={{ fill: '#888', fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip 
                cursor={{ fill: '#ffffff0a' }} 
                contentStyle={{ backgroundColor: '#090a0f', borderColor: '#333', color: '#00ff9c', fontFamily: 'monospace' }}
              />
              <Bar dataKey="value" fill="#00ff9c" radius={[4, 4, 0, 0]} barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Panel>

    </div>
  );
}
