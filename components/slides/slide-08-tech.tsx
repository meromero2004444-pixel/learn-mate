"use client"

import { SlideWrapper } from "@/components/presentation/slide-wrapper"
import { AnimatedText } from "@/components/presentation/animated-text"
import { GlowOrb } from "@/components/presentation/glow-orb"
import { TechStack } from "@/components/presentation/tech-stack"

const technologies = [
  { name: "Next.js 16", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "TailwindCSS", category: "Styling" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Redis", category: "Caching" },
  { name: "GraphQL", category: "API" },
  { name: "TensorFlow", category: "ML/AI" },
  { name: "Docker", category: "Deploy" },
  { name: "Kubernetes", category: "Orchestration" },
  { name: "AWS", category: "Cloud" },
  { name: "WebSocket", category: "Real-time" },
  { name: "OAuth 2.0", category: "Auth" }
]

export function Slide08Tech() {
  return (
    <SlideWrapper id="tech" className="flex items-center justify-center">
      <GlowOrb color="secondary" size="md" position={{ top: "10%", left: "10%" }} blur="intense" />
      <GlowOrb color="primary" size="lg" position={{ bottom: "5%", right: "5%" }} blur="intense" />
      
      <div className="max-w-6xl mx-auto z-10 flex flex-col items-center px-6">
        <div className="text-center mb-20">
          <AnimatedText 
            as="span" 
            className="text-sm font-mono tracking-[0.4em] text-secondary/60 uppercase block mb-6"
          >
            Under the Hood
          </AnimatedText>
          
          <AnimatedText 
            as="h2" 
            delay={0.1}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6"
          >
            Powered by{" "}
            <span className="gradient-text">Excellence</span>
          </AnimatedText>

          <AnimatedText 
            as="p" 
            delay={0.2}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Built on proven technologies.
            <br />
            <span className="text-foreground font-medium mt-2 block">Engineered for tomorrow.</span>
          </AnimatedText>
        </div>

        <div className="mt-8">
          <TechStack technologies={technologies} />
        </div>
      </div>
    </SlideWrapper>
  )
}
