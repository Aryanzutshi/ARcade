"use client"

import { useState } from "react"
import { Shield, Sword } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface RoleSelectionModalProps {
  isOpen: boolean
  onClose: () => void
  onRoleSelect: (role: "red" | "blue") => void
  challengeTitle: string
}

export function RoleSelectionModal({ isOpen, onClose, onRoleSelect, challengeTitle }: RoleSelectionModalProps) {
  const [selectedRole, setSelectedRole] = useState<"red" | "blue" | null>(null)

  const handleRoleSelect = (role: "red" | "blue") => {
    setSelectedRole(role)
  }

  const handleConfirm = () => {
    if (selectedRole) {
      onRoleSelect(selectedRole)
      onClose()
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-zinc-900 border border-zinc-800 text-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold tracking-tight">Choose Your Role</DialogTitle>
          <DialogDescription className="text-zinc-400">
            Select your approach for the <span className="text-white font-medium">{challengeTitle}</span> challenge
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4 py-4">
          <button
            onClick={() => handleRoleSelect("red")}
            className={cn(
              "flex flex-col items-center justify-center p-6 rounded-lg border border-zinc-800 bg-zinc-800/50 hover:bg-red-950/20 hover:border-red-800/50 transition-all",
              selectedRole === "red" && "bg-red-950/20 border-red-800/50",
            )}
          >
            <div className="w-16 h-16 rounded-full bg-red-900/30 flex items-center justify-center mb-4">
              <Sword className="h-8 w-8 text-red-500" />
            </div>
            <h3 className="text-lg font-bold text-red-500">Red Team</h3>
            <p className="text-sm text-zinc-400 text-center mt-2">
              Offensive approach focused on exploiting vulnerabilities
            </p>
          </button>
          <button
            onClick={() => handleRoleSelect("blue")}
            className={cn(
              "flex flex-col items-center justify-center p-6 rounded-lg border border-zinc-800 bg-zinc-800/50 hover:bg-blue-950/20 hover:border-blue-800/50 transition-all",
              selectedRole === "blue" && "bg-blue-950/20 border-blue-800/50",
            )}
          >
            <div className="w-16 h-16 rounded-full bg-blue-900/30 flex items-center justify-center mb-4">
              <Shield className="h-8 w-8 text-blue-500" />
            </div>
            <h3 className="text-lg font-bold text-blue-500">Blue Team</h3>
            <p className="text-sm text-zinc-400 text-center mt-2">
              Defensive approach focused on detection and protection
            </p>
          </button>
        </div>
        <div className="flex justify-end gap-3 mt-2">
          <Button variant="outline" onClick={onClose} className="border-zinc-700 text-zinc-400">
            Cancel
          </Button>
          <Button
            onClick={handleConfirm}
            disabled={!selectedRole}
            className={cn(
              "text-white",
              selectedRole === "red"
                ? "bg-gradient-to-r from-red-700 to-red-600 hover:from-red-800 hover:to-red-700"
                : selectedRole === "blue"
                  ? "bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-700"
                  : "bg-zinc-700 hover:bg-zinc-600",
            )}
          >
            Confirm Selection
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
