"use client"

import { useState, useEffect } from "react"
import { Sun, Moon, Menu, X, Github, Linkedin, Twitter } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import SmoothScrollLink from "./smooth-scroll-link"

export default function Navbar() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle theme mounting
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#102f28]/90 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-3xl font-bold">
              <span className="text-white">M</span>
              <span className="text-[#00FF8C]">M</span>
              <span className="text-white text-base ml-1">&lt;/&gt;</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            <div className="flex items-center">
              <span className="h-2.5 w-2.5 bg-[#00FF8C] rounded-full mr-2"></span>
              <span className="text-white text-lg font-medium">Available for work</span>
            </div>
            <SmoothScrollLink
              href="#about"
              className="text-white hover:text-[#00FF8C] transition text-lg font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#00FF8C] after:transition-all hover:after:w-full"
            >
              About
            </SmoothScrollLink>
            <SmoothScrollLink
              href="#projects"
              className="text-white hover:text-[#00FF8C] transition text-lg font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#00FF8C] after:transition-all hover:after:w-full"
            >
              Projects
            </SmoothScrollLink>
            <SmoothScrollLink
              href="#services"
              className="text-white hover:text-[#00FF8C] transition text-lg font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#00FF8C] after:transition-all hover:after:w-full"
            >
              Services
            </SmoothScrollLink>
            <SmoothScrollLink
              href="#contact"
              className="text-white hover:text-[#00FF8C] transition text-lg font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#00FF8C] after:transition-all hover:after:w-full"
            >
              Contact
            </SmoothScrollLink>
            <Link href="#" className="text-[#00FF8C] hover:text-white transition text-lg font-medium">
              Download
            </Link>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-[#00FF8C] hover:rotate-90 transition-transform duration-300"
              aria-label="Toggle theme"
            >
              {mounted && theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <div className="flex items-center text-base font-medium">
              <span className="text-[#00FF8C] mr-2">EN</span>
              <span className="text-white/60">|</span>
              <span className="text-white/60 ml-2">RO</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white p-2 focus:outline-none" aria-label="Toggle menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-[#102f28]/95 backdrop-blur-lg z-40 lg:hidden transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-8">
          <SmoothScrollLink
            href="#about"
            className="text-white hover:text-[#00FF8C] transition text-2xl font-medium"
            onClick={closeMenu}
          >
            About
          </SmoothScrollLink>
          <SmoothScrollLink
            href="#projects"
            className="text-white hover:text-[#00FF8C] transition text-2xl font-medium"
            onClick={closeMenu}
          >
            Projects
          </SmoothScrollLink>
          <SmoothScrollLink
            href="#services"
            className="text-white hover:text-[#00FF8C] transition text-2xl font-medium"
            onClick={closeMenu}
          >
            Services
          </SmoothScrollLink>
          <SmoothScrollLink
            href="#contact"
            className="text-white hover:text-[#00FF8C] transition text-2xl font-medium"
            onClick={closeMenu}
          >
            Contact
          </SmoothScrollLink>
          <Link
            href="#"
            className="text-[#00FF8C] hover:text-white transition text-2xl font-medium"
            onClick={closeMenu}
          >
            Download
          </Link>

          <div className="flex space-x-6 mt-8">
            <Link href="#" className="text-white hover:text-[#00FF8C] transition">
              <Github size={24} />
            </Link>
            <Link href="#" className="text-white hover:text-[#00FF8C] transition">
              <Linkedin size={24} />
            </Link>
            <Link href="#" className="text-white hover:text-[#00FF8C] transition">
              <Twitter size={24} />
            </Link>
          </div>

          <div className="flex items-center mt-8">
            <button
              onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark")
              }}
              className="text-[#00FF8C] p-2"
              aria-label="Toggle theme"
            >
              {mounted && theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
