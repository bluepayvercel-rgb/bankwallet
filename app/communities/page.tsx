"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Globe, Users, Shield, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function CommunitiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#0000FF] text-white px-4 py-4 flex items-center gap-4">
        <Link href="/dashboard">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-xl font-semibold">Platform Communities</h1>
      </header>

      {/* Main Content */}
      <main className="px-4 py-6 max-w-2xl mx-auto pb-24">
        {/* Welcome Card */}
        <div className="bg-white rounded-2xl p-8 mb-6 text-center shadow-sm">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Globe className="w-10 h-10 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Welcome to BluePay Community</h2>
          <p className="text-gray-600 leading-relaxed">
            Connect with other BluePay users, get support, and stay updated with the latest news and features.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
            <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900 mb-1">5,000+</div>
            <div className="text-sm text-gray-600">Active Members</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
            <Shield className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900 mb-1">24/7</div>
            <div className="text-sm text-gray-600">Community Support</div>
          </div>
        </div>

        {/* Join Communities Section */}
        <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Join Our Communities</h3>
          <p className="text-gray-600 mb-6">Connect with other BluePay users and get the latest updates.</p>

          {/* Telegram Channel */}
          <div className="mb-4 p-4 border border-gray-200 rounded-xl">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.717-.962 3.767-1.362 5.001-.169.523-.506.697-.831.715-.705.031-1.24-.466-1.923-.914-1.07-.7-1.675-1.136-2.713-1.818-1.201-.789-.422-1.223.262-1.931.179-.185 3.294-3.023 3.355-3.281.008-.032.015-.15-.056-.212-.071-.062-.176-.041-.251-.024-.107.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.242-1.865-.442-.751-.244-1.349-.374-1.297-.789.027-.216.324-.437.892-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.121.099.155.232.171.326.016.094.036.308.02.475z" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-bold text-gray-900">Telegram Channel</h4>
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
                <p className="text-sm text-gray-600">Official BluePay announcements</p>
              </div>
            </div>
            <a href="https://t.me/cashtubspport" target="_blank" rel="noopener noreferrer" className="block w-full">
              <Button className="w-full bg-[#0000FF] hover:bg-[#0000DD] text-white py-6 rounded-xl text-base font-semibold">
                Join Telegram Channel
              </Button>
            </a>
          </div>

          {/* WhatsApp Group */}
          <div className="p-4 border border-gray-200 rounded-xl">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-bold text-gray-900">WhatsApp Group</h4>
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
                <p className="text-sm text-gray-600">Community discussions & support</p>
              </div>
            </div>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="block w-full">
              <Button className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-6 rounded-xl text-base font-semibold">
                Join WhatsApp Group
              </Button>
            </a>
          </div>
        </div>

        {/* What You'll Get Section */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-6">What You'll Get</h3>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold">
                1
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Latest Updates</h4>
                <p className="text-sm text-gray-600">Be the first to know about new features and improvements</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 text-green-600 font-bold">
                2
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Community Support</h4>
                <p className="text-sm text-gray-600">Get help from other users and our support team</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 text-purple-600 font-bold">
                3
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Exclusive Tips</h4>
                <p className="text-sm text-gray-600">Learn tips and tricks to make the most of BluePay</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Chat Button */}
      <button className="fixed bottom-24 right-6 w-14 h-14 bg-[#0000FF] rounded-full flex items-center justify-center shadow-lg hover:bg-[#0000DD] transition-colors z-10">
        <MessageSquare className="w-6 h-6 text-white" />
      </button>
    </div>
  )
}
