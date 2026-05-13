"use client"

import { BookMarked } from "lucide-react"
import { SlideWrapper } from "@/components/presentation/slide-wrapper"
import { AnimatedText, FadeIn } from "@/components/presentation/animated-text"

export function SlideWhatIsLearnMate() {
  return (
    <SlideWrapper
      id="what-is-learnmate"
      ariaLabel="ما هو LearnMate"
      className="justify-start overflow-y-auto overflow-x-hidden py-8 md:py-14"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -start-[10%] top-1/4 h-[20rem] md:h-[24rem] w-[20rem] md:w-[24rem] rounded-full bg-primary/[0.08] blur-[80px] md:blur-[100px]" />
        <div className="absolute -end-[8%] bottom-1/3 h-[18rem] md:h-[22rem] w-[18rem] md:w-[22rem] rounded-full bg-secondary/[0.07] blur-[80px] md:blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-3xl px-4 sm:px-6 md:px-8">
        <header className="mb-5 md:mb-10 text-center">
          <div className="mx-auto mb-3 md:mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-[color-mix(in_oklch,var(--card)_55%,transparent)] px-2.5 md:px-4 py-1 md:py-1.5 text-primary shadow-sm backdrop-blur-md">
            <BookMarked className="h-3.5 w-3.5 md:h-4 md:w-4 shrink-0 opacity-90" aria-hidden />
          </div>
          <AnimatedText as="h2" className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            ما هو LearnMate؟
          </AnimatedText>
        </header>

        <FadeIn delay={0.06}>
          <div className="space-y-3 md:space-y-6 rounded-[1.25rem] sm:rounded-[1.75rem] border border-border/70 bg-[color-mix(in_oklch,var(--card)_65%,transparent)] p-4 sm:p-6 md:p-10 text-right text-sm sm:text-base md:text-xl lg:text-2xl leading-relaxed text-foreground shadow-lg backdrop-blur-xl dark:border-white/[0.08] font-medium">
            <p className="leading-relaxed sm:leading-loose md:leading-loose">
              LearnMate هو تطبيق تعليمي وإرشادي مصمم خصيصًا لمساعدة طلاب الفرقة الأولى على التأقلم مع الحياة
              الجامعية بسهولة. يوفّر التطبيق دليلًا شاملًا يحتوي على المعلومات الأساسية الخاصة بالكلية، مثل المواد
              الدراسية، بالإضافة إلى مصادر تعليمية وكورسات تساعد الطلاب على تطوير مهاراتهم.
            </p>
            <p className="leading-relaxed sm:leading-loose md:leading-loose">
              كما يتيح التطبيق للطلاب فرصة مشاركة المحتوى الخاص بهم، مثل الملخصات، الشروحات، أو أي مهارات ومحتوى
              تعليمي يمكن أن يفيد زملاءهم، مما يساعد في بناء مجتمع طلابي متعاون وداعم.
            </p>
          </div>
        </FadeIn>
      </div>
    </SlideWrapper>
  )
}
