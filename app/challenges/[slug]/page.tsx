"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Clock, Trophy, Users, BookmarkPlus, Share2, Sword, Shield, Flag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { RoleSelectionModal } from "@/components/role-selection-modal"
import { LabInterface } from "@/components/lab-interface"
import { ProfileWidget } from "@/components/profile-widget"
import { cn } from "@/lib/utils"

// Mock data - in a real app, this would come from an API
const mockUserData = {
  currentXp: 3250,
  maxXp: 5000,
  level: 6,
  skills: [
    { name: "Exploitation", value: 75, color: "rgba(239, 68, 68, 0.8)" },
    { name: "Recon", value: 85, color: "rgba(59, 130, 246, 0.8)" },
    { name: "Forensics", value: 60, color: "rgba(16, 185, 129, 0.8)" },
    { name: "Crypto", value: 45, color: "rgba(245, 158, 11, 0.8)" },
    { name: "Detection", value: 55, color: "rgba(139, 92, 246, 0.8)" },
    { name: "Defense", value: 40, color: "rgba(236, 72, 153, 0.8)" },
  ],
  suggestedChallenge: {
    id: "crypto-conundrum",
    title: "Crypto Conundrum",
    category: "Cryptography",
  },
}

// Mock challenge data
const mockChallenge = {
  id: "permaleak-protocol",
  title: "PermaLeak Protocol",
  description: "Exploit broken access controls in Arweave-based storage apps.",
  difficulty: "Beginner",
  category: "Storage",
  points: 250,
  completions: 128,
  timeEstimate: "1-2 hours",
  xpReward: 500,
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
  redTeamBriefing: `
    <p>As a Red Team operator, your mission is to penetrate the PermaLeak storage protocol and exfiltrate sensitive data.</p>
    <p>Intelligence suggests that the protocol has implemented custom access controls on top of Arweave's permaweb, but these controls may have implementation flaws.</p>
    <p>Your objective is to identify and exploit these vulnerabilities to gain unauthorized access to protected files. The target system is live and accessible through the lab environment.</p>
    <p>Success criteria: Obtain the secret flag stored in the protected data repository.</p>
  `,
  blueTeamBriefing: `
    <p>As a Blue Team defender, you've been alerted to potential vulnerabilities in the PermaLeak storage protocol that your organization uses.</p>
    <p>Security scans have flagged the custom access control implementation as potentially flawed. Your task is to analyze the system, identify the vulnerabilities, and implement proper fixes before attackers can exploit them.</p>
    <p>You have access to the system logs, protocol implementation, and monitoring tools through the lab environment.</p>
    <p>Success criteria: Identify all vulnerabilities, implement proper fixes, and verify that the protected data remains secure.</p>
  `,
  resources: [
    { name: "Arweave Documentation", url: "#" },
    { name: "Storage Protocol Basics", url: "#" },
    { name: "Common Vulnerabilities in Decentralized Systems", url: "#" },
  ],
}

