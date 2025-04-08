import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BookOpen, Code, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LearnPage() {
  return (
    <div className="container px-4 py-12 md:py-24">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
          Learn <span className="text-cyan-400">Web3</span> Development
        </h1>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-8">
          Comprehensive guides, tutorials, and resources to help you master decentralized development.
        </p>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid grid-cols-5 bg-zinc-800">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="arweave">Arweave</TabsTrigger>
            <TabsTrigger value="ao">AO</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="smart-contracts">Smart Contracts</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {/* Featured Course */}
        <Card className="col-span-full bg-gradient-to-r from-purple-900/20 to-pink-900/20 border-purple-900/30">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <div className="inline-block rounded-lg bg-purple-900/40 px-3 py-1 text-sm font-medium text-purple-400 mb-2">
                  Featured Course
                </div>
                <CardTitle className="text-2xl font-bold">Introduction to Arweave & AO</CardTitle>
                <CardDescription className="text-zinc-400 mt-2">
                  Learn the fundamentals of permanent storage and autonomous compute
                </CardDescription>
              </div>
              <div className="bg-purple-600 p-2 rounded-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between text-sm mb-4">
              <div className="flex items-center text-zinc-400">
                <Clock className="mr-2 h-4 w-4" />
                <span>8 modules • 4-6 hours</span>
              </div>
              <div className="text-green-400">Beginner Friendly</div>
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center mr-3 text-xs">
                  1
                </div>
                <span>Introduction to Permanent Storage</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center mr-3 text-xs">
                  2
                </div>
                <span>Arweave Architecture</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center mr-3 text-xs">
                  3
                </div>
                <span>Autonomous Compute with AO</span>
              </div>
              <div className="flex items-center text-zinc-500">
                <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center mr-3 text-xs">4</div>
                <span>Building Your First dApp</span>
              </div>
              <div className="flex items-center text-zinc-500">
                <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center mr-3 text-xs">
                  ...
                </div>
                <span>And 4 more modules</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
              Start Learning
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>

        {/* Course Cards */}
        <CourseCard
          title="Smart Contract Security"
          description="Learn to write secure smart contracts and identify vulnerabilities"
          icon={<Shield className="h-6 w-6 text-white" />}
          iconBg="bg-red-600"
          modules={6}
          duration="3-5 hours"
          level="Intermediate"
        />

        <CourseCard
          title="Decentralized Storage"
          description="Master the concepts of permanent and decentralized storage"
          icon={<Database className="h-6 w-6 text-white" />}
          iconBg="bg-blue-600"
          modules={5}
          duration="2-4 hours"
          level="Beginner"
        />

        <CourseCard
          title="Autonomous Agents"
          description="Build and deploy autonomous agents on the AO platform"
          icon={<Zap className="h-6 w-6 text-white" />}
          iconBg="bg-yellow-600"
          modules={7}
          duration="4-6 hours"
          level="Advanced"
        />

        <CourseCard
          title="Web3 Frontend Development"
          description="Create modern UIs for decentralized applications"
          icon={<Code className="h-6 w-6 text-white" />}
          iconBg="bg-green-600"
          modules={8}
          duration="5-7 hours"
          level="Intermediate"
        />

        <CourseCard
          title="Cryptography Basics"
          description="Understand the cryptographic foundations of Web3"
          icon={<Lock className="h-6 w-6 text-white" />}
          iconBg="bg-purple-600"
          modules={4}
          duration="2-3 hours"
          level="Beginner"
        />

        <CourseCard
          title="Advanced Protocol Design"
          description="Design and implement custom protocols for decentralized systems"
          icon={<Network className="h-6 w-6 text-white" />}
          iconBg="bg-cyan-600"
          modules={9}
          duration="6-8 hours"
          level="Advanced"
        />
      </div>

      <div className="text-center">
        <Button variant="outline" className="border-zinc-700 text-zinc-400">
          Load More Courses
        </Button>
      </div>

      {/* Learning Paths */}
      <div className="mt-20 mb-12">
        <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">
          Learning <span className="text-pink-400">Paths</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-pink-900/50 transition-colors">
            <div className="bg-gradient-to-r from-pink-600 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Code className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Web3 Developer</h3>
            <p className="text-zinc-400 mb-4">
              Master the skills needed to build full-stack decentralized applications
            </p>
            <div className="flex items-center text-sm text-zinc-500 mb-4">
              <Clock className="mr-2 h-4 w-4" />
              <span>5 courses • 20-25 hours</span>
            </div>
            <Link href="#">
              <Button
                variant="outline"
                className="w-full border-zinc-700 text-zinc-400 hover:bg-pink-900/20 hover:text-pink-400 hover:border-pink-900/50"
              >
                View Path
              </Button>
            </Link>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-cyan-900/50 transition-colors">
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Security Specialist</h3>
            <p className="text-zinc-400 mb-4">
              Learn to identify and fix security vulnerabilities in decentralized systems
            </p>
            <div className="flex items-center text-sm text-zinc-500 mb-4">
              <Clock className="mr-2 h-4 w-4" />
              <span>4 courses • 15-20 hours</span>
            </div>
            <Link href="#">
              <Button
                variant="outline"
                className="w-full border-zinc-700 text-zinc-400 hover:bg-cyan-900/20 hover:text-cyan-400 hover:border-cyan-900/50"
              >
                View Path
              </Button>
            </Link>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-yellow-900/50 transition-colors">
            <div className="bg-gradient-to-r from-yellow-600 to-orange-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">AO Expert</h3>
            <p className="text-zinc-400 mb-4">Become an expert in autonomous compute and agent development</p>
            <div className="flex items-center text-sm text-zinc-500 mb-4">
              <Clock className="mr-2 h-4 w-4" />
              <span>6 courses • 25-30 hours</span>
            </div>
            <Link href="#">
              <Button
                variant="outline"
                className="w-full border-zinc-700 text-zinc-400 hover:bg-yellow-900/20 hover:text-yellow-400 hover:border-yellow-900/50"
              >
                View Path
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Community Learning */}
      <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 mt-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter mb-4">
              Learn with the <span className="text-green-400">Community</span>
            </h2>
            <p className="text-zinc-400 mb-6">
              Join our active community of learners and experts. Participate in workshops, hackathons, and collaborative
              projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/community">
                <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white">
                  Join Community
                </Button>
              </Link>
              <Link href="/events">
                <Button variant="outline" className="border-zinc-700 text-zinc-400">
                  Upcoming Events
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative h-[200px] flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=200&width=400"
              width={400}
              height={200}
              alt="Community"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function CourseCard({ title, description, icon, iconBg, modules, duration, level }) {
  return (
    <Card className="bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-all duration-300">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl font-bold">{title}</CardTitle>
            <CardDescription className="text-zinc-400 mt-2">{description}</CardDescription>
          </div>
          <div className={`${iconBg} p-2 rounded-lg`}>{icon}</div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center text-zinc-400">
            <Clock className="mr-2 h-4 w-4" />
            <span>
              {modules} modules • {duration}
            </span>
          </div>
          <div className="text-zinc-400">{level}</div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-zinc-800 hover:bg-zinc-700 text-white">View Course</Button>
      </CardFooter>
    </Card>
  )
}

function Clock({ className, ...props }) {
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
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function Database({ className, ...props }) {
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
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
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

function Network({ className, ...props }) {
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
      <circle cx="12" cy="12" r="1" />
      <circle cx="12" cy="5" r="1" />
      <circle cx="12" cy="19" r="1" />
      <circle cx="5" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
      <path d="M12 5v7" />
      <path d="m12 12 7 0" />
      <path d="m12 12-7 0" />
      <path d="m12 12 0 7" />
    </svg>
  )
}

