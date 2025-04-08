"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, X } from "lucide-react"

export function TerminalFooter() {
  const [command, setCommand] = useState("")
  const [output, setOutput] = useState<string[]>([
    "Welcome to CTF.AO Terminal v1.0.0",
    'Type "help" for available commands.',
  ])
  const [isOpen, setIsOpen] = useState(false)

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault()

    if (!command.trim()) return

    // Add command to output
    setOutput((prev) => [...prev, `> ${command}`])

    // Process command
    const cmd = command.toLowerCase().trim()

    switch (cmd) {
      case "help":
        setOutput((prev) => [
          ...prev,
          "Available commands:",
          "  help     - Show this help message",
          "  about    - About CTF.AO",
          "  contact  - Contact information",
          "  clear    - Clear terminal",
          "  secret   - ???",
        ])
        break
      case "about":
        setOutput((prev) => [
          ...prev,
          "CTF.AO is a Web3 CTF and learning platform built on Arweave.",
          "Learn decentralized computing, security, and protocol design through hands-on challenges.",
        ])
        break
      case "contact":
        setOutput((prev) => [...prev, "Discord: discord.gg/ctfao", "Twitter: @ctf_ao", "Email: team@ctf.ao"])
        break
      case "clear":
        setOutput(["Terminal cleared."])
        break
      case "secret":
        setOutput((prev) => [
          ...prev,
          "You found a secret command!",
          "Visit /secret-challenge to access an exclusive CTF challenge.",
        ])
        break
      default:
        setOutput((prev) => [...prev, `Command not found: ${command}`])
    }

    // Clear input
    setCommand("")
  }

  return (
    <footer className="border-t border-zinc-800 relative">
      <div className="container px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">CTF.AO</h3>
            <p className="text-zinc-400 text-sm mb-4">The future of decentralized learning, built on Arweave and AO.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                  Challenges
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                  Leaderboard
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Community</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                  Discord
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                  GitHub
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-zinc-500">&copy; {new Date().getFullYear()} CTF.AO. All rights reserved.</p>
          <button
            onClick={() => setIsOpen(true)}
            className="mt-4 md:mt-0 text-xs text-zinc-500 hover:text-white transition-colors flex items-center"
          >
            Open Terminal <ChevronRight className="ml-1 h-3 w-3" />
          </button>
        </div>
      </div>

      {/* Terminal overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-end">
          <div className="w-full h-[300px] bg-zinc-900 border-t border-zinc-700 p-4 font-mono text-sm">
            <div className="flex justify-between items-center mb-2">
              <div className="text-zinc-400">CTF.AO Terminal</div>
              <button onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-white">
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="h-[200px] overflow-y-auto mb-2 text-zinc-300">
              {output.map((line, i) => (
                <div key={i} className={line.startsWith(">") ? "text-green-400" : ""}>
                  {line}
                </div>
              ))}
            </div>

            <form onSubmit={handleCommand} className="flex items-center">
              <span className="text-green-400 mr-2">{">"}</span>
              <input
                type="text"
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                className="flex-1 bg-transparent outline-none"
                autoFocus
              />
            </form>
          </div>
        </div>
      )}
    </footer>
  )
}
