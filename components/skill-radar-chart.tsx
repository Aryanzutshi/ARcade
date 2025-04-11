"use client"

import { useEffect, useRef } from "react"

interface SkillRadarChartProps {
  skills: {
    name: string
    value: number
    color: string
  }[]
  size?: number
}

export function SkillRadarChart({ skills, size = 200 }: SkillRadarChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions with higher resolution for retina displays
    const scale = window.devicePixelRatio || 1
    canvas.width = size * scale
    canvas.height = size * scale
    canvas.style.width = `${size}px`
    canvas.style.height = `${size}px`
    ctx.scale(scale, scale)

    // Calculate center and radius
    const centerX = size / 2
    const centerY = size / 2
    const radius = size * 0.4

    // Draw background
    ctx.fillStyle = "rgba(30, 30, 30, 0.3)"
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
    ctx.fill()

    // Draw radar grid
    const levels = 5
    for (let i = 1; i <= levels; i++) {
      const levelRadius = (radius / levels) * i
      ctx.strokeStyle = "rgba(100, 100, 100, 0.2)"
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.arc(centerX, centerY, levelRadius, 0, Math.PI * 2)
      ctx.stroke()
    }

    // Draw axes
    const numSkills = skills.length
    const angleStep = (Math.PI * 2) / numSkills

    skills.forEach((_, i) => {
      const angle = i * angleStep - Math.PI / 2
      const axisX = centerX + radius * Math.cos(angle)
      const axisY = centerY + radius * Math.sin(angle)

      ctx.strokeStyle = "rgba(150, 150, 150, 0.5)"
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.lineTo(axisX, axisY)
      ctx.stroke()

      // Draw skill labels
      const labelX = centerX + (radius + 15) * Math.cos(angle)
      const labelY = centerY + (radius + 15) * Math.sin(angle)

      ctx.fillStyle = "rgba(200, 200, 200, 0.8)"
      ctx.font = "10px sans-serif"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(skills[i].name, labelX, labelY)
    })

    // Draw data points and connect them
    ctx.beginPath()
    skills.forEach((skill, i) => {
      const angle = i * angleStep - Math.PI / 2
      const pointRadius = (radius * skill.value) / 100
      const pointX = centerX + pointRadius * Math.cos(angle)
      const pointY = centerY + pointRadius * Math.sin(angle)

      if (i === 0) {
        ctx.moveTo(pointX, pointY)
      } else {
        ctx.lineTo(pointX, pointY)
      }
    })
    ctx.closePath()
    ctx.fillStyle = "rgba(100, 100, 255, 0.2)"
    ctx.fill()
    ctx.strokeStyle = "rgba(100, 100, 255, 0.8)"
    ctx.lineWidth = 2
    ctx.stroke()

    // Draw data points
    skills.forEach((skill, i) => {
      const angle = i * angleStep - Math.PI / 2
      const pointRadius = (radius * skill.value) / 100
      const pointX = centerX + pointRadius * Math.cos(angle)
      const pointY = centerY + pointRadius * Math.sin(angle)

      ctx.fillStyle = skill.color
      ctx.beginPath()
      ctx.arc(pointX, pointY, 4, 0, Math.PI * 2)
      ctx.fill()
    })
  }, [skills, size])

  return <canvas ref={canvasRef} className="mx-auto" />
}