export default function ChallengePage() {
  const [selectedRole, setSelectedRole] = useState<"red" | "blue" | null>(null)
  const [showRoleModal, setShowRoleModal] = useState(false)
  const [flagInput, setFlagInput] = useState("")
  const [flagSubmitted, setFlagSubmitted] = useState(false)
  const [flagCorrect, setFlagCorrect] = useState(false)

  // In a real app, you would fetch the challenge data based on the slug
  const challenge = mockChallenge

  useEffect(() => {
    // Show role selection modal when the page loads
    setShowRoleModal(true)
  }, [])

  const handleRoleSelect = (role: "red" | "blue") => {
    setSelectedRole(role)
    // In a real app, you might want to fetch role-specific data here
  }

  const handleFlagSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFlagSubmitted(true)

    // Mock flag validation - in a real app, this would be validated on the server
    const isCorrect = flagInput.trim().toLowerCase() === "flag{permaleak_access_control_bypass}"
    setFlagCorrect(isCorrect)

    // Reset after 5 seconds if incorrect
    if (!isCorrect) {
      setTimeout(() => {
        setFlagSubmitted(false)
      }, 5000)
    }
  }

  const handleRoleChange = () => {
    setShowRoleModal(true)
  }

  return (
    <div className="container px-4 py-12">
      <RoleSelectionModal
        isOpen={showRoleModal}
        onClose={() => setShowRoleModal(false)}
        onRoleSelect={handleRoleSelect}
        challengeTitle={challenge.title}
      />

      <Link href="/challenges" className="inline-flex items-center text-sm text-zinc-400 hover:text-white mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Challenges
      </Link>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-zinc-900/70 border border-zinc-800 rounded-xl p-6 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Badge className="bg-purple-600">{challenge.category}</Badge>
                  <Badge className="bg-zinc-700">{challenge.difficulty}</Badge>
                  {selectedRole && (
                    <Badge
                      className={cn(
                        selectedRole === "red" ? "bg-red-900/50 text-red-400" : "bg-blue-900/50 text-blue-400",
                      )}
                    >
                      {selectedRole === "red" ? (
                        <Sword className="h-3 w-3 mr-1" />
                      ) : (
                        <Shield className="h-3 w-3 mr-1" />
                      )}
                      {selectedRole === "red" ? "Red Team" : "Blue Team"}
                    </Badge>
                  )}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">{challenge.title}</h1>
                <p className="text-zinc-400 mt-2">{challenge.description}</p>
              </div>
              <div className="mt-4 md:mt-0 flex items-center space-x-2">
                <Button variant="outline" className="border-zinc-700 text-zinc-400" onClick={handleRoleChange}>
                  Change Role
                </Button>
                <Button variant="outline" className="border-zinc-700 text-zinc-400">
                  <BookmarkPlus className="mr-2 h-4 w-4" />
                  Save
                </Button>
                <Button variant="outline" className="border-zinc-700 text-zinc-400">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center text-zinc-400">
                <Trophy className="mr-2 h-4 w-4 text-yellow-500" />
                <span>{challenge.points} points</span>
              </div>
              <div className="flex items-center text-zinc-400">
                <Clock className="mr-2 h-4 w-4 text-blue-500" />
                <span>{challenge.timeEstimate}</span>
              </div>
              <div className="flex items-center text-zinc-400">
                <Users className="mr-2 h-4 w-4 text-green-500" />
                <span>{challenge.completions} completions</span>
              </div>
              <div className="flex items-center text-zinc-400">
                <Trophy className="mr-2 h-4 w-4 text-purple-500" />
                <span>{challenge.xpReward} XP</span>
              </div>
            </div>

            {selectedRole && (
              <div
                className={cn(
                  "mb-6 p-4 rounded-lg",
                  selectedRole === "red"
                    ? "bg-red-950/20 border border-red-900/30"
                    : "bg-blue-950/20 border border-blue-900/30",
                )}
              >
                <div className="flex items-center mb-2">
                  {selectedRole === "red" ? (
                    <Sword className="h-5 w-5 text-red-500 mr-2" />
                  ) : (
                    <Shield className="h-5 w-5 text-blue-500 mr-2" />
                  )}
                  <h3 className="text-lg font-bold">
                    {selectedRole === "red" ? "Red Team Briefing" : "Blue Team Briefing"}
                  </h3>
                </div>
                <div
                  className="text-sm"
                  dangerouslySetInnerHTML={{
                    __html: selectedRole === "red" ? challenge.redTeamBriefing : challenge.blueTeamBriefing,
                  }}
                />
              </div>
            )}

            {/* Lab Interface */}
            {selectedRole && (
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-3">Lab Environment</h3>
                <LabInterface role={selectedRole} challengeId={challenge.id} />
              </div>
            )}

            {/* Flag Submission */}
            <div>
              <h3 className="text-lg font-bold mb-3">Submit Flag</h3>
              <form onSubmit={handleFlagSubmit} className="space-y-4">
                <div className="flex gap-3">
                  <Input
                    type="text"
                    placeholder="Enter flag (e.g., flag{...})"
                    value={flagInput}
                    onChange={(e) => setFlagInput(e.target.value)}
                    className="bg-zinc-800 border-zinc-700 text-white"
                  />
                  <Button
                    type="submit"
                    className={cn(
                      "px-6",
                      selectedRole === "red"
                        ? "bg-gradient-to-r from-red-700 to-red-600 hover:from-red-800 hover:to-red-700"
                        : selectedRole === "blue"
                          ? "bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-700"
                          : "bg-purple-600 hover:bg-purple-700",
                    )}
                  >
                    <Flag className="mr-2 h-4 w-4" />
                    Submit
                  </Button>
                </div>
                {flagSubmitted && (
                  <Alert
                    className={cn(
                      flagCorrect
                        ? "bg-green-950/20 border-green-900/30 text-green-400"
                        : "bg-red-950/20 border-red-900/30 text-red-400",
                    )}
                  >
                    <AlertDescription>
                      {flagCorrect
                        ? "Congratulations! You've successfully completed the challenge."
                        : "Incorrect flag. Please try again."}
                    </AlertDescription>
                  </Alert>
                )}
              </form>
            </div>
          </div>

          <div className="bg-zinc-900/70 border border-zinc-800 rounded-xl overflow-hidden">
            <Tabs defaultValue="details">
              <TabsList className="bg-zinc-800 p-0 h-12">
                <TabsTrigger
                  value="details"
                  className="h-12 rounded-none data-[state=active]:bg-zinc-900 data-[state=active]:border-b-2 data-[state=active]:border-purple-500"
                >
                  Details
                </TabsTrigger>
                <TabsTrigger
                  value="discussion"
                  className="h-12 rounded-none data-[state=active]:bg-zinc-900 data-[state=active]:border-b-2 data-[state=active]:border-purple-500"
                >
                  Discussion
                </TabsTrigger>
                <TabsTrigger
                  value="solutions"
                  className="h-12 rounded-none data-[state=active]:bg-zinc-900 data-[state=active]:border-b-2 data-[state=active]:border-purple-500"
                >
                  Solutions
                </TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="p-6">
                <div
                  className="prose prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tighter prose-p:text-zinc-400 prose-li:text-zinc-400"
                  dangerouslySetInnerHTML={{ __html: challenge.content }}
                />
              </TabsContent>
              <TabsContent value="discussion" className="p-6">
                <div className="bg-zinc-800 rounded-lg p-4">
                  <p className="text-zinc-400 mb-2">
                    Comments are only visible after you&apos;ve completed the challenge or if they&apos;re marked as non-spoiler.
                  </p>
                  <Button variant="outline" className="border-zinc-700 text-zinc-400">
                    Complete Challenge to View
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="solutions" className="p-6">
                <div className="bg-zinc-800 rounded-lg p-4">
                  <p className="text-zinc-400 mb-2">Solutions are only visible after you&apos;ve completed the challenge.</p>
                  <Button variant="outline" className="border-zinc-700 text-zinc-400">
                    Complete Challenge to View
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <div>
          <div className="bg-zinc-900/70 border border-zinc-800 rounded-xl p-6 mb-8 sticky top-24">
            <h3 className="text-xl font-bold mb-4">Challenge Metadata</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-zinc-400 mb-1">Role</h4>
                <div className="flex items-center">
                  {selectedRole ? (
                    <>
                      {selectedRole === "red" ? (
                        <Sword className="h-4 w-4 text-red-500 mr-2" />
                      ) : (
                        <Shield className="h-4 w-4 text-blue-500 mr-2" />
                      )}
                      <span className="text-white font-medium">
                        {selectedRole === "red" ? "Red Team (Offensive)" : "Blue Team (Defensive)"}
                      </span>
                    </>
                  ) : (
                    <span className="text-zinc-500">Not selected</span>
                  )}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-zinc-400 mb-1">Difficulty</h4>
                <span className="text-white">{challenge.difficulty}</span>
              </div>
              <div>
                <h4 className="text-sm font-medium text-zinc-400 mb-1">Category</h4>
                <span className="text-white">{challenge.category}</span>
              </div>
              <div>
                <h4 className="text-sm font-medium text-zinc-400 mb-1">XP Reward</h4>
                <span className="text-white">{challenge.xpReward} XP</span>
              </div>
              <div>
                <h4 className="text-sm font-medium text-zinc-400 mb-1">Skills</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-red-900/30 text-red-400">Exploitation</Badge>
                  <Badge className="bg-blue-900/30 text-blue-400">Recon</Badge>
                  <Badge className="bg-green-900/30 text-green-400">Storage</Badge>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/70 border border-zinc-800 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              {challenge.resources.map((resource, index) => (
                <li key={index}>
                  <Link href={resource.url} className="text-cyan-400 hover:text-cyan-300 hover:underline">
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Profile Widget */}
          <ProfileWidget
            currentXp={mockUserData.currentXp}
            maxXp={mockUserData.maxXp}
            level={mockUserData.level}
            skills={mockUserData.skills}
            suggestedChallenge={mockUserData.suggestedChallenge}
          />
        </div>
      </div>
    </div>
  )
}
