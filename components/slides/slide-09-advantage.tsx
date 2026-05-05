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
    <SlideWrapper id="advantage">
      <GlowOrb color="accent" size="xl" position={{ top: "20%", right: "-10%" }} blur="intense" />
      
      <div className="max-w-6xl mx-auto z-10 flex flex-col items-center">
        <div className="text-center mb-16">
          <AnimatedText 
            as="span" 
            className="text-xs md:text-sm font-mono tracking-[0.3em] text-accent/80 uppercase block mb-4"
          >
            Act III — The Edge
          </AnimatedText>
          
          <AnimatedText 
            as="h2" 
            delay={0.1}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
          >
            Why{" "}
            <span className="gradient-text">NEXUS</span>
            {" "}Wins
          </AnimatedText>

          <AnimatedText 
            as="p" 
            delay={0.2}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Not just different. Definitively better.
          </AnimatedText>
        </div>

        <ComparisonTable items={comparisons} />
      </div>
    </SlideWrapper>
  )
}
