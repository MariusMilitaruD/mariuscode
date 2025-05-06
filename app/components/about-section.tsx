import Image from "next/image"
import { Code, ArrowRight, Monitor } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="py-20 bg-[#102f28] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left side - Image and AI-Driven Development */}
          <div className="lg:w-1/2 relative group">
            <div className="rounded-lg overflow-hidden transition-transform duration-500 transform group-hover:scale-[1.02]">
              <Image
                src="/robot-bench.jpg"
                alt="AI robot sitting on a bench"
                width={600}
                height={400}
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-[#102f28]/90 to-transparent">
                <p className="text-[#00FF8C] text-sm tracking-wider mb-2">TECHNOLOGY</p>
                <h3 className="text-white text-2xl font-bold">AI-Driven Development</h3>
              </div>
            </div>

            {/* Animated border effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00FF8C]/30 to-[#102f28]/0 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-1000"></div>
          </div>

          {/* Right side - Creative Code Artistry and Experience */}
          <div className="lg:w-1/2">
            <div className="border border-[#00FF8C]/30 rounded-lg bg-[#102f28]/80 p-8 backdrop-blur-sm hover:border-[#00FF8C]/50 transition-all duration-500">
              <div className="flex items-center space-x-2 text-[#00FF8C] mb-4">
                <span>&lt;&gt;</span>
                <span>&gt;</span>
                <span className="w-4 h-4 border border-[#00FF8C] flex items-center justify-center text-xs">□</span>
              </div>

              <h2 className="text-[#00FF8C] text-2xl font-bold mb-4">Creative Code Artistry</h2>

              <p className="text-white/80 mb-6">
                Transforming complex ideas into elegant digital solutions through the perfect blend of art and
                technology. My code doesn't just function—it creates experiences that resonate and inspire.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-[#102f28] border border-[#00FF8C]/30 text-[#00FF8C] px-4 py-1 rounded-full text-sm hover:bg-[#00FF8C]/10 transition-colors duration-300">
                  Innovative UI/UX
                </span>
                <span className="bg-[#102f28] border border-[#00FF8C]/30 text-[#00FF8C] px-4 py-1 rounded-full text-sm hover:bg-[#00FF8C]/10 transition-colors duration-300">
                  Clean Architecture
                </span>
                <span className="bg-[#102f28] border border-[#00FF8C]/30 text-[#00FF8C] px-4 py-1 rounded-full text-sm hover:bg-[#00FF8C]/10 transition-colors duration-300">
                  AI Integration
                </span>
              </div>

              <h3 className="text-white text-xl font-bold mb-6">Experience</h3>

              <div className="space-y-6">
                <div className="flex gap-4 hover:translate-x-1 transition-transform duration-300">
                  <div className="text-[#00FF8C] mt-1">
                    <Code size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Software Development</h4>
                    <p className="text-white/80">
                      8+ years creating robust, scalable applications with focus on AI and modern frameworks.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 hover:translate-x-1 transition-transform duration-300">
                  <div className="text-[#00FF8C] mt-1">
                    <ArrowRight size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">AI Solutions Architecture</h4>
                    <p className="text-white/80">
                      Designing and implementing cutting-edge AI systems for real-world business challenges.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 hover:translate-x-1 transition-transform duration-300">
                  <div className="text-[#00FF8C] mt-1">
                    <Monitor size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">UI/UX Engineering</h4>
                    <p className="text-white/80">
                      Creating intuitive, accessible, and beautiful interfaces that elevate the user experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
