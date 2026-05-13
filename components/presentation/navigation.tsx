"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ChevronUp, ChevronDown } from "lucide-react"
import { useState, useRef } from "react"

interface NavigationProps {
  currentSlide: number
  totalSlides: number
  onNavigate: (direction: "up" | "down") => void
  sectionTitles?: string[]
}

export function Navigation({ currentSlide, totalSlides, onNavigate, sectionTitles }: NavigationProps) {
  const [hoveredDot, setHoveredDot] = useState<number | null>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  const progress = totalSlides > 1 ? currentSlide / (totalSlides - 1) : 0

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
      className="fixed right-3 md:right-5 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-3 md:gap-4 hidden md:flex"
    >
      {/* Up arrow */}
      <motion.button
        onClick={() => onNavigate("up")}
        disabled={currentSlide === 0}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center text-muted-foreground/60 hover:text-primary disabled:opacity-15 disabled:cursor-not-allowed transition-all duration-300 hover:bg-primary/8"
        aria-label="الشريحة السابقة"
      >
        <ChevronUp className="w-4 h-4 md:w-5 md:h-5" strokeWidth={2} />
      </motion.button>

      {/* Dot rail */}
      <div
        ref={trackRef}
        className="relative flex flex-col items-center py-2.5 md:py-3 px-2 md:px-2.5 rounded-2xl border border-border/20 bg-background/40 backdrop-blur-2xl shadow-lg shadow-black/5"
      >
        {/* Vertical track line */}
        <div className="absolute inset-y-3 md:inset-y-3.5 w-px bg-border/15 rounded-full" />

        {/* Active track fill */}
        <motion.div
          className="absolute start-1/2 -translate-x-1/2 w-px rounded-full bg-gradient-to-b from-primary via-accent to-secondary"
          style={{ originY: 0 }}
          animate={{ height: `${progress * 100}%`, top: `calc(3px + ${(1 - progress) * 0}px)` }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />

        <AnimatePresence>
          {Array.from({ length: totalSlides }).map((_, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + index * 0.02, duration: 0.25 }}
              onClick={() => {
                const delta = index - currentSlide
                if (delta > 0) onNavigate("down")
                else if (delta < 0) onNavigate("up")
              }}
              onMouseEnter={() => setHoveredDot(index)}
              onMouseLeave={() => setHoveredDot(null)}
              className="group relative flex items-center justify-center h-3 md:h-3.5 w-3 md:w-3.5"
              aria-label={`الانتقال إلى الشريحة ${index + 1}`}
            >
              {/* Tooltip */}
              <AnimatePresence>
                {hoveredDot === index && sectionTitles?.[index] && (
                  <motion.span
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 8 }}
                    transition={{ duration: 0.12 }}
                    className="absolute right-full me-2.5 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg border border-border/30 bg-card/95 px-2.5 py-1 text-[10px] md:text-xs font-semibold text-foreground shadow-xl backdrop-blur-2xl pointer-events-none"
                  >
                    {sectionTitles[index]}
                  </motion.span>
                )}
              </AnimatePresence>

              {/* Dot */}
              <motion.div
                animate={{
                  scale: currentSlide === index ? 1 : hoveredDot === index ? 1.4 : 1,
                  opacity: currentSlide === index ? 1 : hoveredDot === index ? 0.8 : 0.25,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 22, mass: 0.8 }}
                className={`relative w-1.5 md:w-2 h-1.5 md:h-2 rounded-full transition-colors duration-300 ${
                  currentSlide === index
                    ? "bg-primary"
                    : "bg-muted-foreground group-hover:bg-foreground"
                }`}
              >
                {/* Active glow ring */}
                {currentSlide === index && (
                  <motion.span
                    layoutId="navDotGlow"
                    className="absolute inset-0 rounded-full bg-primary"
                    style={{ filter: "blur(5px)", opacity: 0.6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
              </motion.div>
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      {/* Down arrow */}
      <motion.button
        onClick={() => onNavigate("down")}
        disabled={currentSlide === totalSlides - 1}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center text-muted-foreground/60 hover:text-primary disabled:opacity-15 disabled:cursor-not-allowed transition-all duration-300 hover:bg-primary/8"
        aria-label="الشريحة التالية"
      >
        <ChevronDown className="w-4 h-4 md:w-5 md:h-5" strokeWidth={2} />
      </motion.button>

      {/* Slide number indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="text-[9px] md:text-[10px] font-mono font-bold tracking-wider text-muted-foreground/30"
      >
        {String(currentSlide + 1).padStart(2, "0")}/{String(totalSlides).padStart(2, "0")}
      </motion.div>
    </motion.div>
  )
}
