"use client"

import { motion } from "framer-motion"

interface GlowOrbProps {
  color?: "primary" | "secondary" | "accent"
  size?: "sm" | "md" | "lg" | "xl"
  position?: { top?: string; left?: string; right?: string; bottom?: string }
  blur?: "normal" | "intense"
}

export function GlowOrb({ 
  color = "primary", 
  size = "md", 
  position = {},
  blur = "normal"
}: GlowOrbProps) {
  const sizeClasses = {
    sm: "w-32 h-32",
    md: "w-64 h-64",
    lg: "w-96 h-96",
    xl: "w-[600px] h-[600px]"
  }

  const colorClasses = {
    primary: "bg-primary/20",
    secondary: "bg-secondary/20",
    accent: "bg-accent/20"
  }

  const blurClasses = {
    normal: "blur-[120px]",
    intense: "blur-[180px]"
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: [0.4, 0.7, 0.4], 
        scale: [1, 1.1, 1] 
      }}
      transition={{ 
        duration: 8, 
        repeat: Infinity,
        ease: "easeInOut" 
      }}
      className={`absolute rounded-full ${sizeClasses[size]} ${colorClasses[color]} ${blurClasses[blur]} pointer-events-none mix-blend-multiply dark:mix-blend-screen`}
      style={position}
    />
  )
}
