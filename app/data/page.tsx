"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, MessageCircle, ChevronDown } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const networks = ["MTN", "Airtel", "Glo", "9mobile"]
const dataBundles = ["500MB - ₦500", "1GB - ₦1,000", "2GB - ₦2,000", "5GB - ₦5,000", "10GB - ₦10,000", "20GB - ₦20,000"]

const SECRET_BPC_CODE = "BPC202512"

export default function DataPage() {
  const [selectedNetwork, setSelectedNetwork] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [selectedBundle, setSelectedBundle] = useState("")
  const [bpcCode, setBpcCode] = useState("")
  const [showNetworkDropdown, setShowNetworkDropdown] = useState(false)
  const [showBundleDropdown, setShowBundleDropdown] = useState(false)

  const handlePurchase = () => {
    if (!selectedNetwork || !phoneNumber || !selectedBundle || !bpcCode) {
      alert("Please fill all fields")
      return
    }
    if (bpcCode !== SECRET_BPC_CODE) {
      alert("Invalid BPC code. Please enter a valid code.")
      return
    }
    alert("Data purchase successful!")
  }

  return (
    <div className="min-h-screen bg-background dark:bg-gray-900">
      {/* Header */}
      <header className="bg-[#0000FF] text-white px-4 py-4 flex items-center justify-between">
        <Link href="/dashboard" className="text-white">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-xl font-bold">Buy Data Bundle</h1>
        <div className="w-6"></div>
      </header>

      {/* Main Content */}
      <main className="px-4 py-6 max-w-2xl mx-auto pb-24">
        {/* Select Network */}
        <div className="mb-6">
          <label className="block text-foreground font-medium mb-3">Select Network</label>
          <div className="relative">
            <button
              onClick={() => setShowNetworkDropdown(!showNetworkDropdown)}
              className="w-full px-4 py-4 bg-card border-2 border-[#0000FF] rounded-xl text-left flex items-center justify-between text-foreground"
            >
              <span>{selectedNetwork || "Select Network"}</span>
              <ChevronDown className="w-5 h-5 text-muted-foreground" />
            </button>
            {showNetworkDropdown && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-card border-2 border-[#0000FF] rounded-xl shadow-lg z-50">
                {networks.map((network) => (
                  <button
                    key={network}
                    onClick={() => {
                      setSelectedNetwork(network)
                      setShowNetworkDropdown(false)
                    }}
                    className="w-full px-4 py-3 text-left text-foreground hover:bg-accent transition-colors first:rounded-t-xl last:rounded-b-xl"
                  >
                    {network}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Phone Number */}
        <div className="mb-6">
          <label className="block text-foreground font-medium mb-3">Phone Number</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter 11-digit phone number"
            maxLength={11}
            className="w-full px-4 py-4 bg-card text-foreground border-2 border-[#0000FF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0000FF]"
          />
        </div>

        {/* Data Bundle */}
        <div className="mb-6">
          <label className="block text-foreground font-medium mb-3">Data Bundle</label>
          <div className="relative">
            <button
              onClick={() => setShowBundleDropdown(!showBundleDropdown)}
              className="w-full px-4 py-4 bg-card border-2 border-[#0000FF] rounded-xl text-left flex items-center justify-between text-foreground"
            >
              <span>{selectedBundle || "Select Data Bundle"}</span>
              <ChevronDown className="w-5 h-5 text-muted-foreground" />
            </button>
            {showBundleDropdown && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-card border-2 border-[#0000FF] rounded-xl shadow-lg z-50 max-h-60 overflow-y-auto">
                {dataBundles.map((bundle) => (
                  <button
                    key={bundle}
                    onClick={() => {
                      setSelectedBundle(bundle)
                      setShowBundleDropdown(false)
                    }}
                    className="w-full px-4 py-3 text-left text-foreground hover:bg-accent transition-colors first:rounded-t-xl last:rounded-b-xl"
                  >
                    {bundle}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* BPC CODE */}
        <div className="mb-6">
          <label className="block text-foreground font-medium mb-3">BPC CODE</label>
          <input
            type="text"
            value={bpcCode}
            onChange={(e) => setBpcCode(e.target.value)}
            placeholder="Enter BPC code"
            className="w-full px-4 py-4 bg-card text-foreground border-2 border-[#0000FF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0000FF]"
          />
        </div>

        {/* Available Balance */}
        <div className="mb-6">
          <p className="text-xl font-bold text-foreground">Available Balance: ₦200,000</p>
        </div>

        {/* Purchase Button */}
        <Button
          onClick={handlePurchase}
          className="w-full bg-[#0000FF] hover:bg-[#0000DD] text-white py-6 rounded-xl text-lg font-semibold"
        >
          Purchase Data
        </Button>
      </main>

      {/* Floating Chat Button */}
      <a
        href="https://t.me/bluepayofficialchannel"
        className="fixed bottom-8 right-8 bg-[#0000FF] hover:bg-[#0000DD] text-white p-4 rounded-full shadow-lg transition-colors z-50"
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  )
}
