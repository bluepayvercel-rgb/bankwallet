"use client"

import type React from "react"

import { Analytics } from "@vercel/analytics/next"
import { useEffect } from "react"
import { Suspense } from "react"

export function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Apply saved theme on app load
  useEffect(() => {
    const savedTheme = localStorage.getItem("bluepay_theme") as "light" | "dark" | "system" | "device" | null

    if (savedTheme) {
      const root = document.documentElement

      if (savedTheme === "dark") {
        root.classList.add("dark")
      } else if (savedTheme === "light") {
        root.classList.remove("dark")
      } else if (savedTheme === "system" || savedTheme === "device") {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
        if (prefersDark) {
          root.classList.add("dark")
        } else {
          root.classList.remove("dark")
        }
      }
    }
  }, [])

  return (
    <>
      <Suspense fallback={null}>{children}</Suspense>
      <Analytics />
    </>
  )
}
