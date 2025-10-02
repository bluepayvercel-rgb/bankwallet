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
  const [showCommunityModal, setShowCommunityModal] = useState(true)
  const [showSideMenu, setShowSideMenu] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100">
      {showSideMenu && (
        <>
          {/* Overlay */}
          <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setShowSideMenu(false)} />

          {/* Side Menu */}
          <div className="fixed left-0 top-0 bottom-0 w-80 bg-[#0a1628] z-50 flex flex-col">
            {/* Logo Section */}
            <div className="flex-1 flex flex-col items-center justify-center px-8">
              <div className="mb-8">
                <div className="text-center mb-4">
                  <div className="text-6xl font-bold text-[#4169E1] mb-2">B</div>
                  <div className="text-3xl font-bold">
                    <span className="text-[#4169E1]">Blue</span>
                    <span className="text-white">Pay</span>
                  </div>
                </div>
                <div className="text-white text-2xl font-bold text-center tracking-wider">BLUEPAY</div>
              </div>

              <div className="w-full space-y-2">
                <Link
                  href="/support"
                  className="w-full flex items-center gap-3 text-white text-xl py-4 px-6 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <Headphones className="w-6 h-6" />
                  <span>Support</span>
                </Link>
                <button className="w-full flex items-center gap-3 text-white text-xl py-4 px-6 hover:bg-white/10 rounded-lg transition-colors">
                  <MessageSquare className="w-6 h-6" />
                  <span>Admin</span>
                </button>
              </div>
            </div>

            {/* Back to Dashboard Button */}
            <div className="p-6">
              <Button
                onClick={() => setShowSideMenu(false)}
                className="w-full bg-[#0000FF] hover:bg-[#0000DD] text-white py-6 rounded-2xl text-lg font-semibold"
              >
                Back to Dashboard
              </Button>
            </div>

            {/* Floating Chat Button */}
            <button className="absolute bottom-24 right-6 w-14 h-14 bg-[#0000FF] rounded-full flex items-center justify-center shadow-lg hover:bg-[#0000DD] transition-colors">
              <MessageSquare className="w-6 h-6 text-white" />
            </button>
          </div>
        </>
      )}

      {showCommunityModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full relative">
            <button
              onClick={() => setShowCommunityModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-2xl font-bold text-[#0000FF] text-center mb-4">Join Our Community!</h2>

            <p className="text-gray-600 text-center mb-8">
              Stay updated with the latest news, promotions, and get instant support by joining our official groups!
            </p>

            <div className="flex gap-3 mb-4">
              <a
                href="https://t.me/cashtubspport"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#0088cc] hover:bg-[#0077b3] text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.717-.962 3.767-1.362 5.001-.169.523-.506.697-.831.715-.705.031-1.24-.466-1.923-.914-1.07-.7-1.675-1.136-2.713-1.818-1.201-.789-.422-1.223.262-1.931.179-.185 3.294-3.023 3.355-3.281.008-.032.015-.15-.056-.212-.071-.062-.176-.041-.251-.024-.107.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.242-1.865-.442-.751-.244-1.349-.374-1.297-.789.027-.216.324-.437.892-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.121.099.155.232.171.326.016.094.036.308.02.475z" />
                </svg>
                Telegram
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp
              </a>
            </div>

            <button
              onClick={() => setShowCommunityModal(false)}
              className="w-full py-3 border-2 border-gray-200 text-gray-600 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
            >
              Maybe Later
            </button>
          </div>
        </div>
      )}

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
        <button className="text-white" onClick={() => setShowSideMenu(true)}>
          <Menu className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-bold tracking-wider">BLUEPAY</h1>
        <button className="text-white">
          <Bell className="w-6 h-6" />
        </button>
      </header>

      {/* Main Content */}
      <main className="px-4 py-6 max-w-2xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
            <User className="w-6 h-6 text-white" />
          </div>
          <span className="text-gray-800 font-medium">Hi, Marvelous</span>
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center ml-auto">
            <User className="w-6 h-6 text-white" />
          </div>
        </div>

        <div className="bg-[#0000FF] text-white rounded-3xl p-6 mb-4 relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-sm mb-2 text-white/90">Available Balance</p>
            <div className="flex items-start justify-between mb-4">
              <h2 className="text-4xl font-bold">₦200,000</h2>
              <Link href="/withdraw">
                <Button className="bg-white text-[#0000FF] hover:bg-white/90 rounded-full px-6 font-semibold">
                  Withdraw
                </Button>
              </Link>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-white/80">Daily spend target</span>
              <span className="font-semibold">₦50,000</span>
            </div>
          </div>
        </div>

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
          <Link href="/airtime" className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center shadow-md">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <span className="text-sm text-gray-700">Airtime</span>
          </Link>
          <button className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center shadow-md">
              <Wifi className="w-8 h-8 text-white" />
            </div>
            <span className="text-sm text-gray-700">Data</span>
          </button>
        </div>

        <h3 className="text-lg font-semibold text-gray-800 mb-4">More Services</h3>
        <div className="grid grid-cols-4 gap-4 mb-8">
          <Link href="/support" className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              <Headphones className="w-6 h-6 text-gray-600" />
            </div>
            <span className="text-xs text-gray-700">Support</span>
          </Link>
          <button className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              <Users className="w-6 h-6 text-gray-600" />
            </div>
            <span className="text-xs text-gray-700">Group</span>
          </button>
          <Link href="/earn" className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-gray-600" />
            </div>
            <span className="text-xs text-gray-700">Earn</span>
          </Link>
          <button className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-gray-600" />
            </div>
            <span className="text-xs text-gray-700">Profile</span>
          </button>
        </div>

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
