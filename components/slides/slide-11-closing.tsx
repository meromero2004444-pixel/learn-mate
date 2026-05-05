"use client"

import { SlideWrapper } from "@/components/presentation/slide-wrapper"
import { GlowOrb } from "@/components/presentation/glow-orb"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function Slide11Closing() {
  return (
    <SlideWrapper id="closing" className="relative">
      <GlowOrb color="primary" size="xl" position={{ top: "30%", left: "20%" }} blur="intense" />
      <GlowOrb color="accent" size="xl" position={{ bottom: "30%", right: "20%" }} blur="intense" />
      
      <div className="max-w-5xl mx-auto z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs md:text-sm font-mono tracking-[0.3em] text-primary/80 uppercase block mb-8">
            The Future is Connected
          </span>
          
          <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-8">
            <span className="gradient-text">NEXUS</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-2xl md:text-3xl lg:text-4xl text-foreground/90 font-light max-w-3xl mx-auto leading-relaxed mb-12"
          >
            This isn&apos;t just a project.
            <br />
            It&apos;s the{" "}
            <span className="text-primary font-medium">beginning</span>.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium text-lg flex items-center gap-2 glow-primary"
          >
            Experience the Demo
            <ArrowRight className="w-5 h-5" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 glass rounded-full font-medium text-lg text-foreground gradient-border"
          >
            Download Deck
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="pt-12 border-t border-border/30"
        >
          <p className="text-muted-foreground mb-4">Presented by</p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            {["Team Member 1", "Team Member 2", "Team Member 3"].map((name, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1 + i * 0.1 }}
                className="text-foreground font-medium"
              >
                {name}
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.3 }}
            className="mt-8"
          >
            <p className="text-sm text-muted-foreground">
              Graduation Project 2026 • University Name
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              scale: 0
            }}
            animate={{ 
              scale: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </SlideWrapper>
  )
}
