"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Wallet, MessageSquare, PlusCircle, BarChart3, User } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function AirtimePage() {
  const [activeTab, setActiveTab] = useState<"airtime" | "data">("airtime")
  const [selectedNetwork, setSelectedNetwork] = useState<string>("mtn")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [amount, setAmount] = useState("")
  const [selectedBundle, setSelectedBundle] = useState("")
  const [bpcCode, setBpcCode] = useState("")

  const networks = [
    { id: "mtn", name: "MTN", logo: "/generic-telecom-logo.png" },
    { id: "airtel", name: "Airtel", logo: "/airtel-logo.png" },
    { id: "glo", name: "Glo", logo: "/glo-abstract-logo.png" },
    { id: "9mobile", name: "9mobile", logo: "/9mobile-logo.jpg" },
  ]

  const dataBundles = [
    { value: "1gb-300", label: "1GB - ₦300" },
    { value: "2gb-600", label: "2GB - ₦600" },
    { value: "5gb-1500", label: "5GB - ₦1,500" },
    { value: "10gb-3000", label: "10GB - ₦3,000" },
    { value: "20gb-5000", label: "20GB - ₦5,000" },
    { value: "50gb-10000", label: "50GB - ₦10,000" },
  ]

  const handleBuyAirtime = () => {
    // Handle airtime purchase logic here
    console.log("[v0] Purchase:", { selectedNetwork, phoneNumber, amount, bpcCode })
  }

  const handleBuyData = () => {
    console.log("[v0] Data Purchase:", { selectedNetwork, phoneNumber, selectedBundle, bpcCode })
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
            <h1 className="text-xl font-semibold">Airtime & Data</h1>
          </div>
          <div className="text-center">
            <p className="text-sm text-white/80 mb-2">Available Balance</p>
            <h2 className="text-3xl font-bold">₦200,000</h2>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 py-6 max-w-2xl mx-auto pb-24">
        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab("airtime")}
            className={`flex-1 py-3 rounded-xl font-semibold transition-colors ${
              activeTab === "airtime" ? "bg-[#0000FF] text-white" : "bg-white text-gray-600 border border-gray-200"
            }`}
          >
            Airtime
          </button>
          <button
            onClick={() => setActiveTab("data")}
            className={`flex-1 py-3 rounded-xl font-semibold transition-colors ${
              activeTab === "data" ? "bg-[#0000FF] text-white" : "bg-white text-gray-600 border border-gray-200"
            }`}
          >
            Data Bundle
          </button>
        </div>

        {/* Select Network */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-3">Select Network</label>
          <div className="grid grid-cols-4 gap-3">
            {networks.map((network) => (
              <button
                key={network.id}
                onClick={() => setSelectedNetwork(network.id)}
                className={`aspect-square rounded-xl border-2 transition-all flex items-center justify-center bg-white ${
                  selectedNetwork === network.id
                    ? "border-[#0000FF] shadow-md"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <img src={network.logo || "/placeholder.svg"} alt={network.name} className="w-12 h-12 object-contain" />
              </button>
            ))}
          </div>
        </div>

        {/* Phone Number */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-3">Phone Number</label>
          <Input
            type="tel"
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="h-12 rounded-xl border-gray-200 bg-white"
          />
        </div>

        {activeTab === "airtime" ? (
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-3">Amount</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">₦</span>
              <Input
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="h-12 rounded-xl border-gray-200 bg-white pl-8"
              />
            </div>
          </div>
        ) : (
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-3">Select Data Bundle</label>
            <Select value={selectedBundle} onValueChange={setSelectedBundle}>
              <SelectTrigger className="h-12 rounded-xl border-gray-200 bg-white">
                <SelectValue placeholder="Choose data bundle" />
              </SelectTrigger>
              <SelectContent>
                {dataBundles.map((bundle) => (
                  <SelectItem key={bundle.value} value={bundle.value}>
                    {bundle.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        {/* BPC Code */}
        <div className="mb-8">
          <label className="block text-gray-700 font-medium mb-3">BPC Code</label>
          <Input
            type="text"
            placeholder="Enter your BPC code"
            value={bpcCode}
            onChange={(e) => setBpcCode(e.target.value)}
            className="h-12 rounded-xl border-gray-200 bg-white"
          />
          <p className="text-sm text-gray-500 mt-2">Enter your BPC code to authorize this purchase</p>
        </div>

        <Button
          onClick={activeTab === "airtime" ? handleBuyAirtime : handleBuyData}
          className="w-full h-14 bg-[#0000FF] hover:bg-blue-700 text-white rounded-full text-lg font-semibold"
        >
          {activeTab === "airtime" ? "Buy Airtime" : "Buy Data Bundle"}
        </Button>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3">
        <div className="max-w-2xl mx-auto flex items-center justify-around">
          <Link href="/dashboard" className="flex flex-col items-center gap-1">
            <Wallet className="w-6 h-6 text-blue-600" />
            <span className="text-xs text-blue-600 font-medium">Wallet</span>
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
