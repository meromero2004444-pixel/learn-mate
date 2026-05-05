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
    <SlideWrapper id="vision">
      <GlowOrb color="primary" size="xl" position={{ top: "10%", left: "-15%" }} blur="intense" />
      <GlowOrb color="accent" size="xl" position={{ bottom: "10%", right: "-15%" }} blur="intense" />
      
      <div className="max-w-6xl mx-auto z-10">
        <div className="text-center mb-16">
          <AnimatedText 
            as="span" 
            className="text-xs md:text-sm font-mono tracking-[0.3em] text-primary/80 uppercase block mb-4"
          >
            The Roadmap
          </AnimatedText>
          
          <AnimatedText 
            as="h2" 
            delay={0.1}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
          >
            Where We&apos;re{" "}
            <span className="gradient-text">Going</span>
          </AnimatedText>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {milestones.map((milestone, index) => (
            <FadeIn key={milestone.year} delay={0.2 + index * 0.15}>
              <motion.div
                whileHover={{ y: -5 }}
                className="glass rounded-2xl p-8 text-center cursor-default gradient-border"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
                  {milestone.icon}
                </div>
                <div className="text-3xl font-bold gradient-text mb-2">{milestone.year}</div>
                <h3 className="text-xl font-semibold text-foreground mb-1">{milestone.title}</h3>
                <p className="text-sm text-muted-foreground">{milestone.desc}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.6}>
          <div className="glass rounded-3xl p-8 md:p-12 gradient-border">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
              Projected Impact by 2028
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
