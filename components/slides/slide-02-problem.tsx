"use client"

import { SlideWrapper } from "@/components/presentation/slide-wrapper"
import { AnimatedText, FadeIn } from "@/components/presentation/animated-text"
import { GlowOrb } from "@/components/presentation/glow-orb"
import { AlertTriangle, Clock, DollarSign, Users } from "lucide-react"
import { motion } from "framer-motion"

const problems = [
  {
    icon: <Clock className="w-6 h-6" />,
    stat: "73%",
    label: "Time wasted on fragmented tools"
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    stat: "$9.7B",
    label: "Lost annually to data silos"
  },
  {
    icon: <Users className="w-6 h-6" />,
    stat: "89%",
    label: "Teams struggle with collaboration"
  },
  {
    icon: <AlertTriangle className="w-6 h-6" />,
    stat: "2.5x",
    label: "Slower decision making"
  }
]

export function Slide02Problem() {
  return (
    <SlideWrapper id="problem" className="flex items-center justify-center">
      <GlowOrb color="primary" size="lg" position={{ top: "0%", right: "10%" }} blur="intense" />
      
      <div className="max-w-6xl mx-auto z-10 px-6">
        <div className="text-center mb-20">
          <AnimatedText 
            as="span" 
            className="text-sm font-mono tracking-[0.4em] text-primary/60 uppercase block mb-6"
          >
            Act I — The Challenge
          </AnimatedText>
          
          <AnimatedText 
            as="h2" 
            delay={0.1}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8"
          >
            The World is{" "}
            <span className="text-destructive drop-shadow-[0_0_15px_oklch(0.6_0.2_30_/_0.3)]">Disconnected</span>
          </AnimatedText>
          
          <AnimatedText 
            as="p" 
            delay={0.2}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Every day, millions of decisions are delayed because critical data lives in isolation.
            <span className="text-foreground font-medium block mt-4">This is the cost of chaos.</span>
          </AnimatedText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <FadeIn key={problem.label} delay={0.3 + index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.05, translateY: -10 }}
                className="glass-card text-center relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-destructive/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-16 h-16 rounded-2xl bg-destructive/10 flex items-center justify-center mx-auto mb-6 text-destructive group-hover:scale-110 transition-transform">
                  {problem.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-3">
                  {problem.stat}
                </div>
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                  {problem.label}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </SlideWrapper>
  )
}
