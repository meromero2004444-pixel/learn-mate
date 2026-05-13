"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  sections: { id: string; title: string }[]
  currentSlide: number
  scrollRef: React.RefObject<HTMLDivElement>
}

export function Header({ sections, currentSlide, scrollRef }: HeaderProps) {
  const [open, setOpen] = useState(false)

  const scrollToSection = (index: number) => {
    const el = scrollRef.current
    if (!el) return
    el.scrollTo({
      top: index * el.clientHeight,
      behavior: "smooth"
    })
    setOpen(false)
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex w-full flex-row-reverse items-center justify-between p-3 sm:p-4 md:p-6 pointer-events-none"
    >
      <div className="flex items-center gap-2 md:gap-4 pointer-events-auto">
        <a
          href="#cover"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection(0)
          }}
          className="group flex flex-row items-center gap-2 rounded-2xl border border-border/60 bg-card/65 px-2 py-1.5 md:px-3 md:py-2.5 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:border-primary/20"
          dir="ltr"
        >
          <div className="flex h-8 w-8 md:h-12 md:w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg">
            <Image
              src="/logo.jpeg"
              alt="LearnMate Logo"
              width={48}
              height={48}
              className="object-contain"
              priority
            />
          </div>
          <div className="flex min-w-0 flex-col text-start">
            <span className="truncate text-sm md:text-lg font-bold text-foreground">
              LearnMate
            </span>
            <span className="text-[10px] md:text-[11px] font-semibold uppercase tracking-wider text-primary">
              رفيق التعلم
            </span>
          </div>
        </a>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="rounded-xl glass border-border/40 md:hidden pointer-events-auto h-11 w-11 transition-all duration-200 hover:scale-105 hover:border-primary/30 active:scale-95">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[280px] sm:w-[350px] md:w-[400px] border-l-border/20 bg-background/80 backdrop-blur-2xl">
          <SheetHeader className="border-b border-border/20 pb-4 mb-2">
            <div className="flex items-center justify-between">
              <SheetClose className="rounded-lg p-2 hover:bg-muted transition-colors">
                <X className="h-5 w-5 text-muted-foreground" />
              </SheetClose>
              <SheetTitle className="text-right text-xl md:text-2xl font-black gradient-text">قائمة العرض</SheetTitle>
            </div>
          </SheetHeader>
          <nav className="flex flex-col gap-1.5 mt-2 overflow-y-auto max-h-[calc(100vh-120px)] hide-scrollbar px-1">
            {sections.map((section, index) => (
              <motion.button
                key={section.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.03, duration: 0.3 }}
                onClick={() => scrollToSection(index)}
                className={`relative text-right px-3 md:px-4 py-3 rounded-xl transition-all duration-200 font-bold text-sm md:text-base ${
                  currentSlide === index 
                    ? "text-white" 
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                }`}
              >
                {currentSlide === index && (
                  <motion.div
                    layoutId="sidebarActive"
                    className="absolute inset-0 rounded-xl bg-primary shadow-lg shadow-primary/20"
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-3">
                  <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                    currentSlide === index ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"
                  }`}>
                    {index + 1}
                  </span>
                  <span className="truncate">{section.title}</span>
                </span>
              </motion.button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </motion.header>
  )
}
