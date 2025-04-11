import Link from "next/link"
import { ArrowLeft, Filter, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChallengeCard } from "@/components/challenge-card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { getChallenges } from "@/lib/data"

export default function ChallengePage() {
  const challenges = getChallenges()

  return (
    <div className="container px-4 py-12 md:py-24 text-zinc-900 dark:text-zinc-100">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <Link href="/" className="inline-flex items-center text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white mb-4">
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
      <div className="bg-zinc-100/50 dark:bg-zinc-900/50 border border-zinc-300 dark:border-zinc-800 rounded-xl p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zinc-500" />
            <Input
              placeholder="Search challenges..."
              className="pl-10 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-[180px] bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white">
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
              <SelectTrigger className="w-full sm:w-[180px] bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="storage">Storage</SelectItem>
                <SelectItem value="security">Security</SelectItem>
                <SelectItem value="agents">Agents</SelectItem>
                <SelectItem value="smart-contracts">Smart Contracts</SelectItem>
              </SelectContent>
            </Select>
            <Button
              variant="outline"
              className="border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300"
            >
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>
        </div>
      </div>

      {/* Challenge Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {challenges.map((challenge) => (
          <ChallengeCard
            key={challenge.id}
            title={challenge.title}
            description={challenge.description}
            difficulty={challenge.difficulty}
            category={challenge.category}
            points={challenge.points}
            color={
              challenge.difficulty === "Beginner"
                ? "from-purple-600 to-blue-600"
                : challenge.difficulty === "Intermediate"
                  ? "from-pink-600 to-red-600"
                  : "from-yellow-600 to-orange-600"
            }
          />
        ))}

        {/* Additional challenges */}
        <ChallengeCard
          title="Smart Contract Sleuth"
          description="Find and exploit vulnerabilities in smart contracts"
          difficulty="Intermediate"
          category="Smart Contracts"
          points={400}
          color="from-green-600 to-teal-600"
        />
        <ChallengeCard
          title="Permanent Record"
          description="Recover deleted data from the permanent web"
          difficulty="Beginner"
          category="Storage"
          points={200}
          color="from-blue-600 to-indigo-600"
        />
        <ChallengeCard
          title="Autonomous Takeover"
          description="Gain control of a rogue autonomous agent"
          difficulty="Advanced"
          category="Agents"
          points={800}
          color="from-red-600 to-orange-600"
        />
        <ChallengeCard
          title="Crypto Conundrum"
          description="Break the encryption on a secure message"
          difficulty="Intermediate"
          category="Security"
          points={450}
          color="from-purple-600 to-indigo-600"
        />
        <ChallengeCard
          title="Data Smuggler"
          description="Hide data in plain sight using steganography"
          difficulty="Beginner"
          category="Storage"
          points={300}
          color="from-cyan-600 to-blue-600"
        />
        <ChallengeCard
          title="Contract Chaos"
          description="Debug and fix a broken smart contract"
          difficulty="Advanced"
          category="Smart Contracts"
          points={700}
          color="from-emerald-600 to-green-600"
        />
      </div>

      {/* Pagination */}
      <div className="flex justify-center">
        <nav className="flex items-center space-x-2">
          <Button variant="outline" className="w-10 h-10 p-0 border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400">
            &lt;
          </Button>
          <Button className="w-10 h-10 p-0 border border-zinc-300 dark:border-zinc-700 bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-white">
            1
          </Button>
          <Button variant="outline" className="w-10 h-10 p-0 border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400">
            2
          </Button>
          <Button variant="outline" className="w-10 h-10 p-0 border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400">
            3
          </Button>
          <span className="text-zinc-500">...</span>
          <Button variant="outline" className="w-10 h-10 p-0 border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400">
            8
          </Button>
          <Button variant="outline" className="w-10 h-10 p-0 border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400">
            &gt;
          </Button>
        </nav>
      </div>
    </div>
  )
}
