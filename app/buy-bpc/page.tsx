"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageSquare } from "lucide-react"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function BuyBPCPage() {
  const router = useRouter()
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [countdown, setCountdown] = useState(10)

  useEffect(() => {
    // Get user data from localStorage
    const storedUser = localStorage.getItem("bluepay_user")
    if (storedUser) {
      const user = JSON.parse(storedUser)
      setFullName(user.fullName || "")
      setEmail(user.email || "")
    }
  }, [])

  useEffect(() => {
    if (isProcessing && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1)
      }, 1000)
      return () => clearTimeout(timer)
    } else if (isProcessing && countdown === 0) {
      router.push("/bank-transfer")
    }
  }, [isProcessing, countdown, router])

  const handlePay = () => {
    setIsProcessing(true)
    setCountdown(10)
  }

  if (isProcessing) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        {/* Header */}
        <header className="bg-[#2d3748] text-white px-4 py-4">
          <h1 className="text-xl font-bold tracking-wider text-center">BLUEPAY</h1>
        </header>

        {/* Processing Content */}
        <main className="flex-1 flex flex-col items-center justify-center px-4">
          {/* Circular Progress with Countdown */}
          <div className="relative w-40 h-40 mb-8">
            <svg className="w-40 h-40 transform -rotate-90">
              <circle cx="80" cy="80" r="70" stroke="#e5e7eb" strokeWidth="8" fill="none" />
              <circle
                cx="80"
                cy="80"
                r="70"
                stroke="#0000FF"
                strokeWidth="8"
                fill="none"
                strokeDasharray={`${(countdown / 10) * 440} 440`}
                strokeLinecap="round"
                className="transition-all duration-1000"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-5xl font-bold text-gray-800">{countdown}</span>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Processing your request</h2>
          <p className="text-gray-500 text-center max-w-md">Please wait while we prepare your payment information...</p>
        </main>

        {/* Floating Chat Button */}
        <button className="fixed bottom-6 right-6 w-14 h-14 bg-[#0000FF] rounded-full flex items-center justify-center shadow-xl hover:bg-[#0000DD] transition-colors z-40">
          <MessageSquare className="w-6 h-6 text-white" />
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#0000FF] text-white px-4 py-4">
        <h1 className="text-xl font-bold">Buy BPC Code</h1>
      </header>

      {/* Main Content */}
      <main className="px-4 py-6 max-w-2xl mx-auto">
        {/* Welcome Section */}
        <div className="bg-white border-l-4 border-[#0000FF] rounded-lg p-4 mb-6">
          <p className="text-gray-700 mb-1">
            Welcome back, <span className="font-semibold text-[#0000FF]">{fullName}</span>
          </p>
          <p className="text-sm text-gray-600">
            Email: <span className="text-[#0000FF]">{email}</span>
          </p>
        </div>

        {/* Form */}
        <div className="space-y-6">
          {/* Amount Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Amount</label>
            <Input
              type="text"
              value="₦6,500"
              disabled
              className="w-full text-2xl font-semibold text-gray-800 bg-gray-100 border-gray-200"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Full Name</label>
            <Input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full text-lg border-gray-300"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Your Email Address</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full text-lg border-gray-300"
              placeholder="Enter your email address"
            />
          </div>

          {/* Pay Button */}
          <Button
            onClick={handlePay}
            className="w-full bg-[#0000FF] hover:bg-[#0000DD] text-white py-6 rounded-xl text-lg font-semibold"
          >
            Pay
          </Button>

          {/* Info Text */}
          <p className="text-center text-gray-500 text-sm">
            Your BPC code will be displayed on the app once your payment is confirmed.
          </p>
        </div>
      </main>

      {/* Floating Chat Button */}
      <button className="fixed bottom-6 right-6 w-14 h-14 bg-[#0000FF] rounded-full flex items-center justify-center shadow-xl hover:bg-[#0000DD] transition-colors z-40">
        <MessageSquare className="w-6 h-6 text-white" />
      </button>
    </div>
  )
}
