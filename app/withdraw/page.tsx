"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Wallet, MessageSquare, PlusCircle, BarChart3, User } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function WithdrawPage() {
  const [amount, setAmount] = useState("")
  const [bank, setBank] = useState("")
  const [accountNumber, setAccountNumber] = useState("")
  const [accountName, setAccountName] = useState("")
  const [bpcCode, setBpcCode] = useState("")

  const handleWithdraw = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle withdrawal logic here
    console.log("Withdrawal submitted:", { amount, bank, accountNumber, accountName, bpcCode })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Balance */}
      <header className="bg-[#0000FF] text-white px-4 py-6">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/dashboard">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <h1 className="text-xl font-semibold">Withdraw Funds</h1>
          </div>
          <div className="text-center">
            <p className="text-sm mb-2 text-white/90">Available Balance</p>
            <h2 className="text-4xl font-bold">₦200,000</h2>
          </div>
        </div>
      </header>

      {/* Withdraw Form */}
      <main className="px-4 py-6 max-w-2xl mx-auto pb-24">
        <form onSubmit={handleWithdraw} className="space-y-6">
          {/* Amount */}
          <div>
            <label htmlFor="amount" className="block text-gray-700 font-medium mb-2">
              Amount to Withdraw (₦)
            </label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Select Bank */}
          <div>
            <label htmlFor="bank" className="block text-gray-700 font-medium mb-2">
              Select Bank
            </label>
            <select
              id="bank"
              value={bank}
              onChange={(e) => setBank(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
              required
            >
              <option value="">Select your bank</option>
              <option value="access">Access Bank</option>
              <option value="gtb">GTBank</option>
              <option value="firstbank">First Bank</option>
              <option value="uba">UBA</option>
              <option value="zenith">Zenith Bank</option>
              <option value="fidelity">Fidelity Bank</option>
              <option value="union">Union Bank</option>
              <option value="sterling">Sterling Bank</option>
              <option value="stanbic">Stanbic IBTC</option>
              <option value="fcmb">FCMB</option>
            </select>
          </div>

          {/* Account Number */}
          <div>
            <label htmlFor="accountNumber" className="block text-gray-700 font-medium mb-2">
              Account Number
            </label>
            <input
              type="text"
              id="accountNumber"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              placeholder="Enter account number"
              maxLength={10}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Account Name */}
          <div>
            <label htmlFor="accountName" className="block text-gray-700 font-medium mb-2">
              Account Name
            </label>
            <input
              type="text"
              id="accountName"
              value={accountName}
              onChange={(e) => setAccountName(e.target.value)}
              placeholder="Enter account name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* BPC Code */}
          <div>
            <label htmlFor="bpcCode" className="block text-gray-700 font-medium mb-2">
              BPC Code
            </label>
            <input
              type="text"
              id="bpcCode"
              value={bpcCode}
              onChange={(e) => setBpcCode(e.target.value)}
              placeholder="Enter your BPC code"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <p className="text-sm text-gray-500 mt-2">Enter your BPC code to authorize this withdrawal</p>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-[#0000FF] hover:bg-blue-700 text-white py-6 rounded-full text-lg font-semibold"
          >
            Withdraw Now
          </Button>
        </form>
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
