"use client"

import { motion } from "framer-motion"
import { User, GraduationCap, Star } from "lucide-react"
import { SlideWrapper } from "@/components/presentation/slide-wrapper"
import { AnimatedText, FadeIn } from "@/components/presentation/animated-text"

const teamMembers = [
  "نور هانى سعيد", "نوران هانى احمد", "ايمان محمد على", "مروة محمد خيرى",
  "حنين يوسف احمد", "سلمى سامى محمد", "عزة على احمد", "روان عادل المحمدى",
  "رضوى حسنين محمد", "يمنى وائل شعلان", "الاء اسماعيل حسب", "نور علاء سمير"
]

export function Slide02Problem() {
  return (
    <SlideWrapper id="team" className="relative overflow-hidden py-24">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] -z-10 animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-6 backdrop-blur-md"
          >
            <Star size={14} className="fill-current" />
            <span>نخبة المبدعين</span>
          </motion.div>
          
          <AnimatedText 
            as="h2" 
            className="text-5xl md:text-7xl font-black tracking-tight text-foreground mb-6 leading-tight"
          >
            فريق العمل
          </AnimatedText>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed">
            مجموعة متميزة من طالبات قسم تكنولوجيا التعليم والحاسب الآلي اجتمعن لتقديم تجربة تعليمية مبتكرة
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {teamMembers.map((member, index) => (
            <FadeIn key={member} delay={0.05 * index}>
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative"
              >
                {/* Glow Effect on Hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-[2rem] blur opacity-0 group-hover:opacity-20 transition duration-500" />
                
                <div className="relative flex flex-col items-center p-6 rounded-[1.8rem] bg-white/70 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/40 dark:border-white/5 shadow-xl dark:shadow-none transition-all duration-300 h-full">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 relative">
                    <User className="w-8 h-8 text-primary drop-shadow-sm" />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-lg bg-primary text-white flex items-center justify-center text-[9px] font-bold shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                  <span className="text-xl font-black text-foreground text-center leading-tight tracking-tight">
                    {member}
                  </span>
                  <div className="mt-4 w-12 h-1 bg-primary/20 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ x: "-100%" }}
                      whileInView={{ x: "0%" }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                      className="w-full h-full bg-primary" 
                    />
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4} direction="up">
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-[2.5rem] blur-xl opacity-20" />
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="relative p-8 md:p-10 rounded-[2.5rem] bg-white/80 dark:bg-zinc-900/60 backdrop-blur-2xl border border-primary/20 shadow-2xl flex flex-col md:flex-row items-center gap-8 md:gap-12 text-center md:text-right overflow-hidden group"
            >
              <div className="relative shrink-0">
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-[2rem] bg-gradient-to-br from-primary to-secondary p-1 rotate-3 group-hover:rotate-6 transition-transform duration-500 shadow-xl">
                  <div className="w-full h-full rounded-[1.8rem] bg-zinc-900 flex items-center justify-center text-white">
                    <GraduationCap size={48} className="drop-shadow-2xl" />
                  </div>
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-primary tracking-widest flex items-center gap-3 justify-center md:justify-start">
                  إشراف متميز
                </h3>
                <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4">
                  <p className="text-4xl md:text-5xl font-black text-foreground drop-shadow-sm leading-tight">
                    د/ ليندا نبيل
                  </p>
                  <p className="text-4xl md:text-5xl font-black text-foreground drop-shadow-sm leading-tight">
            م/ منه أمين
 </p>
                </div>
                <p className="text-base md:text-lg text-muted-foreground font-medium">
                  نخبة من الكفاءات العلمية في مجال تكنولوجيا التعليم
                </p>
              </div>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </SlideWrapper>
  )
}
