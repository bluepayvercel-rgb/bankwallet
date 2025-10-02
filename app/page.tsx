import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0000FF] text-white">
      {/* Header */}
      <header className="px-6 py-6 lg:px-12">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold tracking-tight">BLUEPAY</h1>
          <span className="text-lg font-medium">2025</span>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center px-6 py-20 lg:px-12 lg:py-32">
        {/* Logo Badge */}
        <div className="mb-16 bg-white/90 px-8 py-4 rounded-lg">
          <h2 className="text-3xl font-black tracking-wider text-[#0000FF] lg:text-4xl">BLUEPAY2025</h2>
        </div>

        {/* Main Heading */}
        <h1 className="mb-6 max-w-5xl text-4xl font-bold leading-tight text-balance lg:text-6xl xl:text-7xl">
          Get Your Account Ready And Instantly.
        </h1>

        {/* Subheading */}
        <p className="mb-12 max-w-3xl text-lg leading-relaxed text-white/90 lg:text-xl">
          Get your account ready and instantly start buying, selling airtime and data online and start paying all your
          bills in cheaper price.
        </p>

        {/* CTA Button */}
        <Link href="/signup">
          <Button
            size="lg"
            className="bg-white text-[#0000FF] hover:bg-white/90 text-base font-semibold px-6 py-5 rounded-full h-auto"
          >
            Get Started
          </Button>
        </Link>
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
