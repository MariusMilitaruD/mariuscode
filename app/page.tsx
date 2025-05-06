import { Github, Linkedin, Twitter, Sun, ChevronDown } from "lucide-react"
import Link from "next/link"
import AboutSection from "./components/about-section"
import ExpertiseSection from "./components/expertise-section"
import PortfolioSection from "./components/portfolio-section"
import ServicesSection from "./components/services-section"
import ContactSection from "./components/contact-section"
import Footer from "./components/footer"
import SmoothScrollLink from "./components/smooth-scroll-link"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#102f28] text-white relative overflow-hidden">
      {/* Hero Section with Full Viewport Height */}
      <div className="h-screen flex flex-col relative">
        {/* Header */}
        <header className="pt-8 pb-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link href="/" className="text-3xl font-bold">
                <span className="text-white">M</span>
                <span className="text-[#00FF8C]">M</span>
                <span className="text-white text-base ml-1">&lt;/&gt;</span>
              </Link>
            </div>

            <div className="flex items-center space-x-10">
              <div className="flex items-center">
                <span className="h-2.5 w-2.5 bg-[#00FF8C] rounded-full mr-2"></span>
                <span className="text-white text-lg font-medium">Available for work</span>
              </div>
              <SmoothScrollLink
                href="#about"
                className="text-white hover:text-[#00FF8C] transition text-lg font-medium"
              >
                About
              </SmoothScrollLink>
              <SmoothScrollLink
                href="#projects"
                className="text-white hover:text-[#00FF8C] transition text-lg font-medium"
              >
                Projects
              </SmoothScrollLink>
              <SmoothScrollLink
                href="#services"
                className="text-white hover:text-[#00FF8C] transition text-lg font-medium"
              >
                Services
              </SmoothScrollLink>
              <SmoothScrollLink
                href="#contact"
                className="text-white hover:text-[#00FF8C] transition text-lg font-medium"
              >
                Contact
              </SmoothScrollLink>
              <Link href="#" className="text-[#00FF8C] hover:text-white transition text-lg font-medium">
                Download
              </Link>
              <button className="text-[#00FF8C]">
                <Sun size={24} />
              </button>
              <div className="flex items-center text-base font-medium">
                <span className="text-[#00FF8C] mr-2">EN</span>
                <span className="text-white/60">|</span>
                <span className="text-white/60 ml-2">RO</span>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Content - Centered Vertically */}
        <div className="flex-grow flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex justify-between items-center">
              <div className="max-w-2xl">
                <p className="text-[#00FF8C] uppercase tracking-wider mb-4">Hi, my name is</p>
                <h1 className="text-7xl font-bold mb-6">Marius Militaru</h1>
                <h2 className="text-4xl mb-6">
                  I build amazing things with <span className="text-[#00FF8C]">AI</span>
                </h2>
                <p className="text-white/80 mb-10 leading-relaxed text-lg max-w-xl">
                  I'm a software engineer specializing in building exceptional digital experiences using artificial
                  intelligence. Currently, I'm focused on creating innovative AI-powered solutions that push the
                  boundaries of what's possible.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center bg-transparent border border-[#00FF8C] text-[#00FF8C] px-6 py-3 rounded-full font-medium hover:bg-[#00FF8C]/10 transition"
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
              </div>
              <div className="relative">
                <div className="w-[500px] h-[500px] rounded-full border-4 border-[#00FF8C] overflow-hidden relative">
                  <img src="/profile-image.png" alt="Marius Militaru" className="object-cover w-full h-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Arrow */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[#00FF8C] animate-bounce">
          <SmoothScrollLink href="#about" className="flex flex-col items-center">
            <ChevronDown size={36} />
          </SmoothScrollLink>
        </div>
      </div>

      {/* About Section with ID for scroll target */}
      <section id="about">
        <AboutSection />
      </section>

      {/* Expertise Section */}
      <section>
        <ExpertiseSection />
      </section>

      {/* Portfolio Section */}
      <section id="projects">
        <PortfolioSection />
      </section>

      {/* Services Section */}
      <section id="services">
        <ServicesSection />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContactSection />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
