"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Render a placeholder that matches the final button size to avoid layout shift
  if (!mounted) {
    return (
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: 9999,
          background: "rgba(255,255,255,0.15)",
          border: "1px solid rgba(255,255,255,0.2)",
          backdropFilter: "blur(12px)",
        }}
      />
    )
  }

  const isDark = resolvedTheme === "dark"

  return (
    <button
      id="theme-toggle"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      style={{
        width: 48,
        height: 48,
        borderRadius: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        border: "2px solid var(--color-primary)",
        background: isDark
          ? "rgba(167, 139, 250, 0.15)"   /* dark: subtle violet tint */
          : "rgba(124, 58, 237, 0.12)",   /* light: subtle violet tint */
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        color: "var(--color-primary)",
        boxShadow: `0 0 16px var(--color-primary), 0 4px 16px rgba(0,0,0,0.2)`,
        transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
        outline: "none",
      }}
      onMouseEnter={e => {
        const el = e.currentTarget
        el.style.transform = "scale(1.15) rotate(15deg)"
        el.style.boxShadow = `0 0 28px var(--color-primary), 0 8px 24px rgba(0,0,0,0.3)`
      }}
      onMouseLeave={e => {
        const el = e.currentTarget
        el.style.transform = "scale(1) rotate(0deg)"
        el.style.boxShadow = `0 0 16px var(--color-primary), 0 4px 16px rgba(0,0,0,0.2)`
      }}
      onMouseDown={e => {
        e.currentTarget.style.transform = "scale(0.92)"
      }}
      onMouseUp={e => {
        e.currentTarget.style.transform = "scale(1.1)"
      }}
    >
      {isDark ? (
        <Sun style={{ width: 22, height: 22, strokeWidth: 2.5 }} />
      ) : (
        <Moon style={{ width: 22, height: 22, strokeWidth: 2.5 }} />
      )}
    </button>
  )
}
