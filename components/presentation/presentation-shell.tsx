"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { Slide01Hook } from "@/components/slides/slide-01-hook"
import { Slide02Problem } from "@/components/slides/slide-02-problem"
import { Slide03WhyMatters } from "@/components/slides/slide-03-why-matters"
import { Slide04Solution } from "@/components/slides/slide-04-solution"
import { SlideWhatIsLearnMate } from "@/components/slides/slide-what-is-learnmate"
import { SlideAudienceProblem } from "@/components/slides/slide-audience-problem"
import { SlideWelcomeStart } from "@/components/slides/slide-welcome-start"
import { SlideClosing } from "@/components/slides/slide-closing"

import { ThemeToggle } from "@/components/presentation/theme-toggle"
import { Header } from "@/components/presentation/header"
import type { LearnmateScreen } from "@/lib/learnmate-screen-sections"

import { Navigation } from "@/components/presentation/navigation"
import { SlideWrapper } from "@/components/presentation/slide-wrapper"
import { FadeIn } from "@/components/presentation/animated-text"
import Image from "next/image"

const staticSlides = [
  { id: "cover", component: Slide01Hook, title: "الغلاف" },
  { id: "team", component: Slide02Problem, title: "فريق العمل" },
  { id: "administration", component: Slide03WhyMatters, title: "إدارة الكلية" },
  { id: "what-is-learnmate", component: SlideWhatIsLearnMate, title: "ما هو LearnMate؟" },
  { id: "audience-problem", component: SlideAudienceProblem, title: "تحديات الطلاب" },
  { id: "objectives", component: Slide04Solution, title: "أهداف المشروع" },
  { id: "welcome-start", component: SlideWelcomeStart, title: "البداية" },
]

type PresentationShellProps = {
  appScreens: LearnmateScreen[]
}

