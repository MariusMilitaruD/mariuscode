"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <section className="py-20 bg-[#0c2c25]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Side - Contact Info */}
          <div className="lg:w-1/2">
            <div className="text-[#00FF8C] text-sm uppercase tracking-wider mb-4">GET IN TOUCH</div>
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-white">Let's </span>
              <span className="text-[#00FF8C]">Connect</span>
            </h2>
            <p className="text-white/80 mb-12 text-lg max-w-lg">
              Have a project in mind or just want to say hello? I'd love to hear from you. Feel free to reach out using
              any of the methods below.
            </p>

            <div className="space-y-8 mb-12">
              {/* Email */}
              <div className="flex items-start">
                <div className="bg-[#0c563f] p-3 rounded-full mr-4">
                  <Mail className="text-[#00FF8C]" size={20} />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Email</h3>
                  <p className="text-white/70">contact@militarumarius.com</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start">
                <div className="bg-[#0c563f] p-3 rounded-full mr-4">
                  <MapPin className="text-[#00FF8C]" size={20} />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Location</h3>
                  <p className="text-white/70">Europe</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start">
                <div className="bg-[#0c563f] p-3 rounded-full mr-4">
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
                    className="text-[#00FF8C]"
                  >
                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                    <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                    <path d="M9.5 15.5a5 5 0 0 0 5 0" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">WhatsApp</h3>
                  <p className="text-white/70">+40 7XX XXX XXX</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Connect with me</h3>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="bg-[#0c563f] p-3 rounded-full text-white hover:bg-[#00FF8C] hover:text-[#0c2c25] transition-colors"
                >
                  <Github size={20} />
                </Link>
                <Link
                  href="#"
                  className="bg-[#0c563f] p-3 rounded-full text-white hover:bg-[#00FF8C] hover:text-[#0c2c25] transition-colors"
                >
                  <Linkedin size={20} />
                </Link>
                <Link
                  href="#"
                  className="bg-[#0c563f] p-3 rounded-full text-white hover:bg-[#00FF8C] hover:text-[#0c2c25] transition-colors"
                >
                  <Twitter size={20} />
                </Link>
                <Link
                  href="#"
                  className="bg-[#0c563f] p-3 rounded-full text-white hover:bg-[#00FF8C] hover:text-[#0c2c25] transition-colors"
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
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12a4 4 0 0 1 8 0" />
                    <path d="M12 8a4 4 0 0 1 0 8" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="lg:w-1/2">
            <div className="bg-[#0f382f] border border-[#00FF8C]/20 rounded-lg p-8">
              <h3 className="text-white text-2xl font-bold mb-8">Send me a message</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-[#00FF8C] text-sm mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#1f473e] border border-[#00FF8C]/10 rounded-md p-3 text-white focus:outline-none focus:border-[#00FF8C]/50"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-[#00FF8C] text-sm mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#1f473e] border border-[#00FF8C]/10 rounded-md p-3 text-white focus:outline-none focus:border-[#00FF8C]/50"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-[#00FF8C] text-sm mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-[#1f473e] border border-[#00FF8C]/10 rounded-md p-3 text-white focus:outline-none focus:border-[#00FF8C]/50"
                    required
                  />
                </div>

                <div className="mb-8">
                  <label htmlFor="message" className="block text-[#00FF8C] text-sm mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full bg-[#1f473e] border border-[#00FF8C]/10 rounded-md p-3 text-white focus:outline-none focus:border-[#00FF8C]/50"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#00FF8C] text-[#0c2c25] py-4 px-6 rounded-md font-medium flex items-center justify-center hover:bg-[#00DD7A] transition-colors"
                >
                  Send Message <Send size={18} className="ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
