"use client"

import { SlideWrapper } from "@/components/presentation/slide-wrapper"
import { AnimatedText, ScaleIn } from "@/components/presentation/animated-text"
import { GlowOrb } from "@/components/presentation/glow-orb"
import { motion } from "framer-motion"
import { Sparkles, Zap, Shield } from "lucide-react"

export function Slide04Solution() {
  return (
    <SlideWrapper id="solution">
      <GlowOrb color="primary" size="xl" position={{ top: "50%", left: "50%", }} blur="intense" />
      <GlowOrb color="accent" size="lg" position={{ bottom: "-10%", right: "20%" }} blur="intense" />
      
      <div className="max-w-5xl mx-auto z-10">
        <div className="text-center">
          <AnimatedText 
            as="span" 
            className="text-xs md:text-sm font-mono tracking-[0.3em] text-primary/80 uppercase block mb-4"
          >
            Act II — The Solution
          </AnimatedText>
          
          <AnimatedText 
            as="h2" 
            delay={0.1}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-4"
          >
            Introducing
          </AnimatedText>

          <ScaleIn delay={0.3}>
            <motion.div
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(139, 92, 246, 0)",
                  "0 0 60px rgba(139, 92, 246, 0.5)",
                  "0 0 20px rgba(139, 92, 246, 0)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-6xl md:text-8xl lg:text-[10rem] font-bold gradient-text leading-none py-4"
            >
              NEXUS
            </motion.div>
          </ScaleIn>

          <AnimatedText 
            as="p" 
            delay={0.5}
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mt-6 mb-12"
          >
            One platform. Infinite connections.
            <br />
            <span className="text-foreground">Zero complexity.</span>
          </AnimatedText>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { icon: <Sparkles className="w-6 h-6" />, label: "AI-Powered", desc: "Intelligent automation" },
              { icon: <Zap className="w-6 h-6" />, label: "Real-Time", desc: "Instant synchronization" },
              { icon: <Shield className="w-6 h-6" />, label: "Enterprise-Grade", desc: "Bank-level security" }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass rounded-2xl p-6 cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{item.label}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}
