"use client"

import type React from "react"

import { useEffect } from "react"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const savedTheme = localStorage.getItem("bluepay_theme") as "light" | "dark" | "system" | "device" | null

    const applyTheme = (theme: string) => {
      const root = document.documentElement

      if (theme === "dark") {
        root.classList.add("dark")
      } else if (theme === "light") {
        root.classList.remove("dark")
      } else if (theme === "system" || theme === "device") {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
        if (prefersDark) {
          root.classList.add("dark")
        } else {
          root.classList.remove("dark")
        }
      }
    }

    if (savedTheme) {
      applyTheme(savedTheme)
    }

    // Listen for system theme changes if using system/device mode
    if (savedTheme === "system" || savedTheme === "device") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
      const handleChange = () => applyTheme(savedTheme)
      mediaQuery.addEventListener("change", handleChange)
      return () => mediaQuery.removeEventListener("change", handleChange)
    }
  }, [])

  return <>{children}</>
}
