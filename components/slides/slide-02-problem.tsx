"use client"

import { motion } from "framer-motion"
import { Star, Medal, BadgeCheck, Eye } from "lucide-react"
import { SlideWrapper } from "@/components/presentation/slide-wrapper"
import { AnimatedText, FadeIn } from "@/components/presentation/animated-text"
import Image from "next/image"

type TeamMember = { name: string; image: string; role?: string }

const teamMembers: TeamMember[] = [
  { name: "نور هانى سعيد",    image: "/نور هانى سعيد.jpg" },
  { name: "نوران هانى احمد",  image: "/نوران هانى احمد.jpg" },
  { name: "ايمان محمد على",   image: "/ايمان محمد على.jpg" },
  { name: "مروة محمد خيرى",   image: "/مروة محمد خيرى.jpg" },
  { name: "حنين يوسف احمد",   image: "/حنين يوسف احمد.jpg" },
  { name: "سلمى سامى محمد",   image: "/سلمى سامى محمد.jpg" },
  { name: "عزة على احمد",     image: "/عزة على احمد.jpg" },
  { name: "روان عادل المحمدى", image: "/روان عادل المحمدى.jpg" },
  { name: "رضوى حسنين محمد",  image: "/رضوى حسنين محمد.jpg" },
  { name: "يمنى وائل شعلان",  image: "/يمنى وائل شعلان.jpg" },
  { name: "الاء اسماعيل حسب", image: "/الاء اسماعيل حسب.jpg" },
  { name: "نور علاء سمير",    image: "/نور علاء سمير.jpg" },
]

export function Slide02Problem() {
  return (
    <SlideWrapper id="team" ariaLabel="فريق العمل والإشراف" className="relative overflow-hidden py-8 md:py-12 flex flex-col justify-center min-h-screen">
      {/* Compact Background Glows */}
      <div className="absolute top-0 left-1/4 w-[30rem] h-[30rem] bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse-slow gpu-accel" />
      <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-secondary/10 rounded-full blur-[120px] -z-10 animate-pulse-slow gpu-accel" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <div className="text-center mb-8 md:mb-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full glass border-primary/20 text-primary text-xs font-black mb-4"
          >
            <Star size={14} className="fill-current animate-pulse" />
          </motion.div>
          
          <AnimatedText 
            as="h2" 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-foreground mb-4 leading-none"
          >
            فريق العمل
          </AnimatedText>
        </div>

        {/* All Members — bigger cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-5 mb-10 md:mb-12">
          {teamMembers.map((member, index) => (
            <FadeIn key={member.name} delay={0.02 * index}>
              <motion.div
                whileHover={{ y: -6, scale: 1.03 }}
                className="group relative gpu-accel"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 via-accent/30 to-secondary/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
                <div className="relative flex items-center gap-3 md:gap-5 p-4 md:p-5 rounded-2xl glass border-white/10 dark:border-white/5 shadow-xl transition-all duration-300 h-full overflow-hidden">
                  <div className="relative shrink-0">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full p-0.5 bg-gradient-to-br from-primary via-secondary to-accent">
                      <div className="w-full h-full rounded-full overflow-hidden border-2 border-white dark:border-zinc-900 relative">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover object-top"
                          sizes="64px"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 text-right">
                    <h3 className="text-base md:text-xl font-black text-foreground truncate group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      {member.role ?? "عضو الفريق"}
                    </p>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Supervision Section — redesigned with inline icons */}
        <FadeIn delay={0.3} direction="up">
          <div className="relative max-w-4xl mx-auto">
            <div className="relative p-6 md:p-8 rounded-[2rem] glass border-primary/10 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-5 md:gap-6 group gpu-accel">
              <div className="flex flex-col sm:flex-row items-center gap-5 md:gap-10 w-full sm:w-auto">
                <div className="flex items-center gap-3 text-center sm:text-right">
                  <div className="flex h-11 w-11 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary shadow-sm">
                    <Medal className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <div>
                    <p className="text-base md:text-xl font-black text-foreground leading-tight">د/ ليندا نبيل</p>
                    <p className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-muted-foreground/70">مشرف رئيسي</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-center sm:text-right">
                  <div className="flex h-11 w-11 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent shadow-sm">
                    <BadgeCheck className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <div>
                    <p className="text-base md:text-xl font-black text-foreground leading-tight">م/ منه أمين</p>
                    <p className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-muted-foreground/70">مشرف مساعد</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2.5 shrink-0">
                <div className="flex h-9 w-9 md:h-10 md:w-10 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                  <Eye className="h-4 w-4 md:h-5 md:w-5" />
                </div>
                <span className="text-xs md:text-sm font-black uppercase tracking-[0.15em] text-secondary">إشراف</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </SlideWrapper>
  )
}


