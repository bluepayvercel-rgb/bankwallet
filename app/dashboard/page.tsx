"use client"

import { Button } from "@/components/ui/button"
import {
  Menu,
  Bell,
  User,
  Phone,
  Headphones,
  Users,
  DollarSign,
  Wallet,
  MessageSquare,
  PlusCircle,
  BarChart3,
  X,
  Monitor,
  Database,
  AlertTriangle,
} from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

const notifications = [
  { name: "Oluwaseun", amount: "120k" },
  { name: "Tayo", amount: "200k" },
  { name: "Chioma", amount: "85k" },
  { name: "Emeka", amount: "150k" },
  { name: "Aisha", amount: "95k" },
  { name: "Kunle", amount: "175k" },
  { name: "Blessing", amount: "110k" },
  { name: "Ibrahim", amount: "130k" },
]

export default function DashboardPage() {
  const [showAlert, setShowAlert] = useState(true)
  const [dropdownNotifications, setDropdownNotifications] = useState<
    Array<{ id: number; name: string; amount: string; show: boolean }>
  >([])
  const [notificationId, setNotificationId] = useState(0)
  const [showCommunityModal, setShowCommunityModal] = useState(true)
  const [showSideMenu, setShowSideMenu] = useState(false)
  const [currentNotificationIndex, setCurrentNotificationIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const notification = notifications[currentNotificationIndex]
      const newNotification = {
        id: notificationId,
        name: notification.name,
        amount: notification.amount,
        show: true,
      }

      setDropdownNotifications((prev) => [...prev, newNotification])
      setNotificationId((prev) => prev + 1)
      setCurrentNotificationIndex((prev) => (prev + 1) % notifications.length)

      // Auto-hide notification after 5 seconds
      setTimeout(() => {
        setDropdownNotifications((prev) => prev.map((n) => (n.id === newNotification.id ? { ...n, show: false } : n)))
        // Remove from array after animation
        setTimeout(() => {
          setDropdownNotifications((prev) => prev.filter((n) => n.id !== newNotification.id))
        }, 300)
      }, 5000)
    }, 6000)

    return () => clearInterval(interval)
  }, [currentNotificationIndex, notificationId])

  const removeNotification = (id: number) => {
    setDropdownNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, show: false } : n)))
    setTimeout(() => {
      setDropdownNotifications((prev) => prev.filter((n) => n.id !== id))
    }, 300)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 space-y-2 w-full max-w-sm px-4">
        {dropdownNotifications.map((notification) => (
          <div
            key={notification.id}
            className={`bg-white rounded-lg shadow-lg p-4 flex items-center justify-between border border-gray-200 transition-all duration-300 ${
              notification.show ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-800 font-medium">{notification.name} just withdraw</p>
                <p className="text-lg text-blue-600 font-bold">₦{notification.amount}</p>
              </div>
            </div>
            <button
              onClick={() => removeNotification(notification.id)}
              className="text-gray-400 hover:text-gray-600 flex-shrink-0"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>

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

      {showAlert && (
        <div className="bg-red-50 border-b border-red-100 px-4 py-3 flex items-center justify-between overflow-hidden">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0" />
            <div className="overflow-hidden">
              <div className="animate-marquee whitespace-nowrap text-sm text-red-700">
                Dear Users we are currently experiencing issues with opay bank transfers Don't use opay to make payments
                for your BPC-CODE • Dear Users Don't buy BPC-CODE from any Vendors Buy directly from the site •
              </div>
            </div>
          </div>
          <button onClick={() => setShowAlert(false)} className="text-red-400 hover:text-red-600 flex-shrink-0 ml-2">
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
        {/* User Greeting Section */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
            <User className="w-7 h-7 text-white" />
          </div>
          <span className="text-gray-800 text-lg font-medium">Hi, Kash</span>
          <button className="w-12 h-12 bg-[#0000FF] rounded-full flex items-center justify-center ml-auto">
            <Bell className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Balance Card */}
        <div className="bg-[#0000FF] text-white rounded-3xl p-6 mb-6 relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-sm mb-2 text-white/90">Available Balance</p>
            <div className="flex items-start justify-between mb-6">
              <h2 className="text-4xl font-bold">₦200,000</h2>
              <Link href="/withdraw">
                <Button className="bg-white text-[#0000FF] hover:bg-white/90 rounded-xl px-6 py-2 font-semibold">
                  Withdraw
                </Button>
              </Link>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/90">Daily spend target</span>
                <span className="font-semibold">₦200,000</span>
              </div>
              {/* Progress Bar */}
              <div className="w-full bg-white/20 rounded-full h-2">
                <div className="bg-white rounded-full h-2 w-1/3"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Service Buttons */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <Link href="/buy-bpc" className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center">
              <Wallet className="w-7 h-7 text-yellow-600" />
            </div>
            <span className="text-sm text-gray-700 font-medium">Buy BPC</span>
          </Link>
          {/* Watch Service */}
          <button className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
              <Monitor className="w-7 h-7 text-blue-600" />
            </div>
            <span className="text-sm text-gray-700 font-medium">Watch</span>
          </button>
          <Link href="/airtime" className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center">
              <Phone className="w-7 h-7 text-green-600" />
            </div>
            <span className="text-sm text-gray-700 font-medium">Airtime</span>
          </Link>
          <Link href="/airtime" className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center">
              <Database className="w-7 h-7 text-gray-600" />
            </div>
            <span className="text-sm text-gray-700 font-medium">Data</span>
          </Link>
        </div>

        <h3 className="text-lg font-semibold text-gray-800 mb-4">More Services</h3>
        {/* More Services Section */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <Link href="/support" className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center">
              <Headphones className="w-6 h-6 text-gray-600" />
            </div>
            <span className="text-xs text-gray-700 font-medium">Support</span>
          </Link>
          <Link href="/communities" className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-xs text-gray-700 font-medium">Group</span>
          </Link>
          <Link href="/earn" className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 bg-yellow-100 rounded-2xl flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-yellow-600" />
            </div>
            <span className="text-xs text-gray-700 font-medium">Earn</span>
          </Link>
          <button className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center">
              <User className="w-6 h-6 text-gray-600" />
            </div>
            <span className="text-xs text-gray-700 font-medium">Profile</span>
          </button>
        </div>

        {/* Important Information Section */}
        <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-purple-700 text-white rounded-3xl p-6 mb-24">
          <h3 className="text-xl font-bold mb-6">Important Information</h3>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5">
            <h4 className="font-semibold mb-4 text-lg">How to Buy BPC Code</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                  1
                </div>
                <span className="text-sm text-white/90">Click "Buy BPC" from dashboard</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                  2
                </div>
                <span className="text-sm text-white/90">Fill details and amount</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold text-gray-900">
                  3
                </div>
                <span className="text-sm font-medium">Complete payment for BPC code</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                  4
                </div>
                <span className="text-sm text-white/90">Use code for airtime & withdrawals</span>
              </div>
            </div>
          </div>
          {/* Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-white/40 rounded-full"></div>
            <div className="w-2 h-2 bg-white/40 rounded-full"></div>
            <div className="w-2 h-2 bg-white/40 rounded-full"></div>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 shadow-lg">
        <div className="max-w-2xl mx-auto flex items-center justify-around">
          <button className="flex flex-col items-center gap-1">
            <Wallet className="w-6 h-6 text-[#0000FF]" />
            <span className="text-xs text-[#0000FF] font-medium">Wallet</span>
          </button>
          <Link href="/communities" className="flex flex-col items-center gap-1">
            <MessageSquare className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-400">Social</span>
          </Link>
          <button className="flex flex-col items-center -mt-8">
            <div className="w-16 h-16 bg-[#0000FF] rounded-full flex items-center justify-center shadow-xl">
              <PlusCircle className="w-9 h-9 text-white" />
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

      {/* Floating Chat Button */}
      <button className="fixed bottom-24 right-6 w-14 h-14 bg-[#0000FF] rounded-full flex items-center justify-center shadow-xl hover:bg-[#0000DD] transition-colors z-40">
        <MessageSquare className="w-6 h-6 text-white" />
      </button>
    </div>
  )
}
