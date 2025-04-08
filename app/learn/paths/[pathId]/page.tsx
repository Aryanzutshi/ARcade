import Link from "next/link"
import { ArrowLeft, ArrowRight, BookOpen, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getLearningPath, getCourses } from "@/lib/data"

type Params = Promise<{ pathId: string }>

export default async function LearningPathPage({ params }: { params: Params }) {
  const { pathId } = await params
  const path = getLearningPath(pathId)

  if (!path) {
    return (
      <div className="container px-4 py-12 md:py-24 text-center">
        <h1 className="text-4xl font-bold mb-4">Learning Path Not Found</h1>
        <p className="text-muted-foreground mb-8">The learning path you&apos;re looking for doesn&apos;t exist or has been removed.</p>
        <Link href="/learn">
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
            Back to Courses
          </Button>
        </Link>
      </div>
    )
  }

  const allCourses = getCourses()
  const pathCourses = allCourses.filter(course => path.courseIds.includes(course.id))
  const totalModules = pathCourses.reduce((acc, course) => acc + course.modules, 0)
  const completedModules = pathCourses.reduce(
    (acc, course) => acc + (course.modules_list?.filter(m => m.completed).length || 0),
    0
  )

  const progressPercentage = totalModules > 0 ? Math.round((completedModules / totalModules) * 100) : 0
  const coursesCompleted = pathCourses.filter(c => c.modules_list?.every(m => m.completed)).length
  const estimatedTimeRemaining = Math.round(((100 - progressPercentage) / 100) * parseInt(path.duration.split("-")[1]) * 0.8)

  return (
    <div className="container px-4 py-12 md:py-24">
      <Link href="/learn" className="inline-flex items-center text-sm text-muted-foreground hover:text-white mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Learning Paths
      </Link>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="rounded-xl border bg-muted/50 p-6 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm font-medium mb-2">Learning Path</div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">{path.title}</h1>
                <p className="text-muted-foreground mt-2">{path.description}</p>
              </div>
              <div className={`${path.iconBg} w-16 h-16 rounded-lg flex items-center justify-center mt-4 md:mt-0`}>
                <IconComponent name={path.icon} className="h-8 w-8 text-white" />
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-6 text-muted-foreground">
              <div className="flex items-center"><BookOpen className="mr-2 h-4 w-4 text-purple-500" />{path.courses} courses</div>
              <div className="flex items-center"><Clock className="mr-2 h-4 w-4 text-blue-500" />{path.duration}</div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between text-sm mb-1"><span>Progress</span><span>{progressPercentage}%</span></div>
              <Progress value={progressPercentage} className="h-2 bg-muted" />
            </div>

            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
              {progressPercentage > 0 ? "Continue Learning Path" : "Start Learning Path"}
            </Button>
          </div>

          {/* About Section */}
          <div className="rounded-xl border bg-muted/50 p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">About This Learning Path</h2>
            <div className="prose prose-invert max-w-none text-muted-foreground">
              <p>
                The {path.title} learning path is designed to give you a comprehensive understanding of
                {path.id === "web3-developer" ? " Web3 development, from the basics to advanced concepts." :
                  path.id === "security-specialist" ? " security in decentralized systems, focusing on identifying and mitigating vulnerabilities." :
                    " autonomous compute and agent development on the AO platform."}
              </p>

              <h3>What You&apos;ll Learn</h3>
              <ul>
                {path.id === "web3-developer" && <>
                  <li>Fundamentals of decentralized application development</li>
                  <li>Working with permanent storage on Arweave</li>
                  <li>Building modern UIs for Web3 applications</li>
                  <li>Smart contract development and security</li>
                  <li>Cryptographic principles for Web3</li>
                </>}
                {path.id === "security-specialist" && <>
                  <li>Common security vulnerabilities in decentralized systems</li>
                  <li>Smart contract auditing techniques</li>
                  <li>Cryptographic principles and implementations</li>
                  <li>Secure development practices for Web3</li>
                  <li>Incident response and vulnerability management</li>
                </>}
                {path.id === "ao-expert" && <>
                  <li>Fundamentals of autonomous compute</li>
                  <li>The AO platform architecture</li>
                  <li>Designing and implementing autonomous agents</li>
                  <li>Agent communication and coordination</li>
                  <li>Advanced agent patterns and optimizations</li>
                  <li>Security considerations for autonomous systems</li>
                </>}
              </ul>

              <h3>Who This Path Is For</h3>
              <p>
                This learning path is ideal for
                {path.id === "web3-developer"
                  ? " developers who want to transition into Web3 development or enhance their existing skills."
                  : path.id === "security-specialist"
                    ? " security professionals, developers, and auditors specializing in decentralized systems."
                    : " developers exploring autonomous systems, agent-based compute, and decentralized infra."}
              </p>

              <h3>Prerequisites</h3>
              <ul>
                {path.id === "web3-developer" && <>
                  <li>Basic understanding of JavaScript and web development</li>
                  <li>Familiarity with React or similar frameworks</li>
                  <li>Basic understanding of APIs and data structures</li>
                </>}
                {path.id === "security-specialist" && <>
                  <li>Basic blockchain knowledge</li>
                  <li>Programming fundamentals</li>
                  <li>Intro-level cryptography understanding</li>
                </>}
                {path.id === "ao-expert" && <>
                  <li>Basic understanding of Arweave and permanent storage</li>
                  <li>Familiarity with JavaScript or similar languages</li>
                  <li>Basic understanding of distributed systems</li>
                </>}
              </ul>
            </div>
          </div>

          {/* Courses */}
          <div className="rounded-xl border bg-muted/50 p-6">
            <h2 className="text-2xl font-bold mb-6">Courses in This Path</h2>
            <div className="space-y-6">
              {pathCourses.map((course, index) => {
                const completed = course.modules_list?.filter(m => m.completed).length || 0
                const total = course.modules_list?.length || 0
                const courseProgress = total > 0 ? (completed / total) * 100 : 0

                return (
                  <Link key={course.id} href={`/learn/${course.id}`}>
                    <Card className="bg-muted/30 border hover:border-zinc-400 transition-colors">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center mr-3 text-white">
                              {index + 1}
                            </div>
                            <CardTitle className="text-lg">{course.title}</CardTitle>
                          </div>
                          <Badge className={`${course.iconBg} text-white`}>{course.level}</Badge>
                        </div>
                        <CardDescription className="text-muted-foreground mt-2">{course.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <BookOpen className="mr-2 h-4 w-4" />{course.modules} modules
                          <span className="mx-2">•</span>
                          <Clock className="mr-2 h-4 w-4" />{course.duration}
                        </div>

                        {total > 0 && (
                          <div className="mt-4">
                            <div className="flex justify-between text-xs mb-1">
                              <span>Progress</span>
                              <span>{completed}/{total} modules</span>
                            </div>
                            <Progress value={courseProgress} className="h-1 bg-zinc-700" />
                          </div>
                        )}
                      </CardContent>
                      <CardFooter>
                        <Button
                          variant="outline"
                          className="border-zinc-700 text-muted-foreground hover:bg-zinc-700 hover:text-white"
                        >
                          {completed > 0 ? "Continue Course" : "Start Course"}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="sticky top-24 space-y-8">
          <div className="rounded-xl border bg-muted/50 p-6">
            <h3 className="text-xl font-bold mb-4">Path Completion</h3>
            <div className="mb-6">
              <div className="flex justify-between text-sm mb-1"><span>Overall Progress</span><span>{progressPercentage}%</span></div>
              <Progress value={progressPercentage} className="h-2 bg-muted" />
            </div>

            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="flex justify-between"><span>Courses Completed</span><span>{coursesCompleted} / {pathCourses.length}</span></div>
              <div className="flex justify-between"><span>Modules Completed</span><span>{completedModules} / {totalModules}</span></div>
              <div className="flex justify-between"><span>Time Remaining</span><span>{estimatedTimeRemaining} hrs</span></div>
            </div>

            <div className="mt-6">
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                {progressPercentage > 0 ? "Continue Learning Path" : "Start Learning Path"}
              </Button>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-900/30 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Need Help?</h3>
            <p className="text-muted-foreground text-sm mb-4">Join our community to get help from instructors and other learners.</p>
            <Link href="/community">
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                Join Community
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function IconComponent({ name, className }: { name: string, className: string }) {
  switch (name) {
    case "Code":
      return <ArrowRight className={className} />
    case "Shield":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    case "Zap":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      )
    default:
      return <div className={className}>?</div>
  }
}
