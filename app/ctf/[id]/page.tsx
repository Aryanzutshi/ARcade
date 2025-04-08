import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Clock, Trophy, Users, ExternalLink, AlertTriangle, CheckCircle, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { getCTFChallenge } from "@/lib/data"

type Params = Promise<{ id: string }>

export default async function CTFChallengePage({ params }: { params: Params }) {
  const { id } = await params
  const challenge = await getCTFChallenge(id)
  
  if (!challenge) {
    return (
      <div className="container px-4 py-12 md:py-24 text-center">
        <h1 className="text-4xl font-bold mb-4">Challenge Not Found</h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-8">
          The challenge you&apos;re looking for doesn&apos;t exist or has been removed.
        </p>
        <Link href="/ctf">
          <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white">
            Back to Challenges
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container px-4 py-12 md:py-24">
      <Link
        href="/ctf"
        className="inline-flex items-center text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Challenges
      </Link>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Badge className={`${getDifficultyColor(challenge.difficulty)} text-white`}>
                    {challenge.difficulty}
                  </Badge>
                  {challenge.categories.map((category) => (
                    <Badge key={category} className="bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                      {category}
                    </Badge>
                  ))}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">{challenge.title}</h1>
              </div>
              <div className="mt-4 md:mt-0 flex items-center space-x-2">
                <Button
                  variant="outline"
                  className="border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-400"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit Project
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center text-zinc-600 dark:text-zinc-400">
                <Trophy className="mr-2 h-4 w-4 text-yellow-500" />
                <span>${challenge.reward.toLocaleString()} max reward</span>
              </div>
              <div className="flex items-center text-zinc-600 dark:text-zinc-400">
                <Clock className="mr-2 h-4 w-4 text-blue-500" />
                <span>{challenge.timeLeft} remaining</span>
              </div>
              <div className="flex items-center text-zinc-600 dark:text-zinc-400">
                <Users className="mr-2 h-4 w-4 text-green-500" />
                <span>{challenge.participants} participants</span>
              </div>
              <div className="flex items-center text-zinc-600 dark:text-zinc-400">
                <div className="w-6 h-6 rounded-full overflow-hidden mr-2">
                  <Image
                    src={challenge.platformIcon || "/placeholder.svg"}
                    width={24}
                    height={24}
                    alt={challenge.platform}
                  />
                </div>
                <span>{challenge.platform}</span>
              </div>
            </div>

            <p className="text-zinc-700 dark:text-zinc-300 mb-6">{challenge.description}</p>

            <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white">
              Join Challenge
            </Button>
          </div>

          <div className="bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
            <Tabs defaultValue="details">
              <TabsList className="bg-zinc-100 dark:bg-zinc-800 p-0 h-12">
                <TabsTrigger
                  value="details"
                  className="h-12 rounded-none data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-900 data-[state=active]:border-b-2 data-[state=active]:border-cyan-500"
                >
                  Details
                </TabsTrigger>
                <TabsTrigger
                  value="scope"
                  className="h-12 rounded-none data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-900 data-[state=active]:border-b-2 data-[state=active]:border-cyan-500"
                >
                  Scope
                </TabsTrigger>
                <TabsTrigger
                  value="rules"
                  className="h-12 rounded-none data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-900 data-[state=active]:border-b-2 data-[state=active]:border-cyan-500"
                >
                  Rules
                </TabsTrigger>
                <TabsTrigger
                  value="submissions"
                  className="h-12 rounded-none data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-900 data-[state=active]:border-b-2 data-[state=active]:border-cyan-500"
                >
                  Submissions
                </TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="p-6">
                <div className="prose prose-zinc dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tighter prose-p:text-zinc-600 dark:prose-p:text-zinc-400 prose-li:text-zinc-600 dark:prose-li:text-zinc-400">
                  <h2>Challenge Overview</h2>
                  <p>
                    {challenge.title} is a Capture The Flag (CTF) challenge focused on finding security vulnerabilities
                    in {challenge.platform}&apos;s {challenge.categories.join(" and ")} implementation.
                  </p>

                  <h2>Background</h2>
                  <p>{challenge.background}</p>

                  <h2>Objectives</h2>
                  <ul>
                    {challenge.objectives.map((objective, index) => (
                      <li key={index}>{objective}</li>
                    ))}
                  </ul>

                  <h2>Resources</h2>
                  <ul>
                    {challenge.resources.map((resource, index) => (
                      <li key={index}>
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-600 dark:text-cyan-400 hover:underline"
                        >
                          {resource.name}
                        </a>
                        {resource.description && ` - ${resource.description}`}
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="scope" className="p-6">
                <div className="prose prose-zinc dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tighter prose-p:text-zinc-600 dark:prose-p:text-zinc-400 prose-li:text-zinc-600 dark:prose-li:text-zinc-400">
                  <h2>In Scope</h2>
                  <div className="space-y-4">
                    {challenge.scope.inScope.map((item, index) => (
                      <div
                        key={index}
                        className="bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 rounded-lg p-4"
                      >
                        <h3 className="text-lg font-medium mb-2">{item.name}</h3>
                        <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-2">{item.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag, tagIndex) => (
                            <Badge
                              key={tagIndex}
                              className="bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <h2 className="mt-8">Out of Scope</h2>
                  <div className="space-y-2">
                    {challenge.scope.outOfScope.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-zinc-600 dark:text-zinc-400">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="rules" className="p-6">
                <div className="prose prose-zinc dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tighter prose-p:text-zinc-600 dark:prose-p:text-zinc-400 prose-li:text-zinc-600 dark:prose-li:text-zinc-400">
                  <h2>Challenge Rules</h2>
                  <div className="space-y-4">
                    {challenge.rules.map((rule, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-zinc-700 dark:text-zinc-300">{rule}</span>
                      </div>
                    ))}
                  </div>

                  <h2 className="mt-8">Reward Structure</h2>
                  <div className="space-y-4">
                    {challenge.rewards.map((reward, index) => (
                      <div
                        key={index}
                        className="bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 rounded-lg p-4"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-lg font-medium">{reward.level}</h3>
                          <span className="text-cyan-600 dark:text-cyan-400 font-bold">
                            ${reward.amount.toLocaleString()}
                          </span>
                        </div>
                        <p className="text-zinc-600 dark:text-zinc-400 text-sm">{reward.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="submissions" className="p-6">
                <div className="prose prose-zinc dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tighter prose-p:text-zinc-600 dark:prose-p:text-zinc-400 prose-li:text-zinc-600 dark:prose-li:text-zinc-400">
                  <h2>Submission Guidelines</h2>
                  <p>
                    When submitting a vulnerability, please follow these guidelines to ensure your submission is
                    processed correctly:
                  </p>

                  <h3>Required Information</h3>
                  <ul>
                    <li>Clear title describing the vulnerability</li>
                    <li>Detailed description of the vulnerability</li>
                    <li>Step-by-step reproduction instructions</li>
                    <li>Impact assessment</li>
                    <li>Suggested mitigation or fix</li>
                  </ul>

                  <h3>Submission Process</h3>
                  <ol>
                    <li>Join the challenge by clicking the &quot;Join Challenge&quot; button</li>
                    <li>Create a new submission in your dashboard</li>
                    <li>Fill out all required fields</li>
                    <li>Submit your findings</li>
                    <li>Wait for review (typically 3-5 business days)</li>
                  </ol>

                  <div className="bg-cyan-50 dark:bg-cyan-950/30 border border-cyan-200 dark:border-cyan-900/50 rounded-lg p-4 my-6">
                    <div className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-cyan-600 dark:text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="text-cyan-700 dark:text-cyan-400 font-medium">Important Note</h4>
                        <p className="text-cyan-600 dark:text-cyan-500 text-sm mt-1">
                          All submissions are confidential and should not be disclosed publicly until the vulnerability
                          has been fixed and the disclosure has been approved by the project team.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <div>
          <div className="bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 mb-8 sticky top-24">
            <h3 className="text-xl font-bold mb-4">Challenge Status</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Time Remaining</span>
                  <span className="text-cyan-600 dark:text-cyan-400 font-medium">{challenge.timeLeft}</span>
                </div>
                <Progress value={challenge.timePercentage} className="h-2 bg-zinc-100 dark:bg-zinc-800" />
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <Card className="bg-zinc-50 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-800">
                  <CardHeader className="p-4">
                    <CardTitle className="text-sm text-zinc-600 dark:text-zinc-400">Participants</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 p-4">
                    <div className="text-2xl font-bold">{challenge.participants}</div>
                  </CardContent>
                </Card>
                <Card className="bg-zinc-50 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-800">
                  <CardHeader className="p-4">
                    <CardTitle className="text-sm text-zinc-600 dark:text-zinc-400">Submissions</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 p-4">
                    <div className="text-2xl font-bold">{challenge.submissions}</div>
                  </CardContent>
                </Card>
              </div>

              <Separator className="my-4" />

              <div>
                <h4 className="font-medium mb-2">Platform</h4>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full overflow-hidden mr-2">
                    <Image
                      src={challenge.platformIcon || "/placeholder.svg"}
                      width={24}
                      height={24}
                      alt={challenge.platform}
                    />
                  </div>
                  <span className="text-zinc-700 dark:text-zinc-300">{challenge.platform}</span>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Reward Pool</h4>
                <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">
                  ${challenge.reward.toLocaleString()}
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white">
                Join Challenge
              </Button>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Security Contacts</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-1">Primary Contact</h4>
                <p className="text-zinc-600 dark:text-zinc-400">{challenge.contacts.primary}</p>
              </div>
              <div>
                <h4 className="font-medium mb-1">Discord</h4>
                <Link href={challenge.contacts.discord} className="text-cyan-600 dark:text-cyan-400 hover:underline">
                  Join Discord Server
                </Link>
              </div>
              <div>
                <h4 className="font-medium mb-1">Email</h4>
                <Link
                  href={`mailto:${challenge.contacts.email}`}
                  className="text-cyan-600 dark:text-cyan-400 hover:underline"
                >
                  {challenge.contacts.email}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Helper function
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
