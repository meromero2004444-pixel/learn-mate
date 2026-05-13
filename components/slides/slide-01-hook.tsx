"use client"

import { motion } from "framer-motion"
import { SlideWrapper } from "@/components/presentation/slide-wrapper"
import { Sparkles, GraduationCap, Calendar } from "lucide-react"

export function Slide01Hook() {
  return (
    <SlideWrapper
      id="cover"
      ariaLabel="الغلاف: LearnMate، رفيق التعلم"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden text-center"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute start-[-18%] top-[-22%] h-[62%] w-[62%] rounded-full bg-primary/18 blur-[140px] animate-pulse-slow gpu-accel" />
        <div
          className="absolute end-[-18%] bottom-[-22%] h-[62%] w-[62%] rounded-full bg-secondary/16 blur-[140px] animate-pulse-slow gpu-accel"
          style={{ animationDelay: "3s" }}
        />
        <div className="absolute inset-0 opacity-[0.028] dark:opacity-[0.018] bg-[radial-gradient(#000_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:52px_52px]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col px-4 sm:px-6 md:px-8 py-6 md:py-10">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
          className="mb-4 md:mb-8 flex flex-col items-center gap-2 md:gap-4"
        >
          <div className="mb-1 inline-flex items-center gap-2 rounded-full border border-primary/18 bg-[color-mix(in_oklch,var(--card)_58%,transparent)] px-2.5 md:px-5 py-1 md:py-1.5 text-[9px] sm:text-xs font-semibold uppercase tracking-[0.15em] md:tracking-[0.28em] text-foreground/85 shadow-sm backdrop-blur-md">
            <GraduationCap className="h-3.5 w-3.5 md:h-[1.15rem] md:w-[1.15rem] text-primary" aria-hidden />
            <span>جامعة بورسعيد</span>
          </div>
          <div className="space-y-1 md:space-y-1.5">
            <h2 className="text-fluid-h3 font-bold text-foreground">كلية التربية النوعية</h2>
            <div className="mx-auto h-px w-12 md:w-14 rounded-full bg-gradient-to-l from-transparent via-primary/50 to-transparent" />
            <h3 className="text-xs md:text-sm lg:text-lg font-semibold uppercase tracking-[0.1em] md:tracking-[0.12em] text-primary/90">
              قسم تكنولوجيا التعليم والحاسب الآلي
            </h3>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.99 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, ease: [0.23, 1, 0.32, 1] }}
          className="relative py-4 md:py-8"
        >
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-l from-primary/12 via-transparent to-secondary/12 blur-[100px]" />

          <motion.div
            animate={{ rotate: [0, 4, 0, -4, 0], scale: [1, 1.015, 1] }}
            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
            className="absolute -top-10 -end-10 text-primary/[0.09] hidden xl:block"
            aria-hidden
          >
            <Sparkles size={180} strokeWidth={1} />
          </motion.div>

          <div className="flex flex-col items-center gap-2 md:gap-5">
            <motion.span
              initial={{ opacity: 0, letterSpacing: "0.35em" }}
              animate={{ opacity: 1, letterSpacing: "0.14em" }}
              transition={{ delay: 0.15, duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
              className="inline-block rounded-full border border-primary/15 bg-[color-mix(in_oklch,var(--card)_55%,transparent)] px-3 md:px-6 py-1 md:py-1.5 text-[9px] sm:text-xs md:text-sm font-semibold uppercase tracking-[0.12em] md:tracking-[0.14em] text-primary shadow-sm backdrop-blur-md"
            >
              مشروع تخرج
            </motion.span>

            <div className="group relative cursor-default">
              <h1 className="text-fluid-h1 mb-1 md:mb-1 font-black leading-[0.95] tracking-tighter select-none">
                <span className="gradient-text">LearnMate</span>
              </h1>
              <div className="pointer-events-none absolute -inset-4 md:-inset-6 rounded-[3rem] bg-primary/6 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
              className="text-fluid-h2 font-bold text-foreground"
            >
              رفيق التعلم
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
          className="mt-6 md:mt-10 flex flex-col items-center gap-4 md:gap-7"
        >
          <div className="flex items-center gap-2 md:gap-4 rounded-[2rem] border border-border/60 bg-[color-mix(in_oklch,var(--card)_60%,transparent)] px-5 md:px-9 py-2.5 md:py-4 text-sm md:text-lg lg:text-xl font-semibold tracking-wide text-foreground/80 shadow-md backdrop-blur-xl transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-primary/22 hover:shadow-lg dark:border-white/[0.07]">
            <Calendar className="h-4 w-4 md:h-6 md:w-6 shrink-0 text-primary" aria-hidden />
            <span>العام الجامعي 2026</span>
          </div>

          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="mt-1 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground sm:text-[11px] sm:tracking-[0.32em]">
              ابدأ الاستكشاف
            </span>
            <div className="flex h-10 w-7 items-start justify-center rounded-full border border-border/50 bg-background/30 p-1 backdrop-blur-sm">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                className="h-2.5 w-1 rounded-full bg-primary shadow-[0_0_10px_color-mix(in_oklch,var(--primary)_55%,transparent)]"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
