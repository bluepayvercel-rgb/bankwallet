"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, MessageCircle } from "lucide-react"
import Link from "next/link"
import { useState, type FormEvent } from "react"
import { useRouter } from "next/navigation"

export default function SignUpPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
  })
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
  })

  const validateForm = () => {
    const newErrors = {
      fullName: "",
      email: "",
      password: "",
      phoneNumber: "",
    }
    let isValid = true

    // Validate full name
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required"
      isValid = false
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = "Name must be at least 3 characters"
      isValid = false
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
      isValid = false
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
      isValid = false
    }

    // Validate password
    if (!formData.password) {
      newErrors.password = "Password is required"
      isValid = false
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
      isValid = false
    }

    // Validate phone number (should be 10 digits after +234)
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required"
      isValid = false
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid 10-digit phone number"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      // Form is valid, redirect to dashboard
      router.push("/dashboard")
    }
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 10)
    setFormData({ ...formData, phoneNumber: value })
    if (errors.phoneNumber) {
      setErrors({ ...errors, phoneNumber: "" })
    }
  }

  return (
    <div className="min-h-screen bg-[#0000FF] text-white">
      {/* Header */}
      <header className="px-6 py-6 flex items-center justify-between">
        <Link href="/" className="text-white hover:text-white/80">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <a
          href="https://t.me/cashtubspport"
          target="_blank"
          rel="noopener noreferrer"
          className="text-base font-medium hover:text-white/80"
        >
          You Need Help?
        </a>
      </header>

      {/* Main Content */}
      <main className="px-6 py-12 max-w-2xl mx-auto">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-wider mb-8">BLUEPAY</h1>
          <h2 className="text-3xl font-bold mb-6">Welcome!</h2>
          <p className="text-base leading-relaxed text-white/90 mb-12">
            Get your account ready and instantly start buying, selling airtime and data online and start paying all your
            bills in cheaper price.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 mb-8">
          <div>
            <Input
              type="text"
              placeholder="Your Full Name"
              value={formData.fullName}
              onChange={(e) => {
                setFormData({ ...formData, fullName: e.target.value })
                if (errors.fullName) setErrors({ ...errors, fullName: "" })
              }}
              className="bg-blue-700/50 border-none text-white placeholder:text-white/70 h-14 text-base rounded-xl"
            />
            {errors.fullName && <p className="text-red-300 text-sm mt-1 ml-1">{errors.fullName}</p>}
          </div>

          <div>
            <Input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value })
                if (errors.email) setErrors({ ...errors, email: "" })
              }}
              className="bg-blue-700/50 border-none text-white placeholder:text-white/70 h-14 text-base rounded-xl"
            />
            {errors.email && <p className="text-red-300 text-sm mt-1 ml-1">{errors.email}</p>}
          </div>

          <div>
            <Input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => {
                setFormData({ ...formData, password: e.target.value })
                if (errors.password) setErrors({ ...errors, password: "" })
              }}
              className="bg-blue-700/50 border-none text-white placeholder:text-white/70 h-14 text-base rounded-xl"
            />
            {errors.password && <p className="text-red-300 text-sm mt-1 ml-1">{errors.password}</p>}
          </div>

          <div>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-base">+234</span>
              <Input
                type="tel"
                placeholder="8012345678"
                value={formData.phoneNumber}
                onChange={handlePhoneChange}
                className="bg-blue-700/50 border-none text-white placeholder:text-white/70 h-14 text-base rounded-xl pl-16"
              />
            </div>
            {errors.phoneNumber && <p className="text-red-300 text-sm mt-1 ml-1">{errors.phoneNumber}</p>}
          </div>

          {/* Terms */}
          <p className="text-sm text-white/90 pt-2">
            Any further actions indicates that you agree with our terms & conditions!
          </p>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-white text-[#0000FF] hover:bg-white/90 text-lg font-semibold h-14 rounded-full"
          >
            Create account
          </Button>
        </form>

        {/* Sign In Link */}
        <p className="text-center text-base">
          Already have an account?{" "}
          <Link href="/signin" className="underline font-medium hover:text-white/80">
            Sign in
          </Link>
        </p>
      </main>

      {/* Floating Chat Button */}
      <a
        href="https://t.me/cashtubspport"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-colors"
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  )
}
