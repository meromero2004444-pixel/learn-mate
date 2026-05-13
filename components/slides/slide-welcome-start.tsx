"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function SlideWelcomeStart() {
  return (
    <section
      id="welcome-start"
      role="region"
      aria-label="مرحباً بك في LearnMate"
      className="relative flex h-[100dvh] min-h-[100dvh] w-full snap-start snap-always flex-col items-center justify-center overflow-hidden px-5 sm:px-8"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(135deg,#a1c4fd_0%,#c2e9fb_45%,#e8d5f2_78%,#fbc7d4_100%)] dark:bg-[linear-gradient(135deg,#1e293b_0%,#312e81_50%,#4c1d95_100%)]"
        aria-hidden
      />

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
        className="relative z-10 w-full max-w-xs sm:max-w-md md:max-w-lg rounded-[2rem] border border-white/40 bg-white/25 p-6 sm:p-10 md:p-12 text-center shadow-[0_24px_80px_-20px_rgba(59,130,246,0.35)] backdrop-blur-[14px] dark:border-white/15 dark:bg-white/10 dark:shadow-[0_24px_80px_-20px_rgba(0,0,0,0.45)]"
      >
        <h2 className="mb-3 md:mb-4 text-2xl sm:text-3xl md:text-4xl font-black tracking-[0.12em] text-slate-900 dark:text-white">
          LEARN MATE
        </h2>
        <p className="mb-6 md:mb-10 text-sm sm:text-base md:text-lg font-medium leading-relaxed text-slate-800 dark:text-white/90">
          مرحباً بك في بوابتك نحو التعلم الاحترافي
        </p>
        <div className="flex flex-col items-center gap-2 text-slate-700 dark:text-white/75" aria-hidden>
          <span className="text-[10px] sm:text-xs font-semibold tracking-wide">مرّر للأسفل</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-0.5 opacity-90"
          >
            <ChevronDown className="size-5 md:size-7 text-slate-600 dark:text-white/80" strokeWidth={2.5} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
