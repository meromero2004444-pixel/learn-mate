"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface MockupFrameProps {
  children: ReactNode
  type?: "desktop" | "mobile"
  delay?: number
}

export function MockupFrame({ children, type = "desktop", delay = 0 }: MockupFrameProps) {
  if (type === "mobile") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay }}
        className="relative mx-auto"
      >
        <div className="w-[280px] md:w-[320px] h-[580px] md:h-[660px] bg-card rounded-[3rem] p-3 shadow-2xl border border-border/50">
          <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-background rounded-full" />
          <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden">
            {children}
          </div>
        </div>
        <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full -z-10" />
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      style={{ perspective: 1000 }}
      className="relative w-full max-w-4xl mx-auto"
    >
      <div className="bg-card rounded-xl p-2 shadow-2xl border border-border/50">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-destructive/60" />
            <div className="w-3 h-3 rounded-full bg-chart-3/60" />
            <div className="w-3 h-3 rounded-full bg-accent/60" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-secondary rounded-md px-4 py-1 text-xs text-muted-foreground font-mono">
              nexus.app
            </div>
          </div>
        </div>
        <div className="bg-background rounded-b-lg overflow-hidden aspect-video">
          {children}
        </div>
      </div>
      <div className="absolute -inset-8 bg-primary/5 blur-3xl rounded-full -z-10" />
    </motion.div>
  )
}
