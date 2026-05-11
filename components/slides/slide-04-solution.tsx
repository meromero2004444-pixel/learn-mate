"use client"

import { motion } from "framer-motion"
import { Target, BookOpen, Users, Zap, BarChart3, Globe, Sparkles } from "lucide-react"
import { SlideWrapper } from "@/components/presentation/slide-wrapper"
import { AnimatedText, FadeIn } from "@/components/presentation/animated-text"

const objectives = [
  {
    icon: <Target className="w-8 h-8" />,
    text: "تحقيق التعلم الذاتي الفعال من خلال بيئة تعليمية ذكية ومتكاملة",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    text: "توفير مصادر تعليمية متنوعة تدعم مختلف أنماط التعلم لدى الطلاب",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <Users className="w-8 h-8" />,
    text: "تعزيز التفاعل بين الطلاب والمعلمين من خلال أدوات تواصل حديثة",
    color: "from-amber-500 to-orange-500"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    text: "تبسيط المفاهيم المعقدة باستخدام تقنيات الوسائط المتعددة المتقدمة",
    color: "from-emerald-500 to-teal-500"
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    text: "متابعة مستوى تقدم الطلاب وتقديم تغذية راجعة فورية ودقيقة",
    color: "from-indigo-500 to-blue-500"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    text: "تمكين الوصول للمحتوى التعليمي في أي وقت ومن أي مكان بسهولة",
    color: "from-rose-500 to-red-500"
  }
]

export function Slide04Solution() {
  return (
    <SlideWrapper id="objectives" className="relative py-24">
      {/* Background Orbs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10 animate-float" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] -z-10 animate-float" style={{ animationDelay: '3s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-primary text-sm font-black mb-8"
          >
            <Sparkles size={16} className="text-primary animate-pulse" />
            <span>رؤية مستقبلية</span>
          </motion.div>
          
          <AnimatedText 
            as="h2" 
            className="text-6xl md:text-8xl font-black text-foreground mb-8 tracking-tighter leading-none"
          >
            أهداف المشروع
          </AnimatedText>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
            نسعى من خلال <span className="text-primary font-bold">LearnMate</span> لإعادة تعريف العملية التعليمية بما يواكب التحول الرقمي
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {objectives.map((obj, index) => (
            <FadeIn key={index} delay={0.05 * index}>
              <motion.div
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="group relative h-full"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition duration-500 blur-sm rounded-[2.5rem] bg-white/20" />
                
                <div className="relative h-full bg-white/60 dark:bg-zinc-900/40 backdrop-blur-3xl border border-white/40 dark:border-white/5 rounded-[2.5rem] p-10 flex flex-col items-start gap-8 shadow-2xl dark:shadow-none transition-all duration-300">
                  <div className={`w-20 h-20 rounded-[1.5rem] bg-gradient-to-br ${obj.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {obj.icon}
                  </div>
                  
                  <p className="text-2xl md:text-3xl font-black text-foreground leading-tight text-right w-full tracking-tight">
                    {obj.text}
                  </p>
                  
                  <div className="mt-auto pt-6 flex items-center gap-2 text-primary font-black text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>هدف استراتيجي</span>
                    <Zap size={14} className="fill-current" />
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <div className="mt-32 p-12 rounded-[3rem] bg-primary/5 border border-primary/10 backdrop-blur-md text-center max-w-4xl mx-auto">
            <p className="text-2xl md:text-4xl font-black text-foreground leading-tight italic opacity-80">
              "نحن لا نبني مجرد منصة، بل نصيغ مستقبل التعليم الرقمي"
            </p>
          </div>
        </FadeIn>
      </div>
    </SlideWrapper>
  )
}
