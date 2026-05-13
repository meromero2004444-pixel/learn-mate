"use client"

import { Users, AlertCircle } from "lucide-react"
import { SlideWrapper } from "@/components/presentation/slide-wrapper"
import { AnimatedText, FadeIn } from "@/components/presentation/animated-text"

export function SlideAudienceProblem() {
  return (
    <SlideWrapper
      id="audience-problem"
      ariaLabel="الفئة المستهدفة والمشكلة"
      className="justify-start overflow-y-auto overflow-x-hidden py-10 sm:py-14"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute start-1/4 top-0 h-[20rem] w-[20rem] -translate-x-1/2 rounded-full bg-accent/[0.07] blur-[90px]" />
        <div className="absolute end-0 bottom-0 h-[26rem] w-[26rem] rounded-full bg-primary/[0.06] blur-[110px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-3xl px-4 sm:px-6 md:px-8">
        <FadeIn delay={0.02}>
          <section className="mb-8 md:mb-12 text-right">
            <div className="mb-3 md:mb-4 flex items-center justify-center md:justify-start gap-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-[color-mix(in_oklch,var(--card)_55%,transparent)] px-3 md:px-4 py-1 md:py-1.5 text-primary shadow-sm backdrop-blur-md">
                <Users className="h-3.5 w-3.5 md:h-4 md:w-4 shrink-0 opacity-90" aria-hidden />
              </div>
            </div>
            <AnimatedText as="h2" className="mb-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
              الفئة المستهدفة (بتخدم مين؟)
            </AnimatedText>
            <p className="mb-3 md:mb-4 text-xs md:text-sm font-medium text-muted-foreground">يستهدف تطبيق LearnMate بشكل أساسي:</p>
            <ul className="list-none space-y-3 md:space-y-5 rounded-[1.75rem] border border-border/70 bg-[color-mix(in_oklch,var(--card)_65%,transparent)] p-5 md:p-10 text-base md:text-xl lg:text-2xl leading-relaxed text-foreground shadow-lg backdrop-blur-xl dark:border-white/[0.08] font-medium">
              <li className="flex items-start gap-3 md:gap-4 text-right">
                <span className="mt-2 md:mt-2.5 h-1.5 w-1.5 md:h-2 md:w-2 shrink-0 rounded-full bg-primary" aria-hidden />
                <span>طلاب الفرقة الأولى الجدد داخل الكلية.</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4 text-right">
                <span className="mt-2 md:mt-2.5 h-1.5 w-1.5 md:h-2 md:w-2 shrink-0 rounded-full bg-primary" aria-hidden />
                <span>الطلاب الراغبين في تطوير مهاراتهم من خلال الكورسات والمصادر التعليمية.</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4 text-right">
                <span className="mt-2 md:mt-2.5 h-1.5 w-1.5 md:h-2 md:w-2 shrink-0 rounded-full bg-primary" aria-hidden />
                <span>الطلاب الذين يرغبون في مشاركة خبراتهم أو محتواهم التعليمي مع الآخرين.</span>
              </li>
            </ul>
          </section>
        </FadeIn>

        <FadeIn delay={0.1}>
          <section className="text-right">
            <div className="mb-3 md:mb-4 flex items-center justify-center md:justify-start gap-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-[color-mix(in_oklch,var(--card)_55%,transparent)] px-3 md:px-4 py-1 md:py-1.5 text-secondary shadow-sm backdrop-blur-md">
                <AlertCircle className="h-3.5 w-3.5 md:h-4 md:w-4 shrink-0 opacity-90" aria-hidden />
              </div>
            </div>
            <AnimatedText as="h2" className="mb-3 md:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
              المشكلة التي يحلها التطبيق
            </AnimatedText>
            <div className="rounded-[1.75rem] border border-border/70 bg-[color-mix(in_oklch,var(--card)_65%,transparent)] p-5 md:p-10 text-base md:text-xl lg:text-2xl leading-relaxed text-foreground shadow-lg backdrop-blur-xl dark:border-white/[0.08] font-medium">
              <p className="leading-loose md:leading-loose">
                يعالج LearnMate مشكلة تشتت الطلاب الجدد وصعوبة الوصول إلى المعلومات والمصادر المهمة في بداية حياتهم
                الجامعية، من خلال جمع كل ما يحتاجه الطالب في منصة واحدة سهلة الاستخدام.
              </p>
            </div>
          </section>
        </FadeIn>
      </div>
    </SlideWrapper>
  )
}
