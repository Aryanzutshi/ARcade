import { Search, Filter, Trophy, Medal, Award, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getLeaderboardData } from "@/lib/data"

export default function LeaderboardPage() {
  const { users, topUsers, categories } = getLeaderboardData()

  return (
    <div className="container px-4 py-12 md:py-24">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">Leaderboard</h1>
          <p className="text-zinc-400 mt-2">See who&apos;s leading the way in our community</p>
        </div>
      </div>

      {/* Top Users */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {topUsers.map((user, index) => (
          <Card key={user.id} className="bg-zinc-900/50 border-zinc-800 overflow-hidden">
            <div
              className={`h-2 ${index === 0 ? "bg-gradient-to-r from-yellow-500 to-amber-500" : index === 1 ? "bg-gradient-to-r from-zinc-400 to-zinc-300" : "bg-gradient-to-r from-amber-700 to-amber-600"}`}
            ></div>
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="relative">
                <div
                  className={`absolute -top-1 -left-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${index === 0 ? "bg-yellow-500 text-yellow-950" : index === 1 ? "bg-zinc-400 text-zinc-950" : "bg-amber-700 text-amber-100"}`}
                >
                  {index + 1}
                </div>
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-zinc-700">
                  <Image src={user.avatar || "/placeholder.svg"} width={56} height={56} alt={user.username} />
                </div>
              </div>
              <div>
                <CardTitle className="text-xl">{user.username}</CardTitle>
                <div className="flex items-center mt-1">
                  <Trophy className="h-4 w-4 text-yellow-500 mr-1" />
                  <span className="text-yellow-400 font-mono">{user.points.toLocaleString()} pts</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mt-2">
                {user.badges.slice(0, 3).map((badge, i) => (
                  <Badge key={i} className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">
                    {badge}
                  </Badge>
                ))}
                {user.badges.length > 3 && (
                  <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">+{user.badges.length - 3} more</Badge>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zinc-500" />
            <Input placeholder="Search users..." className="pl-10 bg-zinc-800 border-zinc-700" />
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Select defaultValue="all-time">
              <SelectTrigger className="w-full sm:w-[180px] bg-zinc-800 border-zinc-700">
                <SelectValue placeholder="Time Period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-time">All Time</SelectItem>
                <SelectItem value="monthly">This Month</SelectItem>
                <SelectItem value="weekly">This Week</SelectItem>
                <SelectItem value="daily">Today</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-[180px] bg-zinc-800 border-zinc-700">
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
            <Button variant="outline" className="border-zinc-700 text-zinc-400">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>
        </div>
      </div>

      {/* Leaderboard Tabs */}
      <Tabs defaultValue="global">
        <TabsList className="bg-zinc-800 mb-6">
          <TabsTrigger value="global">Global</TabsTrigger>
          <TabsTrigger value="friends">Friends</TabsTrigger>
          <TabsTrigger value="country">By Country</TabsTrigger>
        </TabsList>

        <TabsContent value="global" className="space-y-6">
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-zinc-800">
                    <th className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">
                      Rank
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">
                      User
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">
                      Challenges
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">
                      Badges
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">
                      Points
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                  {users.map((user, index) => (
                    <tr key={user.id} className="hover:bg-zinc-800/50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          {index < 3 ? (
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${
                                index === 0
                                  ? "bg-yellow-500/20 text-yellow-500"
                                  : index === 1
                                    ? "bg-zinc-400/20 text-zinc-400"
                                    : "bg-amber-700/20 text-amber-700"
                              }`}
                            >
                              {index === 0 ? (
                                <Trophy className="h-4 w-4" />
                              ) : index === 1 ? (
                                <Medal className="h-4 w-4" />
                              ) : (
                                <Award className="h-4 w-4" />
                              )}
                            </div>
                          ) : (
                            <div className="w-8 h-8 flex items-center justify-center mr-2 text-zinc-500">
                              {index + 1}
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                            <Image src={user.avatar || "/placeholder.svg"} width={40} height={40} alt={user.username} />
                          </div>
                          <div>
                            <div className="font-medium">{user.username}</div>
                            <div className="text-xs text-zinc-500">Level {user.level}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm">{user.completedChallenges}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex -space-x-2">
                          {user.badges.slice(0, 3).map((badge, i) => (
                            <div
                              key={i}
                              className="w-6 h-6 rounded-full bg-zinc-700 border border-zinc-800 flex items-center justify-center text-xs"
                              title={badge}
                            >
                              {badge.charAt(0)}
                            </div>
                          ))}
                          {user.badges.length > 3 && (
                            <div className="w-6 h-6 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs">
                              +{user.badges.length - 3}
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-yellow-400 font-mono">{user.points.toLocaleString()}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex justify-center">
            <nav className="flex items-center space-x-2">
              <Button variant="outline" className="border-zinc-700 text-zinc-400 w-10 h-10 p-0">
                &lt;
              </Button>
              <Button variant="outline" className="border-zinc-700 bg-zinc-800 text-white w-10 h-10 p-0">
                1
              </Button>
              <Button variant="outline" className="border-zinc-700 text-zinc-400 w-10 h-10 p-0">
                2
              </Button>
              <Button variant="outline" className="border-zinc-700 text-zinc-400 w-10 h-10 p-0">
                3
              </Button>
              <span className="text-zinc-500">...</span>
              <Button variant="outline" className="border-zinc-700 text-zinc-400 w-10 h-10 p-0">
                10
              </Button>
              <Button variant="outline" className="border-zinc-700 text-zinc-400 w-10 h-10 p-0">
                &gt;
              </Button>
            </nav>
          </div>
        </TabsContent>

        <TabsContent value="friends">
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 text-center">
            <div className="max-w-md mx-auto">
              <h3 className="text-xl font-bold mb-2">Connect with Friends</h3>
              <p className="text-zinc-400 mb-6">
                Follow other users to see how you rank against your friends and colleagues.
              </p>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                Find Friends
              </Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="country">
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 text-center">
            <div className="max-w-md mx-auto">
              <h3 className="text-xl font-bold mb-2">Country Rankings</h3>
              <p className="text-zinc-400 mb-6">
                Set your country in your profile settings to see how you rank against others in your region.
              </p>
              <Link href="/profile">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                  Update Profile
                </Button>
              </Link>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <Card className="bg-zinc-900/50 border-zinc-800">
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-purple-400" />
              Monthly Leaders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {users.slice(0, 5).map((user, index) => (
                <li key={user.id} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-5 text-zinc-500 text-sm">{index + 1}.</div>
                    <div className="h-6 w-6 rounded-full overflow-hidden mx-2">
                      <Image src={user.avatar || "/placeholder.svg"} width={24} height={24} alt={user.username} />
                    </div>
                    <div className="text-sm">{user.username}</div>
                  </div>
                  <div className="text-yellow-400 font-mono text-sm">{user.monthlyPoints.toLocaleString()}</div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900/50 border-zinc-800">
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Trophy className="h-5 w-5 mr-2 text-cyan-400" />
              Challenge Masters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {users
                .sort((a, b) => b.completedChallenges - a.completedChallenges)
                .slice(0, 5)
                .map((user, index) => (
                  <li key={user.id} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-5 text-zinc-500 text-sm">{index + 1}.</div>
                      <div className="h-6 w-6 rounded-full overflow-hidden mx-2">
                        <Image src={user.avatar || "/placeholder.svg"} width={24} height={24} alt={user.username} />
                      </div>
                      <div className="text-sm">{user.username}</div>
                    </div>
                    <div className="text-cyan-400 font-mono text-sm">{user.completedChallenges}</div>
                  </li>
                ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900/50 border-zinc-800">
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Award className="h-5 w-5 mr-2 text-pink-400" />
              Badge Collectors
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {users
                .sort((a, b) => b.badges.length - a.badges.length)
                .slice(0, 5)
                .map((user, index) => (
                  <li key={user.id} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-5 text-zinc-500 text-sm">{index + 1}.</div>
                      <div className="h-6 w-6 rounded-full overflow-hidden mx-2">
                        <Image src={user.avatar || "/placeholder.svg"} width={24} height={24} alt={user.username} />
                      </div>
                      <div className="text-sm">{user.username}</div>
                    </div>
                    <div className="text-pink-400 font-mono text-sm">{user.badges.length}</div>
                  </li>
                ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
