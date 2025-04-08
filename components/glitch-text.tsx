"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface GlitchTextProps {
  children: React.ReactNode
  className?: string
}

export function GlitchText({ children, className }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    // Randomly trigger glitch effect
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setIsGlitching(true)
        setTimeout(() => setIsGlitching(false), 200)
      }
    }, 2000)

    return () => clearInterval(glitchInterval)
  }, [])

  return (
    <div className={cn("relative inline-block", className)}>
      <span className="relative z-10">{children}</span>

      {/* Glitch layers */}
      <span
        className={cn(
          "absolute inset-0 text-cyan-500 translate-x-[2px] translate-y-[-2px] opacity-0 transition-opacity duration-100",
          isGlitching && "opacity-70",
        )}
        aria-hidden="true"
      >
        {children}
      </span>

      <span
        className={cn(
          "absolute inset-0 text-pink-500 translate-x-[-2px] translate-y-[2px] opacity-0 transition-opacity duration-100",
          isGlitching && "opacity-70",
        )}
        aria-hidden="true"
      >
        {children}
      </span>
    </div>
  )
}

