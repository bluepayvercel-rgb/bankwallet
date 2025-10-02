"use client"
import { ArrowLeft, Camera, MessageCircle, Fingerprint, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function CreatePinPage() {
  const router = useRouter()
  const [pin, setPin] = useState("")
  const [error, setError] = useState("")

  const handleNumberClick = (num: string) => {
    if (pin.length < 4) {
      setPin(pin + num)
      setError("")
    }
  }

  const handleDelete = () => {
    setPin(pin.slice(0, -1))
    setError("")
  }

  const handleSubmit = () => {
    if (pin.length === 4) {
      // Get user data from localStorage
      const userData = localStorage.getItem("bluepay_user")
      if (userData) {
        const user = JSON.parse(userData)
        // Store PIN with user data
        user.pin = pin
        localStorage.setItem("bluepay_user", JSON.stringify(user))
        // Redirect to dashboard
        router.push("/dashboard")
      }
    } else {
      setError("Please enter a 4-digit PIN")
    }
  }

  return (
    <div className="min-h-screen bg-[#0000FF] text-white">
      {/* Header */}
      <header className="px-6 py-6 flex items-center justify-between">
        <Link href="/signup" className="text-white hover:text-white/80">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-xl font-semibold">Create PIN</h1>
        <div className="w-6 h-6" />
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center px-6 py-12">
        {/* Camera Icon */}
        <div className="relative mb-12">
          <div className="w-32 h-32 rounded-full bg-blue-600/50 flex items-center justify-center">
            <Camera className="w-12 h-12 text-white" />
          </div>
          <div className="absolute bottom-0 right-0 w-10 h-10 rounded-full bg-white flex items-center justify-center">
            <div className="w-6 h-6 text-[#0000FF]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
            </div>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold mb-4">Enter Your Passcode</h2>
        <p className="text-white/80 mb-12">Create a 4-digit PIN for your wallet</p>

        {/* PIN Display */}
        <div className="flex gap-6 mb-16">
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className={`w-16 h-16 rounded-full border-2 ${
                pin.length > index ? "bg-white border-white" : "border-white/50"
              }`}
            />
          ))}
        </div>

        {error && <p className="text-red-300 mb-4">{error}</p>}

        {/* Number Pad */}
        <div className="grid grid-cols-3 gap-6 mb-12 max-w-sm w-full">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              onClick={() => handleNumberClick(num.toString())}
              className="w-20 h-20 rounded-full bg-blue-700/50 hover:bg-blue-700/70 text-2xl font-semibold transition-colors mx-auto"
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => handleNumberClick("0")}
            className="w-20 h-20 rounded-full bg-blue-700/50 hover:bg-blue-700/70 text-2xl font-semibold transition-colors mx-auto"
          >
            0
          </button>
          <button
            onClick={handleSubmit}
            className="w-20 h-20 rounded-full bg-white hover:bg-white/90 flex items-center justify-center transition-colors mx-auto"
          >
            <Fingerprint className="w-8 h-8 text-[#0000FF]" />
          </button>
          <button
            onClick={handleDelete}
            className="w-20 h-20 rounded-full bg-white hover:bg-white/90 flex items-center justify-center transition-colors mx-auto"
          >
            <X className="w-8 h-8 text-[#0000FF]" />
          </button>
        </div>

        {/* Reset Link */}
        <div className="text-center">
          <p className="text-white/80 mb-2">Forgotten your passcode?</p>
          <button className="text-white font-medium hover:text-white/80">Reset passcode</button>
        </div>
      </main>

      {/* Floating Chat Button */}
      <a
        href="https://t.me/cashtubspport"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-colors"
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  )
}
