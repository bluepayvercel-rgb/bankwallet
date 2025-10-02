"use client"

import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  Wallet,
  MessageSquare,
  PlusCircle,
  BarChart3,
  User,
  TrendingUp,
  Users,
  DollarSign,
  Gift,
} from "lucide-react"
import Link from "next/link"

export default function EarnPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#0000FF] text-white px-4 py-6">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <h1 className="text-xl font-semibold">Earn More</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 py-6 max-w-2xl mx-auto pb-24">
        {/* Hero Card */}
        <div className="bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 rounded-3xl p-8 text-center text-white mb-6">
          <TrendingUp className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-2">Start Earning Today!</h2>
          <p className="text-lg">Multiple ways to earn money with BluePay</p>
        </div>

        {/* Earning Options */}
        <div className="space-y-4">
          {/* Referral Program */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="w-7 h-7 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-1">Referral Program</h3>
                <p className="text-gray-600">Earn ₦20,000 for each friend you refer</p>
              </div>
            </div>
            <Button className="w-full h-12 bg-green-500 hover:bg-green-600 text-white rounded-xl font-semibold">
              Start Referring
            </Button>
          </div>

          {/* Daily Tasks */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <DollarSign className="w-7 h-7 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-1">Daily Tasks</h3>
                <p className="text-gray-600">Complete daily tasks and earn rewards</p>
              </div>
            </div>
            <Button className="w-full h-12 bg-[#0000FF] hover:bg-blue-700 text-white rounded-xl font-semibold">
              View Tasks
            </Button>
          </div>

          {/* Bonus Rewards */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Gift className="w-7 h-7 text-purple-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-1">Bonus Rewards</h3>
                <p className="text-gray-600">Special bonuses and promotions</p>
              </div>
            </div>
            <Button className="w-full h-12 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-semibold">
              Claim Bonus
            </Button>
          </div>
        </div>
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
          <Link href="/airtime" className="flex flex-col items-center gap-1">
            <BarChart3 className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-400">Data</span>
          </Link>
          <button className="flex flex-col items-center gap-1">
            <User className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-400">Profile</span>
          </button>
        </div>
      </nav>

      {/* Floating Chat Button */}
      <Link
        href="https://t.me/cashtubspport"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors z-50"
      >
        <MessageSquare className="w-6 h-6 text-white" />
      </Link>
    </div>
  )
}
