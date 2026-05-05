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
    <SlideWrapper id="problem">
      <GlowOrb color="primary" size="lg" position={{ top: "0%", right: "10%" }} blur="intense" />
      
      <div className="max-w-6xl mx-auto z-10">
        <div className="text-center mb-16">
          <AnimatedText 
            as="span" 
            className="text-xs md:text-sm font-mono tracking-[0.3em] text-primary/80 uppercase block mb-4"
          >
            Act I — The Challenge
          </AnimatedText>
          
          <AnimatedText 
            as="h2" 
            delay={0.1}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6"
          >
            The World is{" "}
            <span className="text-destructive">Disconnected</span>
          </AnimatedText>
          
          <AnimatedText 
            as="p" 
            delay={0.2}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Every day, millions of decisions are delayed.
            <br />
            Critical data lives in isolation.
            <br />
            <span className="text-foreground font-medium">This is the cost of chaos.</span>
          </AnimatedText>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {problems.map((problem, index) => (
            <FadeIn key={problem.label} delay={0.3 + index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                className="glass rounded-2xl p-6 md:p-8 text-center cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mx-auto mb-4 text-destructive">
                  {problem.icon}
                </div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2">
                  {problem.stat}
                </div>
                <p className="text-sm text-muted-foreground">
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
