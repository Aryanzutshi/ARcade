"use client"

import { Progress } from "@/components/ui/progress"
import { SkillRadarChart } from "@/components/skill-radar-chart"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface ProfileWidgetProps {
  currentXp: number
  maxXp: number
  level: number
  skills: {
    name: string
    value: number
    color: string
  }[]
  suggestedChallenge: {
    id: string
    title: string
    category: string
  }
}

export function ProfileWidget({ currentXp, maxXp, level, skills, suggestedChallenge }: ProfileWidgetProps) {
  const xpPercentage = (currentXp / maxXp) * 100

  return (
    <div className="bg-zinc-900/70 border border-zinc-800 rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold">Your Progress</h3>
        <div className="bg-purple-900/30 text-purple-400 text-xs font-bold px-2 py-1 rounded">Level {level}</div>
      </div>

      <div className="mb-6">
        <div className="flex justify-between text-xs mb-1">
          <span className="text-zinc-400">XP Progress</span>
          <span className="text-zinc-400">
            {currentXp} / {maxXp} XP
          </span>
        </div>
        <Progress value={xpPercentage} className="h-2 bg-zinc-800" />
      </div>

      <div className="mb-6">
        <h4 className="text-sm font-medium mb-3 text-zinc-300">Skill Breakdown</h4>
        <SkillRadarChart skills={skills} size={180} />
      </div>

      <div>
        <h4 className="text-sm font-medium mb-2 text-zinc-300">Recommended Next</h4>
        <Link
          href={`/challenges/${suggestedChallenge.id}`}
          className="flex items-center justify-between bg-zinc-800 hover:bg-zinc-700 p-3 rounded-md transition-colors"
        >
          <div>
            <p className="font-medium">{suggestedChallenge.title}</p>
            <p className="text-xs text-zinc-400">{suggestedChallenge.category}</p>
          </div>
          <ArrowRight className="h-4 w-4 text-zinc-400" />
        </Link>
      </div>
    </div>
  )
}
