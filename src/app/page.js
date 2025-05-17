"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Navbar from "./components/navbar"
import Hero from "./components/hero"
import About from "./components/about"
import Skills from "./components/skills"
import Projects from "./components/projets"
import Contact from "./components/contact"
import Footer from "./components/footer"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }, [])

  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-[#0E1013]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-[#9634F6]"
        >
          CB
        </motion.div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-[#0E1013] text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
