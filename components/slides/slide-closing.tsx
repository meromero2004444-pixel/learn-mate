"use client"

import { motion } from "framer-motion"
import { Sparkles, Heart, GraduationCap } from "lucide-react"

export function SlideClosing() {
  return (
    <section
      id="closing"
      role="region"
      aria-label="خاتمة"
      className="relative flex h-[100dvh] min-h-[100dvh] w-full snap-start snap-always flex-col items-center justify-center overflow-hidden px-5 sm:px-8"
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-[20%] top-0 h-[60%] w-[50%] rounded-full bg-gradient-to-br from-primary/15 via-primary/5 to-transparent blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[10%] h-[50%] w-[50%] rounded-full bg-gradient-to-tl from-accent/12 via-accent/5 to-transparent blur-[120px]" />
        <div className="absolute left-1/2 top-1/2 h-[40%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-secondary/8 via-primary/5 to-accent/8 blur-[100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_30%,color-mix(in_oklch,var(--background)_70%,transparent)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center gap-8 md:gap-12 text-center">
        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/15 bg-card/60 px-2.5 py-1 text-[10px] sm:text-xs font-semibold text-primary shadow-sm backdrop-blur-2xl">
            <Sparkles className="h-3 w-3 md:h-3.5 md:w-3.5" />
            خاتمة
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-3 md:space-y-4"
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight gradient-text">
            شكراً لكم
          </h2>
          <p className="text-balance text-base md:text-xl lg:text-2xl font-medium text-foreground/70 leading-relaxed max-w-xl mx-auto">
            نشكركم على وقتكم واهتمامكم. نأمل أن يكون مشروع <span className="font-black text-primary">LearnMate</span> قد نال إعجابكم.
          </p>
        </motion.div>

        {/* Gradient divider */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '4rem' }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="h-[3px] rounded-full bg-gradient-to-r from-primary via-accent to-secondary shadow-sm shadow-primary/20"
        />

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-5 md:gap-6"
        >
          <div className="flex items-center justify-center gap-2 text-muted-foreground/50 text-xs md:text-sm font-medium">
            <span>صُنع بـ</span>
            <Heart className="h-3.5 w-3.5 md:h-4 md:w-4 fill-red-400/60 text-red-400/60" />
            <span>بواسطة فريق LearnMate</span>
          </div>

          <div className="inline-flex items-center gap-2 rounded-2xl border border-border/20 bg-card/40 px-4 py-2 md:px-6 md:py-3 shadow-sm backdrop-blur-xl">
            <GraduationCap className="h-4 w-4 md:h-5 md:w-5 text-primary/60" />
            <span className="text-[10px] sm:text-xs font-semibold text-muted-foreground/60 tracking-wide">
              كلية التربية النوعية — جامعة بورسعيد
            </span>
          </div>
        </motion.div>

        {/* Decorative corner elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-1"
          aria-hidden
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              animate={{ opacity: [0.2, 0.6, 0.2] }}
              transition={{ duration: 2, delay: i * 0.3, repeat: Infinity, ease: "easeInOut" }}
              className={`h-1 w-1 rounded-full ${
                i === 0 ? "bg-primary/40" : i === 1 ? "bg-accent/40" : "bg-secondary/40"
              }`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
