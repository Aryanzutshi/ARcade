"use client";

import { useState } from "react";
import Link from "next/link";
import { Terminal, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import WalletConnect from "@/components/walletConnect"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-purple-900/30 dark:border-purple-900/30 backdrop-blur-sm fixed top-0 w-full z-50 bg-white/80 dark:bg-black/80">
      <div className="container flex items-center justify-between h-16 px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Terminal className="h-6 w-6 text-purple-500" />
          <span className="font-mono text-lg font-bold tracking-tight text-purple-500">
            ARcade
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/challenges" className="nav-link">
            Challenges
          </Link>
          <Link href="/learn" className="nav-link">
            Learn
          </Link>
          <Link href="/profile" className="nav-link">
            Profile
          </Link>
          <Link href="/leaderboard" className="nav-link">
            Leaderboard
          </Link>
          <Link href="/ctf" className="nav-link">
            CTF(Capture the Flag)
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          {/* Wallet Button Here */}
          {/* <Button
            className="bg-gradient-to-r rounded-2xl from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white shadow-md transition-transform hover:scale-105"
          >
            Connect Wallet
          </Button> */}
          <WalletConnect />
        </div>

        <div className="flex md:hidden items-center space-x-4">
          <ThemeToggle />
          <button
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-zinc-900/95 backdrop-blur-sm border-b border-zinc-200 dark:border-zinc-800">
          <div className="container px-4 py-4">
            <nav className="flex flex-col space-y-4 text-sm font-medium">
              {[
                "/",
                "/challenges",
                "/learn",
                "/profile",
                "/leaderboard",
                "/ctf",
              ].map((route, i) => (
                <Link
                  key={i}
                  href={route}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors py-2"
                >
                  {route === "/"
                    ? "Home"
                    : route.replace("/", "").replace("-", " ").toUpperCase()}
                </Link>
              ))}
            </nav>

            <div className="flex flex-col space-y-2 mt-6">
              {/* Wallet Button in Mobile View */}
              <WalletConnect />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
