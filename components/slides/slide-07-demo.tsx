"use client"

import { SlideWrapper } from "@/components/presentation/slide-wrapper"
import { AnimatedText, FadeIn } from "@/components/presentation/animated-text"
import { GlowOrb } from "@/components/presentation/glow-orb"
import { MockupFrame } from "@/components/presentation/mockup-frame"
import { motion } from "framer-motion"
import { 
  BarChart3, 
  Bell, 
  Search,
  ChevronRight,
  TrendingUp,
  Users,
  Activity
} from "lucide-react"

function AppMockup() {
  return (
    <div className="w-full h-full bg-background p-4">
      {/* Navbar */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
            <span className="text-primary font-bold text-sm">N</span>
          </div>
          <span className="font-semibold text-foreground">NEXUS</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
            <Search className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
            <Bell className="w-4 h-4 text-muted-foreground" />
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {[
          { label: "Active Users", value: "12.4K", icon: Users, trend: "+12%" },
          { label: "Revenue", value: "$847K", icon: TrendingUp, trend: "+24%" },
          { label: "Uptime", value: "99.9%", icon: Activity, trend: "+0.1%" }
        ].map((stat) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: Math.random() * 0.5 }}
            className="bg-card rounded-xl p-3 border border-border/50"
          >
            <div className="flex items-center justify-between mb-2">
              <stat.icon className="w-4 h-4 text-primary" />
              <span className="text-xs text-accent">{stat.trend}</span>
            </div>
            <div className="text-lg font-bold text-foreground">{stat.value}</div>
            <div className="text-xs text-muted-foreground">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Chart Area */}
      <div className="bg-card rounded-xl p-4 border border-border/50 mb-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-medium text-foreground">Analytics Overview</h3>
          <BarChart3 className="w-4 h-4 text-muted-foreground" />
        </div>
        <div className="flex items-end gap-2 h-24">
          {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="flex-1 bg-gradient-to-t from-primary/60 to-primary rounded-t"
            />
          ))}
        </div>
      </div>

      {/* Action Items */}
      <div className="space-y-2">
        {["Data sync complete", "New insight available", "Weekly report ready"].map((item, i) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + i * 0.1 }}
            className="flex items-center justify-between bg-secondary/50 rounded-lg p-3"
          >
            <span className="text-sm text-foreground">{item}</span>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export function Slide07Demo() {
  return (
    <SlideWrapper id="demo">
      <GlowOrb color="primary" size="xl" position={{ top: "30%", left: "-10%" }} blur="intense" />
      <GlowOrb color="accent" size="lg" position={{ bottom: "10%", right: "-5%" }} blur="intense" />
      
      <div className="max-w-6xl mx-auto z-10 w-full">
        <div className="text-center mb-12">
          <AnimatedText 
            as="span" 
            className="text-xs md:text-sm font-mono tracking-[0.3em] text-primary/80 uppercase block mb-4"
          >
            Live Preview
          </AnimatedText>
          
          <AnimatedText 
            as="h2" 
            delay={0.1}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
          >
            See It In{" "}
            <span className="gradient-text">Action</span>
          </AnimatedText>
        </div>

        <FadeIn delay={0.3}>
          <MockupFrame type="desktop">
            <AppMockup />
          </MockupFrame>
        </FadeIn>
      </div>
    </SlideWrapper>
  )
}
