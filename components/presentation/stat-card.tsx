"use client"

import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect, useState } from "react"

interface StatCardProps {
  value: number
  suffix?: string
  prefix?: string
  label: string
  delay?: number
}

export function StatCard({ value, suffix = "", prefix = "", label, delay = 0 }: StatCardProps) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const animation = animate(count, value, { 
      duration: 2, 
      delay: delay + 0.5,
      ease: "easeOut"
    })

    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest)
    })

    return () => {
      animation.stop()
      unsubscribe()
    }
  }, [count, rounded, value, delay])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <div className="text-5xl md:text-6xl lg:text-7xl font-bold gradient-text mb-2">
        {prefix}{displayValue}{suffix}
      </div>
      <div className="text-muted-foreground text-sm md:text-base uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  )
}
