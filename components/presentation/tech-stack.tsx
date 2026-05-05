"use client"

import { motion } from "framer-motion"

interface TechItem {
  name: string
  category: string
}

interface TechStackProps {
  technologies: TechItem[]
}

export function TechStack({ technologies }: TechStackProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-5xl">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          className="glass rounded-xl p-5 text-center group cursor-default"
        >
          <div className="text-xs text-primary font-mono uppercase tracking-wider mb-2 opacity-70">
            {tech.category}
          </div>
          <div className="text-foreground font-medium group-hover:text-primary transition-colors">
            {tech.name}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
