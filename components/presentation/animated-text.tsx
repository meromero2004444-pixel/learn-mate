"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface AnimatedTextProps {
  children: ReactNode
  delay?: number
  className?: string
  as?: "h1" | "h2" | "h3" | "p" | "span"
}
  
export function AnimatedText({
  children,
  delay = 0,
  className = "",
  as: Component = "p",
}: AnimatedTextProps) {
  const transition = { duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] as const }
  const common = {
    initial: { opacity: 0, y: 14 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-40px" },
    transition,
    className,
    children,
  }

  switch (Component) {
    case "h1":
      return <motion.h1 {...common} />
    case "h2":
      return <motion.h2 {...common} />
    case "h3":
      return <motion.h3 {...common} />
    case "span":
      return <motion.span {...common} />
    default:
      return <motion.p {...common} />
  }
}

interface FadeInProps {
  children: ReactNode
  delay?: number
  className?: string
  direction?: "up" | "down" | "left" | "right"
}

export function FadeIn({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: FadeInProps) {
  const directionOffset = {
    up: { y: 18 },
    down: { y: -18 },
    left: { x: 18 },
    right: { x: -18 },
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...directionOffset[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-24px" }}
      transition={{ duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface ScaleInProps {
  children: ReactNode
  delay?: number
  className?: string
}

export function ScaleIn({ children, delay = 0, className = "" }: ScaleInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-24px" }}
      transition={{ duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
