"use client"

import { motion } from "framer-motion"
import { SlideWrapper } from "@/components/presentation/slide-wrapper"
import { GlowOrb } from "@/components/presentation/glow-orb"
import { ChevronDown } from "lucide-react"

export function Slide01Hook() {
  return (
    <SlideWrapper id="hook" className="relative flex flex-col items-center justify-center min-h-screen">
      <GlowOrb color="primary" size="xl" position={{ top: "-10%", left: "-10%" }} blur="intense" />
      <GlowOrb color="secondary" size="lg" position={{ bottom: "10%", right: "-5%" }} blur="intense" />
      
      <div className="max-w-6xl mx-auto text-center z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.span 
            initial={{ opacity: 0, tracking: "0.1em" }}
            animate={{ opacity: 1, tracking: "0.4em" }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="text-sm md:text-base font-mono text-primary/60 uppercase block mb-12"
          >
            Graduation Project 2026
          </motion.span>
          
          <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-bold tracking-tighter mb-8 leading-none">
            <span className="gradient-text drop-shadow-[0_0_30px_oklch(0.65_0.25_300_/_0.3)]">NEXUS</span>
          </h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex flex-col items-center gap-4"
          >
            <p className="text-2xl md:text-4xl text-foreground/90 font-light max-w-3xl mx-auto leading-tight">
              The Future of{" "}
              <span className="text-secondary font-semibold italic">Connected Intelligence</span>
            </p>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-border to-transparent mt-4" />
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <p className="text-[10px] text-muted-foreground tracking-[0.5em] uppercase">
            Scroll to begin journey
          </p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-6 h-10 border border-primary/30 rounded-full flex justify-center p-1"
          >
            <motion.div 
              animate={{ height: ["20%", "60%", "20%"] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-1 bg-primary/60 rounded-full" 
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Ambient Light */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[30vw] h-[30vw] bg-primary/5 rounded-full blur-[100px]"
            animate={{ 
              x: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
              y: [Math.random() * 100 + "%", Math.random() * 100 + "%"]
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
    </SlideWrapper>
  )
}
