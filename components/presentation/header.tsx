"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 z-50 p-6 flex items-center pointer-events-none"
    >
      <div className="flex flex-row items-center gap-4 pointer-events-auto group cursor-pointer p-2 pr-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl hover:bg-white/10 transition-all" dir="ltr">
        <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 flex items-center justify-center overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-500">
          <Image 
            src="/logo.png" 
            alt="LearnMate Logo" 
            width={48} 
            height={48}
            className="object-contain"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-2xl font-black tracking-tighter text-foreground leading-none">LearnMate</span>
          <span className="text-[11px] text-primary font-black tracking-[0.3em] uppercase mt-1">رفيق التعلم</span>
        </div>
      </div>
    </motion.header>
  )
}
