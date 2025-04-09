"use client";

import Link from "next/link";
import { ArrowRight, Code, Shield, Trophy, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ParticleContainer } from "@/components/particle-container";
import { GlitchText } from "@/components/glitch-text";
import { ChallengeCard } from "@/components/challenge-card";
import { BadgeCard } from "@/components/badge-card";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-white text-zinc-900 dark:bg-zinc-950 dark:text-white">
      {/* Hero Section */}
      <section className="relative h-screen w-screen pt-32 md:pt-48 pb-24 overflow-hidden bg-white dark:bg-zinc-950">
        <ParticleContainer />
        <div className="container relative z-10 px-4">
          <div className="max-w-3xl mx-auto text-center space-y-10">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-zinc-900 dark:text-white drop-shadow-[0_0_12px_rgba(0,255,255,0.2)]">
                <GlitchText>Code. Exploit. Level Up.</GlitchText>
              </h1>
              <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                A Web3 playground for builders and breakers. Sharpen your skills
                with real-world CTFs and labs — no fluff, just code and chaos.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/learn">
                <Button className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105">
                  Enter Lab
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/challenges">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-cyan-700 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-950 hover:text-cyan-700 dark:hover:text-cyan-300 px-8 py-6 text-lg font-semibold transition-all duration-300 hover:shadow-md hover:shadow-cyan-500/20"
                >
                  View Challenges
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-black to-transparent z-0"></div>
      </section>

      {/* What's This? Section */}
      <section
        id="about"
        className="py-24 relative bg-white dark:bg-transparent"
      >
        <div className="container px-6">
          <div className="max-w-5xl mx-auto">
            <div className="inline-block rounded-2xl bg-purple-100 dark:bg-purple-900/20 px-4 py-1.5 text-sm font-medium text-purple-600 dark:text-purple-400 mb-8">
              What&apos;s This?
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-12 leading-tight text-zinc-900 dark:text-white">
              <span className="text-cyan-600 dark:text-cyan-400 block">
                Think Hack The Box — but for Web3
              </span>
              <span>Powered by Arweave & AO</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  icon: <Code className="h-7 w-7 text-white" />,
                  bg: "bg-purple-600",
                  title: "Arweave-Focused Labs",
                  desc: "Master the Arweave stack through hands-on labs — from permaweb basics to advanced smartweave contracts.",
                },
                {
                  icon: <Shield className="h-7 w-7 text-white" />,
                  bg: "bg-cyan-600",
                  title: "Web3 CTF Challenges",
                  desc: "Put your skills to the test with CTFs that mimic real-world attack vectors in decentralized storage and beyond.",
                },
                {
                  icon: <Trophy className="h-7 w-7 text-white" />,
                  bg: "bg-pink-600",
                  title: "Zero-Setup, Full Chaos",
                  desc: "No config headaches. Just launch a lab, get hacking, and break stuff safely in your browser.",
                },
                {
                  icon: <Zap className="h-7 w-7 text-white" />,
                  bg: "bg-yellow-500",
                  title: "Dev-First Experience",
                  desc: "Built for developers who want to get deep into Web3 and AO tech — not just read about it, but build, break, and repeat.",
                },
              ].map((card, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-zinc-900/60 border border-purple-200 dark:border-purple-900/30 rounded-3xl p-10 min-h-[300px] backdrop-blur-md shadow-md dark:shadow-[0_15px_35px_-5px_rgba(168,85,247,0.25)] hover:shadow-lg dark:hover:shadow-[0_20px_45px_-5px_rgba(168,85,247,0.4)] transition-all duration-300"
                >
                  <div className="flex items-start mb-6">
                    <div className={`${card.bg} p-3 rounded-xl mr-5`}>
                      {card.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-2 text-zinc-900 dark:text-white">
                        {card.title}
                      </h3>
                      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Challenges */}
      <section
        id="challenges"
        className="py-20 relative bg-white dark:bg-transparent"
      >
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-block rounded-3xl bg-cyan-100 dark:bg-cyan-900/20 px-3 py-1 text-sm font-medium text-cyan-600 dark:text-cyan-400 mb-6">
              Challenges
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
              Featured{" "}
              <span className="text-pink-600 dark:text-pink-400">
                Challenges
              </span>
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
              Jump into one of our featured challenges and start hacking your
              way through the decentralized web.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="opacity-0 animate-fadeUp animation-delay-100">
              <ChallengeCard
                title="Storage Overdrive"
                description="Exploit vulnerabilities in decentralized storage protocols"
                difficulty="Beginner"
                category="Storage"
                points={250}
                color="from-purple-600 to-blue-600"
              />
            </div>

            <div className="opacity-0 animate-fadeUp animation-delay-200">
              <ChallengeCard
                title="Persistent Panic"
                description="Race against time to secure permanent data before it's compromised"
                difficulty="Intermediate"
                category="Security"
                points={500}
                color="from-pink-600 to-red-600"
              />
            </div>

            <div className="opacity-0 animate-fadeUp animation-delay-300">
              <ChallengeCard
                title="Agent Infiltration"
                description="Reverse engineer autonomous agents to discover hidden backdoors"
                difficulty="Advanced"
                category="Agents"
                points={750}
                color="from-yellow-600 to-orange-600"
              />
            </div>
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
      <section
        id="progression"
        className="py-24 relative bg-zinc-100 dark:bg-zinc-950"
      >
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block rounded-full bg-pink-100 dark:bg-pink-900/20 px-4 py-1 text-sm font-semibold text-pink-600 dark:text-pink-400 tracking-wide mb-5">
              🧠 Progression
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              Evolve Your{" "}
              <span className="text-green-600 dark:text-green-400">
                Hacker DNA
              </span>
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
              Climb the ranks, earn permanent bragging rights, and let the
              permaweb reflect your legacy.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="opacity-0 animate-fadeUp animation-delay-100">
              <BadgeCard
                title="Newbie Hacker"
                description="Complete your first challenge"
                image="/explorer.avif"
                color="from-blue-600 to-cyan-600"
              />
            </div>

            <div className="opacity-0 animate-fadeUp animation-delay-200">
              <BadgeCard
                title="Storage Master"
                description="Complete all storage challenges"
                image="/Builder2.avif"
                color="from-purple-600 to-pink-600"
              />
            </div>

            <div className="opacity-0 animate-fadeUp animation-delay-300">
              <BadgeCard
                title="Agent Whisperer"
                description="Deploy 5 autonomous agents"
                image="/progimage.avif"
                color="from-yellow-600 to-orange-600"
              />
            </div>

            <div className="opacity-0 animate-fadeUp animation-delay-400">
              <BadgeCard
                title="Security Guru"
                description="Find 10 vulnerabilities"
                image="/Security-Guru.avif"
                color="from-green-600 to-emerald-600"
              />
            </div>
          </div>

          <div className="mt-20 bg-white dark:bg-zinc-900/60 border border-pink-200 dark:border-pink-900/40 rounded-2xl p-10 backdrop-blur-md shadow-lg transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">
                  Your Progress is{" "}
                  <span className="text-pink-600 dark:text-pink-500">
                    Permanent
                  </span>
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-base mb-6 leading-relaxed">
                  Every badge you earn and every challenge you complete is
                  locked forever into Arweave. It&apso;s not just progress — it&apos;s
                  proof. Immutable. Unstoppable.
                </p>
                <Link href="/profile">
                  <Button className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white shadow-md transition-transform hover:scale-105">
                    🚀 Create Your Profile
                  </Button>
                </Link>
              </div>
              <div className="relative h-[200px] flex items-center justify-center">
                <div className="w-full h-8 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden shadow-inner border border-zinc-300 dark:border-zinc-700">
                  <div className="h-full w-[65%] bg-gradient-to-r from-pink-600 to-purple-600 rounded-full relative transition-all duration-500">
                    <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-white">
                      🔥 Level 6 — 65% to Level 7
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative bg-white dark:bg-zinc-950">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-100/40 to-pink-100/40 dark:from-purple-900/30 dark:to-pink-900/30 border border-purple-200 dark:border-purple-800/50 rounded-2xl p-10 md:p-16 backdrop-blur-xl shadow-[0_0_80px_0_rgba(165,105,255,0.15)] transition-all duration-300">
            <div className="text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-[0_0_12px_rgba(72,209,204,0.5)]">
                Ready to{" "}
                <span className="text-cyan-600 dark:text-cyan-400">
                  Hack the Future
                </span>
                ?
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto">
                Join an elite community of hackers, developers, and explorers
                shaping the decentralized frontier.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <Link href="/signup">
                  <Button className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-5 text-lg font-semibold shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105">
                    Start Hacking
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="https://discord.gg/ctfao" target="_blank">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto border-cyan-600 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-950 hover:text-cyan-700 dark:hover:text-cyan-300 px-8 py-5 text-lg font-semibold transition-all duration-300 hover:shadow-md hover:shadow-cyan-500/20"
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
  );
}
