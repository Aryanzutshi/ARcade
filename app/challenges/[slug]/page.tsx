import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Clock, Trophy, Users, MessageSquare, Share2, BookmarkPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { getChallenge } from "@/lib/data"

type Params = Promise<{ slug: string }>

export default async function ChallengePage({ params }: { params: Params }) {
  const { slug } = await params
  const challenge = await getChallenge(slug)

  const defaultChallenge = {
    id: "storage-overdrive",
    title: "Storage Overdrive",
    description: "Exploit vulnerabilities in decentralized storage protocols to gain access to protected data.",
    difficulty: "Beginner",
    category: "Storage",
    points: 250,
    completions: 128,
    timeEstimate: "1-2 hours",
    author: "CryptoHacker",
    authorImage: "/placeholder.svg?height=40&width=40",
    content: `
      <h2>Challenge Description</h2>
      <p>In this challenge, you'll need to find and exploit vulnerabilities in a decentralized storage protocol to gain access to protected data.</p>

      <h2>Scenario</h2>
      <p>You've discovered a new decentralized storage service built on Arweave that claims to be "unhackable." The service stores sensitive data and uses a custom access control mechanism. Your goal is to bypass this mechanism and retrieve a secret file.</p>

      <h2>Objectives</h2>
      <ul>
        <li>Analyze the storage protocol's architecture</li>
        <li>Identify vulnerabilities in the access control mechanism</li>
        <li>Exploit these vulnerabilities to access the protected data</li>
        <li>Retrieve the secret flag</li>
      </ul>

      <h2>Hints</h2>
      <ul>
        <li>Look closely at how the protocol handles transaction verification</li>
        <li>The access control mechanism might not properly validate all request parameters</li>
        <li>Consider how permanent storage differs from traditional storage in terms of data access patterns</li>
      </ul>
    `,
    resources: [
      { name: "Arweave Documentation", url: "#" },
      { name: "Storage Protocol Basics", url: "#" },
      { name: "Common Vulnerabilities in Decentralized Systems", url: "#" },
    ],
  }

  const challengeData = challenge || defaultChallenge

  return (
    <div className="container px-4 py-12 md:py-24">
      <Link
        href="/challenges"
        className="inline-flex items-center text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Challenges
      </Link>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-zinc-100/50 dark:bg-zinc-900/50 border border-zinc-300 dark:border-zinc-800 rounded-xl p-6 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Badge className="bg-purple-600">{challengeData.category}</Badge>
                  <Badge className="bg-zinc-300 dark:bg-zinc-700">{challengeData.difficulty}</Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">{challengeData.title}</h1>
              </div>
              <div className="mt-4 md:mt-0 flex items-center space-x-2">
                <Button variant="outline" className="border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400">
                  <BookmarkPlus className="mr-2 h-4 w-4" />
                  Save
                </Button>
                <Button variant="outline" className="border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-6 text-sm text-zinc-600 dark:text-zinc-400">
              <div className="flex items-center">
                <Trophy className="mr-2 h-4 w-4 text-yellow-500" />
                {challengeData.points} points
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4 text-blue-500" />
                {challengeData.timeEstimate}
              </div>
              <div className="flex items-center">
                <Users className="mr-2 h-4 w-4 text-green-500" />
                {challengeData.completions} completions
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full overflow-hidden mr-2">
                  <Image src={challengeData.authorImage || "/placeholder.svg"} width={24} height={24} alt={challengeData.author} />
                </div>
                Created by {challengeData.author}
              </div>
            </div>

            <p className="text-zinc-600 dark:text-zinc-400 mb-6">{challengeData.description}</p>

            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
              Start Challenge
            </Button>
          </div>

          <div className="bg-zinc-100/50 dark:bg-zinc-900/50 border border-zinc-300 dark:border-zinc-800 rounded-xl overflow-hidden">
            <Tabs defaultValue="details">
              <TabsList className="bg-zinc-200 dark:bg-zinc-800 p-0 h-12">
                <TabsTrigger value="details" className="h-12 rounded-none data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-900">
                  Details
                </TabsTrigger>
                <TabsTrigger value="discussion" className="h-12 rounded-none data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-900">
                  Discussion
                </TabsTrigger>
                <TabsTrigger value="solutions" className="h-12 rounded-none data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-900">
                  Solutions
                </TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="p-6">
                <div
                  className="prose prose-zinc dark:prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: challengeData.content }}
                />
              </TabsContent>
              <TabsContent value="discussion" className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold">Discussion</h3>
                  <div className="flex items-center text-zinc-600 dark:text-zinc-400">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    <span>24 comments</span>
                  </div>
                </div>
                <div className="bg-zinc-200 dark:bg-zinc-800 rounded-lg p-4 mb-4">
                  <p className="text-zinc-600 dark:text-zinc-400 mb-2">
                    Comments are only visible after you&apos;ve completed the challenge or if they&apos;re marked as non-spoiler.
                  </p>
                  <Button variant="outline" className="border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400">
                    Complete Challenge to View
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="solutions" className="p-6">
                <div className="bg-zinc-200 dark:bg-zinc-800 rounded-lg p-4">
                  <p className="text-zinc-600 dark:text-zinc-400 mb-2">
                    Solutions are only visible after you&apos;ve completed the challenge.
                  </p>
                  <Button variant="outline" className="border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400">
                    Complete Challenge to View
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <div>
          <div className="bg-zinc-100/50 dark:bg-zinc-900/50 border border-zinc-300 dark:border-zinc-800 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold mb-4">Your Progress</h3>
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1 text-zinc-600 dark:text-zinc-400">
                <span>Progress</span>
                <span>0%</span>
              </div>
              <Progress value={0} className="h-2 bg-zinc-300 dark:bg-zinc-800" />
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">
              You haven&apos;t started this challenge yet.
            </p>
            <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
              Start Challenge
            </Button>
          </div>

          <div className="bg-zinc-100/50 dark:bg-zinc-900/50 border border-zinc-300 dark:border-zinc-800 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              {challengeData.resources.map((resource, index) => (
                <li key={index}>
                  <Link href={resource.url} className="text-cyan-600 dark:text-cyan-400 hover:underline">
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-zinc-100/50 dark:bg-zinc-900/50 border border-zinc-300 dark:border-zinc-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Related Challenges</h3>
            <ul className="space-y-4">
              <li className="border-b border-zinc-300 dark:border-zinc-800 pb-4">
                <Link href="/challenges/data-smuggler" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  <h4 className="font-medium mb-1">Data Smuggler</h4>
                  <div className="flex justify-between text-sm text-zinc-600 dark:text-zinc-400">
                    <span>Storage</span>
                    <span>300 pts</span>
                  </div>
                </Link>
              </li>
              <li className="border-b border-zinc-300 dark:border-zinc-800 pb-4">
                <Link href="/challenges/permanent-record" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  <h4 className="font-medium mb-1">Permanent Record</h4>
                  <div className="flex justify-between text-sm text-zinc-600 dark:text-zinc-400">
                    <span>Storage</span>
                    <span>200 pts</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/challenges/crypto-conundrum" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  <h4 className="font-medium mb-1">Crypto Conundrum</h4>
                  <div className="flex justify-between text-sm text-zinc-600 dark:text-zinc-400">
                    <span>Security</span>
                    <span>450 pts</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
