"use client"

import type React from "react"

import { useState } from "react"
import { Terminal, Maximize2, Minimize2, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface LabInterfaceProps {
  role: "red" | "blue"
  challengeId: string
}

export function LabInterface({ role, challengeId }: LabInterfaceProps) {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    "Welcome to the CTF.AO Lab Environment",
    `Role: ${role === "red" ? "Red Team (Offensive)" : "Blue Team (Defensive)"}`,
    `Challenge: ${challengeId}`,
    "Type 'help' for available commands.",
    "",
  ])
  const [command, setCommand] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault()

    if (!command.trim()) return

    // Add command to output
    setTerminalOutput((prev) => [...prev, `$ ${command}`])

    // Process command
    const cmd = command.toLowerCase().trim()
    setIsLoading(true)

    // Simulate processing delay
    setTimeout(() => {
      switch (cmd) {
        case "help":
          setTerminalOutput((prev) => [
            ...prev,
            "Available commands:",
            "  help     - Show this help message",
            "  scan     - Scan the target system",
            "  exploit  - Attempt to exploit a vulnerability",
            "  analyze  - Analyze system logs or traffic",
            "  defend   - Implement defensive measures",
            "  clear    - Clear terminal",
            "",
          ])
          break
        case "scan":
          if (role === "red") {
            setTerminalOutput((prev) => [
              ...prev,
              "Scanning target system...",
              "Found open ports: 22, 80, 443, 8080",
              "Detected service: Web application running on port 8080",
              "Potential vulnerability: Outdated authentication module",
              "",
            ])
          } else {
            setTerminalOutput((prev) => [
              ...prev,
              "Scanning internal systems...",
              "Detected unusual traffic patterns on port 8080",
              "Possible intrusion attempt from IP 192.168.1.254",
              "Recommendation: Check authentication logs",
              "",
            ])
          }
          break
        case "exploit":
          if (role === "red") {
            setTerminalOutput((prev) => [
              ...prev,
              "Attempting to exploit authentication vulnerability...",
              "Bypassing authentication checks...",
              "Access granted to admin panel!",
              "Searching for sensitive data...",
              "",
            ])
          } else {
            setTerminalOutput((prev) => [
              ...prev,
              "Error: 'exploit' command is only available for Red Team roles.",
              "As Blue Team, use 'analyze' and 'defend' commands instead.",
              "",
            ])
          }
          break
        case "analyze":
          if (role === "blue") {
            setTerminalOutput((prev) => [
              ...prev,
              "Analyzing system logs...",
              "Found suspicious login attempts from IP 192.168.1.254",
              "Authentication bypass attempt detected at 15:42:30",
              "Vulnerability: Outdated authentication module (CVE-2023-1234)",
              "",
            ])
          } else {
            setTerminalOutput((prev) => [
              ...prev,
              "Basic analysis complete.",
              "For more detailed analysis, switch to Blue Team role.",
              "",
            ])
          }
          break
        case "defend":
          if (role === "blue") {
            setTerminalOutput((prev) => [
              ...prev,
              "Implementing defensive measures...",
              "Patching authentication module...",
              "Blocking suspicious IP 192.168.1.254...",
              "Setting up additional monitoring...",
              "Defenses implemented successfully!",
              "",
            ])
          } else {
            setTerminalOutput((prev) => [...prev, "Error: 'defend' command is only available for Blue Team roles.", ""])
          }
          break
        case "clear":
          setTerminalOutput(["Terminal cleared.", ""])
          break
        default:
          setTerminalOutput((prev) => [
            ...prev,
            `Command not found: ${command}`,
            "Type 'help' for available commands.",
            "",
          ])
      }
      setIsLoading(false)
    }, 1000)

    // Clear input
    setCommand("")
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  return (
    <div
      className={cn(
        "bg-black border border-zinc-800 rounded-lg overflow-hidden transition-all",
        isFullscreen ? "fixed inset-0 z-50 rounded-none" : "",
      )}
    >
      <div className="flex items-center justify-between bg-zinc-900 px-4 py-2 border-b border-zinc-800">
        <div className="flex items-center">
          <Terminal className="h-4 w-4 text-zinc-400 mr-2" />
          <span className="text-sm font-medium">Lab Terminal</span>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 text-zinc-400 hover:text-white"
            onClick={() => {
              setTerminalOutput((prev) => [...prev, "Refreshing environment...", ""])
              setTimeout(() => {
                setTerminalOutput([
                  "Environment refreshed.",
                  "Welcome to the CTF.AO Lab Environment",
                  `Role: ${role === "red" ? "Red Team (Offensive)" : "Blue Team (Defensive)"}`,
                  `Challenge: ${challengeId}`,
                  "Type 'help' for available commands.",
                  "",
                ])
              }, 1000)
            }}
          >
            <RefreshCw className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 text-zinc-400 hover:text-white"
            onClick={toggleFullscreen}
          >
            {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </Button>
        </div>
      </div>
      <div
        className={cn(
          "font-mono text-sm bg-black text-green-500 p-4 overflow-auto",
          isFullscreen ? "h-[calc(100vh-40px)]" : "h-80",
        )}
      >
        {terminalOutput.map((line, i) => (
          <div key={i} className={line.startsWith("$") ? "text-white" : ""}>
            {line}
          </div>
        ))}
        {isLoading && <div className="animate-pulse">Processing...</div>}
        <form onSubmit={handleCommand} className="flex items-center mt-2">
          <span className="text-white mr-2">$</span>
          <input
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            className="flex-1 bg-transparent outline-none text-white"
            autoFocus
            disabled={isLoading}
          />
        </form>
      </div>
    </div>
  )
}
