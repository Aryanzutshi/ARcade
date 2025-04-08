"use client"

import { useState } from "react"
import Link from "next/link"
import { Terminal, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b border-purple-900/30 dark:border-purple-900/30 backdrop-blur-sm fixed top-0 w-full z-50 bg-white/80 dark:bg-black/80">
      <div className="container flex items-center justify-between h-16 px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Terminal className="h-6 w-6 text-purple-500" />
          <span className="font-mono text-lg font-bold tracking-tight text-purple-500">ARcade</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link
            href="/"
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link
            href="/challenges"
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            Challenges
          </Link>
          <Link
            href="/learn"
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            Learn
          </Link>
          <Link
            href="/profile"
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            Profile
          </Link>
          <Link
            href="/leaderboard"
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            Leaderboard
          </Link>
          <Link
            href="/ctf"
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            CTF(Capture the Flag)
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
            Connect Wallet
          </Button>
        </div>

        <div className="flex md:hidden items-center space-x-4">
          <ThemeToggle />
          <button
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-zinc-900/95 backdrop-blur-sm border-b border-zinc-200 dark:border-zinc-800">
          <div className="container px-4 py-4">
            <nav className="flex flex-col space-y-4 text-sm font-medium">
              <Link
                href="/"
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/challenges"
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Challenges
              </Link>
              <Link
                href="/learn"
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Learn
              </Link>
              <Link
                href="/profile"
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Profile
              </Link>
              <Link
                href="/leaderboard"
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Leaderboard
              </Link>
              <Link
                href="/ctf"
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                CTF(Capture the Flag)
              </Link>
            </nav>
            <div className="flex flex-col space-y-2 mt-6">
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                Connect Wallet
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
