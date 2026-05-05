"use client"

import { SlideWrapper } from "@/components/presentation/slide-wrapper"
import { AnimatedText, ScaleIn } from "@/components/presentation/animated-text"
import { GlowOrb } from "@/components/presentation/glow-orb"
import { motion } from "framer-motion"
import { Sparkles, Zap, Shield } from "lucide-react"

export function Slide04Solution() {
  return (
    <SlideWrapper id="solution" className="flex items-center justify-center">
      <GlowOrb color="primary" size="xl" position={{ top: "0%", left: "0%" }} blur="intense" />
      <GlowOrb color="secondary" size="lg" position={{ bottom: "0%", right: "0%" }} blur="intense" />
      
      <div className="max-w-6xl mx-auto z-10 px-6">
        <div className="text-center">
          <AnimatedText 
            as="span" 
            className="text-sm font-mono tracking-[0.4em] text-primary/60 uppercase block mb-6"
          >
            Act II — The Solution
          </AnimatedText>
          
          <AnimatedText 
            as="h2" 
            delay={0.1}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4"
          >
            Introducing
          </AnimatedText>

          <ScaleIn delay={0.3}>
            <motion.div
              animate={{ 
                textShadow: [
                  "0 0 20px oklch(0.65 0.25 300 / 0)",
                  "0 0 60px oklch(0.65 0.25 300 / 0.4)",
                  "0 0 20px oklch(0.65 0.25 300 / 0)"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-8xl md:text-[12rem] lg:text-[15rem] font-bold gradient-text leading-none py-8 tracking-tighter"
            >
              NEXUS
            </motion.div>
          </ScaleIn>

          <AnimatedText 
            as="p" 
            delay={0.5}
            className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground mt-8 mb-16 font-light"
          >
            One platform. Infinite connections.
            <br />
            <span className="text-foreground font-medium">Zero complexity.</span>
          </AnimatedText>

          <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            {[
              { icon: <Sparkles className="w-6 h-6" />, label: "AI-Powered", desc: "Intelligent automation layer" },
              { icon: <Zap className="w-6 h-6" />, label: "Real-Time", desc: "Global instant sync" },
              { icon: <Shield className="w-6 h-6" />, label: "Secured", desc: "Enterprise-grade encryption" }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="glass-card group cursor-default"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 text-primary group-hover:scale-110 transition-transform glow-primary">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{item.label}</h3>
                <p className="text-sm text-muted-foreground font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}
