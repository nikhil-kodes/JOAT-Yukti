import { Footer } from "@/components/sections/landing";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Panel } from "@/components/ui/panel";

export const metadata: Metadata = {
  title: "Rule Book | JOAT",
};

export default function RulesPage() {
  return (
    <main className="flex flex-col min-h-screen relative overflow-hidden bg-bg-base">
      <div className="absolute inset-0 bg-[url('/assets/grain-texture-1.png')] bg-repeat opacity-10 mix-blend-overlay pointer-events-none fixed"></div>
      
      <header className="p-6 relative z-10 flex justify-between items-center border-b border-text-muted/10 bg-bg-surface/50 backdrop-blur-md sticky top-0">
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative w-8 h-8 opacity-70 group-hover:opacity-100 transition-opacity">
             <Image src="/assets/joat-logo-Photoroom.png" alt="JOAT" fill className="object-contain" />
          </div>
          <span className="font-mono text-sm tracking-widest text-text-muted group-hover:text-accent-500 transition-colors uppercase hidden sm:block">
            System Back
          </span>
        </Link>
        <div className="font-mono text-xs uppercase tracking-widest text-text-metallic flex items-center gap-6">
          <span>Status: Reading Docs</span>
          <Link href="/register">
            <Button size="sm" variant="outline" className="border-accent-500/50 text-accent-500">Register</Button>
          </Link>
        </div>
      </header>
      
      <div className="flex-1 container mx-auto px-6 py-16 max-w-4xl relative z-10 font-sans text-text-primary">
        <h1 className="text-4xl md:text-5xl font-mono uppercase tracking-widest mb-12 border-b border-text-muted/20 pb-8 text-accent-500 drop-shadow-[0_0_15px_rgba(0,255,156,0.2)]">
          Official Rule Book
        </h1>
        
        <div className="space-y-16">
          <section id="event" className="scroll-mt-24">
            <h2 className="text-2xl font-mono text-text-primary mb-6 uppercase tracking-wider flex items-center gap-4">
              <span className="text-accent-500">01 /</span> Event Protocol
            </h2>
            <div className="space-y-4 text-text-muted leading-relaxed font-mono text-sm">
              <p>Jack of All Trades is a 120-minute, multi-domain technical endurance competition designed to test adaptability, debugging, and analytical thinking.</p>
              <p>The competition is strictly offline. It takes place at the <strong>CTM Building, 10th Floor Labs</strong>. Each participant is assigned a preconfigured workstation with all datasets, compilers, interpreters, and tools loaded locally.</p>
              <p>You will use a custom <strong>Yuktikula VS Code Extension</strong> which handles the event dashboard, monotonic timer, local test suites, validations, and final signed result generation.</p>
              <p>Exactly 5 participants will win, receiving the exclusive JOAT physical badge and a prize pool of approximately ₹5,000.</p>
            </div>
          </section>

          <section id="challenges" className="scroll-mt-24">
            <h2 className="text-2xl font-mono text-text-primary mb-6 uppercase tracking-wider flex items-center gap-4">
              <span className="text-accent-500">02 /</span> The Gauntlet
            </h2>
            <div className="grid grid-cols-1 gap-6 text-sm text-text-muted">
              <Panel className="p-6 border-text-muted/20 bg-bg-surface/50">
                <h3 className="font-mono text-accent-500 uppercase mb-2">Round 1: SQL Investigation</h3>
                <p>Use local SQLite environments to run queries, filtering, aggregation, and JOINs. Uncover the required evidence without modifying the validator.</p>
              </Panel>
              <Panel className="p-6 border-text-muted/20 bg-bg-surface/50">
                <h3 className="font-mono text-accent-500 uppercase mb-2">Round 2: Broken Python</h3>
                <p>A provided Python project contains intentional bugs. Understand the code, handle exceptions, and make the provided pytest suite pass.</p>
              </Panel>
              <Panel className="p-6 border-text-muted/20 bg-bg-surface/50">
                <h3 className="font-mono text-accent-500 uppercase mb-2">Round 3: Data Detective</h3>
                <p>Use Pandas, NumPy, and local tools to investigate imperfect datasets. Clean, aggregate, and identify the required anomaly.</p>
              </Panel>
              <Panel className="p-6 border-text-muted/20 bg-bg-surface/50">
                <h3 className="font-mono text-accent-500 uppercase mb-2">Round 4: CP Arena</h3>
                <p>Solve an algorithmic problem using C++, Java, Python, or JavaScript. Brute-force solutions will fail hidden test cases.</p>
              </Panel>
              <Panel className="p-6 border-text-muted/20 bg-bg-surface/50">
                <h3 className="font-mono text-warn-500 uppercase mb-2">Round 5: Final Boss (CLASSIFIED)</h3>
                <p className="text-warn-500 font-bold tracking-widest border-l border-warn-500 pl-3">CLASSIFIED</p>
              </Panel>
            </div>
          </section>

          <section id="scoring" className="scroll-mt-24">
            <h2 className="text-2xl font-mono text-text-primary mb-6 uppercase tracking-wider flex items-center gap-4">
              <span className="text-accent-500">03 /</span> Scoring & Validation
            </h2>
            <div className="p-6 border border-accent-500/20 bg-accent-500/5 font-mono text-sm mb-6 text-text-primary shadow-[0_0_20px_rgba(0,255,156,0.05)]">
              Final Score = (Points Accumulated × 1000) / (Completion Time in Minutes + 5 × Hints Used)
            </div>
            <div className="space-y-4 text-text-muted font-mono text-sm leading-relaxed">
              <p>Hints can be requested via the VS Code extension but will incur a penalty.</p>
              <p><strong>Tie-breakers:</strong> In the event of an exact tie, the participant with (1) fewer hints used will win. If still tied, (2) earlier verified completion time prevails.</p>
              <p>When the 120-minute timer expires, the extension will generate a signed/verified local result record for the organizers.</p>
            </div>
          </section>

          <section id="rules" className="scroll-mt-24">
            <h2 className="text-2xl font-mono text-warn-500 mb-6 uppercase tracking-wider flex items-center gap-4">
              <span className="text-warn-500">04 /</span> Anti-Cheat & Conduct
            </h2>
            <div className="p-8 border border-warn-500/30 bg-warn-500/5 space-y-6 text-text-muted font-mono text-sm">
              <h3 className="text-xl text-warn-500 uppercase tracking-widest">No Google. No AI. No Shortcuts.</h3>
              <ul className="list-disc pl-5 space-y-3">
                <li><strong>Network Isolation:</strong> Internet access and USB storage are strictly disabled on all designated laboratory computers.</li>
                <li><strong>No Collaboration:</strong> This is a solo event. Sharing solutions will result in instant disqualification.</li>
                <li><strong>System Integrity:</strong> Tampering with the VS Code extension state, monotonic timer, challenge validators, or hidden test files is strictly prohibited.</li>
                <li><strong>Environment Setup:</strong> Use only the compilers, interpreters, libraries, and tools preinstalled by the organizers.</li>
              </ul>
              <p className="text-warn-500/80 mt-4 text-xs uppercase tracking-widest border-t border-warn-500/20 pt-4">
                The organizers reserve the right to inspect any workstation. Decisions on integrity violations are final.
              </p>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
