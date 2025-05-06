"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function ProfileImage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let animationFrameId: number
    let hue = 0
    const pulseSpeed = 0.5 // Speed of the pulse effect

    const animate = () => {
      hue = (hue + 0.1) % 360
      const time = Date.now() * 0.001 * pulseSpeed
      const pulseSize = Math.sin(time) * 0.5 + 1.5 // Pulse between 1x and 2x

      // Apply the pulsing glow effect
      container.style.boxShadow = `0 0 ${10 * pulseSize}px ${5 * pulseSize}px rgba(0, 255, 140, ${0.3 * Math.abs(Math.sin(time))})`

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="w-[500px] h-[500px] rounded-full border-4 border-[#00FF8C] overflow-hidden relative"
    >
      <Image src="/profile-image.png" alt="Marius Militaru" fill className="object-cover" priority />
    </div>
  )
}
