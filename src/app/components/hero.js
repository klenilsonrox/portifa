"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin } from "lucide-react"

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10 px-4 bg-[#0E1013]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-white">Olá, eu sou</span>
              <br />
              <span className="text-[#9634F6]">Clenilson Brandão</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 mb-6">Desenvolvedor Full Stack</h2>
            <p className="text-gray-400 mb-8 max-w-lg">
              Especializado em criar sites e sistemas web modernos e responsivos com foco em ReactJs e NextJs.
              Transformando ideias em soluções digitais de alta qualidade.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#projects"
                className="bg-[#9634F6] hover:bg-[#8429e0] text-white px-6 py-3 rounded-md font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Projetos
              </motion.a>
              <motion.a
                href="#contact"
                className="border border-[#9634F6] text-white px-6 py-3 rounded-md font-medium hover:bg-[#9634F6]/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contato
              </motion.a>
            </div>
            <div className="flex mt-8 space-x-4">
              <motion.a
                href="https://github.com/klenilsonrox"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/clenilson-brandao/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-[#9634F6] to-[#1B1D20] flex items-center justify-center">
              <div className="absolute inset-2 rounded-full bg-[#0E1013] flex items-center justify-center text-4xl font-bold text-[#9634F6]">
                CB
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex justify-center mt-20"
        >
          <motion.a
            href="#about"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <ArrowDown size={24} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
