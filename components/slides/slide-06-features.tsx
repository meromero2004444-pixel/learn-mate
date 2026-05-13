"use client"

import { SlideWrapper } from "@/components/presentation/slide-wrapper"
import { AnimatedText } from "@/components/presentation/animated-text"
import { GlowOrb } from "@/components/presentation/glow-orb"
import { FeatureCard } from "@/components/presentation/feature-card"
import { 
  Brain, 
  Workflow, 
  Lock, 
  BarChart3, 
  Globe, 
  Layers 
} from "lucide-react"

const features = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Neural Processing",
    description: "Advanced ML models that learn your business patterns and predict optimal outcomes."
  },
  {
    icon: <Workflow className="w-6 h-6" />,
    title: "Smart Automation",
    description: "Intelligent workflows that adapt and optimize themselves over time."
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Zero-Trust Security",
    description: "End-to-end encryption with granular access controls at every layer."
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Real-Time Analytics",
    description: "Live dashboards with predictive insights and anomaly detection."
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Universal Connectors",
    description: "500+ pre-built integrations. If it has an API, we connect to it."
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Infinite Scale",
    description: "From startup to enterprise. Handle millions of events per second."
  }
]

export function Slide06Features() {
  return (
    <SlideWrapper id="features" className="flex items-center justify-center">
      <GlowOrb color="primary" size="lg" position={{ top: "5%", left: "10%" }} blur="intense" />
      <GlowOrb color="secondary" size="md" position={{ bottom: "10%", right: "15%" }} blur="intense" />
      
      <div className="max-w-7xl mx-auto z-10 px-6">
        <div className="text-center mb-20">
          <AnimatedText 
            as="span" 
            className="text-sm font-mono tracking-[0.4em] text-primary/60 uppercase block mb-6"
          >
            Capabilities
          </AnimatedText>
          
          <AnimatedText 
            as="h2" 
            delay={0.1}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6"
          >
            Built for the{" "}
            <span className="gradient-text">Future</span>
          </AnimatedText>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={0.1 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </SlideWrapper>
  )
}
