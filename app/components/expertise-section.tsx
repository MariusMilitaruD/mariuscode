import { Brain, Database, Smartphone, Paintbrush } from "lucide-react"

export default function ExpertiseSection() {
  return (
    <section className="py-20 bg-[#1f473e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-10">
            <span className="text-[#00FF8C] text-sm uppercase tracking-wider px-6 py-2 rounded-full bg-[#143c33]">
              EXPERTISE
            </span>
          </div>
          <h2 className="text-4xl font-bold mb-6">
            Technical <span className="text-[#00FF8C]">Proficiency</span>
          </h2>
          <p className="text-white/80 max-w-3xl mx-auto">
            A comprehensive set of skills acquired through years of experience, enabling me to develop innovative and
            robust solutions across the tech stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* React Card */}
          <div className="bg-[#112c25] rounded-lg p-8 flex flex-col items-center text-center">
            <div className="text-[#00FF8C] mb-4">
              <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor">
                <path d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
                <path d="M12 22.5c-5.799 0-10.5-2.457-10.5-5.5 0-1.95 1.846-3.71 4.874-4.771a40.792 40.792 0 0 1-.33-1.126c-.289-1.144-.525-2.1-.525-2.846 0-2.598 3.809-4.757 6.481-4.757 2.796 0 6.481 2.159 6.481 4.757 0 .747-.236 1.702-.525 2.846-.102.401-.21.787-.33 1.126C20.654 13.29 22.5 15.05 22.5 17c0 3.043-4.701 5.5-10.5 5.5Zm0-2c5.247 0 8.5-2.135 8.5-3.5 0-1.094-1.586-2.453-4.066-3.147a1 1 0 0 1-.707-1.225c.13-.366.249-.773.358-1.199.267-1.061.415-1.842.415-2.172 0-1.347-2.525-2.757-4.481-2.757-1.956 0-4.481 1.41-4.481 2.757 0 .33.148 1.111.415 2.173.109.425.227.832.358 1.198a1 1 0 0 1-.707 1.225C5.086 14.547 3.5 15.906 3.5 17c0 1.365 3.253 3.5 8.5 3.5Z" />
              </svg>
            </div>
            <h4 className="text-white text-xl font-bold mb-2">React</h4>
            <p className="text-[#00FF8C]">Front-end Library</p>
          </div>

          {/* JavaScript Card */}
          <div className="bg-[#112c25] rounded-lg p-8 flex flex-col items-center text-center">
            <div className="text-[#00FF8C] mb-4 bg-[#00FF8C] text-[#112c25] w-10 h-10 flex items-center justify-center rounded">
              <span className="font-bold">JS</span>
            </div>
            <h4 className="text-white text-xl font-bold mb-2">JavaScript</h4>
            <p className="text-[#00FF8C]">Programming</p>
          </div>

          {/* Node.js Card */}
          <div className="bg-[#112c25] rounded-lg p-8 flex flex-col items-center text-center">
            <div className="text-[#00FF8C] mb-4">
              <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor">
                <path d="M12 21.985c-.275 0-.532-.074-.772-.202l-2.439-1.448c-.365-.203-.182-.277-.072-.314.496-.165.588-.201 1.101-.493.056-.037.129-.02.185.017l1.87 1.12c.074.036.166.036.221 0l7.319-4.237c.074-.036.11-.11.11-.202V7.768c0-.091-.036-.165-.11-.201l-7.319-4.219c-.073-.037-.165-.037-.221 0L4.552 7.566c-.073.036-.11.129-.11.201v8.457c0 .073.037.166.11.202l2 1.157c1.082.548 1.762-.095 1.762-.735V8.502c0-.11.091-.221.203-.221h.936c.11 0 .22.092.22.221v8.347c0 1.449-.788 2.294-2.164 2.294-.422 0-.752 0-1.688-.46l-1.925-1.099a1.55 1.55 0 0 1-.771-1.34V7.786c0-.55.293-1.064.771-1.339l7.316-4.237a1.637 1.637 0 0 1 1.544 0l7.317 4.237c.479.274.771.789.771 1.339v8.458c0 .549-.293 1.063-.771 1.34l-7.317 4.236c-.241.11-.516.165-.773.165zm2.256-5.816c-3.21 0-3.87-1.468-3.87-2.714 0-.11.092-.221.204-.221h.954c.11 0 .202.073.202.184.147.971.568 1.449 2.51 1.449 1.54 0 2.202-.35 2.202-1.175 0-.477-.185-.825-2.587-1.063-1.999-.2-3.246-.643-3.246-2.238 0-1.485 1.247-2.366 3.339-2.366 2.347 0 3.503.809 3.649 2.568a.297.297 0 0 1-.056.165c-.037.036-.091.073-.146.073h-.953a.212.212 0 0 1-.202-.164c-.221-1.012-.789-1.34-2.292-1.34-1.689 0-1.891.587-1.891 1.027 0 .531.237.696 2.514.99 2.256.293 3.32.715 3.32 2.294-.02 1.615-1.339 2.531-3.67 2.531z" />
              </svg>
            </div>
            <h4 className="text-white text-xl font-bold mb-2">Node.js</h4>
            <p className="text-[#00FF8C]">Back-end</p>
          </div>

          {/* AI Integration Card */}
          <div className="bg-[#112c25] rounded-lg p-8 flex flex-col items-center text-center">
            <div className="text-[#00FF8C] mb-4">
              <Brain size={40} />
            </div>
            <h4 className="text-white text-xl font-bold mb-2">AI Integration</h4>
            <p className="text-[#00FF8C]">Technology</p>
          </div>

          {/* Flutter Card */}
          <div className="bg-[#112c25] rounded-lg p-8 flex flex-col items-center text-center">
            <div className="text-[#00FF8C] mb-4">
              <Smartphone size={40} />
            </div>
            <h4 className="text-white text-xl font-bold mb-2">Flutter</h4>
            <p className="text-[#00FF8C]">Mobile Dev</p>
          </div>

          {/* SQL/NoSQL Card */}
          <div className="bg-[#112c25] rounded-lg p-8 flex flex-col items-center text-center">
            <div className="text-[#00FF8C] mb-4">
              <Database size={40} />
            </div>
            <h4 className="text-white text-xl font-bold mb-2">SQL/NoSQL</h4>
            <p className="text-[#00FF8C]">Databases</p>
          </div>

          {/* Cloud Services Card */}
          <div className="bg-[#112c25] rounded-lg p-8 flex flex-col items-center text-center">
            <div className="text-[#00FF8C] mb-4">
              <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor">
                <path d="M18.75 11.35a4.32 4.32 0 0 0 .25-1.46 4.1 4.1 0 0 0-4.12-4.14 4.15 4.15 0 0 0-3.46 1.87 3.26 3.26 0 0 0-2.92-1.8 3.3 3.3 0 0 0-3.32 3.27c0 .07 0 .14.05.21A4.32 4.32 0 0 0 2 13.1a4.35 4.35 0 0 0 4.35 4.35h11.3a4.35 4.35 0 0 0 4.35-4.35c0-.68-.25-1.3-.25-1.75zM6.5 6.01a.5.5 0 0 1 .5-.5h1.75a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5v-1.5zm4 0a.5.5 0 0 1 .5-.5h1.75a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5h-1.75a.5.5 0 0 1-.5-.5v-1.5zm4 0a.5.5 0 0 1 .5-.5h1.75a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5h-1.75a.5.5 0 0 1-.5-.5v-1.5z" />
              </svg>
            </div>
            <h4 className="text-white text-xl font-bold mb-2">Cloud Services</h4>
            <p className="text-[#00FF8C]">Infrastructure</p>
          </div>

          {/* UI/UX Design Card */}
          <div className="bg-[#112c25] rounded-lg p-8 flex flex-col items-center text-center">
            <div className="text-[#00FF8C] mb-4">
              <Paintbrush size={40} />
            </div>
            <h4 className="text-white text-xl font-bold mb-2">UI/UX Design</h4>
            <p className="text-[#00FF8C]">Creative</p>
          </div>
        </div>
      </div>
    </section>
  )
}
