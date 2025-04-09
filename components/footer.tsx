"use client"

import { Terminal, ChevronRight, X } from 'lucide-react';
import React, { useState } from "react"
import Link from "next/link"

export function Footer() {
  const [command, setCommand] = useState("")
  const [output, setOutput] = useState<string[]>([
    "Welcome to ARcade Terminal v1.0.0",
    'Type "help" for available commands.',
  ])
  const [isOpen, setIsOpen] = useState(false)

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault()
    if (!command.trim()) return

    const cmd = command.toLowerCase().trim()
    setOutput((prev) => [...prev, `> ${command}`])

    switch (cmd) {
      case "help":
        setOutput((prev) => [
          ...prev,
          "Available commands:",
          "  help     - Show this help message",
          "  about    - About ARcade",
          "  contact  - Contact information",
          "  clear    - Clear terminal",
          "  secret   - ???",
        ])
        break
      case "about":
        setOutput((prev) => [
          ...prev,
          "ARcade is a Web3 CTF and learning platform built on Arweave.",
          "Learn decentralized computing, security, and protocol design through hands-on challenges.",
        ])
        break
      case "contact":
        setOutput((prev) => [
          ...prev,
          "Discord: discord.gg/ctfao",
          "Twitter: @ctf_ao",
          "Email: team@ARcade",
        ])
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

    setCommand("")
  }

  return (
    <footer className="border-t border-zinc-300 dark:border-zinc-800 relative bg-white dark:bg-black transition-colors">
      <div className="container px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Terminal className="h-6 w-6 text-purple-600 dark:text-purple-500" />
            <h3 className="text-lg font-bold mb-4 text-black dark:text-white">ARcade</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">
              The future of decentralized learning, built on Arweave and AO.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-black dark:text-white">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/challenges" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
                  Challenges
                </Link>
              </li>
              <li>
                <Link href="/learn" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
                  Learn
                </Link>
              </li>
              <li>
                <Link href="/leaderboard" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
                  Leaderboard
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-black dark:text-white">Community</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="https://discord.gg/ctfao"
                  target="_blank"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  Discord
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com/ctf_ao"
                  target="_blank"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/ctf-ao"
                  target="_blank"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  GitHub
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-zinc-300 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            &copy; {new Date().getFullYear()} ARcade. All rights reserved.
          </p>
          <button
            onClick={() => setIsOpen(true)}
            className="mt-4 md:mt-0 text-xs text-zinc-600 dark:text-zinc-500 hover:text-black dark:hover:text-white transition-colors flex items-center"
          >
            Open Terminal <ChevronRight className="ml-1 h-3 w-3" />
          </button>
        </div>
      </div>

      {/* Terminal overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-white/90 dark:bg-black/80 z-50 flex items-end transition-colors">
          <div className="w-full h-[300px] bg-zinc-100 dark:bg-zinc-900 border-t border-zinc-300 dark:border-zinc-700 p-4 font-mono text-sm text-black dark:text-white">
            <div className="flex justify-between items-center mb-2">
              <div className="text-zinc-600 dark:text-zinc-400">ARcade Terminal</div>
              <button onClick={() => setIsOpen(false)} className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white">
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="h-[200px] overflow-y-auto mb-2">
              {output.map((line, i) => (
                <div key={i} className={line.startsWith(">") ? "text-green-600 dark:text-green-400" : ""}>
                  {line}
                </div>
              ))}
            </div>

            <form onSubmit={handleCommand} className="flex items-center">
              <span className="text-green-600 dark:text-green-400 mr-2">{">"}</span>
              <input
                type="text"
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                className="flex-1 bg-transparent outline-none text-black dark:text-white placeholder:text-zinc-400"
                autoFocus
              />
            </form>
          </div>
        </div>
      )}
    </footer>
  )
}
