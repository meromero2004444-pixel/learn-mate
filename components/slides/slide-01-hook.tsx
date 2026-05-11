"use client"

import { motion } from "framer-motion"
import { SlideWrapper } from "@/components/presentation/slide-wrapper"
import { Sparkles, GraduationCap, Calendar } from "lucide-react"

export function Slide01Hook() {
  return (
    <SlideWrapper id="cover" className="relative overflow-hidden flex flex-col items-center justify-center text-center py-20">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-primary/20 blur-[150px] animate-pulse-slow" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-secondary/20 blur-[150px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="container relative z-10 max-w-6xl mx-auto px-4">
        {/* University Logo/Names Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl mb-6">
            <GraduationCap className="text-primary" size={20} />
            <span className="text-sm font-black uppercase tracking-[0.3em] text-foreground/80">جامعة بورسعيد</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight tracking-tighter">كلية التربية النوعية</h2>
          <h3 className="text-xl md:text-2xl font-bold text-primary/80 tracking-widest">قسم تكنولوجيا التعليم والحاسب الآلي</h3>
        </motion.div>

        {/* Project Title Centerpiece */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="relative py-12 md:py-20"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 blur-[100px] -z-10" />
          
          <motion.div
             animate={{ rotate: [0, 5, 0, -5, 0] }}
             transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
             className="absolute -top-10 -right-10 text-primary opacity-20 hidden md:block"
          >
            <Sparkles size={120} />
          </motion.div>

          <span className="inline-block text-xl md:text-3xl font-black text-primary uppercase tracking-[0.4em] mb-8 px-8 py-2 rounded-2xl bg-primary/5 border border-primary/10 backdrop-blur-md">
            مشروع تخرج
          </span>
          
          <h1 className="text-8xl md:text-[13rem] font-black tracking-tighter leading-none mb-10 select-none">
            <span className="gradient-text drop-shadow-[0_0_50px_rgba(124,58,237,0.5)]">LearnMate</span>
          </h1>
          
          <p className="text-4xl md:text-7xl font-black text-foreground drop-shadow-md tracking-tight leading-tight">
            رفيق التعلم الذكي
          </p>
        </motion.div>

        {/* Footer/Year Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-20 flex flex-col items-center gap-10"
        >
          <div className="h-px w-64 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          
          <div className="flex items-center gap-4 text-2xl md:text-3xl font-black text-foreground/60 tracking-widest uppercase bg-white/5 px-10 py-4 rounded-3xl backdrop-blur-xl border border-white/10 shadow-2xl group hover:border-primary transition-colors">
            <Calendar size={28} className="text-primary group-hover:scale-110 transition-transform" />
            <span>العام الجامعي 2026</span>
          </div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-8 opacity-40 hover:opacity-100 transition-opacity cursor-pointer"
          >
            <p className="text-sm font-black uppercase tracking-[0.5em]">اسحب للأسفل للاستكشاف</p>
          </motion.div>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
