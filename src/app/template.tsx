"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsInitialLoad(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isInitialLoad && pathname === "/" && <SystemInitialization />}
      
      {/* Route Transition Sweep */}
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.4 }}
        className="flex-1 flex flex-col"
      >
        <TransitionCards key={`transition-${pathname}`} />
        {children}
      </motion.div>
    </>
  );
}

function SystemInitialization() {
  const [text, setText] = useState("");
  const fullText = "SYSTEM INITIALIZING...";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-bg-void"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, pointerEvents: "none" }}
      transition={{ delay: 2, duration: 0.8, ease: "easeInOut" }}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-16 h-16 opacity-80 animate-pulse">
           <Image src="/assets/joat-logo-Photoroom.png" alt="JOAT" fill className="object-contain" />
        </div>
        <div className="font-mono text-accent-500 tracking-[0.3em] text-sm uppercase">
          {text}<span className="animate-pulse">_</span>
        </div>
      </div>
    </motion.div>
  );
}

function TransitionCards() {
  const cards = Array.from({ length: 15 });
  
  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden flex items-center justify-center">
      {cards.map((_, i) => {
        const direction = i % 2 === 0 ? 1 : -1;
        const delay = Math.random() * 0.2;
        const duration = 0.4 + Math.random() * 0.3;
        const yOffset = (Math.random() - 0.5) * 100;
        const scale = 1 + Math.random() * 2;
        const rotate = (Math.random() - 0.5) * 90;
        const blurNum = (i % 15) + 1; // 1 to 15
        
        return (
          <motion.div
            key={i}
            initial={{ x: `${-100 * direction}vw`, y: `${yOffset}vh`, opacity: 0, rotate: rotate - 45, scale: scale * 0.5 }}
            animate={{ x: `${100 * direction}vw`, y: `${yOffset * -1}vh`, opacity: [0, 1, 1, 0], rotate: rotate + 45, scale: scale }}
            transition={{ duration, delay, ease: "easeInOut" }}
            className="absolute w-[300px] h-[450px] opacity-80"
            
          >
            <Image src={`/assets/blur-${blurNum}.png`} alt="" fill className="object-contain" />
          </motion.div>
        );
      })}
    </div>
  );
}
