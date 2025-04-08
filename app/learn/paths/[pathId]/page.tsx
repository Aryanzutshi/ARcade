import Link from "next/link"
import { ArrowLeft, ArrowRight, BookOpen, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getLearningPath, getCourses } from "@/lib/data"

export default function LearningPathPage({ params }: { params: { pathId: string } }) {
  const path = getLearningPath(params.pathId)

  if (!path) {
    return (
      <div className="container px-4 py-12 md:py-24 text-center">
        <h1 className="text-4xl font-bold mb-4">Learning Path Not Found</h1>
        <p className="text-zinc-400 mb-8">The learning path you&apos;re looking for doesn&apos;t exist or has been removed.</p>
        <Link href="/learn">
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
            Back to Courses
          </Button>
        </Link>
      </div>
    )
  }

  // Get all courses
  const allCourses = getCourses()

  // Filter courses that are part of this learning path
  const pathCourses = allCourses.filter((course) => path.courseIds.includes(course.id))

  // Calculate progress
  const totalModules = pathCourses.reduce((total, course) => total + course.modules, 0)
  const completedModules = pathCourses.reduce((total, course) => {
    if (course.modules_list) {
      return total + course.modules_list.filter((module) => module.completed).length
    }
    return total
  }, 0)

  const progressPercentage = totalModules > 0 ? Math.round((completedModules / totalModules) * 100) : 0

  return (
    <div className="container px-4 py-12 md:py-24">
      <Link href="/learn" className="inline-flex items-center text-sm text-zinc-400 hover:text-white mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Learning Paths
      </Link>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-zinc-900/50 dark:bg-zinc-900/50 bg-zinc-100/50 border border-zinc-800 dark:border-zinc-800 border-zinc-300 rounded-xl p-6 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <div className="inline-block rounded-lg bg-zinc-800 dark:bg-zinc-800 bg-zinc-200 px-3 py-1 text-sm font-medium mb-2">
                  Learning Path
                </div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">{path.title}</h1>
                <p className="text-zinc-400 dark:text-zinc-400 text-zinc-600 mt-2">{path.description}</p>
              </div>
              <div className={`${path.iconBg} w-16 h-16 rounded-lg flex items-center justify-center mt-4 md:mt-0`}>
                <IconComponent name={path.icon} className="h-8 w-8 text-white" />
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center text-zinc-400 dark:text-zinc-400 text-zinc-600">
                <BookOpen className="mr-2 h-4 w-4 text-purple-500" />
                <span>{path.courses} courses</span>
              </div>
              <div className="flex items-center text-zinc-400 dark:text-zinc-400 text-zinc-600">
                <Clock className="mr-2 h-4 w-4 text-blue-500" />
                <span>{path.duration}</span>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between text-sm mb-1">
                <span>Progress</span>
                <span>{progressPercentage}%</span>
              </div>
              <Progress value={progressPercentage} className="h-2 bg-zinc-800 dark:bg-zinc-800 bg-zinc-300" />
            </div>

            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
              {progressPercentage > 0 ? "Continue Learning Path" : "Start Learning Path"}
            </Button>
          </div>

          <div className="bg-zinc-900/50 dark:bg-zinc-900/50 bg-zinc-100/50 border border-zinc-800 dark:border-zinc-800 border-zinc-300 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">About This Learning Path</h2>
            <div className="prose prose-invert dark:prose-invert prose-zinc max-w-none">
              <p>
                The {path.title} learning path is designed to give you a comprehensive understanding of
                {path.id === "web3-developer"
                  ? " Web3 development, from the basics to advanced concepts."
                  : path.id === "security-specialist"
                    ? " security in decentralized systems, focusing on identifying and mitigating vulnerabilities."
                    : " autonomous compute and agent development on the AO platform."}
              </p>

              <h3>What You&apos;ll Learn</h3>
              <ul>
                {path.id === "web3-developer" && (
                  <>
                    <li>Fundamentals of decentralized application development</li>
                    <li>Working with permanent storage on Arweave</li>
                    <li>Building modern UIs for Web3 applications</li>
                    <li>Smart contract development and security</li>
                    <li>Cryptographic principles for Web3</li>
                  </>
                )}
                {path.id === "security-specialist" && (
                  <>
                    <li>Common security vulnerabilities in decentralized systems</li>
                    <li>Smart contract auditing techniques</li>
                    <li>Cryptographic principles and implementations</li>
                    <li>Secure development practices for Web3</li>
                    <li>Incident response and vulnerability management</li>
                  </>
                )}
                {path.id === "ao-expert" && (
                  <>
                    <li>Fundamentals of autonomous compute</li>
                    <li>The AO platform architecture</li>
                    <li>Designing and implementing autonomous agents</li>
                    <li>Agent communication and coordination</li>
                    <li>Advanced agent patterns and optimizations</li>
                    <li>Security considerations for autonomous systems</li>
                  </>
                )}
              </ul>

              <h3>Who This Path Is For</h3>
              <p>
                This learning path is ideal for
                {path.id === "web3-developer"
                  ? " developers who want to transition into Web3 development or enhance their existing skills in building decentralized applications."
                  : path.id === "security-specialist"
                    ? " security professionals, developers, and auditors who want to specialize in securing decentralized systems and smart contracts."
                    : " developers interested in autonomous systems, agent-based computing, and the future of decentralized applications."}
              </p>

              <h3>Prerequisites</h3>
              <p>Before starting this learning path, you should have:</p>
              <ul>
                {path.id === "web3-developer" && (
                  <>
                    <li>Basic understanding of JavaScript and web development</li>
                    <li>Familiarity with React or similar frontend frameworks</li>
                    <li>Basic understanding of APIs and data structures</li>
                  </>
                )}
                {path.id === "security-specialist" && (
                  <>
                    <li>Basic understanding of blockchain technology</li>
                    <li>Familiarity with programming concepts</li>
                    <li>Basic knowledge of cryptography</li>
                  </>
                )}
                {path.id === "ao-expert" && (
                  <>
                    <li>Basic understanding of Arweave and permanent storage</li>
                    <li>Familiarity with JavaScript or similar languages</li>
                    <li>Basic understanding of distributed systems</li>
                  </>
                )}
              </ul>
            </div>
          </div>

          <div className="bg-zinc-900/50 dark:bg-zinc-900/50 bg-zinc-100/50 border border-zinc-800 dark:border-zinc-800 border-zinc-300 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-6">Courses in This Path</h2>
            <div className="space-y-6">
              {pathCourses.map((course, index) => (
                <Link key={course.id} href={`/learn/${course.id}`}>
                  <Card className="bg-zinc-800/50 dark:bg-zinc-800/50 bg-white/50 border-zinc-700 dark:border-zinc-700 border-zinc-300 hover:border-zinc-600 dark:hover:border-zinc-600 hover:border-zinc-400 transition-colors">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center">
                          <div
                            className={`w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center mr-3 text-white`}
                          >
                            {index + 1}
                          </div>
                          <CardTitle className="text-lg">{course.title}</CardTitle>
                        </div>
                        <Badge className={`${course.iconBg} text-white`}>{course.level}</Badge>
                      </div>
                      <CardDescription className="text-zinc-400 dark:text-zinc-400 text-zinc-600 mt-2">
                        {course.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="flex items-center text-sm text-zinc-500">
                        <BookOpen className="mr-2 h-4 w-4" />
                        <span>{course.modules} modules</span>
                        <span className="mx-2">•</span>
                        <Clock className="mr-2 h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>

                      {course.modules_list && (
                        <div className="mt-4">
                          <div className="flex justify-between text-xs mb-1">
                            <span>Progress</span>
                            <span>
                              {course.modules_list.filter((m) => m.completed).length}/{course.modules_list.length}{" "}
                              modules
                            </span>
                          </div>
                          <Progress
                            value={
                              (course.modules_list.filter((m) => m.completed).length / course.modules_list.length) * 100
                            }
                            className="h-1 bg-zinc-700"
                          />
                        </div>
                      )}
                    </CardContent>
                    <CardFooter>
                      <Button
                        variant="outline"
                        className="border-zinc-700 text-zinc-400 hover:bg-zinc-700 hover:text-white"
                      >
                        {course.modules_list && course.modules_list.some((m) => m.completed)
                          ? "Continue Course"
                          : "Start Course"}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="bg-zinc-900/50 dark:bg-zinc-900/50 bg-zinc-100/50 border border-zinc-800 dark:border-zinc-800 border-zinc-300 rounded-xl p-6 mb-8 sticky top-24">
            <h3 className="text-xl font-bold mb-4">Path Completion</h3>
            <div className="mb-6">
              <div className="flex justify-between text-sm mb-1">
                <span>Overall Progress</span>
                <span>{progressPercentage}%</span>
              </div>
              <Progress value={progressPercentage} className="h-2 bg-zinc-800 dark:bg-zinc-800 bg-zinc-300" />
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Courses Completed</h4>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400 dark:text-zinc-400 text-zinc-600">
                    {
                      pathCourses.filter(
                        (course) => course.modules_list && course.modules_list.every((module) => module.completed),
                      ).length
                    }{" "}
                    of {pathCourses.length}
                  </span>
                  <span className="text-sm text-zinc-500">
                    {Math.round(
                      (pathCourses.filter(
                        (course) => course.modules_list && course.modules_list.every((module) => module.completed),
                      ).length /
                        pathCourses.length) *
                        100,
                    )}
                    %
                  </span>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Modules Completed</h4>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400 dark:text-zinc-400 text-zinc-600">
                    {completedModules} of {totalModules}
                  </span>
                  <span className="text-sm text-zinc-500">{progressPercentage}%</span>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Estimated Time Remaining</h4>
                <span className="text-zinc-400 dark:text-zinc-400 text-zinc-600">
                  {/* This is a simplified calculation */}
                  {Math.round(((100 - progressPercentage) / 100) * Number.parseInt(path.duration.split("-")[1]) * 0.8)}{" "}
                  hours
                </span>
              </div>
            </div>

            <div className="mt-6">
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                {progressPercentage > 0 ? "Continue Learning Path" : "Start Learning Path"}
              </Button>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-900/30 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Need Help?</h3>
            <p className="text-zinc-400 dark:text-zinc-400 text-zinc-600 text-sm mb-4">
              Join our community to get help from instructors and other learners following this path.
            </p>
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

// Helper component to render icons dynamically
function IconComponent({ name, className }) {
  switch (name) {
    case "Code":
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
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      )
    case "Shield":
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
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    case "Zap":
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
        >
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      )
    default:
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
        >
          <circle cx="12" cy="12" r="10" />
        </svg>
      )
  }
}
