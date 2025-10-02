"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, User, Upload, ChevronRight, Sun, Moon, Monitor, Smartphone, X } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function ProfilePage() {
  const router = useRouter()
  const [userData, setUserData] = useState({
    name: "",
    email: "",
  })
  const [profilePicture, setProfilePicture] = useState<string | null>(null)
  const [showThemeModal, setShowThemeModal] = useState(false)
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark" | "system" | "device">("light")

  useEffect(() => {
    // Load user data from localStorage
    const storedUser = localStorage.getItem("bluepay_user")
    if (storedUser) {
      const user = JSON.parse(storedUser)
      setUserData({
        name: user.name || "",
        email: user.email || "",
      })
      setProfilePicture(user.profilePicture || null)
    }

    const savedTheme = localStorage.getItem("bluepay_theme") as "light" | "dark" | "system" | "device" | null
    if (savedTheme) {
      setCurrentTheme(savedTheme)
      applyTheme(savedTheme)
    }
  }, [])

  const applyTheme = (theme: "light" | "dark" | "system" | "device") => {
    const root = document.documentElement

    if (theme === "dark") {
      root.classList.add("dark")
    } else if (theme === "light") {
      root.classList.remove("dark")
    } else if (theme === "system") {
      // Match system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      if (prefersDark) {
        root.classList.add("dark")
      } else {
        root.classList.remove("dark")
      }
    } else if (theme === "device") {
      // Optimized for device (similar to system for now)
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      if (prefersDark) {
        root.classList.add("dark")
      } else {
        root.classList.remove("dark")
      }
    }
  }

  const handleThemeSelect = (theme: "light" | "dark" | "system" | "device") => {
    setCurrentTheme(theme)
    localStorage.setItem("bluepay_theme", theme)
    applyTheme(theme)
    setShowThemeModal(false)
  }

  const handleLogout = () => {
    // Clear all user-related data from localStorage
    localStorage.removeItem("bluepay_user")
    localStorage.removeItem("bluepay_pin")
    localStorage.removeItem("bluepay_theme")
    router.push("/")
  }

  const getThemeDisplayName = () => {
    switch (currentTheme) {
      case "light":
        return "Light Mode"
      case "dark":
        return "Dark Mode"
      case "system":
        return "System Mode"
      case "device":
        return "Device Mode"
      default:
        return "Light Mode"
    }
  }

  return (
    <div className="min-h-screen bg-[#0000FF] pb-8">
      {/* Header */}
      <header className="bg-[#0000FF] text-white px-4 py-4 flex items-center justify-between">
        <Link href="/dashboard" className="text-white">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-xl font-bold">Profile</h1>
        <div className="w-6"></div>
      </header>

      {/* Profile Avatar Section */}
      <div className="flex flex-col items-center py-8">
        <div className="relative mb-4">
          <div className="w-32 h-32 bg-yellow-500 rounded-full flex items-center justify-center overflow-hidden">
            {profilePicture ? (
              <img src={profilePicture || "/placeholder.svg"} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <User className="w-16 h-16 text-white" />
            )}
          </div>
          <button className="absolute bottom-0 right-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
            <Upload className="w-5 h-5 text-[#0000FF]" />
          </button>
        </div>
        <h2 className="text-2xl font-bold text-white mb-1">{userData.name || "User"}</h2>
        <p className="text-white/90">{userData.email || "user@example.com"}</p>
      </div>

      {/* Account Information Card */}
      <div className="mx-4 bg-white rounded-3xl p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-6">Account Information</h3>

        {/* Full Name */}
        <div className="mb-6">
          <label className="text-sm text-gray-500 mb-2 block">Full Name</label>
          <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
            <User className="w-5 h-5 text-gray-400" />
            <span className="text-gray-800 font-medium">{userData.name || "User"}</span>
          </div>
        </div>

        {/* Email Address */}
        <div className="mb-6">
          <label className="text-sm text-gray-500 mb-2 block">Email Address</label>
          <div className="pb-3 border-b border-gray-200">
            <span className="text-gray-800">{userData.email || "user@example.com"}</span>
          </div>
        </div>

        {/* Account Level */}
        <div className="mb-6">
          <label className="text-sm text-gray-500 mb-2 block">Account Level</label>
          <div className="pb-3 border-b border-gray-200">
            <span className="text-gray-800 font-medium">Basic</span>
          </div>
        </div>

        {/* Reset Balance */}
        <Link href="/reset-balance">
          <button className="w-full flex items-center gap-4 py-4 border-b border-gray-200 hover:bg-gray-50 transition-colors rounded-lg px-2">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </div>
            <div className="flex-1 text-left">
              <h4 className="font-semibold text-gray-800">Reset Balance</h4>
              <p className="text-sm text-gray-500">Reset your account balance</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </Link>

        {/* Download App */}
        <button className="w-full flex items-center gap-4 py-4 border-b border-gray-200 hover:bg-gray-50 transition-colors rounded-lg px-2">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </div>
          <div className="flex-1 text-left">
            <h4 className="font-semibold text-gray-800">Download App</h4>
            <p className="text-sm text-gray-500">Get the mobile app</p>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>

        {/* Theme - Updated to show current theme and open modal */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <Sun className="w-5 h-5 text-gray-600" />
            <span className="text-gray-800 font-medium">{getThemeDisplayName()}</span>
          </div>
          <button
            onClick={() => setShowThemeModal(true)}
            className="px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
          >
            Toggle
          </button>
        </div>
      </div>

      {/* Logout Button */}
      <div className="mx-4 mt-6">
        <Button
          onClick={handleLogout}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-6 rounded-2xl text-lg font-semibold"
        >
          Logout
        </Button>
      </div>

      {showThemeModal && (
        <div className="fixed inset-0 bg-black/50 flex items-end justify-center z-50 animate-in fade-in duration-200">
          <div className="bg-white rounded-t-3xl w-full max-w-md p-6 animate-in slide-in-from-bottom duration-300">
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-2xl font-bold text-gray-800">Select Theme</h3>
              <button
                onClick={() => setShowThemeModal(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <p className="text-gray-500 mb-6">Choose your preferred app appearance</p>

            {/* Theme Options */}
            <div className="space-y-3">
              {/* Light Mode */}
              <button
                onClick={() => handleThemeSelect("light")}
                className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 transition-all ${
                  currentTheme === "light"
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Sun className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1 text-left">
                  <h4 className="font-semibold text-gray-800">Light Mode</h4>
                  <p className="text-sm text-gray-500">Standard light appearance</p>
                </div>
                {currentTheme === "light" && (
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                )}
              </button>

              {/* Dark Mode */}
              <button
                onClick={() => handleThemeSelect("dark")}
                className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 transition-all ${
                  currentTheme === "dark"
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Moon className="w-5 h-5 text-indigo-600" />
                </div>
                <div className="flex-1 text-left">
                  <h4 className="font-semibold text-gray-800">Dark Mode</h4>
                  <p className="text-sm text-gray-500">Easier on the eyes</p>
                </div>
                {currentTheme === "dark" && (
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                )}
              </button>

              {/* System Mode */}
              <button
                onClick={() => handleThemeSelect("system")}
                className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 transition-all ${
                  currentTheme === "system"
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Monitor className="w-5 h-5 text-purple-600" />
                </div>
                <div className="flex-1 text-left">
                  <h4 className="font-semibold text-gray-800">System Mode</h4>
                  <p className="text-sm text-gray-500">Match system settings</p>
                </div>
                {currentTheme === "system" && (
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                )}
              </button>

              {/* Device Mode */}
              <button
                onClick={() => handleThemeSelect("device")}
                className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 transition-all ${
                  currentTheme === "device"
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex-1 text-left">
                  <h4 className="font-semibold text-gray-800">Device Mode</h4>
                  <p className="text-sm text-gray-500">Optimized for device</p>
                </div>
                {currentTheme === "device" && (
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
