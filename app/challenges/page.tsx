"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, Filter, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RoleSelectionModal } from "@/components/role-selection-modal"

// Mock challenge data
const challenges = [
  {
    id: "permaleak-protocol",
    title: "PermaLeak Protocol",
    description: "Exploit broken access controls in Arweave-based storage apps.",
    difficulty: "Beginner",
    category: "Storage",
    points: 250,
    color: "purple",
  },
  {
    id: "immutable-intrusion",
    title: "Immutable Intrusion",
    description: "Respond to an attack targeting Arweave node signature validation.",
    difficulty: "Intermediate",
    category: "Security",
    points: 500,
    color: "pink",
  },
  {
    id: "backdoor-in-the-block",
    title: "Backdoor in the Block",
    description: "Uncover and patch backdoors in SmartWeave autonomous agents.",
    difficulty: "Advanced",
    category: "Agents",
    points: 750,
    color: "orange",
  },
  {
    id: "gateway-gambit",
    title: "Gateway Gambit",
    description: "Manipulate a compromised Arweave gateway to serve false data.",
    difficulty: "Intermediate",
    category: "Networking",
    points: 450,
    color: "pink",
  },
  {
    id: "profit-sharing-plunder",
    title: "Profit Sharing Plunder",
    description: "Exploit a flaw in a PST smart contract to siphon tokens.",
    difficulty: "Advanced",
    category: "Contracts",
    points: 800,
    color: "orange",
  },
  {
    id: "mirror-maze",
    title: "Mirror Maze",
    description: "Trace a phishing attack across multiple mirrored permaweb apps.",
    difficulty: "Intermediate",
    category: "Forensics",
    points: 600,
    color: "pink",
  },
]

export default function ChallengePage() {
  const router = useRouter()
  const [selectedChallenge, setSelectedChallenge] = useState<string | null>(null)
  const [showRoleModal, setShowRoleModal] = useState(false)

  const handleStartChallenge = (challengeId: string) => {
    setSelectedChallenge(challengeId)
    setShowRoleModal(true)
  }

  const handleRoleSelect = (role: "red" | "blue") => {
    if (selectedChallenge) {
      // In a real app, you might want to store the selected role in a state management solution
      // For now, we'll just navigate to the challenge page
      router.push(`/challenges/${selectedChallenge}?role=${role}`)
    }
  }

  return (
    <div className="container px-4 py-12">
      <RoleSelectionModal
        isOpen={showRoleModal}
        onClose={() => setShowRoleModal(false)}
        onRoleSelect={handleRoleSelect}
        challengeTitle={selectedChallenge ? challenges.find((c) => c.id === selectedChallenge)?.title || "" : ""}
      />

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <Link href="/" className="inline-flex items-center text-sm text-zinc-400 hover:text-white mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">Challenges</h1>
        </div>
        <div className="mt-4 md:mt-0">
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
            Submit a Challenge
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-zinc-900/70 border border-zinc-800 rounded-xl p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zinc-500" />
            <Input placeholder="Search challenges..." className="pl-10 bg-zinc-800 border-zinc-700" />
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-[180px] bg-zinc-800 border-zinc-700">
                <SelectValue placeholder="Difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Difficulties</SelectItem>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-[180px] bg-zinc-800 border-zinc-700">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="storage">Storage</SelectItem>
                <SelectItem value="security">Security</SelectItem>
                <SelectItem value="agents">Agents</SelectItem>
                <SelectItem value="contracts">Contracts</SelectItem>
                <SelectItem value="networking">Networking</SelectItem>
                <SelectItem value="forensics">Forensics</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="border-zinc-700 text-zinc-400">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>
        </div>
      </div>

      {/* Challenge Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {challenges.map((challenge) => (
          <div
            key={challenge.id}
            className={`bg-zinc-900/70 border border-zinc-800 rounded-xl overflow-hidden hover:border-${challenge.color}-500 transition-colors`}
          >
            <div className={`h-1 bg-${challenge.color}-600`}></div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-bold">{challenge.title}</h2>
                <div className="px-2 py-1 rounded text-xs font-medium bg-zinc-800 text-zinc-400">
                  {challenge.difficulty}
                </div>
              </div>
              <p className="text-zinc-400 text-sm mb-4">{challenge.description}</p>
              <div className="flex items-center justify-between text-sm mb-4">
                <div className="text-zinc-500">{challenge.category}</div>
                <div className="font-mono text-yellow-400">{challenge.points} pts</div>
              </div>
              <Button
                onClick={() => handleStartChallenge(challenge.id)}
                className="w-full bg-zinc-800 hover:bg-zinc-700 text-white"
              >
                Start Challenge
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
