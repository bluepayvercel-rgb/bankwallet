"use client"

import { Button } from "@/components/ui/button"
import {
  Menu,
  Bell,
  User,
  Clock,
  Phone,
  Wifi,
  Headphones,
  Users,
  DollarSign,
  Wallet,
  MessageSquare,
  PlusCircle,
  BarChart3,
  X,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function DashboardPage() {
  const [showNotification, setShowNotification] = useState(true)

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Notification Banner */}
      {showNotification && (
        <div className="bg-white px-4 py-3 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-sm text-gray-800">
              Oluwaseun just withdraw <span className="text-blue-600 font-semibold">₦120k</span>
            </span>
          </div>
          <button onClick={() => setShowNotification(false)} className="text-gray-400 hover:text-gray-600">
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Header */}
      <header className="bg-[#0000FF] text-white px-4 py-4 flex items-center justify-between">
        <button className="text-white">
          <Menu className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-bold tracking-wider">BLUEPAY</h1>
        <button className="text-white">
          <Bell className="w-6 h-6" />
        </button>
      </header>

      {/* Main Content */}
      <main className="px-4 py-6 max-w-2xl mx-auto">
        {/* User Greeting */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
            <User className="w-6 h-6 text-white" />
          </div>
          <span className="text-gray-800 font-medium">Hi, Marvelous</span>
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center ml-auto">
            <User className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Balance Card */}
        <div className="bg-[#0000FF] text-white rounded-3xl p-6 mb-4 relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-sm mb-2 text-white/90">Available Balance</p>
            <div className="flex items-start justify-between mb-4">
              <h2 className="text-4xl font-bold">₦200,000</h2>
              <Button className="bg-white text-[#0000FF] hover:bg-white/90 rounded-full px-6 font-semibold">
                Withdraw
              </Button>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-white/80">Daily spend target</span>
              <span className="font-semibold">₦50,000</span>
            </div>
          </div>
        </div>

        {/* View Recent Activity */}
        <div className="text-right mb-6">
          <Link
            href="#"
            className="text-blue-600 font-medium text-sm inline-flex items-center gap-1 hover:text-blue-700"
          >
            View Recent Activity
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <button className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center shadow-md">
              <Wallet className="w-8 h-8 text-white" />
            </div>
            <span className="text-sm text-gray-700">Buy BPC</span>
          </button>
          <button className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center shadow-md">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <span className="text-sm text-gray-700">Watch</span>
          </button>
          <button className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center shadow-md">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <span className="text-sm text-gray-700">Airtime</span>
          </button>
          <button className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center shadow-md">
              <Wifi className="w-8 h-8 text-white" />
            </div>
            <span className="text-sm text-gray-700">Data</span>
          </button>
        </div>

        {/* More Services */}
        <h3 className="text-lg font-semibold text-gray-800 mb-4">More Services</h3>
        <div className="grid grid-cols-4 gap-4 mb-8">
          <button className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              <Headphones className="w-6 h-6 text-gray-600" />
            </div>
            <span className="text-xs text-gray-700">Support</span>
          </button>
          <button className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              <Users className="w-6 h-6 text-gray-600" />
            </div>
            <span className="text-xs text-gray-700">Group</span>
          </button>
          <button className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-gray-600" />
            </div>
            <span className="text-xs text-gray-700">Earn</span>
          </button>
          <button className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-gray-600" />
            </div>
            <span className="text-xs text-gray-700">Profile</span>
          </button>
        </div>

        {/* Important Information */}
        <div className="bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-3xl p-6 mb-20">
          <h3 className="text-lg font-semibold mb-4">Important Information</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-purple-300 mt-1">●</span>
              <span className="text-sm">How to Buy BPC Code</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-300 mt-1">●</span>
              <span className="text-sm">Click Buy BPC from dashboard</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-300 mt-1">●</span>
              <span className="text-sm">Fill details and amount</span>
            </li>
          </ul>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3">
        <div className="max-w-2xl mx-auto flex items-center justify-around">
          <button className="flex flex-col items-center gap-1">
            <Wallet className="w-6 h-6 text-blue-600" />
            <span className="text-xs text-blue-600 font-medium">Wallet</span>
          </button>
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
