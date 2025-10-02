"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Mail, MessageSquare, Phone, LifeBuoy } from "lucide-react"
import Link from "next/link"

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#1a1a1a] text-white px-4 py-4 flex items-center">
        <Link href="/dashboard">
          <button className="text-white">
            <ArrowLeft className="w-6 h-6" />
          </button>
        </Link>
        <h1 className="text-xl font-semibold ml-auto mr-auto">Support</h1>
      </header>

      {/* Main Content */}
      <main className="px-4 py-6 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">How can we help you?</h2>

        <div className="space-y-4">
          {/* Email Support */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Email Support</h3>
                <p className="text-gray-500 text-sm">Get help via email</p>
              </div>
            </div>
            <a href="mailto:bluepayvercel@gmail.com">
              <Button className="w-full bg-[#0000FF] hover:bg-[#0000DD] text-white py-6 rounded-xl text-base font-semibold">
                Contact via Email
              </Button>
            </a>
          </div>

          {/* Telegram Support */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Telegram Support</h3>
                <p className="text-gray-500 text-sm">Chat with us on Telegram</p>
              </div>
            </div>
            <a href="https://t.me/bluepayofficialchannel">
              <Button className="w-full bg-[#0000FF] hover:bg-[#0000DD] text-white py-6 rounded-xl text-base font-semibold">
                Open Telegram
              </Button>
            </a>
          </div>

          {/* WhatsApp Support */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">WhatsApp Support</h3>
                <p className="text-gray-500 text-sm">Message us on WhatsApp</p>
              </div>
            </div>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
              <Button className="w-full bg-[#0000FF] hover:bg-[#0000DD] text-white py-6 rounded-xl text-base font-semibold">
                Chat on WhatsApp
              </Button>
            </a>
          </div>

          {/* Live Chat Support */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <LifeBuoy className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Live Chat Support</h3>
                <p className="text-gray-500 text-sm">Chat with a support agent</p>
              </div>
            </div>
            <Button className="w-full bg-[#0000FF] hover:bg-[#0000DD] text-white py-6 rounded-xl text-base font-semibold">
              Start Live Chat
            </Button>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-8 text-center space-y-2 mb-20">
          <p className="text-gray-500 text-sm">Available 24/7 for your support needs</p>
          <a href="mailto:bluepayvercel@gmail.com" className="text-blue-600 font-medium text-sm block">
            bluepayvercel@gmail.com
          </a>
        </div>
      </main>

      {/* Floating Chat Button */}
      <button className="fixed bottom-24 right-6 w-14 h-14 bg-[#0000FF] rounded-full flex items-center justify-center shadow-lg hover:bg-[#0000DD] transition-colors z-50">
        <MessageSquare className="w-6 h-6 text-white" />
      </button>
    </div>
  )
}
