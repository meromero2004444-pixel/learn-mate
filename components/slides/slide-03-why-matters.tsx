"use client"

import { motion } from "framer-motion"
import { Award, ShieldCheck, Building2 } from "lucide-react"
import { SlideWrapper } from "@/components/presentation/slide-wrapper"
import { AnimatedText, FadeIn } from "@/components/presentation/animated-text"

const administration = [
  {
    name: "أ.د احمد الروبي",
    role: "عميد الكلية",
    icon: <ShieldCheck className="h-8 w-8 sm:h-9 sm:w-9" aria-hidden />,
    color: "from-primary to-accent",
  },
  {
    name: "أ.د نهله المتولي",
    role: "رئيس القسم",
    icon: <Award className="h-8 w-8 sm:h-9 sm:w-9" aria-hidden />,
    color: "from-secondary to-primary",
  },
]

export function Slide03WhyMatters() {
  return (
    <SlideWrapper id="administration" ariaLabel="إدارة الكلية والقسم" className="relative overflow-hidden py-8 md:py-16 flex flex-col justify-center min-h-screen">
      {/* Prestigious Spotlight Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,oklch(var(--primary)/0.08)_0%,transparent_70%)] -z-10" />
      
      <div className="absolute top-0 right-0 w-[20rem] md:w-[30rem] h-[20rem] md:h-[30rem] bg-primary/5 rounded-full blur-[100px] md:blur-[140px] -z-10 animate-float gpu-accel" />
      <div className="absolute bottom-0 left-0 w-[20rem] md:w-[30rem] h-[20rem] md:h-[30rem] bg-secondary/5 rounded-full blur-[100px] md:blur-[140px] -z-10 animate-float gpu-accel" style={{ animationDelay: '3s' }} />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col px-4 sm:px-6 md:px-8">
        <div className="mb-8 md:mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mx-auto mb-4 md:mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-[color-mix(in_oklch,var(--card)_60%,transparent)] px-3 md:px-4 py-1 md:py-1.5 text-primary shadow-sm backdrop-blur-md"
            aria-hidden
          >
            <Building2 className="h-3.5 w-3.5 md:h-4 md:w-4 text-primary/90" />
          </motion.div>

          <AnimatedText
            as="h2"
            className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground"
          >
            إدارة الكلية
          </AnimatedText>
          <p className="mx-auto mt-1.5 md:mt-3 max-w-[260px] md:max-w-md text-xs md:text-sm text-muted-foreground">
            قيادة أكاديمية تدعم رحلة المشروع.
          </p>
        </div>

        <div className="mx-auto flex w-full max-w-4xl flex-col items-stretch justify-center gap-3 sm:gap-5 md:gap-8 md:flex-row md:justify-center">
          {administration.map((admin, index) => (
            <FadeIn key={admin.name} delay={0.08 * index} direction={index === 0 ? "right" : "left"}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 380, damping: 26 }}
                className="group relative flex w-full flex-1 gpu-accel md:min-w-[260px]"
              >
                <div className="pointer-events-none absolute -inset-px rounded-[2rem] bg-gradient-to-br from-primary/15 via-transparent to-secondary/10 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative flex h-full min-h-[160px] sm:min-h-[200px] md:min-h-[300px] w-full flex-col items-center justify-center gap-3 sm:gap-4 md:gap-6 rounded-[1.5rem] sm:rounded-[2rem] border border-border/70 bg-[color-mix(in_oklch,var(--card)_70%,transparent)] px-5 sm:px-8 md:px-10 py-6 sm:py-8 md:py-12 text-center shadow-[0_20px_50px_-24px_color-mix(in_oklch,var(--foreground)_12%,transparent)] backdrop-blur-xl transition-[border-color,box-shadow] duration-300 dark:border-white/[0.08] dark:bg-[color-mix(in_oklch,var(--card)_50%,transparent)]">
                  <div
                    className={`flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${admin.color} text-white shadow-lg ring-1 ring-white/15 transition-transform duration-300 group-hover:scale-105`}
                  >
                    {admin.icon}
                  </div>
                  <div className="space-y-1.5 sm:space-y-2 md:space-y-3">
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                      {admin.name}
                    </h3>
                    <div className="mx-auto h-0.5 w-8 md:w-10 rounded-full bg-primary/25 transition-all duration-500 group-hover:w-12 md:group-hover:w-16 group-hover:bg-primary/40" />
                    <p className="text-xs sm:text-sm font-medium leading-relaxed text-muted-foreground">
                      {admin.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.25}>
          <div className="mt-8 md:mt-14 text-center">
            <div className="mx-auto mb-3 md:mb-5 h-px w-32 md:w-40 max-w-full bg-gradient-to-l from-transparent via-foreground/12 to-transparent" />
            <p className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] md:tracking-[0.35em] text-muted-foreground">
              جامعة بورسعيد — 2026
            </p>
          </div>
        </FadeIn>
      </div>
    </SlideWrapper>
  )
}
