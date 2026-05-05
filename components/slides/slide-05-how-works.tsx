"use client"

import { SlideWrapper } from "@/components/presentation/slide-wrapper"
import { AnimatedText } from "@/components/presentation/animated-text"
import { GlowOrb } from "@/components/presentation/glow-orb"
import { FlowDiagram } from "@/components/presentation/flow-diagram"

const steps = [
  {
    title: "Connect",
    description: "Link all your data sources with one-click integrations"
  },
  {
    title: "Unify",
    description: "AI automatically maps and normalizes your data"
  },
  {
    title: "Analyze",
    description: "Get real-time insights across your entire ecosystem"
  },
  {
    title: "Act",
    description: "Automate workflows with intelligent recommendations"
  }
]

export function Slide05HowWorks() {
  return (
    <SlideWrapper id="how-works" className="flex items-center justify-center">
      <GlowOrb color="secondary" size="lg" position={{ top: "10%", right: "5%" }} blur="intense" />
      <GlowOrb color="accent" size="md" position={{ bottom: "20%", left: "5%" }} blur="intense" />
      
      <div className="max-w-6xl mx-auto z-10 px-6">
        <div className="text-center mb-20">
          <AnimatedText 
            as="span" 
            className="text-sm font-mono tracking-[0.4em] text-secondary/60 uppercase block mb-6"
          >
            The Process
          </AnimatedText>
          
          <AnimatedText 
            as="h2" 
            delay={0.1}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8"
          >
            How{" "}
            <span className="gradient-text">NEXUS</span>
            {" "}Works
          </AnimatedText>

          <AnimatedText 
            as="p" 
            delay={0.2}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Four steps to unified intelligence.
            <br />
            <span className="text-foreground font-medium mt-2 block">From chaos to clarity in minutes.</span>
          </AnimatedText>
        </div>

        <div className="mt-16">
          <FlowDiagram steps={steps} />
        </div>
      </div>
    </SlideWrapper>
  )
}
