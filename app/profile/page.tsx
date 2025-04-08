import Image from "next/image"
import Link from "next/link"
import { Cog, Trophy, Clock, Star, BarChart3, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ChallengeCard } from "@/components/challenge-card"
import { BadgeCard } from "@/components/badge-card"

export default function ProfilePage() {
  return (
    <div className="container px-4 py-12 md:py-24">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div className="flex items-center">
          <div className="relative mr-6">
            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-purple-600">
              <Image src="/placeholder.svg?height=80&width=80" width={80} height={80} alt="Profile" />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-purple-600 text-white text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center">
              6
            </div>
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">CryptoHacker</h1>
            <p className="text-zinc-400">Joined April 2023 • 24 challenges completed</p>
          </div>
        </div>
        <div className="mt-4 md:mt-0 flex items-center space-x-2">
          <Button variant="outline" className="border-zinc-700 text-zinc-400">
            <Cog className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Tabs defaultValue="progress">
            <TabsList className="bg-zinc-800 mb-6">
              <TabsTrigger value="progress">Progress</TabsTrigger>
              <TabsTrigger value="challenges">Challenges</TabsTrigger>
              <TabsTrigger value="badges">Badges</TabsTrigger>
              <TabsTrigger value="learning">Learning</TabsTrigger>
            </TabsList>

            <TabsContent value="progress">
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">Your Progress</h2>
                  <Badge className="bg-purple-600">Level 6</Badge>
                </div>
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-1">
                    <span>XP Progress</span>
                    <span>3,250 / 5,000 XP</span>
                  </div>
                  <Progress value={65} className="h-2 bg-zinc-800" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-zinc-800 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-purple-400 mb-1">24</div>
                    <div className="text-xs text-zinc-400">Challenges Completed</div>
                  </div>
                  <div className="bg-zinc-800 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-cyan-400 mb-1">12</div>
                    <div className="text-xs text-zinc-400">Badges Earned</div>
                  </div>
                  <div className="bg-zinc-800 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-pink-400 mb-1">8,750</div>
                    <div className="text-xs text-zinc-400">Total Points</div>
                  </div>
                  <div className="bg-zinc-800 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-yellow-400 mb-1">42</div>
                    <div className="text-xs text-zinc-400">Global Rank</div>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mb-8">
                <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-green-600/20 p-2 rounded-lg mr-4">
                      <Trophy className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">Completed &ldquo;Storage Overdrive&ldquo; Challenge</h3>
                      <p className="text-sm text-zinc-400">Earned 250 points and 1 badge</p>
                      <p className="text-xs text-zinc-500 mt-1">2 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-600/20 p-2 rounded-lg mr-4">
                      <Star className="h-5 w-5 text-purple-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">Reached Level 6</h3>
                      <p className="text-sm text-zinc-400">Unlocked new challenges and badges</p>
                      <p className="text-xs text-zinc-500 mt-1">5 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-600/20 p-2 rounded-lg mr-4">
                      <BookOpen className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">Completed &quot;Introduction to Arweave&quot; Course</h3>
                      <p className="text-sm text-zinc-400">Earned 500 XP</p>
                      <p className="text-xs text-zinc-500 mt-1">1 week ago</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">Statistics</h2>
                  <Button variant="outline" className="border-zinc-700 text-zinc-400 text-xs h-8">
                    <BarChart3 className="mr-2 h-4 w-4" />
                    View All Stats
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-medium text-zinc-400 mb-2">Challenges by Difficulty</h3>
                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span>Beginner</span>
                          <span>12/15</span>
                        </div>
                        <div className="w-full bg-zinc-800 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: "80%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span>Intermediate</span>
                          <span>8/20</span>
                        </div>
                        <div className="w-full bg-zinc-800 rounded-full h-2">
                          <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "40%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span>Advanced</span>
                          <span>4/25</span>
                        </div>
                        <div className="w-full bg-zinc-800 rounded-full h-2">
                          <div className="bg-red-500 h-2 rounded-full" style={{ width: "16%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-zinc-400 mb-2">Challenges by Category</h3>
                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span>Storage</span>
                          <span>10/15</span>
                        </div>
                        <div className="w-full bg-zinc-800 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: "67%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span>Security</span>
                          <span>8/18</span>
                        </div>
                        <div className="w-full bg-zinc-800 rounded-full h-2">
                          <div className="bg-purple-500 h-2 rounded-full" style={{ width: "44%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span>Smart Contracts</span>
                          <span>6/22</span>
                        </div>
                        <div className="w-full bg-zinc-800 rounded-full h-2">
                          <div className="bg-pink-500 h-2 rounded-full" style={{ width: "27%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="challenges">
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mb-8">
                <h2 className="text-xl font-bold mb-6">Completed Challenges</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ChallengeCard
                    title="Storage Overdrive"
                    description="Exploit vulnerabilities in decentralized storage protocols"
                    difficulty="Beginner"
                    category="Storage"
                    points={250}
                    color="from-purple-600 to-blue-600"
                    completed={true}
                  />
                  <ChallengeCard
                    title="Persistent Panic"
                    description="Race against time to secure permanent data before it's compromised"
                    difficulty="Intermediate"
                    category="Security"
                    points={500}
                    color="from-pink-600 to-red-600"
                    completed={true}
                  />
                  <ChallengeCard
                    title="Data Smuggler"
                    description="Hide data in plain sight using steganography"
                    difficulty="Beginner"
                    category="Storage"
                    points={300}
                    color="from-cyan-600 to-blue-600"
                    completed={true}
                  />
                </div>
                <div className="mt-6 text-center">
                  <Button variant="outline" className="border-zinc-700 text-zinc-400">
                    View All Completed Challenges
                  </Button>
                </div>
              </div>

              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-6">In Progress</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ChallengeCard
                    title="Agent Infiltration"
                    description="Reverse engineer autonomous agents to discover hidden backdoors"
                    difficulty="Advanced"
                    category="Agents"
                    points={750}
                    color="from-yellow-600 to-orange-600"
                    progress={45}
                  />
                  <ChallengeCard
                    title="Crypto Conundrum"
                    description="Break the encryption on a secure message"
                    difficulty="Intermediate"
                    category="Security"
                    points={450}
                    color="from-purple-600 to-indigo-600"
                    progress={20}
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="badges">
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mb-8">
                <h2 className="text-xl font-bold mb-6">Earned Badges</h2>
                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                  <BadgeCard
                    title="Newbie Hacker"
                    description="Complete your first challenge"
                    image="/placeholder.svg?height=100&width=100"
                    color="from-blue-600 to-cyan-600"
                  />
                  <BadgeCard
                    title="Storage Master"
                    description="Complete all storage challenges"
                    image="/placeholder.svg?height=100&width=100"
                    color="from-purple-600 to-pink-600"
                  />
                  <BadgeCard
                    title="Quick Learner"
                    description="Complete 5 challenges in a week"
                    image="/placeholder.svg?height=100&width=100"
                    color="from-green-600 to-emerald-600"
                  />
                  <BadgeCard
                    title="Bug Hunter"
                    description="Find a critical vulnerability"
                    image="/placeholder.svg?height=100&width=100"
                    color="from-red-600 to-orange-600"
                  />
                </div>
                <div className="mt-6 text-center">
                  <Button variant="outline" className="border-zinc-700 text-zinc-400">
                    View All Badges
                  </Button>
                </div>
              </div>

              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-6">Badges to Earn</h2>
                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                  <BadgeCard
                    title="Agent Whisperer"
                    description="Deploy 5 autonomous agents"
                    image="/placeholder.svg?height=100&width=100"
                    color="from-yellow-600 to-orange-600"
                    locked={true}
                  />
                  <BadgeCard
                    title="Security Guru"
                    description="Find 10 vulnerabilities"
                    image="/placeholder.svg?height=100&width=100"
                    color="from-purple-600 to-indigo-600"
                    locked={true}
                  />
                  <BadgeCard
                    title="Arweave Pioneer"
                    description="Store 1GB of data on Arweave"
                    image="/placeholder.svg?height=100&width=100"
                    color="from-blue-600 to-cyan-600"
                    locked={true}
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="learning">
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mb-8">
                <h2 className="text-xl font-bold mb-6">Courses in Progress</h2>
                <div className="space-y-4">
                  <div className="bg-zinc-800 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-medium">Introduction to Arweave & AO</h3>
                        <p className="text-sm text-zinc-400">5/8 modules completed</p>
                      </div>
                      <Badge className="bg-green-600">In Progress</Badge>
                    </div>
                    <Progress value={62.5} className="h-2 bg-zinc-700 mb-2" />
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-xs text-zinc-500">
                        <Clock className="mr-1 h-3 w-3" />
                        <span>Last activity: 2 days ago</span>
                      </div>
                      <Link href="/learn">
                        <Button variant="outline" className="h-8 text-xs border-zinc-700 text-zinc-400">
                          Continue
                        </Button>
                      </Link>
                    </div>
                  </div>

                  <div className="bg-zinc-800 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-medium">Smart Contract Security</h3>
                        <p className="text-sm text-zinc-400">2/6 modules completed</p>
                      </div>
                      <Badge className="bg-green-600">In Progress</Badge>
                    </div>
                    <Progress value={33.3} className="h-2 bg-zinc-700 mb-2" />
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-xs text-zinc-500">
                        <Clock className="mr-1 h-3 w-3" />
                        <span>Last activity: 1 week ago</span>
                      </div>
                      <Link href="/learn">
                        <Button variant="outline" className="h-8 text-xs border-zinc-700 text-zinc-400">
                          Continue
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-6">Completed Courses</h2>
                <div className="space-y-4">
                  <div className="bg-zinc-800 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-medium">Decentralized Storage</h3>
                        <p className="text-sm text-zinc-400">5/5 modules completed</p>
                      </div>
                      <Badge className="bg-purple-600">Completed</Badge>
                    </div>
                    <Progress value={100} className="h-2 bg-zinc-700 mb-2" />
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-xs text-zinc-500">
                        <Clock className="mr-1 h-3 w-3" />
                        <span>Completed: 3 weeks ago</span>
                      </div>
                      <Link href="/learn">
                        <Button variant="outline" className="h-8 text-xs border-zinc-700 text-zinc-400">
                          Review
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">Achievements</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-yellow-600/20 p-2 rounded-lg mr-4">
                  <Trophy className="h-5 w-5 text-yellow-500" />
                </div>
                <div>
                  <h3 className="font-medium">Top 50 Global Rank</h3>
                  <p className="text-sm text-zinc-400">Ranked #42 out of 5,280 users</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-green-600/20 p-2 rounded-lg mr-4">
                  <Star className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <h3 className="font-medium">Storage Expert</h3>
                  <p className="text-sm text-zinc-400">Completed 10 storage challenges</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-purple-600/20 p-2 rounded-lg mr-4">
                  <BookOpen className="h-5 w-5 text-purple-500" />
                </div>
                <div>
                  <h3 className="font-medium">Dedicated Learner</h3>
                  <p className="text-sm text-zinc-400">Completed 3 courses</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">Recommended Challenges</h2>
            <div className="space-y-4">
              <Link href="/challenges/smart-contract-sleuth" className="block">
                <div className="bg-zinc-800 rounded-lg p-4 hover:bg-zinc-700 transition-colors">
                  <h3 className="font-medium mb-1">Smart Contract Sleuth</h3>
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-400">Intermediate</span>
                    <span className="text-yellow-400">400 pts</span>
                  </div>
                </div>
              </Link>
              <Link href="/challenges/crypto-conundrum" className="block">
                <div className="bg-zinc-800 rounded-lg p-4 hover:bg-zinc-700 transition-colors">
                  <h3 className="font-medium mb-1">Crypto Conundrum</h3>
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-400">Intermediate</span>
                    <span className="text-yellow-400">450 pts</span>
                  </div>
                </div>
              </Link>
              <Link href="/challenges/autonomous-takeover" className="block">
                <div className="bg-zinc-800 rounded-lg p-4 hover:bg-zinc-700 transition-colors">
                  <h3 className="font-medium mb-1">Autonomous Takeover</h3>
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-400">Advanced</span>
                    <span className="text-yellow-400">800 pts</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-900/30 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4">Join the Leaderboard</h2>
            <p className="text-zinc-400 text-sm mb-4">
              You&apos;re just 1,250 points away from the Top 10! Complete more challenges to climb the ranks.
            </p>
            <Link href="/leaderboard">
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                View Leaderboard
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

