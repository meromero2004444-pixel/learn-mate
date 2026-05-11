"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface SlideWrapperProps {
  children: ReactNode
  className?: string
  id?: string
}

export function SlideWrapper({ children, className = "", id }: SlideWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-20%" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden px-6 md:px-12 lg:px-24 py-20 ${className}`}
    >
      {children}
    </motion.section>
  )
}
