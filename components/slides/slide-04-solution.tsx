"use client"

import { motion } from "framer-motion"
import { Target, BookOpen, Users, Zap, BarChart3, Globe, Sparkles } from "lucide-react"
import { SlideWrapper } from "@/components/presentation/slide-wrapper"
import { AnimatedText, FadeIn } from "@/components/presentation/animated-text"

const objectives = [
  {
    id: "self-paced",
    icon: <Target className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden />,
    text: "تحقيق التعلم الذاتي الفعال من خلال بيئة تعليمية ذكية ومتكاملة",
    color: "from-primary to-accent",
  },
  {
    id: "resources",
    icon: <BookOpen className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden />,
    text: "توفير مصادر تعليمية متنوعة تدعم مختلف أنماط التعلم لدى الطلاب",
    color: "from-secondary to-primary",
  },
  {
    id: "interaction",
    icon: <Users className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden />,
    text: "تعزيز التفاعل بين الطلاب والمعلمين من خلال أدوات تواصل حديثة",
    color: "from-accent to-secondary",
  },
  {
    id: "multimedia",
    icon: <Zap className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden />,
    text: "تبسيط المفاهيم المعقدة باستخدام تقنيات الوسائط المتعددة المتقدمة",
    color: "from-primary to-secondary",
  },
  {
    id: "progress",
    icon: <BarChart3 className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden />,
    text: "متابعة مستوى تقدم الطلاب وتقديم تغذية راجعة فورية ودقيقة",
    color: "from-secondary to-accent",
  },
  {
    id: "access",
    icon: <Globe className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden />,
    text: "تمكين الوصول للمحتوى التعليمي في أي وقت ومن أي مكان بسهولة",
    color: "from-accent to-primary",
  },
] as const

export function Slide04Solution() {
  return (
    <SlideWrapper
      id="objectives"
      ariaLabel="أهداف المشروع"
      className="relative flex flex-col justify-center py-10 sm:py-14 min-h-screen"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -start-[10%] top-1/4 h-[28rem] w-[28rem] rounded-full bg-primary/[0.07] blur-[120px] animate-float gpu-accel" />
        <div className="absolute -end-[8%] bottom-1/4 h-[26rem] w-[26rem] rounded-full bg-secondary/[0.06] blur-[120px] animate-float gpu-accel [animation-delay:2.5s]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-primary/25 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col px-4 sm:px-6 md:px-8">
        <header className="mb-6 md:mb-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-4 md:mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-[color-mix(in_oklch,var(--card)_55%,transparent)] px-2.5 md:px-5 py-1 md:py-1.5 text-[9px] sm:text-xs font-semibold tracking-wide text-primary shadow-sm backdrop-blur-md"
          >
            <Sparkles className="h-3 w-3.5 md:h-3.5 md:w-3.5 shrink-0 opacity-90" aria-hidden />
            <span>رؤية مستقبلية طموحة</span>
          </motion.div>

          <AnimatedText
            as="h2"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground"
          >
            أهداف المشروع
          </AnimatedText>
          <p className="mx-auto mt-2 md:mt-3 max-w-2xl text-xs md:text-sm leading-relaxed text-muted-foreground">
            محاور أساسية يبني عليها LearnMate تجربة تعليمية متكاملة وواضحة.
          </p>
        </header>

        <ul className="mx-auto grid w-full max-w-5xl list-none grid-cols-1 justify-items-center gap-3 md:gap-5 lg:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {objectives.map((obj, index) => (
            <li key={obj.id} className="min-h-0 w-full max-w-md sm:max-w-none">
              <FadeIn delay={0.04 * index}>
                <motion.article
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 420, damping: 28 }}
                  className="group relative flex h-full flex-col gpu-accel"
                >
                  <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br from-primary/12 via-transparent to-secondary/10 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative flex h-full flex-col rounded-3xl border border-border/70 bg-[color-mix(in_oklch,var(--card)_72%,transparent)] p-4 md:p-6 shadow-[0_1px_0_0_color-mix(in_oklch,var(--foreground)_6%,transparent)_inset] backdrop-blur-xl transition-[border-color,box-shadow,background-color] duration-300 dark:border-white/[0.08] dark:bg-[color-mix(in_oklch,var(--card)_55%,transparent)]">
                    <div
                      className={`mb-3 md:mb-4 flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-2xl bg-gradient-to-br ${obj.color} text-white shadow-md ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-[1.03]`}
                    >
                      {obj.icon}
                    </div>
                    <p className="text-right text-sm sm:text-[14px] md:text-[15px] lg:text-[17px] font-semibold leading-snug tracking-tight text-foreground">
                      {obj.text}
                    </p>
                    <div className="mt-3 md:mt-5 flex items-center justify-end gap-2 border-t border-border/50 pt-3 md:pt-4 dark:border-white/[0.06]">
                      <span className="h-1 w-6 md:w-8 rounded-full bg-primary/35 transition-all duration-300 group-hover:w-10 md:group-hover:w-12 group-hover:bg-primary/60" />
                    </div>
                  </div>
                </motion.article>
              </FadeIn>
            </li>
          ))}
        </ul>
      </div>
    </SlideWrapper>
  )
}
