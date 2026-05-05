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
    <SlideWrapper id="how-works">
      <GlowOrb color="primary" size="lg" position={{ top: "10%", right: "5%" }} blur="intense" />
      <GlowOrb color="accent" size="md" position={{ bottom: "20%", left: "5%" }} blur="intense" />
      
      <div className="max-w-6xl mx-auto z-10">
        <div className="text-center mb-16">
          <AnimatedText 
            as="span" 
            className="text-xs md:text-sm font-mono tracking-[0.3em] text-primary/80 uppercase block mb-4"
          >
            The Process
          </AnimatedText>
          
          <AnimatedText 
            as="h2" 
            delay={0.1}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
          >
            How{" "}
            <span className="gradient-text">NEXUS</span>
            {" "}Works
          </AnimatedText>

          <AnimatedText 
            as="p" 
            delay={0.2}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Four steps to unified intelligence.
            <br />
            From chaos to clarity in minutes.
          </AnimatedText>
        </div>

        <FlowDiagram steps={steps} />
      </div>
    </SlideWrapper>
  )
}
