import { Smartphone, Code, Pen, Cloud, Check } from "lucide-react"

export default function ServicesSection() {
  return (
    <section className="py-20 bg-[#1f473e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block mb-6">
            <span className="text-[#00FF8C] text-sm uppercase tracking-wider px-6 py-2 rounded-full bg-[#1c5445]">
              WHAT I OFFER
            </span>
          </div>
          <h2 className="text-6xl font-bold mb-6">
            <span className="text-white">Professional </span>
            <span className="text-[#00FF8C]">Services</span>
          </h2>
          <p className="text-white/80 max-w-3xl text-xl">
            Tailored solutions to help businesses leverage technology and achieve their goals with innovative, scalable,
            and user-friendly applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Mobile App Development Card */}
          <div className="bg-[#16332d] rounded-lg p-8">
            <div className="w-16 h-16 rounded-full bg-[#0c563f] flex items-center justify-center mb-6">
              <Smartphone className="text-[#00FF8C]" size={28} />
            </div>
            <h3 className="text-white text-xl font-bold mb-4">Mobile App Development</h3>
            <p className="text-white/70 mb-6">
              Create stunning, high-performance mobile applications for iOS and Android platforms with seamless user
              experiences.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="text-[#00FF8C] mr-2 mt-1" size={18} />
                <span className="text-white/80">Native iOS & Android Apps</span>
              </li>
              <li className="flex items-start">
                <Check className="text-[#00FF8C] mr-2 mt-1" size={18} />
                <span className="text-white/80">Cross-platform Solutions</span>
              </li>
              <li className="flex items-start">
                <Check className="text-[#00FF8C] mr-2 mt-1" size={18} />
                <span className="text-white/80">App Store Optimization</span>
              </li>
            </ul>
          </div>

          {/* Custom Software Development Card */}
          <div className="bg-[#16332d] rounded-lg p-8">
            <div className="w-16 h-16 rounded-full bg-[#0c563f] flex items-center justify-center mb-6">
              <Code className="text-[#00FF8C]" size={28} />
            </div>
            <h3 className="text-white text-xl font-bold mb-4">Custom Software Development</h3>
            <p className="text-white/70 mb-6">
              End-to-end development of bespoke software solutions tailored to your specific business needs and
              objectives.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="text-[#00FF8C] mr-2 mt-1" size={18} />
                <span className="text-white/80">Web Applications</span>
              </li>
              <li className="flex items-start">
                <Check className="text-[#00FF8C] mr-2 mt-1" size={18} />
                <span className="text-white/80">Mobile Applications</span>
              </li>
              <li className="flex items-start">
                <Check className="text-[#00FF8C] mr-2 mt-1" size={18} />
                <span className="text-white/80">Enterprise Solutions</span>
              </li>
            </ul>
          </div>

          {/* UI/UX Design Card */}
          <div className="bg-[#16332d] rounded-lg p-8">
            <div className="w-16 h-16 rounded-full bg-[#0c563f] flex items-center justify-center mb-6">
              <Pen className="text-[#00FF8C]" size={28} />
            </div>
            <h3 className="text-white text-xl font-bold mb-4">UI/UX Design with Figma</h3>
            <p className="text-white/70 mb-6">
              Creating intuitive, engaging, and accessible user interfaces using Figma to enhance user experience and
              drive business growth.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="text-[#00FF8C] mr-2 mt-1" size={18} />
                <span className="text-white/80">User Research & Testing</span>
              </li>
              <li className="flex items-start">
                <Check className="text-[#00FF8C] mr-2 mt-1" size={18} />
                <span className="text-white/80">Figma Prototyping</span>
              </li>
              <li className="flex items-start">
                <Check className="text-[#00FF8C] mr-2 mt-1" size={18} />
                <span className="text-white/80">Design Systems Creation</span>
              </li>
            </ul>
          </div>

          {/* Cloud Solutions Card */}
          <div className="bg-[#16332d] rounded-lg p-8">
            <div className="w-16 h-16 rounded-full bg-[#0c563f] flex items-center justify-center mb-6">
              <Cloud className="text-[#00FF8C]" size={28} />
            </div>
            <h3 className="text-white text-xl font-bold mb-4">Cloud Solutions</h3>
            <p className="text-white/70 mb-6">
              Expert cloud architecture and deployment services to ensure your applications are scalable, secure, and
              cost-effective.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="text-[#00FF8C] mr-2 mt-1" size={18} />
                <span className="text-white/80">Cloud Migration</span>
              </li>
              <li className="flex items-start">
                <Check className="text-[#00FF8C] mr-2 mt-1" size={18} />
                <span className="text-white/80">Serverless Architecture</span>
              </li>
              <li className="flex items-start">
                <Check className="text-[#00FF8C] mr-2 mt-1" size={18} />
                <span className="text-white/80">DevOps Implementation</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
