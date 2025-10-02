"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, MessageSquare } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function ResetBalancePage() {
  const router = useRouter()
  const [bpcCode, setBpcCode] = useState("")
  const [isResetting, setIsResetting] = useState(false)

  const handleReset = () => {
    if (bpcCode.trim()) {
      setIsResetting(true)
      // Simulate reset process
      setTimeout(() => {
        // Update balance in localStorage
        const storedUser = localStorage.getItem("bluepay_user")
        if (storedUser) {
          const user = JSON.parse(storedUser)
          user.balance = 200000
          localStorage.setItem("bluepay_user", JSON.stringify(user))
        }
        router.push("/dashboard")
      }, 2000)
    }
  }

  return (
    <div className="min-h-screen bg-[#0000FF]">
      {/* Header */}
      <header className="bg-[#0000FF] text-white px-4 py-4 flex items-center">
        <Link href="/profile" className="text-white">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-xl font-bold ml-auto mr-auto">Reset Balance</h1>
      </header>

      {/* Main Content */}
      <main className="px-4 py-12 flex flex-col items-center">
        {/* Icon */}
        <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-8">
          <svg className="w-16 h-16 text-[#0000FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-white mb-4 text-center">Reset Your Balance</h2>
        <p className="text-white/90 text-center mb-12 max-w-md">
          Enter your BPC code to reset your account balance to ₦200,000
        </p>

        {/* Form Card */}
        <div className="w-full max-w-md bg-white rounded-3xl p-6 space-y-6">
          {/* BPC Code Input */}
          <div>
            <label className="block text-gray-700 font-semibold mb-3">BPC Code</label>
            <Input
              type="text"
              value={bpcCode}
              onChange={(e) => setBpcCode(e.target.value)}
              placeholder="Enter your BPC code"
              className="w-full text-lg py-6 border-gray-300"
            />
          </div>

          {/* Current Balance */}
          <div>
            <label className="block text-gray-700 font-semibold mb-3">Current Balance</label>
            <p className="text-4xl font-bold text-[#0000FF]">₦200,000</p>
          </div>

          {/* After Reset */}
          <div className="bg-green-50 rounded-2xl p-4">
            <label className="block text-gray-700 font-semibold mb-2">After Reset</label>
            <p className="text-4xl font-bold text-green-600">₦200,000</p>
          </div>

          {/* Reset Button */}
          <Button
            onClick={handleReset}
            disabled={!bpcCode.trim() || isResetting}
            className="w-full bg-[#0000FF] hover:bg-[#0000DD] text-white py-6 rounded-2xl text-lg font-semibold disabled:opacity-50"
          >
            {isResetting ? "Resetting..." : "Reset Balance"}
          </Button>

          {/* Warning Text */}
          <p className="text-center text-gray-500 text-sm">
            This action will reset your balance to ₦200,000. This cannot be undone.
          </p>
        </div>
      </main>

      {/* Floating Chat Button */}
      <a
        href="https://t.me/cashtubspport"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-xl hover:bg-blue-700 transition-colors z-40"
      >
        <MessageSquare className="w-6 h-6 text-white" />
      </a>
    </div>
  )
}
