"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Wallet, MessageSquare, PlusCircle, BarChart3, User, Gift, Copy, Upload } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function EarnPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [copied, setCopied] = useState(false)

  const shareMessage = `🔵 *BluePay - Your Ultimate Payment Solution* 🔵

I just discovered this amazing app that lets you buy airtime, data bundles, and make withdrawals at cheaper rates!

✅ Buy airtime at 2% discount
✅ Fast and secure withdrawals

Join me on BluePay today! 👇

https://t.me/veripay99`

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(shareMessage)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleShareWhatsApp = () => {
    const encodedMessage = encodeURIComponent(shareMessage)
    window.open(`https://wa.me/?text=${encodedMessage}`, "_blank")
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
  }

  const handleSubmit = () => {
    if (selectedFile) {
      // Handle submission logic here
      console.log("[v0] Submitting claim with file:", selectedFile.name)
      alert("Claim submitted successfully!")
    } else {
      alert("Please upload a screenshot first")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#0000FF] text-white px-4 py-6">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Link href="/dashboard">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <h1 className="text-xl font-semibold">Earn Rewards</h1>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Gift className="w-10 h-10 text-[#0000FF]" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Share & Earn ₦5,000</h2>
            <p className="text-sm text-white/90">
              Share BluePay with your friends and family on WhatsApp and earn ₦5,000 instantly added to your balance!
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 py-6 max-w-2xl mx-auto pb-24">
        {/* How It Works */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">How It Works</h3>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-[#0000FF] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">1</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Share BluePay</h4>
                <p className="text-sm text-gray-600">Share BluePay with your friends and family on WhatsApp</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-[#0000FF] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">2</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Verify Share</h4>
                <p className="text-sm text-gray-600">Take a screenshot of your share and upload it here</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-[#0000FF] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">3</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Get Rewarded</h4>
                <p className="text-sm text-gray-600">Receive ₦5,000 instantly added to your BluePay balance</p>
              </div>
            </div>
          </div>
        </div>

        {/* Share Now */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Share Now</h3>
          <div className="bg-white rounded-2xl p-4 shadow-sm mb-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-[#0000FF] rounded-full"></div>
              <span className="font-semibold text-gray-800">BluePay - Your Ultimate Payment Solution</span>
              <div className="w-2 h-2 bg-[#0000FF] rounded-full"></div>
            </div>
            <p className="text-sm text-gray-700 mb-3">
              I just discovered this amazing app that lets you buy airtime, data bundles, and make withdrawals at
              cheaper rates!
            </p>
            <div className="space-y-2 mb-3">
              <div className="flex items-center gap-2">
                <span className="text-green-600">✅</span>
                <span className="text-sm text-gray-700">Buy airtime at 2% discount</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600">✅</span>
                <span className="text-sm text-gray-700">Fast and secure withdrawals</span>
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-2">Join me on BluePay today! 👇</p>
            <p className="text-sm text-blue-600 font-mono">https://t.me/veripay99</p>
          </div>
          <Button
            onClick={handleCopyMessage}
            variant="outline"
            className="w-full h-12 rounded-xl mb-3 border-gray-300 bg-transparent"
          >
            <Copy className="w-4 h-4 mr-2" />
            {copied ? "Copied!" : "Copy Message"}
          </Button>
          <Button onClick={handleShareWhatsApp} className="w-full h-12 bg-green-500 hover:bg-green-600 rounded-xl">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Share on WhatsApp
          </Button>
        </div>

        {/* Verify Your Share */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Verify Your Share</h3>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <label className="block text-gray-700 font-medium mb-3">Upload Screenshot</label>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center mb-2">
              <input type="file" id="file-upload" accept="image/*" onChange={handleFileChange} className="hidden" />
              <label htmlFor="file-upload" className="cursor-pointer">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <span className="text-blue-600 font-medium">Choose File</span>
              </label>
            </div>
            <p className="text-sm text-gray-500">{selectedFile ? selectedFile.name : "No file chosen"}</p>
          </div>
        </div>

        {/* Submit Button */}
        <Button
          onClick={handleSubmit}
          className="w-full h-14 bg-[#0000FF] hover:bg-blue-700 text-white rounded-full text-lg font-semibold"
        >
          Submit & Claim ₦5,000
        </Button>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3">
        <div className="max-w-2xl mx-auto flex items-center justify-around">
          <Link href="/dashboard" className="flex flex-col items-center gap-1">
            <Wallet className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-400">Wallet</span>
          </Link>
          <button className="flex flex-col items-center gap-1">
            <MessageSquare className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-400">Social</span>
          </button>
          <button className="flex flex-col items-center -mt-6">
            <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
              <PlusCircle className="w-8 h-8 text-white" />
            </div>
          </button>
          <button className="flex flex-col items-center gap-1">
            <BarChart3 className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-400">Data</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <User className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-400">Profile</span>
          </button>
        </div>
      </nav>
    </div>
  )
}
