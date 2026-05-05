"use client"

import { useEffect, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Slide01Hook } from "@/components/slides/slide-01-hook"
import { Slide02Problem } from "@/components/slides/slide-02-problem"
import { Slide03WhyMatters } from "@/components/slides/slide-03-why-matters"
import { Slide04Solution } from "@/components/slides/slide-04-solution"
import { Slide05HowWorks } from "@/components/slides/slide-05-how-works"
import { Slide06Features } from "@/components/slides/slide-06-features"
import { Slide07Demo } from "@/components/slides/slide-07-demo"
import { Slide08Tech } from "@/components/slides/slide-08-tech"
import { Slide09Advantage } from "@/components/slides/slide-09-advantage"
import { Slide10Vision } from "@/components/slides/slide-10-vision"
import { Slide11Closing } from "@/components/slides/slide-11-closing"
import { SectionDivider } from "@/components/presentation/section-divider"
import { ChevronUp, ChevronDown, Menu, X } from "lucide-react"

const slides = [
  { id: "hook", component: Slide01Hook },
  { id: "problem", component: Slide02Problem },
  { id: "why-matters", component: Slide03WhyMatters },
  { id: "solution", component: Slide04Solution },
  { id: "how-works", component: Slide05HowWorks },
  { id: "features", component: Slide06Features },
  { id: "demo", component: Slide07Demo },
  { id: "tech", component: Slide08Tech },
  { id: "advantage", component: Slide09Advantage },
  { id: "vision", component: Slide10Vision },
  { id: "closing", component: Slide11Closing }
]

const slideNames = [
  "The Hook",
  "The Problem",
  "Why It Matters",
  "Our Solution",
  "How It Works",
  "Key Features",
  "Live Demo",
  "Tech Stack",
  "Competitive Edge",
  "Future Vision",
  "Closing"
]

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const scrollToSlide = useCallback((index: number) => {
    const slideId = slides[index]?.id
    if (slideId) {
      const element = document.getElementById(slideId)
      element?.scrollIntoView({ behavior: "smooth" })
      setCurrentSlide(index)
      setIsMenuOpen(false)
    }
  }, [])

  const navigateSlide = useCallback((direction: "up" | "down") => {
    const newIndex = direction === "up" 
      ? Math.max(0, currentSlide - 1)
      : Math.min(slides.length - 1, currentSlide + 1)
    scrollToSlide(newIndex)
  }, [currentSlide, scrollToSlide])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2
      
      for (let i = slides.length - 1; i >= 0; i--) {
        const element = document.getElementById(slides[i].id)
        if (element && element.offsetTop <= scrollPosition) {
          setCurrentSlide(i)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault()
        navigateSlide("down")
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault()
        navigateSlide("up")
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [navigateSlide])

  return (
    <main className="relative bg-background min-h-screen">
      {/* Loading Screen */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 bg-background flex items-center justify-center"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-4xl font-bold gradient-text"
            >
              NEXUS
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Sidebar */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-3"
      >
        <button
          onClick={() => navigateSlide("up")}
          disabled={currentSlide === 0}
          className="w-10 h-10 rounded-full glass flex items-center justify-center text-foreground hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:scale-110"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
        
        <div className="flex flex-col items-center gap-2 py-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSlide(index)}
              className="group relative"
            >
              <motion.div
                animate={{
                  scale: currentSlide === index ? 1.5 : 1,
                  opacity: currentSlide === index ? 1 : 0.3
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSlide === index ? "bg-primary" : "bg-foreground"
                }`}
              />
              <span className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-foreground whitespace-nowrap bg-card px-2 py-1 rounded">
                {slideNames[index]}
              </span>
            </button>
          ))}
        </div>
        
        <button
          onClick={() => navigateSlide("down")}
          disabled={currentSlide === slides.length - 1}
          className="w-10 h-10 rounded-full glass flex items-center justify-center text-foreground hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:scale-110"
        >
          <ChevronDown className="w-5 h-5" />
        </button>
      </motion.div>

      {/* Mobile Menu Button */}
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-4 right-4 z-50 md:hidden w-12 h-12 glass rounded-full flex items-center justify-center text-foreground"
      >
        {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </motion.button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center"
          >
            <div className="space-y-4">
              {slideNames.map((name, index) => (
                <motion.button
                  key={name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => scrollToSlide(index)}
                  className={`block text-xl ${
                    currentSlide === index ? "text-primary font-semibold" : "text-muted-foreground"
                  }`}
                >
                  <span className="text-xs text-primary/50 mr-3">{String(index + 1).padStart(2, "0")}</span>
                  {name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress Bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: (currentSlide + 1) / slides.length }}
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
      />

      {/* Slide Counter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-40 font-mono text-sm text-muted-foreground"
      >
        <span className="text-primary">{String(currentSlide + 1).padStart(2, "0")}</span>
        <span className="mx-2">/</span>
        <span>{String(slides.length).padStart(2, "0")}</span>
      </motion.div>

      {/* Slides */}
      <Slide01Hook />
      
      <SectionDivider act="Act I" title="The Challenge" />
      <Slide02Problem />
      <Slide03WhyMatters />
      
      <SectionDivider act="Act II" title="The Solution" />
      <Slide04Solution />
      <Slide05HowWorks />
      <Slide06Features />
      <Slide07Demo />
      <Slide08Tech />
      
      <SectionDivider act="Act III" title="The Future" />
      <Slide09Advantage />
      <Slide10Vision />
      <Slide11Closing />
    </main>
  )
}
