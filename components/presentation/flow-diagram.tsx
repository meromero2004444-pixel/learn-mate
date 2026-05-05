"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

interface FlowStep {
  title: string
  description: string
}

interface FlowDiagramProps {
  steps: FlowStep[]
}

export function FlowDiagram({ steps }: FlowDiagramProps) {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0 w-full max-w-6xl">
      {steps.map((step, index) => (
        <div key={step.title} className="flex flex-col lg:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="glass-card w-full lg:w-64 text-center group hover:scale-105 transition-transform"
          >
            <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/30 transition-colors">
              <span className="text-primary font-bold text-xl">{index + 1}</span>
            </div>
            <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{step.title}</h4>
            <p className="text-sm text-muted-foreground font-medium">{step.description}</p>
          </motion.div>
          
          {index < steps.length - 1 && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
              className="py-4 lg:px-4 lg:py-0"
            >
              <ArrowRight className="w-6 h-6 text-primary rotate-90 lg:rotate-0" />
            </motion.div>
          )}
        </div>
      ))}
    </div>
  )
}
