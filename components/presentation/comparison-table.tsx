"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"

interface ComparisonItem {
  feature: string
  us: boolean
  competitors: boolean
}

interface ComparisonTableProps {
  items: ComparisonItem[]
}

export function ComparisonTable({ items }: ComparisonTableProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-3xl glass rounded-2xl overflow-hidden"
    >
      <div className="grid grid-cols-3 gap-4 p-6 border-b border-border/50">
        <div className="text-muted-foreground font-medium">Feature</div>
        <div className="text-center">
          <span className="gradient-text font-bold">NEXUS</span>
        </div>
        <div className="text-center text-muted-foreground">Others</div>
      </div>
      
      {items.map((item, index) => (
        <motion.div
          key={item.feature}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="grid grid-cols-3 gap-4 p-6 border-b border-border/30 last:border-0"
        >
          <div className="text-foreground">{item.feature}</div>
          <div className="flex justify-center">
            {item.us ? (
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                <Check className="w-5 h-5 text-accent" />
              </div>
            ) : (
              <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center">
                <X className="w-5 h-5 text-destructive" />
              </div>
            )}
          </div>
          <div className="flex justify-center">
            {item.competitors ? (
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                <Check className="w-5 h-5 text-accent" />
              </div>
            ) : (
              <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center">
                <X className="w-5 h-5 text-destructive" />
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
