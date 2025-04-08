import Link from "next/link"
import { ArrowLeft, BookOpen, Check, Clock, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { getCourse } from "@/lib/data"

export default function CoursePage({ params }: { params: { courseId: string } }) {
  const course = getCourse(params.courseId)

  if (!course) {
    return (
      <div className="container px-4 py-12 md:py-24 text-center">
        <h1 className="text-4xl font-bold mb-4">Course Not Found</h1>
        <p className="text-zinc-400 mb-8">The course you&apos;re looking for doesn&apos;t exist or has been removed.</p>
        <Link href="/learn">
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
            Back to Courses
          </Button>
        </Link>
      </div>
    )
  }

  // Calculate progress if modules_list exists
  const completedModules = course.modules_list?.filter((module) => module.completed).length || 0
  const totalModules = course.modules_list?.length || course.modules
  const progressPercentage = Math.round((completedModules / totalModules) * 100)

  return (
    <div className="container px-4 py-12 md:py-24">
      <Link href="/learn" className="inline-flex items-center text-sm text-zinc-400 hover:text-white mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Courses
      </Link>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-zinc-900/50 dark:bg-zinc-900/50 bg-zinc-100/50 border border-zinc-800 dark:border-zinc-800 border-zinc-300 rounded-xl p-6 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Badge className={`${course.iconBg} text-white`}>{course.level}</Badge>
                  {course.featured && <Badge className="bg-yellow-600 text-white">Featured</Badge>}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">{course.title}</h1>
                <p className="text-zinc-400 dark:text-zinc-400 text-zinc-600 mt-2">{course.description}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center text-zinc-400 dark:text-zinc-400 text-zinc-600">
                <BookOpen className="mr-2 h-4 w-4 text-purple-500" />
                <span>{totalModules} modules</span>
              </div>
              <div className="flex items-center text-zinc-400 dark:text-zinc-400 text-zinc-600">
                <Clock className="mr-2 h-4 w-4 text-blue-500" />
                <span>{course.duration}</span>
              </div>
            </div>

            {course.modules_list && (
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-1">
                  <span>Progress</span>
                  <span>{progressPercentage}%</span>
                </div>
                <Progress value={progressPercentage} className="h-2 bg-zinc-800 dark:bg-zinc-800 bg-zinc-300" />
              </div>
            )}

            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
              {completedModules > 0 ? "Continue Course" : "Start Course"}
            </Button>
          </div>

          <div className="bg-zinc-900/50 dark:bg-zinc-900/50 bg-zinc-100/50 border border-zinc-800 dark:border-zinc-800 border-zinc-300 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-6">Course Modules</h2>
            <div className="space-y-4">
              {course.modules_list ? (
                course.modules_list.map((module, index) => (
                  <Link key={module.id} href={`/learn/${course.id}/${module.id}`} className="block">
                    <Card
                      className={`bg-zinc-800/50 dark:bg-zinc-800/50 bg-white/50 border-zinc-700 dark:border-zinc-700 border-zinc-300 hover:border-zinc-600 dark:hover:border-zinc-600 hover:border-zinc-400 transition-colors ${module.completed ? "border-l-4 border-l-green-500" : ""}`}
                    >
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div className="flex items-center">
                            <div
                              className={`w-8 h-8 rounded-full ${module.completed ? "bg-green-500/20 text-green-500" : "bg-zinc-700/20 dark:bg-zinc-700/20 bg-zinc-300/20 text-zinc-500"} flex items-center justify-center mr-3`}
                            >
                              {module.completed ? <Check className="h-4 w-4" /> : <span>{index + 1}</span>}
                            </div>
                            <CardTitle className="text-lg">{module.title}</CardTitle>
                          </div>
                          <div className="flex items-center text-xs text-zinc-500">
                            <Clock className="mr-1 h-3 w-3" />
                            <span>{module.duration}</span>
                          </div>
                        </div>
                        <CardDescription className="text-zinc-400 dark:text-zinc-400 text-zinc-600 mt-2">
                          {module.description}
                        </CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <Button
                          variant={module.completed ? "outline" : "default"}
                          className={
                            module.completed
                              ? "border-green-700 text-green-400 hover:bg-green-950 hover:text-green-300"
                              : "bg-zinc-700 hover:bg-zinc-600 text-white"
                          }
                          size="sm"
                        >
                          {module.completed ? "Review Module" : "Start Module"}
                          {!module.completed && <Play className="ml-2 h-3 w-3" />}
                        </Button>
                      </CardFooter>
                    </Card>
                  </Link>
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-zinc-400 dark:text-zinc-400 text-zinc-600 mb-4">
                    Module details will be available when you enroll in this course.
                  </p>
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                    Enroll Now
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div>
          <div className="bg-zinc-900/50 dark:bg-zinc-900/50 bg-zinc-100/50 border border-zinc-800 dark:border-zinc-800 border-zinc-300 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold mb-4">What You&apos;ll Learn</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Fundamentals of permanent storage on Arweave</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>How to build decentralized applications</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Working with autonomous compute on AO</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Best practices for Web3 development</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Security considerations for decentralized systems</span>
              </li>
            </ul>
          </div>

          <div className="bg-zinc-900/50 dark:bg-zinc-900/50 bg-zinc-100/50 border border-zinc-800 dark:border-zinc-800 border-zinc-300 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold mb-4">Prerequisites</h3>
            <ul className="space-y-2 text-zinc-400 dark:text-zinc-400 text-zinc-600">
              <li>Basic understanding of JavaScript</li>
              <li>Familiarity with web development concepts</li>
              <li>No prior blockchain experience required</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-900/30 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Join the Discussion</h3>
            <p className="text-zinc-400 dark:text-zinc-400 text-zinc-600 text-sm mb-4">
              Connect with other learners and get help from instructors in our community forums.
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
