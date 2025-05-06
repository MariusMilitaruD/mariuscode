import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function PortfolioSection() {
  return (
    <section className="py-20 bg-[#0c2c25]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="inline-block mb-10">
            <span className="text-[#00FF8C] text-sm uppercase tracking-wider px-6 py-2 rounded-full bg-[#143c33]">
              PORTFOLIO
            </span>
          </div>
          <div className="flex justify-between items-end mb-6">
            <div>
              <h2 className="text-[#00FF8C] font-bold mb-4" style={{ fontSize: "112px", lineHeight: "1.1" }}>
                My Projects
              </h2>
              <p className="text-white/80" style={{ fontSize: "35px", lineHeight: "1.3" }}>
                Innovative solutions driven by AI and modern tech stacks.
              </p>
            </div>
            <Link href="#" className="text-[#00FF8C] flex items-center hover:underline">
              View All <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project 1: AI-Powered Personal Assistant */}
          <div className="bg-[#0f382f] rounded-lg overflow-hidden border border-[#143c33]">
            <div className="relative">
              <Image
                src="/project-image.jpg"
                alt="AI-Powered Personal Assistant"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="p-5">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-[#0c563f] text-[#00FF8C] text-xs px-3 py-1 rounded-md">AI</span>
                <span className="bg-[#1f473e] text-white text-xs px-3 py-1 rounded-md">React</span>
                <span className="bg-[#1f473e] text-white text-xs px-3 py-1 rounded-md">Node.js</span>
              </div>
              <h3 className="text-white text-xl font-bold mb-2">AI-Powered Personal Assistant</h3>
              <p className="text-white/70 mb-4 text-sm">
                A cutting-edge personal assistant leveraging GPT for natural language understanding and task automation.
              </p>
              <Link href="#" className="text-[#00FF8C] flex items-center text-sm hover:underline">
                View Project <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>

          {/* Project 2: Smart Home IoT Hub */}
          <div className="bg-[#0f382f] rounded-lg overflow-hidden border border-[#143c33]">
            <div className="relative">
              <Image
                src="/project-image.jpg"
                alt="Smart Home IoT Hub"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="p-5">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-[#0c563f] text-[#00FF8C] text-xs px-3 py-1 rounded-md">IoT</span>
                <span className="bg-[#1f473e] text-white text-xs px-3 py-1 rounded-md">Flutter</span>
                <span className="bg-[#1f473e] text-white text-xs px-3 py-1 rounded-md">Python</span>
              </div>
              <h3 className="text-white text-xl font-bold mb-2">Smart Home IoT Hub</h3>
              <p className="text-white/70 mb-4 text-sm">
                A centralized platform for managing and monitoring smart home devices with ML-powered energy
                optimization.
              </p>
              <Link href="#" className="text-[#00FF8C] flex items-center text-sm hover:underline">
                View Project <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>

          {/* Project 3: Predictive Analytics Dashboard */}
          <div className="bg-[#0f382f] rounded-lg overflow-hidden border border-[#143c33]">
            <div className="relative">
              <Image
                src="/project-image.jpg"
                alt="Predictive Analytics Dashboard"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="p-5">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-[#0c563f] text-[#00FF8C] text-xs px-3 py-1 rounded-md">Analytics</span>
                <span className="bg-[#1f473e] text-white text-xs px-3 py-1 rounded-md">D3.js</span>
                <span className="bg-[#1f473e] text-white text-xs px-3 py-1 rounded-md">Machine Learning</span>
              </div>
              <h3 className="text-white text-xl font-bold mb-2">Predictive Analytics Dashboard</h3>
              <p className="text-white/70 mb-4 text-sm">
                An enterprise-grade analytics platform with predictive modeling and interactive data visualization.
              </p>
              <Link href="#" className="text-[#00FF8C] flex items-center text-sm hover:underline">
                View Project <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
