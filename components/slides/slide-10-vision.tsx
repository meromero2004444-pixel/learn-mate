"use client"

import { SlideWrapper } from "@/components/presentation/slide-wrapper"
import { AnimatedText, FadeIn } from "@/components/presentation/animated-text"
import { GlowOrb } from "@/components/presentation/glow-orb"
import { StatCard } from "@/components/presentation/stat-card"
import { motion } from "framer-motion"
import { Rocket, Globe, Building } from "lucide-react"

const milestones = [
  { icon: <Rocket className="w-6 h-6" />, year: "2026", title: "Launch", desc: "Public beta release" },
  { icon: <Building className="w-6 h-6" />, year: "2027", title: "Enterprise", desc: "Fortune 500 adoption" },
  { icon: <Globe className="w-6 h-6" />, year: "2028", title: "Global", desc: "Worldwide expansion" }
]

export function Slide10Vision() {
  return (
    <SlideWrapper id="vision" className="flex items-center justify-center">
      <GlowOrb color="primary" size="xl" position={{ top: "10%", left: "-15%" }} blur="intense" />
      <GlowOrb color="secondary" size="xl" position={{ bottom: "10%", right: "-15%" }} blur="intense" />
      
      <div className="max-w-6xl mx-auto z-10 px-6">
        <div className="text-center mb-20">
          <AnimatedText 
            as="span" 
            className="text-sm font-mono tracking-[0.4em] text-primary/60 uppercase block mb-6"
          >
            The Roadmap
          </AnimatedText>
          
          <AnimatedText 
            as="h2" 
            delay={0.1}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6"
          >
            Where We&apos;re{" "}
            <span className="gradient-text">Going</span>
          </AnimatedText>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {milestones.map((milestone, index) => (
            <FadeIn key={milestone.year} delay={0.2 + index * 0.15}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-card text-center cursor-default"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 text-primary glow-primary">
                  {milestone.icon}
                </div>
                <div className="text-4xl font-bold gradient-text mb-4 tracking-tighter">{milestone.year}</div>
                <h3 className="text-2xl font-semibold text-foreground mb-2">{milestone.title}</h3>
                <p className="text-base text-muted-foreground font-medium">{milestone.desc}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.6}>
          <div className="glass-card p-10 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
            <h3 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12 relative z-10">
              Projected Impact by 2028
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 relative z-10">
              <StatCard value={10} suffix="M+" label="Users" delay={0} />
              <StatCard value={500} suffix="+" label="Enterprises" delay={0.1} />
              <StatCard value={50} suffix="B" prefix="$" label="Data Processed" delay={0.2} />
              <StatCard value={99.99} suffix="%" label="Uptime" delay={0.3} />
            </div>
          </div>
        </FadeIn>
      </div>
    </SlideWrapper>
  )
}
