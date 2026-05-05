"use client"

import { SlideWrapper } from "@/components/presentation/slide-wrapper"
import { AnimatedText, FadeIn } from "@/components/presentation/animated-text"
import { GlowOrb } from "@/components/presentation/glow-orb"
import { motion } from "framer-motion"

export function Slide03WhyMatters() {
  return (
    <SlideWrapper id="why-matters" className="flex items-center justify-center">
      <GlowOrb color="secondary" size="xl" position={{ top: "10%", left: "-15%" }} blur="intense" />
      
      <div className="max-w-6xl mx-auto z-10 px-6">
        <div className="text-center mb-20">
          <AnimatedText 
            as="span" 
            className="text-sm font-mono tracking-[0.4em] text-secondary/60 uppercase block mb-6"
          >
            The Stakes
          </AnimatedText>
          
          <AnimatedText 
            as="h2" 
            delay={0.1}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8"
          >
            Why This{" "}
            <span className="gradient-text">Matters Now</span>
          </AnimatedText>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <FadeIn delay={0.2} direction="left">
            <div className="space-y-10">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start gap-6 group"
              >
                <div className="w-1.5 h-16 bg-gradient-to-b from-primary to-transparent rounded-full mt-1" />
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    The Urgency is Real
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Companies that fail to unify their data infrastructure are falling behind.
                    The gap widens every single quarter.
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start gap-6 group"
              >
                <div className="w-1.5 h-16 bg-gradient-to-b from-secondary to-transparent rounded-full mt-1" />
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-3 group-hover:text-secondary transition-colors">
                    Opportunity Window
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    The market is ready. AI capabilities have matured.
                    Infrastructure costs have dropped significantly.
                  </p>
                </div>
              </motion.div>
            </div>
          </FadeIn>

          <FadeIn delay={0.4} direction="right">
            <div className="glass-card p-10 md:p-12 relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 glass rounded-xl flex items-center justify-center text-primary text-4xl font-serif">
                &ldquo;
              </div>
              <blockquote className="text-xl md:text-2xl lg:text-3xl font-display italic text-foreground/90 leading-snug">
                By 2027, organizations with unified data platforms will outperform competitors by{" "}
                <span className="text-primary font-bold not-italic underline decoration-primary/30 underline-offset-8">340%</span>{" "}
                in operational efficiency.
              </blockquote>
              <div className="mt-10 pt-8 border-t border-white/5">
                <p className="text-sm font-mono text-muted-foreground uppercase tracking-widest">
                  — Gartner Research 2024
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.6}>
          <div className="mt-24 text-center">
            <p className="text-3xl md:text-5xl font-light text-foreground/80">
              The question isn&apos;t{" "}
              <span className="text-muted-foreground/40 line-through decoration-destructive/50">if</span>
              {" "}—{" "}
              it&apos;s <span className="gradient-text font-bold">how fast</span>.
            </p>
          </div>
        </FadeIn>
      </div>
    </SlideWrapper>
  )
}
