import { motion } from "framer-motion";
import { Panel } from "@/components/ui/panel";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const challenges = [
  {
    title: "SQL Investigation",
    desc: "Querying, joins, filtering, relational deduction.",
    icon: "/assets/search-logo.png",
    fallback: "DB"
  },
  {
    title: "Broken Python",
    desc: "Debugging, code reading, behavioral reasoning.",
    icon: "/assets/code-syntax-logo-<.png",
    fallback: "PY"
  },
  {
    title: "Data Detective",
    desc: "Pattern/anomaly detection in dataset forensics.",
    icon: "/assets/search-logo.png",
    fallback: "DATA"
  },
  {
    title: "CP Arena",
    desc: "Algorithmic reasoning. C++, Java, Python, JS.",
    icon: "/assets/terminal-logo.png",
    fallback: "CP"
  },
  {
    title: "Final Boss",
    desc: "CLASSIFIED",
    icon: "/assets/shield-logo.png",
    fallback: "SYS"
  },
];

export function ChallengesSection() {
  return (
    <section className="py-24 relative z-10 overflow-hidden bg-bg-surface/30">
      <div className="absolute inset-0 bg-[url('/assets/grain-texture-1.png')] bg-repeat opacity-10 mix-blend-overlay pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <h3 className="text-3xl md:text-4xl font-mono text-accent-500 uppercase tracking-widest mb-4 drop-shadow-[0_0_10px_rgba(0,255,156,0.3)]">The Gauntlet</h3>
          <p className="text-text-muted max-w-lg mb-4 font-mono text-sm">Five tracks running in parallel. Adapt instantly or fail.</p>
          <div className="w-12 h-1 bg-accent-500/50"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {challenges.map((c, i) => (
            <Panel key={i} className="p-6 relative group overflow-hidden border border-text-muted/20 hover:border-accent-500 transition-all duration-300 shadow-xl hover:shadow-[0_0_25px_rgba(0,255,156,0.15)] bg-bg-base/80 backdrop-blur-md">
              <div className="absolute inset-0 bg-accent-500/0 group-hover:bg-accent-500/5 transition-colors"></div>
              
              <div className="w-14 h-14 mb-6 border border-text-muted/30 group-hover:border-accent-500/50 flex items-center justify-center rounded-sm bg-bg-void relative transition-colors">
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-accent-500/50 group-hover:border-accent-500 transition-colors"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-accent-500/50 group-hover:border-accent-500 transition-colors"></div>
                
                <span className="font-mono text-xs text-text-muted group-hover:text-accent-500 transition-colors">{c.fallback}</span>
              </div>
              
              <h4 className="font-mono text-sm uppercase text-text-primary mb-3 leading-tight group-hover:text-accent-500 transition-colors">{c.title}</h4>
              <p className="text-sm text-text-muted/80 leading-relaxed group-hover:text-text-muted transition-colors">{c.desc}</p>
            </Panel>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FactsStrip() {
  return (
    <section className="py-12 border-y border-text-muted/10 bg-bg-base relative z-10">
      <div className="absolute inset-0 bg-[url('/assets/grid-lines.png')] bg-repeat opacity-5 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 font-mono text-lg md:text-2xl uppercase tracking-[0.2em] text-text-metallic">
          <div className="flex items-center gap-4 hover:text-text-primary transition-colors cursor-default">
            <span className="text-accent-500 drop-shadow-[0_0_8px_rgba(0,255,156,0.4)]">120</span>
            <span>Minutes</span>
          </div>
          <div className="hidden md:block text-accent-500/30">/</div>
          <div className="flex items-center gap-4 hover:text-text-primary transition-colors cursor-default">
            <span className="text-accent-500 drop-shadow-[0_0_8px_rgba(0,255,156,0.4)]">5</span>
            <span>Challenges</span>
          </div>
          <div className="hidden md:block text-accent-500/30">/</div>
          <div className="flex items-center gap-4 hover:text-text-primary transition-colors cursor-default">
            <span className="text-accent-500 drop-shadow-[0_0_8px_rgba(0,255,156,0.4)]">5</span>
            <span>Winners</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PhilosophySection() {
  return (
    <section className="py-32 relative z-10 overflow-hidden bg-bg-void">
      <div className="absolute inset-0 bg-[url('/assets/grain-texture-1.png')] bg-repeat opacity-20 mix-blend-overlay pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('/assets/code-overlay.png')] bg-center opacity-[0.03] mix-blend-screen pointer-events-none"></div>

      {/* Floating Elements for Philosophy Section */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex justify-center items-center z-0">
        <div className="absolute left-[-10%] top-[20%] w-[400px] h-[600px] opacity-[0.04] transform -rotate-12 blur-[2px]">
          <Image src="/assets/card-back.png" alt="" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain" />
        </div>
        <div className="absolute right-[-15%] bottom-[10%] w-[500px] h-[500px] opacity-[0.05] transform rotate-[15deg]">
          <Image src="/assets/card-group.png" alt="" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain" />
        </div>
        
        <div className="absolute top-[15%] left-[20%] w-10 h-10 opacity-10 transform -rotate-12">
          <Image src="/assets/spade-shape.png" alt="" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain" />
        </div>
        <div className="absolute bottom-[20%] right-[30%] w-12 h-12 opacity-10 transform rotate-45">
          <Image src="/assets/diamond-shape.png" alt="" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain" />
        </div>
        <div className="absolute top-[30%] right-[15%] w-8 h-8 opacity-10 transform rotate-12">
          <Image src="/assets/clubs-shape.png" alt="" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain" />
        </div>
        <div className="absolute bottom-[40%] left-[10%] w-14 h-14 opacity-10 transform -rotate-45">
          <Image src="/assets/hearts-shape.png" alt="" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain" />
        </div>
      </div>
      
      {/* Background massive blurry text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10vw] font-mono font-bold text-warn-500/5 whitespace-nowrap pointer-events-none tracking-tighter">
        NO SHORTCUTS
      </div>

      <div className="container mx-auto px-6 flex flex-col items-center text-center relative z-10">
        <h2 className="text-xl md:text-3xl font-mono text-warn-500 uppercase tracking-widest mb-16 animate-pulse">
          Are you competent enough?
        </h2>

        <div className="inline-block border border-warn-500/30 px-10 py-16 bg-warn-500/[0.02] relative shadow-[0_0_60px_rgba(226,72,58,0.05)] backdrop-blur-sm">
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-warn-500"></div>
          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-warn-500"></div>
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-warn-500"></div>
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-warn-500"></div>
          
          <h3 className="text-4xl md:text-6xl font-mono uppercase tracking-widest text-text-primary mb-8 hover:text-warn-500 transition-colors">
            <span className="text-warn-500 line-through decoration-4 opacity-80">NO</span> GOOGLE
          </h3>
          <h3 className="text-4xl md:text-6xl font-mono uppercase tracking-widest text-text-primary mb-8 hover:text-warn-500 transition-colors">
            <span className="text-warn-500 line-through decoration-4 opacity-80">NO</span> AI
          </h3>
          <h3 className="text-4xl md:text-6xl font-mono uppercase tracking-widest text-text-primary hover:text-warn-500 transition-colors">
            <span className="text-warn-500 line-through decoration-4 opacity-80">NO</span> SHORTCUTS
          </h3>
        </div>
      </div>
    </section>
  );
}


export function TitleWarningSection() {
  return (
    <section className="py-32 relative z-10 border-y-2 border-warn-500/40 bg-warn-500/[0.03] overflow-hidden">
      <div className="absolute inset-0 bg-[url('/assets/grain-texture-1.png')] bg-repeat opacity-10 pointer-events-none"></div>
      
      {/* Floating Trophy & Crown */}
      <div className="absolute inset-0 pointer-events-none flex justify-center items-center overflow-hidden">
        <div className="absolute top-[10%] left-[10%] sm:left-[20%] w-16 h-16 sm:w-24 sm:h-24 opacity-40 transform -rotate-12 mix-blend-screen drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
          <Image src="/assets/crown-shape.png" alt="" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain" />
        </div>
        <div className="absolute bottom-[10%] right-[10%] sm:right-[20%] w-20 h-20 sm:w-32 sm:h-32 opacity-30 transform rotate-12 mix-blend-screen drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
          <Image src="/assets/trophy-shape.png" alt="" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain" />
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-warn-500 tracking-[0.1em] mb-6 drop-shadow-[0_0_15px_rgba(226,72,58,0.5)]">
              FIGHT FOR<br className="hidden lg:block"/> THE TITLE
            </h2>
            <p className="text-text-primary font-sans text-xl md:text-2xl mb-6 leading-relaxed">
              &quot;Jack of All Trades&quot; isn&apos;t just an event. <br className="hidden sm:block"/>It is a <span className="text-warn-500 font-bold tracking-widest border-b-2 border-warn-500">LIFETIME PRESTIGE</span>.
            </p>
            <p className="text-text-muted font-sans text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Only <strong className="text-warn-500 text-xl">5 individuals</strong> out of the entire college will earn this title. They will be officially recognized as the definitive Jacks of All Trades. Everyone else goes home empty-handed.
            </p>
          </div>
          
          <div className="bg-bg-void/90 border-2 border-warn-500/50 p-8 shadow-[0_0_50px_rgba(226,72,58,0.2)] relative backdrop-blur-md transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
            <div className="absolute -top-4 -right-4 w-10 h-10 bg-warn-500 text-bg-void flex items-center justify-center font-mono text-xl font-bold animate-pulse shadow-[0_0_20px_rgba(226,72,58,0.8)]">!</div>
            
            <h3 className="font-mono text-2xl text-warn-500 uppercase tracking-widest mb-6 border-b border-warn-500/30 pb-4">CRITICAL WARNING</h3>
            
            <ul className="space-y-6 font-mono text-sm md:text-base text-text-muted">
              <li className="flex gap-4 items-start">
                <span className="text-warn-500 font-bold bg-warn-500/10 px-2 py-1">01</span> 
                <p><strong className="text-text-primary text-lg block mb-1">STRICT CAPACITY</strong> First-come, first-serve. There are exactly <strong className="text-warn-500 border-b border-warn-500">150 SEATS</strong> available in AB3 Block A. Once filled, access is permanently closed.</p>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-warn-500 font-bold bg-warn-500/10 px-2 py-1">02</span> 
                <p><strong className="text-text-primary text-lg block mb-1">SCREENING ROUND</strong> If registrations exceed the threshold, we will enforce a brutal preliminary elimination round before the final event.</p>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="py-32 relative z-10 border-t border-accent-500/10 bg-[radial-gradient(ellipse_at_top,_var(--color-bg-surface)_0%,_var(--color-bg-void)_100%)]">
      <div className="absolute inset-0 bg-[url('/assets/grid-lines.png')] bg-repeat opacity-[0.02] pointer-events-none"></div>

      {/* Shapes and cards for CTA */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex justify-center items-center z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.03] transform rotate-90">
          <Image src="/assets/card-group.png" alt="" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain" />
        </div>
        <div className="absolute top-[20%] right-[25%] w-6 h-6 opacity-20 animate-pulse">
          <Image src="/assets/star-shape.png" alt="" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain" />
        </div>
        <div className="absolute bottom-[30%] left-[20%] w-8 h-8 opacity-20">
          <Image src="/assets/x-shape.png" alt="" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain" />
        </div>
      </div>
      
      <div className="container mx-auto px-6 text-center flex flex-col items-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-mono uppercase tracking-widest mb-6 text-text-primary drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
          Think you have<br/>what it takes?
        </h2>
        <p className="text-text-muted font-mono mb-4 max-w-md">Only 5 will survive the system. The rest will fail. Claim your spot in the arena.</p>
        
        
        
        <div className="flex flex-col sm:flex-row gap-6">
          <Link href="/register">
            <Button size="lg" className="w-full sm:w-auto px-16 py-6 text-lg shadow-[0_0_30px_rgba(0,255,156,0.2)]">
              Access the System
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-20 border-t border-text-muted/10 bg-bg-void relative z-10">
      <div className="absolute inset-0 bg-[url('/assets/grain-texture-1.png')] bg-repeat opacity-15 mix-blend-overlay pointer-events-none"></div>
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10 text-center md:text-left">
        
        {/* Brand */}
        <div className="md:col-span-4 flex flex-col items-center md:items-start gap-4">
          <a href="https://yuktikulaglb.in/" target="_blank" rel="noopener noreferrer" className="relative w-16 h-16 opacity-70 hover:opacity-100 transition-opacity cursor-pointer block">
            <Image src="/assets/yuktikula-logo.webp-Photoroom.png" alt="Yuktikula" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain" />
          </a>
          <div className="font-mono text-xs text-text-muted uppercase tracking-widest leading-relaxed">
            <a href="https://yuktikulaglb.in/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-500 transition-colors font-bold">YUKTIKULA</a><br/>
            <span className="text-text-metallic">Dept of Data Science, GLBITM</span>
          </div>
          
          <div className="flex flex-wrap items-center gap-3 mt-4 justify-center md:justify-start">
            <a href="https://www.instagram.com/yuktikula_glbajaj/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-text-muted/30 bg-white/5 hover:bg-white/10 hover:border-accent-500/50 transition-all hover:-translate-y-1 group backdrop-blur-sm shadow-[0_0_10px_rgba(255,255,255,0.05)]">
              <div className="relative w-4 h-4 opacity-90 group-hover:opacity-100 bg-white rounded-sm overflow-hidden flex items-center justify-center">
                <Image src="/assets/instagram-logo.png" alt="Instagram" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover p-0.5" />
              </div>
              <span className="font-mono text-[10px] uppercase text-text-muted group-hover:text-text-primary transition-colors">Instagram</span>
            </a>

            <a href="https://www.linkedin.com/company/yuktikula-club/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-text-muted/30 bg-white/5 hover:bg-white/10 hover:border-accent-500/50 transition-all hover:-translate-y-1 group backdrop-blur-sm shadow-[0_0_10px_rgba(255,255,255,0.05)]">
              <div className="relative w-4 h-4 opacity-90 group-hover:opacity-100 bg-white rounded-sm overflow-hidden flex items-center justify-center">
                <Image src="/assets/linkedin-logo.png" alt="LinkedIn" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover p-0.5" />
              </div>
              <span className="font-mono text-[10px] uppercase text-text-muted group-hover:text-text-primary transition-colors">LinkedIn</span>
            </a>

            <a href="https://x.com/yuktikulaglbitm" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-text-muted/30 bg-white/5 hover:bg-white/10 hover:border-accent-500/50 transition-all hover:-translate-y-1 group backdrop-blur-sm shadow-[0_0_10px_rgba(255,255,255,0.05)]">
              <div className="relative w-4 h-4 opacity-90 group-hover:opacity-100 bg-white rounded-sm overflow-hidden flex items-center justify-center">
                <Image src="/assets/x-shape.png" alt="X/Twitter" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover p-0.5" />
              </div>
              <span className="font-mono text-[10px] uppercase text-text-muted group-hover:text-text-primary transition-colors">Twitter</span>
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="md:col-span-4 flex flex-col items-center md:items-start gap-4 font-mono text-xs uppercase tracking-widest">
          <h4 className="text-text-primary mb-2 font-bold">Platform</h4>
          <Link href="/rules" className="text-text-muted hover:text-accent-500 transition-colors">Rule Book</Link>
          <Link href="/register" className="text-text-muted hover:text-accent-500 transition-colors">Register Now</Link>
          <a href="https://yuktikulaglb.in/" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent-500 transition-colors mt-2 text-[10px]">Back to Yuktikula ↗</a>
        </div>
        
        {/* Contact */}
        <div className="md:col-span-4 flex flex-col items-center md:items-start gap-4 font-mono text-xs tracking-widest">
          <h4 className="text-text-primary mb-2 font-bold uppercase">Contact Us</h4>
          <a href="mailto:yuktikula@glbitm.ac.in" className="text-text-muted hover:text-accent-500 transition-colors lowercase flex items-center gap-2">
            yuktikula@glbitm.ac.in
          </a>
          <a href="tel:+918604225347" className="text-text-muted hover:text-accent-500 transition-colors flex items-center gap-2">
            +91 8604225347
          </a>
          <a href="tel:+917764935410" className="text-text-muted hover:text-accent-500 transition-colors flex items-center gap-2">
            +91 7764935410
          </a>
        </div>
      </div>
      
      {/* Footer Bottom Bar */}
      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-text-muted/10 relative z-10 flex flex-col justify-center items-center gap-3 font-mono text-text-muted uppercase tracking-widest text-center">
        <div className="relative group cursor-pointer">
          <div className="flex items-center justify-center text-[10px] sm:text-xs">
            Made with <Image src="/assets/hearts-shape.png" alt="love" width={28} height={28} className="mx-2 inline-block opacity-70 group-hover:opacity-100 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(255,0,0,0.5)] transition-all duration-300" /> by Tech Team for GLBAJAJ
          </div>
          
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 sm:w-64 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
            <div className="bg-bg-surface border border-accent-500/30 p-4 rounded-lg shadow-[0_0_20px_rgba(0,255,156,0.15)] relative">
              <h4 className="font-mono text-accent-500 text-[10px] uppercase tracking-widest border-b border-accent-500/20 pb-2 mb-2">The Architects</h4>
              <ul className="text-text-primary text-xs grid grid-cols-2 gap-y-2 gap-x-2 text-left font-sans">
                <li>Nikhil Singh</li>
                <li>Kaushtubh Kant</li>
                <li>Dev Aggrawal</li>
                <li>Bhoomi</li>
                <li>Dev</li>
                <li>Shaan</li>
                <li>Akshat</li>
                <li>Akash</li>
              </ul>
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-bg-surface border-b border-r border-accent-500/30 transform rotate-45"></div>
            </div>
          </div>
        </div>
        <div className="opacity-50 max-w-3xl leading-relaxed text-[8px] sm:text-[10px] mt-2 border-t border-text-muted/10 pt-4 px-4">
          &copy; {new Date().getFullYear()} Yuktikula Club. All Rights Reserved.<br />
          The concept of 'Jack of All Trades', its event architecture, technical activities, and this platform are the exclusive Intellectual Property of the Yuktikula Club. Unauthorized reproduction or imitation is strictly prohibited.
        </div>
      </div>
    </footer>
  );
}