export function PresentationShell({ appScreens }: PresentationShellProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  const allSections = [
    ...staticSlides.map(s => ({ id: s.id, title: s.title })),
    ...appScreens.map((s, i) => ({ id: `screen-${i}`, title: s.text })),
    { id: "closing", title: "خاتمة" },
  ]

  useEffect(() => {
    const delay = reduceMotion ? 0 : 720
    const timer = window.setTimeout(() => setIsLoaded(true), delay)
    return () => window.clearTimeout(timer)
  }, [reduceMotion])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const onScroll = () => {
      const { scrollTop, clientHeight } = el
      const index = Math.round(scrollTop / clientHeight)
      if (index !== currentSlide) setCurrentSlide(index)
    }
    el.addEventListener("scroll", onScroll, { passive: true })
    return () => el.removeEventListener("scroll", onScroll)
  }, [currentSlide])

  const handleNavigate = (direction: "up" | "down") => {
    const el = scrollRef.current
    if (!el) return
    const targetIndex = direction === "up" ? currentSlide - 1 : currentSlide + 1
    if (targetIndex >= 0 && targetIndex < allSections.length) {
      el.scrollTo({
        top: targetIndex * el.clientHeight,
        behavior: "smooth"
      })
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-background font-sans selection:bg-primary/30">
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0.15 : 0.45 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 bg-background"
            role="status"
            aria-live="polite"
            aria-busy="true"
            aria-label="جاري تحميل العرض"
          >
            <motion.div
              animate={
                reduceMotion
                  ? { opacity: 1 }
                  : {
                      opacity: [0, 1, 0],
                      scale: [0.94, 1, 0.94],
                      filter: ["blur(10px)", "blur(0px)", "blur(10px)"],
                    }
              }
              transition={reduceMotion ? { duration: 0 } : { duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="gpu-accel text-5xl font-black tracking-tighter text-transparent sm:text-8xl md:text-9xl gradient-text"
            >
              LearnMate
            </motion.div>
            <div className="h-1 w-44 overflow-hidden rounded-full bg-foreground/10 sm:w-52">
              <motion.div
                initial={{ x: "-100%" }}
                animate={reduceMotion ? { x: "0%" } : { x: ["-100%", "100%"] }}
                transition={reduceMotion ? { duration: 0 } : { duration: 1.35, repeat: Infinity, ease: "linear" }}
                className="h-full w-full bg-primary shadow-glow shadow-primary/40"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Header sections={allSections} currentSlide={currentSlide} scrollRef={scrollRef} />

      <Navigation 
        currentSlide={currentSlide} 
        totalSlides={allSections.length} 
        onNavigate={handleNavigate}
        sectionTitles={allSections.map(s => s.title)}
      />

      <div className="fixed bottom-8 end-8 z-[60] transition-transform duration-300 hover:scale-110">
        <ThemeToggle />
      </div>

      <div
        ref={scrollRef}
        className="hide-scrollbar gpu-accel h-[100dvh] snap-y snap-mandatory overflow-y-auto overflow-x-hidden scroll-smooth bg-background"
      >
        {staticSlides.map(({ id, component: Slide }) => (
          <Slide key={id} />
        ))}

        {appScreens.map((screen, i) => {
          const displayText = screen.text.replace(/\d+/g, '').trim()
          const hasContent = /[\u0600-\u06FF\w]/.test(displayText)
          return (
          <motion.section
            key={`screen-${i}`}
            id={`screen-${i}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative flex min-h-screen w-full snap-start snap-always flex-col items-center justify-center overflow-hidden px-4 sm:px-6 md:px-8 py-12 gpu-accel"
            role="region"
            aria-label={displayText || `لقطة شاشة ${i + 1}`}
          >
            {/* ── Ambient Background ── */}
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div
                className={`absolute ${i % 2 === 0 ? '-left-[15%] top-1/4' : '-right-[15%] top-1/3'} h-[70%] w-[50%] rounded-full opacity-40 blur-[120px]`}
                style={{
                  background: `radial-gradient(circle, color-mix(in oklch, var(--primary) 12%, transparent) 0%, transparent 70%)`,
                }}
              />
              <div
                className={`absolute ${i % 2 === 0 ? '-right-[10%] bottom-1/4' : '-left-[10%] bottom-1/4'} h-[50%] w-[40%] rounded-full opacity-30 blur-[100px]`}
                style={{
                  background: `radial-gradient(circle, color-mix(in oklch, var(--secondary) 10%, transparent) 0%, transparent 70%)`,
                }}
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_40%,color-mix(in_oklch,var(--background)_60%,transparent)_100%)]" />
            </div>

            {/* ── MODERN SLIDER: header above image ── */}
            <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-5 md:gap-8">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="flex w-full max-w-2xl flex-col items-center gap-2.5 md:gap-3 text-center"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.12, ease: "backOut" }}
                  className="inline-flex items-center gap-1.5 rounded-full border border-primary/15 bg-card/60 px-2.5 py-0.5 text-[10px] sm:text-xs font-semibold text-primary shadow-sm backdrop-blur-2xl"
                >
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-primary/12 text-[8px] sm:text-[10px] font-black text-primary">
                    {i + 1}
                  </span>
                  <span>لقطة شاشة</span>
                </motion.div>

                {hasContent && (
                  <motion.h2
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                    className="text-balance text-center text-xl font-black leading-snug tracking-tight text-foreground sm:text-2xl md:text-3xl"
                  >
                    {displayText}
                  </motion.h2>
                )}

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '2.5rem' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.22 }}
                  className="h-[3px] rounded-full bg-gradient-to-r from-primary/80 via-accent/80 to-secondary/80 shadow-sm shadow-primary/20"
                />

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.26 }}
                  className="text-balance text-center text-xs leading-relaxed text-muted-foreground/80 sm:text-sm"
                >
                  لقطة توضيحية من تطبيق LearnMate — واجهة مستخدم عربية حديثة وسهلة.
                </motion.p>
              </motion.div>

              {/* Image with refined browser frame */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="group relative w-full max-w-4xl"
              >
                {/* Hover glow backdrop */}
                <div className="pointer-events-none absolute -inset-6 rounded-[3rem] bg-gradient-to-r from-primary/8 via-accent/8 to-secondary/8 opacity-0 blur-3xl transition-all duration-700 group-hover:opacity-100" />

                {/* Animated gradient border ring */}
                <div className="pointer-events-none absolute -inset-[2px] rounded-[calc(1.5rem+2px)] bg-gradient-to-r from-primary/0 via-primary/10 to-secondary/10 opacity-0 blur-[1px] transition-all duration-700 group-hover:opacity-100 group-hover:from-primary/20 group-hover:via-accent/20 group-hover:to-secondary/20" />

                <div className="relative overflow-hidden rounded-2xl border border-border/30 bg-card/20 shadow-xl shadow-black/5 backdrop-blur-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/5 md:rounded-[1.75rem]">
                  {/* macOS-style chrome bar */}
                  <div className="flex items-center gap-2 border-b border-border/15 px-3.5 py-2.5" dir="ltr">
                    <div className="flex items-center gap-1.5">
                      <div className="h-2 w-2 rounded-full bg-red-400/70 ring-1 ring-red-400/20" />
                      <div className="h-2 w-2 rounded-full bg-yellow-400/70 ring-1 ring-yellow-400/20" />
                      <div className="h-2 w-2 rounded-full bg-green-400/70 ring-1 ring-green-400/20" />
                    </div>
                    <div className="mx-auto flex-1 max-w-[240px] rounded-md bg-muted/40 px-3 py-1 text-center">
                      <span className="text-[9px] font-medium tracking-wide text-muted-foreground/50 font-mono">
                        learnmate.app/screen/{i + 1}
                      </span>
                    </div>
                    <div className="w-14" />
                  </div>

                  {/* Image */}
                  <div className="relative overflow-hidden bg-gradient-to-b from-card/10 to-background/5">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="origin-center"
                    >
                      <Image
                        src={screen.image}
                        alt={screen.text}
                        width={1600}
                        height={1200}
                        className="w-full object-contain max-h-[70vh]"
                        priority={i < 2}
                        unoptimized
                      />
                    </motion.div>
                    {/* Bottom vignette */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background/15 to-transparent" />
                  </div>
                </div>

                {/* Elegant counter pill */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.3 }}
                  className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-10"
                >
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border/20 bg-background/70 px-3 py-1 text-[10px] sm:text-xs font-bold tracking-wide text-muted-foreground backdrop-blur-2xl shadow-sm">
                    <span className="text-foreground/80">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-border">/</span>
                    <span className="text-muted-foreground/50">{String(appScreens.length).padStart(2, '0')}</span>
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>
        )})}

        {/* Closing slide */}
        <SlideClosing />
      </div>
    </main>
  )
}
