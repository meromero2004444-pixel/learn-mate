"use client"

import { SlideWrapper } from "@/components/presentation/slide-wrapper"
import { AnimatedText } from "@/components/presentation/animated-text"
import { GlowOrb } from "@/components/presentation/glow-orb"
import { ComparisonTable } from "@/components/presentation/comparison-table"

const comparisons = [
  { feature: "AI-Powered Automation", us: true, competitors: false },
  { feature: "Real-Time Sync", us: true, competitors: true },
  { feature: "500+ Integrations", us: true, competitors: false },
  { feature: "Zero-Code Setup", us: true, competitors: false },
  { feature: "Enterprise Security", us: true, competitors: true },
  { feature: "Predictive Analytics", us: true, competitors: false }
]

export function Slide09Advantage() {
  return (
    <SlideWrapper id="advantage" className="flex items-center justify-center">
      <GlowOrb color="secondary" size="xl" position={{ top: "20%", right: "-10%" }} blur="intense" />
      <GlowOrb color="primary" size="lg" position={{ bottom: "10%", left: "-5%" }} blur="intense" />
      
      <div className="max-w-6xl mx-auto z-10 flex flex-col items-center px-6">
        <div className="text-center mb-20">
          <AnimatedText 
            as="span" 
            className="text-sm font-mono tracking-[0.4em] text-secondary/60 uppercase block mb-6"
          >
            Act III — The Edge
          </AnimatedText>
          
          <AnimatedText 
            as="h2" 
            delay={0.1}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6"
          >
            Why{" "}
            <span className="gradient-text">NEXUS</span>
            {" "}Wins
          </AnimatedText>

          <AnimatedText 
            as="p" 
            delay={0.2}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Not just different. <span className="text-foreground font-medium">Definitively better.</span>
          </AnimatedText>
        </div>

        <div className="mt-8 w-full max-w-4xl">
          <ComparisonTable items={comparisons} />
        </div>
      </div>
    </SlideWrapper>
  )
}
