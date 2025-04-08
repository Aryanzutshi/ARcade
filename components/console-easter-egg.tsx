"use client"

import { useEffect, useState } from "react"

export function ConsoleEasterEgg() {
  const [hasTriggered, setHasTriggered] = useState(false)

  useEffect(() => {
    // Store original console.log
    const originalLog = console.log

    // Override console.log
    console.log = (...args) => {
      // Call original console.log
      originalLog(...args)

      // Check if this is the first time triggering
      if (!hasTriggered) {
        // Show easter egg message after a short delay
        setTimeout(() => {
          originalLog(
            "%c🎮 You found a secret! 🎮\n" +
              "%cVisit /secret-challenge to access an exclusive CTF challenge.\n" +
              '%cHint: The password is "h4ck_th3_futur3"',
            "color: #ff00ff; font-size: 20px; font-weight: bold;",
            "color: #00ffff; font-size: 14px;",
            "color: #ff9900; font-size: 12px;",
          )
          setHasTriggered(true)
        }, 500)
      }
    }

    // Restore original on cleanup
    return () => {
      console.log = originalLog
    }
  }, [hasTriggered])

  return null
}

