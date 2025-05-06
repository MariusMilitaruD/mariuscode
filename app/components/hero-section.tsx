"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="h-screen flex flex-col relative">
      {/* Hero Content - Centered Vertically */}
      <div className="flex-grow flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div
              className={`max-w-2xl transition-all duration-1000 ease-out ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <p className="text-[#00FF8C] uppercase tracking-wider mb-4" style={{ transitionDelay: "200ms" }}>
                Hi, my name is
              </p>
              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 transition-all duration-1000 ease-out"
                style={{ transitionDelay: "400ms" }}
              >
                Marius Militaru
              </h1>
              <h2
                className="text-2xl sm:text-3xl md:text-4xl mb-6 transition-all duration-1000 ease-out"
                style={{ transitionDelay: "600ms" }}
              >
                I build amazing things with <span className="text-[#00FF8C]">AI</span>
              </h2>
              <p
                className="text-white/80 mb-10 leading-relaxed text-base md:text-lg max-w-xl transition-all duration-1000 ease-out"
                style={{ transitionDelay: "800ms" }}
              >
                I'm a software engineer specializing in building exceptional digital experiences using artificial
                intelligence. Currently, I'm focused on creating innovative AI-powered solutions that push the
                boundaries of what's possible.
              </p>
              <Link
                href="#"
                className="inline-flex items-center bg-transparent border border-[#00FF8C] text-[#00FF8C] px-6 py-3 rounded-full font-medium hover:bg-[#00FF8C]/10 transition transform hover:scale-105 duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                  <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                  <path d="M9.5 15.5a5 5 0 0 0 5 0" />
                </svg>
                Happy to chat on WhatsApp
              </Link>
              <div className="flex space-x-6 mt-12">
                <Link
                  href="#"
                  className="text-white hover:text-[#00FF8C] transition transform hover:scale-110 duration-300"
                >
                  <Github size={24} />
                </Link>
                <Link
                  href="#"
                  className="text-white hover:text-[#00FF8C] transition transform hover:scale-110 duration-300"
                >
                  <Linkedin size={24} />
                </Link>
                <Link
                  href="#"
                  className="text-white hover:text-[#00FF8C] transition transform hover:scale-110 duration-300"
                >
                  <Twitter size={24} />
                </Link>
              </div>
            </div>
            <div
              className={`relative mt-10 lg:mt-0 transition-all duration-1000 ease-out ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "1000ms" }}
            >
              <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] rounded-full border-4 border-[#00FF8C] overflow-hidden relative">
                <div className="absolute inset-0 bg-[#00FF8C]/20 animate-pulse"></div>
                <Image src="/profile-image.png" alt="Marius Militaru" fill className="object-cover" priority />
              </div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00FF8C]/30 to-[#102f28]/0 rounded-full blur opacity-30 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
