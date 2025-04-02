"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"

interface AnimatedGradientBackgroundProps {
  className?: string
  intensity?: "subtle" | "medium" | "strong"
}

interface Beam {
  x: number
  y: number
  width: number
  length: number
  angle: number
  speed: number
  opacity: number
  hue: number
  pulse: number
  pulseSpeed: number
}

function createBeam(width: number, height: number): Beam {
  const angle = -35 + Math.random() * 10
  return {
    x: Math.random() * width * 1.5 - width * 0.25,
    y: Math.random() * height * 1.5 - height * 0.25,
    width: 30 + Math.random() * 60,
    length: height * 2.5,
    angle: angle,
    speed: 0.6 + Math.random() * 1.2,
    opacity: 0.12 + Math.random() * 0.16,
    hue: 190 + Math.random() * 70,
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: 0.02 + Math.random() * 0.03,
  }
}


export default function BeamsBackground({ className, intensity = "strong" }: AnimatedGradientBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const beamsRef = useRef<Beam[]>([])
  const animationFrameRef = useRef<number>(0)
  const MINIMUM_BEAMS = 20

  const opacityMap = {
    subtle: 0.7,
    medium: 0.85,
    strong: 1,
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const updateCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.scale(dpr, dpr)

      const totalBeams = MINIMUM_BEAMS * 1.5
      beamsRef.current = Array.from({ length: totalBeams }, () => createBeam(canvas.width, canvas.height))
    }

    updateCanvasSize()
    window.addEventListener("resize", updateCanvasSize)

    function animate() {
      if (!canvas || !ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.filter = "blur(35px)"

      beamsRef.current.forEach((beam) => {
        beam.y -= beam.speed
        beam.pulse += beam.pulseSpeed

        if (beam.y + beam.length < -100) {
          beam.y = canvas.height + 100
        }

        ctx.save()
        ctx.translate(beam.x, beam.y)
        ctx.rotate((beam.angle * Math.PI) / 180)

        const pulsingOpacity = beam.opacity * (0.8 + Math.sin(beam.pulse) * 0.2) * opacityMap[intensity]
        const gradient = ctx.createLinearGradient(0, 0, 0, beam.length)
        gradient.addColorStop(0, `hsla(${beam.hue}, 85%, 65%, 0)`)
        gradient.addColorStop(0.5, `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity})`)
        gradient.addColorStop(1, `hsla(${beam.hue}, 85%, 65%, 0)`)

        ctx.fillStyle = gradient
        ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length)
        ctx.restore()
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", updateCanvasSize)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [intensity])

  return (
    <div className={cn("relative min-h-screen w-full overflow-hidden bg-neutral-950", className)}>
      <canvas ref={canvasRef} className="absolute inset-0" style={{ filter: "blur(15px)" }} />
      <div className="relative flex flex-col md:flex-row items-center justify-between text-white px-4 py-20 max-w-7xl mx-auto gap-8">
        {/* Text Content */}
        <motion.div 
          className="md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            We are <span className="text-primary">Nexus Coders</span>
          </motion.h1>

          <motion.div 
            className="space-y-4 text-center md:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-lg md:text-xl text-muted-foreground">
              A team of passionate full-stack developers, designers, and problem solvers, dedicated to crafting modern web applications and seamless digital experiences.
            </p>
            <p className="text-muted-foreground">
              We specialize in building high-performance websites, custom web applications, and scalable solutions using the latest technologies. Our expertise spans frontend and backend development, UI/UX design, and cloud deployment.
            </p>
            <p className="text-muted-foreground">
              Whether you're a startup looking for an MVP, a business seeking digital transformation, or an individual with a creative idea, we're here to turn your vision into reality.
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button variant="outline" className="rounded-2xl text-primary hover:bg-blue-700 hover:text-white border-sky-400 transition-colors duration-300" asChild>
              <Link href="/contact">Contact Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button variant="outline" className="rounded-2xl text-primary hover:bg-blue-700 hover:text-white border-sky-400 transition-colors duration-300">
              <Download className="mr-2 h-4 w-4" /> Download Portfolio
            </Button>
          </motion.div>
        </motion.div>

        {/* Image Container */}
        <motion.div 
          className="md:w-1/2 flex justify-center items-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            className="relative w-full max-w-[500px] aspect-square rounded-2xl overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image 
              src="https://res.cloudinary.com/dpbffql9d/image/upload/v1743506337/image4_boryxb.png" 
              alt="Team Collaboration" 
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}