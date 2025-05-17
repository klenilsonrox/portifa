"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="about" className="py-20 px-4 bg-[#1B1D20]" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Sobre <span className="text-[#9634F6]">Mim</span>
          </h2>
          <div className="w-20 h-1 bg-[#9634F6] mx-auto"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1"
          >
            <div className="relative">
              <div className="w-full h-80 bg-[#9634F6]/20 rounded-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-80 border-2 border-[#9634F6] rounded-lg"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex-1"
          >
            <h3 className="text-2xl font-bold mb-4">Desenvolvedor Full Stack</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Tenho mais de 3 anos de experiência com desenvolvimento fullstack, com foco em frameworks como ReactJs e
              NextJs. Com sólido conhecimento técnico e dedicação para criar interfaces envolventes e intuitivas em
              projetos desafiadores.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Profissional com excelentes habilidades de comunicação e amplo conhecimento em Javascript e ReactJs.
              Sempre em busca das melhores soluções aos problemas apresentados, de forma a colaborar com a rotina diária
              e prestar um serviço de alta qualidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-1">
                <h4 className="font-bold text-[#9634F6] mb-2">Experiência</h4>
                <p className="text-gray-300">+3 anos</p>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-[#9634F6] mb-2">Projetos</h4>
                <p className="text-gray-300">+10 projetos</p>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-[#9634F6] mb-2">Início</h4>
                <p className="text-gray-300">2022</p>
              </div>
            </div>
            <motion.a
              href="#contact"
              className="inline-block bg-[#9634F6] hover:bg-[#8429e0] text-white px-6 py-3 rounded-md font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Entre em Contato
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
