"use client"
import { ArrowLeft, Camera, MessageCircle, Fingerprint, X } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function SignInPage() {
  const router = useRouter()
  const [pin, setPin] = useState("")
  const [error, setError] = useState("")
  const [hasAccount, setHasAccount] = useState(false)
  const [showFingerprintAuth, setShowFingerprintAuth] = useState(false)
  const [authStep, setAuthStep] = useState<"authenticating" | "success">("authenticating")

  useEffect(() => {
    // Check if user exists in localStorage
    const userData = localStorage.getItem("bluepay_user")
    if (userData) {
      setHasAccount(true)
    } else {
      // No account found, redirect to signup
      router.push("/signup")
    }
  }, [router])

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

  const handleFingerprintAuth = () => {
    setShowFingerprintAuth(true)
    setAuthStep("authenticating")

    // Simulate authentication process
    setTimeout(() => {
      setAuthStep("success")
      // After showing success, redirect to dashboard
      setTimeout(() => {
        router.push("/dashboard")
      }, 2000)
    }, 2000)
  }

  const handleSubmit = () => {
    if (pin.length === 4) {
      // Get user data from localStorage
      const userData = localStorage.getItem("bluepay_user")
      if (userData) {
        const user = JSON.parse(userData)
        // Verify PIN
        if (user.pin === pin) {
          // Correct PIN, redirect to dashboard
          router.push("/dashboard")
        } else {
          setError("Incorrect PIN. Please try again.")
          setPin("")
        }
      }
    } else {
      setError("Please enter a 4-digit PIN")
    }
  }

  if (!hasAccount) {
    return null // Will redirect to signup
  }

  return (
    <div className="min-h-screen bg-[#0000FF] text-white">
      {/* Header */}
      <header className="px-6 py-6 flex items-center justify-between">
        <Link href="/" className="text-white hover:text-white/80">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-xl font-semibold">Sign In</h1>
        <div className="w-6 h-6" />
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center px-6 py-12">
        {/* Camera Icon */}
        <div className="relative mb-12">
          <div className="w-32 h-32 rounded-full bg-blue-600/50 flex items-center justify-center">
            <Camera className="w-12 h-12 text-white" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold mb-4">Enter Your Passcode</h2>
        <p className="text-white/80 mb-12">Enter your 4-digit PIN to sign in</p>

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
            className="w-20 h-20 rounded-full bg-blue-700/50 hover:bg-blue-700/70 text-2xl font-semibold transition-colors mx-auto col-start-2"
          >
            0
          </button>
          <button
            onClick={handleFingerprintAuth}
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

      {showFingerprintAuth && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 animate-in fade-in duration-200">
          {authStep === "authenticating" && (
            <div className="bg-white rounded-3xl w-11/12 max-w-sm p-8 animate-in zoom-in duration-300">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-6 animate-pulse">
                  <Fingerprint className="w-12 h-12 text-[#0000FF]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Authenticating fingerprint</h3>
                <p className="text-gray-600 text-center">checking stored data</p>
              </div>
            </div>
          )}

          {authStep === "success" && (
            <div className="bg-white rounded-3xl w-11/12 max-w-sm p-8 animate-in zoom-in duration-300">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Authentication Successful</h3>
                <p className="text-gray-600 text-center">Fingerprint verified successfully!</p>
              </div>
            </div>
          )}
        </div>
      )}

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
