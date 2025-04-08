import Link from "next/link"
import { ArrowRight, Code, Shield, Trophy, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ParticleContainer } from "@/components/particle-container"
import { GlitchText } from "@/components/glitch-text"
import { ChallengeCard } from "@/components/challenge-card"
import { BadgeCard } from "@/components/badge-card"

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <ParticleContainer />
        <div className="container relative z-10 px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
                <GlitchText>Hack the Future</GlitchText>
              </h1>
              <p className="text-xl md:text-2xl text-zinc-400">CTFs and Labs for the New Web</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-6 text-lg">
                Enter Lab
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link href="/challenges">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-cyan-700 text-cyan-400 hover:bg-cyan-950 hover:text-cyan-300 px-8 py-6 text-lg"
                >
                  View Challenges
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* What's This? Section */}
      <section id="about" className="py-20 relative">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block rounded-lg bg-purple-900/20 px-3 py-1 text-sm font-medium text-purple-400 mb-6">
              What&apos; s This? 
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">
              A <span className="text-cyan-400">Learning Playground</span> Powered by Arweave & AO
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-zinc-900/50 border border-purple-900/30 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-start mb-4">
                  <div className="bg-purple-600 p-2 rounded-lg mr-4">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Learn by Doing</h3>
                    <p className="text-zinc-400">
                      Hands-on labs and challenges that teach you Web3 concepts through practical application.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-zinc-900/50 border border-purple-900/30 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-start mb-4">
                  <div className="bg-cyan-600 p-2 rounded-lg mr-4">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Security First</h3>
                    <p className="text-zinc-400">
                      Master security concepts in decentralized systems through CTF-style challenges.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-zinc-900/50 border border-purple-900/30 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-start mb-4">
                  <div className="bg-pink-600 p-2 rounded-lg mr-4">
                    <Trophy className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Earn & Progress</h3>
                    <p className="text-zinc-400">
                      Collect badges, level up, and showcase your skills on the permanent web.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-zinc-900/50 border border-purple-900/30 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-start mb-4">
                  <div className="bg-yellow-600 p-2 rounded-lg mr-4">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Cutting Edge</h3>
                    <p className="text-zinc-400">
                      Experience the latest in decentralized compute with Arweave and AO technology.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Challenges Section */}
      <section id="challenges" className="py-20 relative">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-block rounded-lg bg-cyan-900/20 px-3 py-1 text-sm font-medium text-cyan-400 mb-6">
              Challenges
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
              Featured <span className="text-pink-400">Challenges</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Jump into one of our featured challenges and start hacking your way through the decentralized web.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ChallengeCard
              title="Storage Overdrive"
              description="Exploit vulnerabilities in decentralized storage protocols"
              difficulty="Beginner"
              category="Storage"
              points={250}
              color="from-purple-600 to-blue-600"
            />
            <ChallengeCard
              title="Persistent Panic"
              description="Race against time to secure permanent data before it's compromised"
              difficulty="Intermediate"
              category="Security"
              points={500}
              color="from-pink-600 to-red-600"
            />
            <ChallengeCard
              title="Agent Infiltration"
              description="Reverse engineer autonomous agents to discover hidden backdoors"
              difficulty="Advanced"
              category="Agents"
              points={750}
              color="from-yellow-600 to-orange-600"
            />
          </div>
          <div className="text-center mt-12">
            <Link href="/challenges">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg">
                View All Challenges
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Progression System */}
      <section id="progression" className="py-20 relative bg-zinc-950">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-block rounded-lg bg-pink-900/20 px-3 py-1 text-sm font-medium text-pink-400 mb-6">
              Progression
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
              Level Up Your <span className="text-green-400">Skills</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Track your progress, earn badges, and showcase your achievements on the permanent web.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
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
              title="Agent Whisperer"
              description="Deploy 5 autonomous agents"
              image="/placeholder.svg?height=100&width=100"
              color="from-yellow-600 to-orange-600"
            />
            <BadgeCard
              title="Security Guru"
              description="Find 10 vulnerabilities"
              image="/placeholder.svg?height=100&width=100"
              color="from-green-600 to-emerald-600"
            />
          </div>
          <div className="mt-16 bg-zinc-900/50 border border-pink-900/30 rounded-xl p-8 backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Your Progress is Permanent</h3>
                <p className="text-zinc-400 mb-6">
                  All your achievements, badges, and progress are stored permanently on Arweave, giving you verifiable
                  proof of your skills.
                </p>
                <Link href="/profile">
                  <Button className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white">
                    Create Your Profile
                  </Button>
                </Link>
              </div>
              <div className="relative h-[200px] flex items-center justify-center">
                <div className="w-full h-8 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full w-[65%] bg-gradient-to-r from-pink-600 to-purple-600 rounded-full relative">
                    <div className="absolute inset-0 flex items-center justify-center text-xs font-bold">
                      Level 6 - 65% to Level 7
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-900/30 rounded-xl p-8 md:p-12 backdrop-blur-sm">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                Ready to <span className="text-cyan-400">Hack the Future</span>?
              </h2>
              <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                Join our community of hackers, developers, and explorers building the next generation of decentralized
                applications.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/signup">
                  <Button className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-6 text-lg">
                    Start Hacking
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="https://discord.gg/ctfao" target="_blank">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto border-cyan-700 text-cyan-400 hover:bg-cyan-950 hover:text-cyan-300 px-8 py-6 text-lg"
                  >
                    Join Discord
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
