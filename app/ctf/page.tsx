import Link from "next/link"
import Image from "next/image"
import { Search, Filter, ArrowUpDown, Clock, Trophy, Shield, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { getCTFChallenges, getAttackVectors } from "@/lib/data"

export default function CTFPage() {
  const { challenges, categories, platforms } = getCTFChallenges()
  const attackVectors = getAttackVectors()

  return (
    <div className="container px-4 py-12 md:py-24">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
          Web3 <span className="text-cyan-600 dark:text-cyan-400">CTF Challenges</span>
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto mb-8">
          Test your skills with real-world security challenges and earn rewards by finding vulnerabilities in Web3
          protocols.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white">
            Join a Challenge
          </Button>
          <Button
            variant="outline"
            className="border-cyan-700 text-cyan-700 dark:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-950"
          >
            Submit Your Project
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-zinc-100/80 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 mb-8 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zinc-500" />
            <Input
              placeholder="Search challenges..."
              className="pl-10 bg-white dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-[180px] bg-white dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700">
                <SelectValue placeholder="Platform" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Platforms</SelectItem>
                {platforms.map((platform) => (
                  <SelectItem key={platform} value={platform.toLowerCase()}>
                    {platform}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-[180px] bg-white dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category.toLowerCase()}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button variant="outline" className="border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-400">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="active" className="mb-8">
        <TabsList className="bg-zinc-100 dark:bg-zinc-800 mb-6">
          <TabsTrigger value="active">Active Challenges</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="learn">Learn</TabsTrigger>
        </TabsList>

        <TabsContent value="active">
          {/* Sort options */}
          <div className="flex justify-between items-center mb-6">
            <div className="text-sm text-zinc-600 dark:text-zinc-400">
              Showing <span className="font-medium">{challenges.length}</span> active challenges
            </div>
            <div className="flex items-center">
              <span className="text-sm text-zinc-600 dark:text-zinc-400 mr-2">Sort by:</span>
              <Select defaultValue="reward">
                <SelectTrigger className="w-[180px] h-8 text-sm bg-white dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="reward">Highest Reward</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="difficulty">Difficulty</SelectItem>
                </SelectContent>
              </Select>
              <Button
                variant="ghost"
                size="icon"
                className="ml-2 h-8 w-8 text-zinc-600 dark:text-zinc-400"
                title="Toggle sort direction"
              >
                <ArrowUpDown className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Challenge Cards */}
          <div className="space-y-4">
            {challenges.map((challenge) => (
              <Link key={challenge.id} href={`/ctf/${challenge.id}`} className="block">
                <Card className="bg-white dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800 hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-64 p-6 flex items-center justify-center bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 border-r border-zinc-200 dark:border-zinc-800">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">
                          ${challenge.reward.toLocaleString()}
                        </div>
                        <div className="text-sm text-zinc-600 dark:text-zinc-400">Max Reward</div>
                      </div>
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex flex-col md:flex-row justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className={`${getDifficultyColor(challenge.difficulty)} text-white`}>
                              {challenge.difficulty}
                            </Badge>
                            {challenge.categories.map((category) => (
                              <Badge
                                key={category}
                                className="bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                              >
                                {category}
                              </Badge>
                            ))}
                          </div>
                          <h3 className="text-xl font-bold mb-1">{challenge.title}</h3>
                          <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">{challenge.description}</p>
                        </div>
                        <div className="mt-4 md:mt-0 md:ml-4 flex md:flex-col items-center md:items-end justify-between md:justify-start">
                          <div className="flex items-center text-sm text-zinc-600 dark:text-zinc-400 mb-2">
                            <Clock className="mr-1 h-4 w-4" />
                            <span>{challenge.timeLeft}</span>
                          </div>
                          <div className="flex items-center text-sm text-zinc-600 dark:text-zinc-400">
                            <Trophy className="mr-1 h-4 w-4" />
                            <span>{challenge.participants} participants</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <div className="flex items-center text-sm text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded">
                          <Image
                            src={challenge.platformIcon || "/placeholder.svg"}
                            width={16}
                            height={16}
                            alt={challenge.platform}
                            className="mr-1"
                          />
                          {challenge.platform}
                        </div>
                        {challenge.tags.map((tag) => (
                          <div
                            key={tag}
                            className="text-sm text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded"
                          >
                            {tag}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <nav className="flex items-center space-x-2">
              <Button
                variant="outline"
                className="border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-400 w-10 h-10 p-0"
              >
                &lt;
              </Button>
              <Button
                variant="outline"
                className="border-zinc-300 dark:border-zinc-700 bg-cyan-50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-400 w-10 h-10 p-0"
              >
                1
              </Button>
              <Button
                variant="outline"
                className="border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-400 w-10 h-10 p-0"
              >
                2
              </Button>
              <Button
                variant="outline"
                className="border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-400 w-10 h-10 p-0"
              >
                3
              </Button>
              <span className="text-zinc-500">...</span>
              <Button
                variant="outline"
                className="border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-400 w-10 h-10 p-0"
              >
                8
              </Button>
              <Button
                variant="outline"
                className="border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-400 w-10 h-10 p-0"
              >
                &gt;
              </Button>
            </nav>
          </div>
        </TabsContent>

        <TabsContent value="upcoming">
          <div className="bg-zinc-100/80 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-xl p-8 text-center">
            <div className="max-w-md mx-auto">
              <h3 className="text-xl font-bold mb-2">Upcoming Challenges</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                New challenges are being prepared. Subscribe to get notified when they launch.
              </p>
              <div className="flex gap-4">
                <Input
                  placeholder="Enter your email"
                  className="bg-white dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700"
                />
                <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="completed">
          <div className="bg-zinc-100/80 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-xl p-8 text-center">
            <div className="max-w-md mx-auto">
              <h3 className="text-xl font-bold mb-2">Completed Challenges</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                View past challenges and learn from the solutions provided by successful participants.
              </p>
              <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white">
                View Archive
              </Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="learn">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Common Attack Vectors</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {attackVectors.map((vector) => (
                <Card
                  key={vector.id}
                  className="bg-white dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800 hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors"
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{vector.name}</CardTitle>
                      <div className={`p-2 rounded-lg ${getAttackVectorColor(vector.severity)}`}>
                        {getAttackVectorIcon(vector.category)}
                      </div>
                    </div>
                    <CardDescription className="text-zinc-600 dark:text-zinc-400">{vector.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-zinc-600 dark:text-zinc-400">Severity</span>
                        <span className={getSeverityTextColor(vector.severity)}>{vector.severity}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-zinc-600 dark:text-zinc-400">Frequency</span>
                        <span>{vector.frequency}</span>
                      </div>
                      <Separator className="my-2" />
                      <div className="text-sm text-zinc-600 dark:text-zinc-400">
                        <span className="font-medium">Related to:</span> {vector.relatedTo.join(", ")}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/learn/attack-vectors/${vector.id}`} className="w-full">
                      <Button
                        variant="outline"
                        className="w-full border-zinc-300 dark:border-zinc-700 text-cyan-700 dark:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-950/30 hover:text-cyan-800 dark:hover:text-cyan-300"
                      >
                        Learn More
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 border border-cyan-100 dark:border-cyan-900/30 rounded-xl p-8 mt-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  Learn Web3 <span className="text-cyan-600 dark:text-cyan-400">Security</span>
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                  Enhance your security skills with our comprehensive learning resources, tutorials, and practice
                  challenges.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/learn">
                    <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white">
                      Start Learning
                    </Button>
                  </Link>
                  <Link href="/challenges">
                    <Button
                      variant="outline"
                      className="border-cyan-700 text-cyan-700 dark:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-950"
                    >
                      Practice Challenges
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[200px] flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  width={400}
                  height={200}
                  alt="Learn Web3 Security"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Helper functions
function getDifficultyColor(difficulty: string) {
  switch (difficulty) {
    case "Easy":
      return "bg-green-600 dark:bg-green-600"
    case "Medium":
      return "bg-yellow-600 dark:bg-yellow-600"
    case "Hard":
      return "bg-orange-600 dark:bg-orange-600"
    case "Critical":
      return "bg-red-600 dark:bg-red-600"
    default:
      return "bg-blue-600 dark:bg-blue-600"
  }
}

function getAttackVectorColor(severity: string) {
  switch (severity) {
    case "Critical":
      return "bg-red-100 dark:bg-red-950/30 text-red-600 dark:text-red-400"
    case "High":
      return "bg-orange-100 dark:bg-orange-950/30 text-orange-600 dark:text-orange-400"
    case "Medium":
      return "bg-yellow-100 dark:bg-yellow-950/30 text-yellow-600 dark:text-yellow-400"
    case "Low":
      return "bg-green-100 dark:bg-green-950/30 text-green-600 dark:text-green-400"
    default:
      return "bg-blue-100 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400"
  }
}

function getSeverityTextColor(severity: string) {
  switch (severity) {
    case "Critical":
      return "text-red-600 dark:text-red-400 font-medium"
    case "High":
      return "text-orange-600 dark:text-orange-400 font-medium"
    case "Medium":
      return "text-yellow-600 dark:text-yellow-400 font-medium"
    case "Low":
      return "text-green-600 dark:text-green-400 font-medium"
    default:
      return "text-blue-600 dark:text-blue-400 font-medium"
  }
}

function getAttackVectorIcon(category: string) {
  switch (category) {
    case "Smart Contract":
      return <Code className="h-5 w-5" />
    case "Web":
      return <Globe className="h-5 w-5" />
    case "Cryptographic":
      return <Lock className="h-5 w-5" />
    case "Access Control":
      return <Shield className="h-5 w-5" />
    case "Logic":
      return <Cpu className="h-5 w-5" />
    default:
      return <AlertTriangle className="h-5 w-5" />
  }
}

function Code({ className, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}

function Globe({ className, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

function Lock({ className, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}

function Cpu({ className, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M15 2v2" />
      <path d="M15 20v2" />
      <path d="M2 15h2" />
      <path d="M2 9h2" />
      <path d="M20 15h2" />
      <path d="M20 9h2" />
      <path d="M9 2v2" />
      <path d="M9 20v2" />
    </svg>
  )
}

function AlertTriangle({ className, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  )
}
