"use client"

import { useEffect, useState, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Slide01Hook } from "@/components/slides/slide-01-hook"
import { Slide02Problem } from "@/components/slides/slide-02-problem"
import { Slide03WhyMatters } from "@/components/slides/slide-03-why-matters"
import { Slide04Solution } from "@/components/slides/slide-04-solution"
import { ThemeToggle } from "@/components/presentation/theme-toggle"
import { Header } from "@/components/presentation/header"
import { ChevronUp, ChevronDown, Menu, X } from "lucide-react"

const slides = [
  { id: "cover", component: Slide01Hook, name: "الغلاف" },
  { id: "team", component: Slide02Problem, name: "أسماء المجموعة" },
  { id: "administration", component: Slide03WhyMatters, name: "إدارة الكلية" },
  { id: "objectives", component: Slide04Solution, name: "أهداف المشروع" },
]

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    setIsLoaded(true)

    // Professional Intersection Observer for rock-solid slide detection
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = slides.findIndex((s) => s.id === entry.target.id)
            if (index !== -1) setCurrentSlide(index)
          }
        })
      },
      { threshold: 0.5 }
    )

    slides.forEach((slide) => {
      const el = document.getElementById(slide.id)
      if (el) observerRef.current?.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  const scrollToSlide = useCallback((index: number) => {
    const slideId = slides[index]?.id
    if (slideId) {
      const element = document.getElementById(slideId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
        setIsMenuOpen(false)
      }
    }
  }, [])

  const navigateSlide = useCallback((direction: "up" | "down") => {
    const newIndex = direction === "up" 
      ? Math.max(0, currentSlide - 1)
      : Math.min(slides.length - 1, currentSlide + 1)
    scrollToSlide(newIndex)
  }, [currentSlide, scrollToSlide])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") {
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
    <main className="relative bg-background min-h-screen selection:bg-primary/30">
      {/* Premium Loader */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
          >
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5], scale: [0.98, 1, 0.98] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-5xl font-black gradient-text tracking-tighter"
            >
              LearnMate
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Header />

      {/* Modern Vertical Navigation Sidebar */}
      <motion.nav
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed right-6 top-1/2 -translate-y-1/2 z-[60] hidden lg:flex flex-col items-center gap-6"
      >
        <div className="flex flex-col items-center gap-4 p-2 rounded-full bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl">
          <button
            onClick={() => navigateSlide("up")}
            disabled={currentSlide === 0}
            className="w-12 h-12 rounded-full flex items-center justify-center text-foreground/50 hover:text-primary disabled:opacity-20 transition-all hover:bg-white/10"
          >
            <ChevronUp size={24} />
          </button>
          
          <div className="flex flex-col gap-3">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => scrollToSlide(index)}
                className="group relative flex items-center justify-center w-12 h-4"
              >
                <motion.div
                  animate={{
                    width: currentSlide === index ? 24 : 8,
                    height: 8,
                    backgroundColor: currentSlide === index ? "var(--color-primary)" : "var(--color-foreground)",
                    opacity: currentSlide === index ? 1 : 0.2
                  }}
                  className="rounded-full transition-all duration-300"
                />
                {/* Tooltip */}
                <div className="absolute right-14 px-3 py-1.5 rounded-lg bg-zinc-900/90 text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0 whitespace-nowrap pointer-events-none border border-white/10">
                  {slide.name}
                </div>
              </button>
            ))}
          </div>
          
          <button
            onClick={() => navigateSlide("down")}
            disabled={currentSlide === slides.length - 1}
            className="w-12 h-12 rounded-full flex items-center justify-center text-foreground/50 hover:text-primary disabled:opacity-20 transition-all hover:bg-white/10"
          >
            <ChevronDown size={24} />
          </button>
        </div>
      </motion.nav>

      {/* Floating Theme Toggle */}
      <div className="fixed bottom-6 right-6 z-[60]">
        <ThemeToggle />
      </div>

      {/* Mobile Menu & Progress */}
      <div className="fixed top-6 right-6 z-[60] flex items-center gap-4 lg:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center text-foreground shadow-2xl"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[55] bg-background/80 flex items-center justify-center lg:hidden"
          >
            <div className="flex flex-col gap-8 text-center">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => scrollToSlide(index)}
                  className={`text-4xl font-black transition-all ${
                    currentSlide === index ? "text-primary scale-110" : "text-foreground/40"
                  }`}
                >
                  {slide.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Slides Rendering */}
      <div className="flex flex-col">
        {slides.map((Slide, index) => (
          <Slide.component key={Slide.id} />
        ))}
      </div>

      {/* Global Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left"
        style={{ scaleX: (currentSlide + 1) / slides.length }}
      />
    </main>
  )
}
