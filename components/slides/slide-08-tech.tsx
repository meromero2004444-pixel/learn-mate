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
    <SlideWrapper id="tech">
      <GlowOrb color="primary" size="md" position={{ top: "10%", left: "10%" }} blur="intense" />
      <GlowOrb color="accent" size="lg" position={{ bottom: "5%", right: "5%" }} blur="intense" />
      
      <div className="max-w-6xl mx-auto z-10 flex flex-col items-center">
        <div className="text-center mb-16">
          <AnimatedText 
            as="span" 
            className="text-xs md:text-sm font-mono tracking-[0.3em] text-primary/80 uppercase block mb-4"
          >
            Under the Hood
          </AnimatedText>
          
          <AnimatedText 
            as="h2" 
            delay={0.1}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
          >
            Powered by{" "}
            <span className="gradient-text">Excellence</span>
          </AnimatedText>

          <AnimatedText 
            as="p" 
            delay={0.2}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Built on proven technologies.
            <br />
            Engineered for tomorrow.
          </AnimatedText>
        </div>

        <TechStack technologies={technologies} />
      </div>
    </SlideWrapper>
  )
}
