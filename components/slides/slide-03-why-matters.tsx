"use client"

import { motion } from "framer-motion"
import { Award, ShieldCheck, Building2, Stars } from "lucide-react"
import { SlideWrapper } from "@/components/presentation/slide-wrapper"
import { AnimatedText, FadeIn } from "@/components/presentation/animated-text"

export function Slide03WhyMatters() {
  return (
    <SlideWrapper id="administration" className="relative py-24">
      {/* Dynamic Background */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px] -z-10" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] -z-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 justify-center mb-6"
          >
            <Building2 className="text-primary" size={24} />
            <span className="text-sm font-black uppercase tracking-[0.3em] text-primary">تحت رعاية</span>
          </motion.div>
          
          <AnimatedText 
            as="h2" 
            className="text-6xl md:text-8xl font-black text-foreground mb-8 leading-tight tracking-tight"
          >
            إدارة الكلية والقسم
          </AnimatedText>
          <div className="flex items-center justify-center gap-4">
             <div className="h-px w-24 bg-gradient-to-r from-transparent to-primary" />
             <Stars className="text-primary animate-pulse" />
             <div className="h-px w-24 bg-gradient-to-l from-transparent to-primary" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          <FadeIn delay={0.1} direction="up">
            <motion.div
              whileHover={{ y: -10 }}
              className="relative group p-1 bg-gradient-to-br from-white/20 to-white/5 dark:from-white/10 dark:to-transparent rounded-[3rem] shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-3xl -z-10" />
              <div className="p-10 md:p-14 text-center space-y-8">
                <div className="w-28 h-28 rounded-[2rem] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-primary mx-auto mb-10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-inner">
                  <Award size={56} className="drop-shadow-lg" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-primary/60 tracking-widest uppercase">رئيس القسم</h3>
                  <p className="text-5xl md:text-6xl font-black text-foreground drop-shadow-sm tracking-tight leading-tight">أ.د نهله المتولي</p>
                </div>
                <div className="pt-6">
                  <div className="inline-block px-6 py-2 rounded-full border border-primary/20 text-sm font-bold text-primary backdrop-blur-md">
                    قيادة وتطوير
                  </div>
                </div>
              </div>
            </motion.div>
          </FadeIn>

          <FadeIn delay={0.2} direction="up">
            <motion.div
              whileHover={{ y: -10 }}
              className="relative group p-1 bg-gradient-to-br from-white/20 to-white/5 dark:from-white/10 dark:to-transparent rounded-[3rem] shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-3xl -z-10" />
              <div className="p-10 md:p-14 text-center space-y-8">
                <div className="w-28 h-28 rounded-[2rem] bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center text-secondary mx-auto mb-10 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 shadow-inner">
                  <ShieldCheck size={56} className="drop-shadow-lg" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-secondary/60 tracking-widest uppercase">عميد الكلية</h3>
                  <p className="text-5xl md:text-6xl font-black text-foreground drop-shadow-sm tracking-tight leading-tight">أ.د احمد الروبي</p>
                </div>
                <div className="pt-6">
                  <div className="inline-block px-6 py-2 rounded-full border border-secondary/20 text-sm font-bold text-secondary backdrop-blur-md">
                    رؤية وتميز
                  </div>
                </div>
              </div>
            </motion.div>
          </FadeIn>
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-32 text-center">
            <p className="text-xl font-black tracking-[0.5em] text-foreground/20 uppercase">جامعة بورسعيد — 2026</p>
          </div>
        </FadeIn>
      </div>
    </SlideWrapper>
  )
}
