"use client"

import { motion } from "framer-motion"
import { SlideWrapper } from "@/components/presentation/slide-wrapper"
import { GlowOrb } from "@/components/presentation/glow-orb"
import { ChevronDown } from "lucide-react"

export function Slide01Hook() {
  return (
    <SlideWrapper id="hook" className="relative">
      <GlowOrb color="primary" size="xl" position={{ top: "10%", left: "-10%" }} blur="intense" />
      <GlowOrb color="accent" size="lg" position={{ bottom: "20%", right: "-5%" }} blur="intense" />
      
      <div className="max-w-5xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="text-xs md:text-sm font-mono tracking-[0.3em] text-primary/80 uppercase block mb-8">
            Graduation Project 2026
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight mb-6">
            <span className="gradient-text">NEXUS</span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl lg:text-3xl text-foreground/80 font-light max-w-3xl mx-auto leading-relaxed"
          >
            The Future of{" "}
            <span className="text-primary font-medium">Connected Intelligence</span>
          </motion.p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 md:mt-24"
        >
          <p className="text-sm text-muted-foreground mb-4 tracking-widest uppercase">
            Scroll to explore
          </p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="w-6 h-6 text-primary mx-auto" />
          </motion.div>
        </motion.div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: "110%",
              opacity: 0 
            }}
            animate={{ 
              y: "-10%",
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          />
        ))}
      </div>
    </SlideWrapper>
  )
}
