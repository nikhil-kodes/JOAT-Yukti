"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background Depth layers */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,_var(--color-bg-surface)_0%,_transparent_70%)] opacity-30 blur-3xl"></div>
        {/* Grain overlay */}
        <div className="absolute inset-0 bg-[url('/assets/grain-texture-1.png')] bg-repeat opacity-15 mix-blend-overlay"></div>
        {/* Grid lines overlay */}
        <div className="absolute inset-0 bg-[url('/assets/grid-lines.png')] bg-repeat opacity-5"></div>
        {/* Code overlay */}
        <div className="absolute inset-0 bg-[url('/assets/code-overlay.png')] bg-center opacity-10 mix-blend-screen pointer-events-none"></div>
      </div>

      <div className="z-10 container mx-auto px-6 relative flex flex-col items-center text-center">
        
        {/* Logos */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 flex items-center justify-center gap-8"
        >
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 opacity-80 hover:opacity-100 transition-opacity">
            <Image src="/assets/yuktikula-logo.webp-Photoroom.png" alt="Yuktikula Logo" fill className="object-contain" priority />
          </div>
          <div className="w-px h-10 bg-text-muted/30"></div>
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 opacity-90 drop-shadow-[0_0_15px_rgba(0,255,156,0.3)]">
            <Image src="/assets/joat-logo-Photoroom.png" alt="JOAT Logo" fill className="object-contain" priority />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mb-6 flex flex-col items-center gap-4"
        >
          <div className="font-mono text-sm sm:text-base font-bold uppercase tracking-widest text-text-primary drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
            Yuktikula <span className="text-accent-500 mx-2">/</span> Department of Data Science <span className="text-accent-500 mx-2">/</span> Presents
          </div>
          
          <div className="flex gap-3 text-xs sm:text-sm font-mono text-text-primary border border-text-muted/30 rounded-full px-6 py-2 backdrop-blur-md bg-bg-surface/30 shadow-[0_0_15px_rgba(0,255,156,0.1)]">
            <span>CODE</span>
            <span className="text-accent-500/50">·</span>
            <span>ANALYSE</span>
            <span className="text-accent-500/50">·</span>
            <span>DEBUG</span>
            <span className="text-accent-500/50">·</span>
            <span>SOLVE</span>
            <span className="text-accent-500/50">·</span>
            <span>ADAPT</span>
          </div>
        </motion.div>

        {/* Center Card Visual */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0, rotateY: -15, rotateX: 10 }}
          animate={{ scale: 1, opacity: 1, rotateY: 0, rotateX: 0 }}
          transition={{ duration: 1.2, delay: 0.4, type: "spring", bounce: 0.3 }}
          className="relative w-64 h-96 sm:w-80 sm:h-[480px] my-6 perspective-1000"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              rotateZ: [0, 1.5, -1.5, 0]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-full h-full relative"
          >
            <Image 
              src="/assets/card-front.png" 
              alt="Jack Card" 
              fill 
              className="object-contain drop-shadow-[0_0_40px_rgba(0,255,156,0.25)]"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Brand Lockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center mt-2 z-20"
        >
          <Image 
            src="/assets/jack-text.png" 
            alt="JACK" 
            width={600} 
            height={200}
            className="w-full max-w-xl object-contain mb-2 drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]"
            priority
          />
          <h1 className="font-sans font-bold text-3xl sm:text-5xl md:text-6xl tracking-[0.3em] uppercase text-text-primary mb-6 text-center shadow-text">
            Of All Trades
          </h1>
          
          <h2 className="font-mono text-sm sm:text-lg tracking-[0.2em] text-text-primary mt-2 uppercase">
            Solve <span className="text-accent-500 mx-1">×</span> Switch <span className="text-accent-500 mx-1">×</span> Adapt <span className="text-accent-500 mx-1">×</span> Survive
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-12 flex flex-col sm:flex-row gap-6 items-center z-20"
        >
          <Link href="/register">
            <Button size="lg" className="w-full sm:w-auto shadow-[0_0_20px_rgba(0,255,156,0.3)]">
              Register Now
            </Button>
          </Link>
          <Link href="/rules">
            <Button variant="outline" size="lg" className="w-full sm:w-auto bg-bg-base/50 backdrop-blur-sm">
              Read Rule Book
            </Button>
          </Link>
        </motion.div>

        {/* Event Details Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-text-primary z-20 w-full max-w-4xl"
        >
          <div className="bg-bg-void/80 border border-accent-500/50 p-6 flex flex-col items-center justify-center shadow-[0_0_25px_rgba(0,255,156,0.15)] backdrop-blur-md">
            <span className="font-mono text-accent-500 text-xs tracking-widest mb-2 uppercase">Rewards</span>
            <span className="font-sans text-xl lg:text-2xl font-bold uppercase tracking-wider text-center">₹5,000 Prize Pool</span>
            <span className="font-mono text-xs text-text-muted mt-2 text-center uppercase tracking-widest">+ Exclusive Title Badge</span>
          </div>

          <div className="bg-bg-void/80 border border-text-muted/20 p-6 flex flex-col items-center justify-center backdrop-blur-md">
            <span className="font-mono text-text-muted text-xs tracking-widest mb-2 uppercase">Tentative Date</span>
            <span className="font-sans text-xl lg:text-2xl font-bold uppercase tracking-wider text-center">7 October</span>
            <span className="font-mono text-xs text-accent-500 mt-2 text-center uppercase tracking-widest">@ 1:30 PM</span>
          </div>

          <div className="bg-bg-void/80 border border-text-muted/20 p-6 flex flex-col items-center justify-center backdrop-blur-md">
            <span className="font-mono text-text-muted text-xs tracking-widest mb-2 uppercase">Battleground</span>
            <span className="font-sans text-xl lg:text-2xl font-bold uppercase tracking-wider text-center">CTM Building</span>
            <span className="font-mono text-xs text-text-muted mt-2 text-center uppercase tracking-widest">GLBITM, Greater Noida</span>
          </div>
        </motion.div>
      </div>

      {/* Floating Background Cards */}
      <FloatingCards />
    </section>
  );
}

function FloatingCards() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
      <div className="absolute top-[15%] left-[5%] w-56 h-80 transform -rotate-12 opacity-80">
        <Image src="/assets/blur-1.png" alt="" fill className="object-contain" priority />
      </div>
      
      <div className="absolute top-[10%] right-[8%] w-64 h-96 transform rotate-12 opacity-80">
        <Image src="/assets/blur-2.png" alt="" fill className="object-contain" priority />
      </div>
      
      <div className="absolute bottom-[15%] left-[10%] w-64 h-96 transform -rotate-6 opacity-70">
        <Image src="/assets/blur-3.png" alt="" fill className="object-contain" />
      </div>

      <div className="absolute bottom-[20%] right-[5%] w-72 h-[450px] transform -rotate-12 opacity-70">
        <Image src="/assets/blur-7.png" alt="" fill className="object-contain" />
      </div>

      <div className="absolute top-[50%] left-[2%] w-40 h-60 transform rotate-45 opacity-60">
        <Image src="/assets/blur-10.png" alt="" fill className="object-contain" />
      </div>

      <div className="absolute top-[60%] right-[2%] w-48 h-72 transform -rotate-45 opacity-60">
        <Image src="/assets/blur-11.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
}

