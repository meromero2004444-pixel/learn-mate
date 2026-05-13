"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ReactNode } from "react"

interface SlideWrapperProps {
  children: ReactNode
  className?: string
  id?: string
  /** Accessible name for this slide region (Arabic). */
  ariaLabel?: string
}

export function SlideWrapper({ children, className = "", id, ariaLabel }: SlideWrapperProps) {
  const reduce = useReducedMotion()

  return (
    <motion.section
      id={id}
      role="region"
      aria-label={ariaLabel}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25, margin: "0px 0px -5% 0px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`relative flex h-[100dvh] min-h-[100dvh] w-full snap-start snap-always flex-col items-center justify-center overflow-hidden px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 ${className}`}
    >
      {children}
    </motion.section>
  )
}
