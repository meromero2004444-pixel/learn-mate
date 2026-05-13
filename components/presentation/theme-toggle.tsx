"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "@teispace/next-themes"
import { cn } from "@/lib/utils"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border/60 bg-card/40 backdrop-blur-xl"
        aria-hidden
      />
    )
  }

  const isDark = resolvedTheme === "dark"

  return (
    <button
      type="button"
      id="theme-toggle"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "التبديل إلى الوضع الفاتح" : "التبديل إلى الوضع الداكن"}
      title={isDark ? "وضع فاتح" : "وضع داكن"}
      className={cn(
        "group relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-primary/50 text-primary shadow-[0_0_20px_color-mix(in_oklch,var(--primary)_35%,transparent)] transition-all duration-300 ease-out",
        "bg-[color-mix(in_oklch,var(--card)_55%,transparent)] backdrop-blur-xl",
        "hover:scale-110 hover:border-primary hover:shadow-[0_0_28px_color-mix(in_oklch,var(--primary)_45%,transparent)]",
        "active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      )}
    >
      {isDark ? (
        <Sun className="h-[22px] w-[22px] stroke-[2.5]" aria-hidden />
      ) : (
        <Moon className="h-[22px] w-[22px] stroke-[2.5]" aria-hidden />
      )}
    </button>
  )
}
