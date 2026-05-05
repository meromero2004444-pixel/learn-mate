"use client"

import { SlideWrapper } from "@/components/presentation/slide-wrapper"
import { GlowOrb } from "@/components/presentation/glow-orb"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function Slide11Closing() {
  return (
    <SlideWrapper id="closing" className="relative flex items-center justify-center min-h-screen">
      <GlowOrb color="primary" size="xl" position={{ top: "10%", left: "10%" }} blur="intense" />
      <GlowOrb color="secondary" size="xl" position={{ bottom: "10%", right: "10%" }} blur="intense" />
      
      <div className="max-w-6xl mx-auto z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="text-sm font-mono tracking-[0.4em] text-primary/60 uppercase block mb-10">
            The Future is Connected
          </span>
          
          <h2 className="text-7xl md:text-9xl lg:text-[11rem] font-bold mb-10 tracking-tighter">
            <span className="gradient-text drop-shadow-[0_0_30px_oklch(0.65_0.25_300_/_0.3)]">NEXUS</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-2xl md:text-4xl text-foreground/80 font-light max-w-4xl mx-auto leading-tight mb-16"
          >
            This isn&apos;t just a graduation project.
            <br />
            It&apos;s the <span className="text-primary font-semibold">beginning</span> of a new era.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-5 bg-primary text-primary-foreground rounded-2xl font-bold text-xl flex items-center gap-3 glow-primary transition-all shadow-xl shadow-primary/20"
          >
            Launch Experience
            <ArrowRight className="w-6 h-6" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-5 glass-card rounded-2xl font-bold text-xl text-foreground transition-all"
          >
            Download Deck
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 1 }}
          className="pt-16 border-t border-white/5"
        >
          <p className="text-sm font-mono text-muted-foreground uppercase tracking-[0.3em] mb-8">Developed by</p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-16">
            {["Mark Monir", "NEXUS Team"].map((name, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.4 + i * 0.1 }}
                className="text-xl md:text-2xl font-display text-foreground group cursor-default"
              >
                <span className="group-hover:text-primary transition-colors">{name}</span>
                <div className="h-0.5 w-0 group-hover:w-full bg-primary transition-all duration-300" />
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.8 }}
            className="mt-12"
          >
            <p className="text-sm font-mono text-muted-foreground/60 uppercase tracking-widest">
              NEXUS AI-Powered Platform • Graduation 2026
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Cinematic Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-primary/40 rounded-full"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              scale: 0
            }}
            animate={{ 
              scale: [0, 1, 0],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </SlideWrapper>
  )
}
