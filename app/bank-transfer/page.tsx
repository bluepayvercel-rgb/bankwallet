"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, MessageSquare, Copy } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function BankTransferPage() {
  const router = useRouter()
  const [copiedField, setCopiedField] = useState<string | null>(null)

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
          onClick={() => router.push("/dashboard")}
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
