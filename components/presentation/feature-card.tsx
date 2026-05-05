"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  delay?: number
}

export function FeatureCard({ icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05, y: -8 }}
      className="glass-card group cursor-default"
    >
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:glow-primary transition-all duration-300"
      >
        {icon}
      </motion.div>
      
      <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-muted-foreground leading-relaxed font-medium">{description}</p>
    </motion.div>
  )
}
