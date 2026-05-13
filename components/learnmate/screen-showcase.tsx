"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import { useState } from "react"
import type { LearnmateScreen } from "@/lib/learnmate-screen-sections"
import { cn } from "@/lib/utils"

function ScreenFigure({ src, alt, priority }: { src: string; alt: string; priority?: boolean }) {
  const [broken, setBroken] = useState(false)

  if (broken) {
    return (
      <div className="flex aspect-video w-full items-center justify-center rounded-[1.25rem] border border-dashed border-border/80 bg-muted/30 p-8 text-center text-sm text-muted-foreground">
        تعذّر تحميل الصورة. تأكد من وجود الملف في: <span className="mt-2 block font-mono text-xs text-foreground">{src}</span>
      </div>
    )
  }

  return (
    <figure className="overflow-hidden rounded-[1.25rem] bg-gradient-to-b from-white to-zinc-50/90 p-1 shadow-[0_40px_100px_-48px_rgba(30,27,75,0.55)] ring-1 ring-black/[0.06] dark:from-zinc-900 dark:to-zinc-950 dark:ring-white/[0.08]">
      <div className="overflow-hidden rounded-[1.05rem] bg-zinc-100/90 dark:bg-zinc-950/90">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={2400}
          className="h-auto w-full object-contain object-top"
          sizes="(max-width: 768px) 100vw, min(1120px, 96vw)"
          onError={() => setBroken(true)}
          unoptimized
          priority={priority}
        />
      </div>
    </figure>
  )
}

type ScreenShowcaseProps = {
  screens: LearnmateScreen[]
  variant?: "default" | "premium"
}

export function ScreenShowcase({ screens, variant = "default" }: ScreenShowcaseProps) {
  const reduce = useReducedMotion()
  const premium = variant === "premium"

  return (
    <div className={cn("flex flex-col", premium && "relative")}>
      {premium && (
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,color-mix(in_oklch,var(--primary)_14%,transparent),transparent)] dark:opacity-80"
          aria-hidden
        />
      )}
      {screens.map((s, i) => (
        <motion.section
          key={`${s.image}-${i}`}
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.08, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: reduce ? 0 : Math.min(i * 0.03, 0.15) }}
          className={cn(
            "relative border-b border-border/30 py-16 last:border-b-0 sm:py-20 md:py-28 dark:border-white/[0.05]",
            premium && i % 2 === 0 && "bg-[color-mix(in_oklch,var(--background)_88%,var(--primary)_4%)]/40",
            premium && i % 2 === 1 && "bg-[color-mix(in_oklch,var(--background)_92%,var(--secondary)_5%)]/35"
          )}
        >
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
            <p
              className={cn(
                "text-balance text-right leading-[1.75] text-foreground",
                premium ? "text-lg font-medium tracking-tight sm:text-xl md:text-[1.35rem]" : "text-base font-medium sm:text-lg md:text-xl"
              )}
            >
              {s.text}
            </p>
            <div className={cn("mt-9 sm:mt-11", premium && "mt-10 sm:mt-12")}>
              <ScreenFigure src={s.image} alt={`لقطة شاشة ${i + 1}`} priority={i === 0} />
            </div>
          </div>
        </motion.section>
      ))}
    </div>
  )
}
