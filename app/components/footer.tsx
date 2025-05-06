import { Github, Linkedin, Twitter, Dribbble } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#0f382f] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="text-white/70 text-base">© 2025 Militaru Marius. All rights reserved.</div>
          <div className="flex space-x-6">
            <Link href="#" className="text-white hover:text-[#00FF8C] transition-colors">
              <Github size={24} />
            </Link>
            <Link href="#" className="text-white hover:text-[#00FF8C] transition-colors">
              <Linkedin size={24} />
            </Link>
            <Link href="#" className="text-white hover:text-[#00FF8C] transition-colors">
              <Twitter size={24} />
            </Link>
            <Link href="#" className="text-white hover:text-[#00FF8C] transition-colors">
              <Dribbble size={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
