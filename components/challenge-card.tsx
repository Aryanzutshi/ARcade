import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CheckCircle } from "lucide-react"

interface ChallengeCardProps {
  title: string
  description: string
  difficulty: string
  category: string
  points: number
  color: string
  completed?: boolean
  progress?: number
}

export function ChallengeCard({
  title,
  description,
  difficulty,
  category,
  points,
  color,
  completed,
  progress,
}: ChallengeCardProps) {
  return (
    <Card className="bg-zinc-900/50 border border-zinc-800 overflow-hidden group hover:border-zinc-700 transition-all duration-300">
      <div className={`h-2 bg-gradient-to-r ${color}`}></div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <div className="px-2 py-1 rounded text-xs font-medium bg-zinc-800 text-zinc-400">{difficulty}</div>
        </div>
        <CardDescription className="text-zinc-400">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between text-sm">
          <div className="text-zinc-500">{category}</div>
          <div className="font-mono text-yellow-400">{points} pts</div>
        </div>

        {progress !== undefined && (
          <div className="mt-4">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-zinc-500">Progress</span>
              <span className="text-zinc-500">{progress}%</span>
            </div>
            <Progress value={progress} className="h-1 bg-zinc-800" />
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Link href={`/challenges/${title.toLowerCase().replace(/\s+/g, "-")}`} className="w-full">
          <Button
            className={`w-full ${
              completed ? "bg-green-600 hover:bg-green-700" : "bg-zinc-800 hover:bg-zinc-700"
            } text-white`}
          >
            {completed ? (
              <>
                <CheckCircle className="mr-2 h-4 w-4" />
                Completed
              </>
            ) : progress !== undefined ? (
              "Continue"
            ) : (
              "Start Challenge"
            )}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

