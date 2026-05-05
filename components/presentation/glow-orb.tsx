"use client"

import { motion } from "framer-motion"

interface GlowOrbProps {
  color?: "primary" | "accent"
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
    xl: "w-[500px] h-[500px]"
  }

  const colorClasses = {
    primary: "bg-primary/30",
    accent: "bg-accent/30"
  }

  const blurClasses = {
    normal: "blur-[100px]",
    intense: "blur-[150px]"
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
      className={`absolute rounded-full ${sizeClasses[size]} ${colorClasses[color]} ${blurClasses[blur]} pointer-events-none`}
      style={position}
    />
  )
}
