"use client"

import { motion } from "framer-motion"
import { ChevronUp, ChevronDown, Download } from "lucide-react"

interface NavigationProps {
  currentSlide: number
  totalSlides: number
  onNavigate: (direction: "up" | "down") => void
}

export function Navigation({ currentSlide, totalSlides, onNavigate }: NavigationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-4"
    >
      <button
        onClick={() => onNavigate("up")}
        disabled={currentSlide === 0}
        className="w-10 h-10 rounded-full glass flex items-center justify-center text-foreground hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:scale-110"
      >
        <ChevronUp className="w-5 h-5" />
      </button>
      
      <div className="flex flex-col items-center gap-2 py-4">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <motion.div
            key={index}
            animate={{
              scale: currentSlide === index ? 1.5 : 1,
              opacity: currentSlide === index ? 1 : 0.3
            }}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentSlide === index ? "bg-primary" : "bg-foreground"
            }`}
          />
        ))}
      </div>
      
      <button
        onClick={() => onNavigate("down")}
        disabled={currentSlide === totalSlides - 1}
        className="w-10 h-10 rounded-full glass flex items-center justify-center text-foreground hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:scale-110"
      >
        <ChevronDown className="w-5 h-5" />
      </button>
    </motion.div>
  )
}

export function ExportButton() {
  return (
    <motion.button
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.2 }}
      className="fixed top-6 right-6 z-50 glass rounded-full px-4 py-2 flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
    >
      <Download className="w-4 h-4" />
      <span className="hidden md:inline">Export</span>
    </motion.button>
  )
}
