"use client"

import { SlideWrapper } from "@/components/presentation/slide-wrapper"
import { AnimatedText, FadeIn } from "@/components/presentation/animated-text"
import { GlowOrb } from "@/components/presentation/glow-orb"
import { motion } from "framer-motion"

export function Slide03WhyMatters() {
  return (
    <SlideWrapper id="why-matters">
      <GlowOrb color="accent" size="xl" position={{ top: "20%", left: "-15%" }} blur="intense" />
      
      <div className="max-w-5xl mx-auto z-10">
        <div className="text-center mb-16">
          <AnimatedText 
            as="span" 
            className="text-xs md:text-sm font-mono tracking-[0.3em] text-accent/80 uppercase block mb-4"
          >
            The Stakes
          </AnimatedText>
          
          <AnimatedText 
            as="h2" 
            delay={0.1}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-8"
          >
            Why This{" "}
            <span className="gradient-text">Matters Now</span>
          </AnimatedText>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <FadeIn delay={0.2} direction="left">
            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 4 }}
                className="flex items-start gap-4 cursor-default"
              >
                <div className="w-1 h-full bg-gradient-to-b from-primary to-accent rounded-full" />
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                    The Urgency is Real
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Companies that fail to unify their data infrastructure are falling behind.
                    The gap widens every quarter.
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 4 }}
                className="flex items-start gap-4 cursor-default"
              >
                <div className="w-1 h-full bg-gradient-to-b from-accent to-primary rounded-full" />
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                    Opportunity Window
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The market is ready. AI capabilities have matured.
                    Infrastructure costs have dropped 80%.
                  </p>
                </div>
              </motion.div>
            </div>
          </FadeIn>

          <FadeIn delay={0.4} direction="right">
            <div className="glass rounded-3xl p-8 md:p-10 gradient-border">
              <blockquote className="text-lg md:text-xl lg:text-2xl font-serif italic text-foreground/90 leading-relaxed">
                &ldquo;By 2027, organizations with unified data platforms will outperform competitors by{" "}
                <span className="text-primary font-semibold not-italic">340%</span>{" "}
                in operational efficiency.&rdquo;
              </blockquote>
              <div className="mt-6 pt-6 border-t border-border/30">
                <p className="text-sm text-muted-foreground">
                  — Gartner Future of Enterprise Data Report
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.6}>
          <div className="mt-16 text-center">
            <p className="text-2xl md:text-3xl lg:text-4xl font-light text-foreground">
              The question isn&apos;t{" "}
              <span className="text-muted-foreground line-through">if</span>
              {" "}—{" "}
              it&apos;s <span className="gradient-text font-semibold">how fast</span>.
            </p>
          </div>
        </FadeIn>
      </div>
    </SlideWrapper>
  )
}
