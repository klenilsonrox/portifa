"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Database, Layout, Server } from "lucide-react"

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const skills = [
    { name: "HTML", category: "frontend", level: 90 },
    { name: "CSS", category: "frontend", level: 85 },
    { name: "JavaScript", category: "frontend", level: 90 },
    { name: "TypeScript", category: "frontend", level: 85 },
    { name: "ReactJS", category: "frontend", level: 90 },
    { name: "NextJS", category: "frontend", level: 85 },
    { name: "Tailwind", category: "frontend", level: 90 },
    { name: "NodeJS", category: "backend", level: 80 },
    { name: "Express", category: "backend", level: 75 },
    { name: "MongoDB", category: "database", level: 75 },
    { name: "PostgreSQL", category: "database", level: 70 },
    { name: "PrismaORM", category: "database", level: 75 },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="py-20 px-4 bg-[#0E1013]" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Minhas <span className="text-[#9634F6]">Habilidades</span>
          </h2>
          <div className="w-20 h-1 bg-[#9634F6] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#1B1D20] p-6 rounded-lg shadow-lg"
          >
            <div className="w-14 h-14 bg-[#9634F6]/20 rounded-lg flex items-center justify-center mb-4">
              <Layout className="text-[#9634F6]" size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2">Frontend</h3>
            <p className="text-gray-400">Desenvolvimento de interfaces modernas e responsivas com ReactJS e NextJS.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#1B1D20] p-6 rounded-lg shadow-lg"
          >
            <div className="w-14 h-14 bg-[#9634F6]/20 rounded-lg flex items-center justify-center mb-4">
              <Server className="text-[#9634F6]" size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2">Backend</h3>
            <p className="text-gray-400">Criação de APIs e serviços com NodeJS e Express.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#1B1D20] p-6 rounded-lg shadow-lg"
          >
            <div className="w-14 h-14 bg-[#9634F6]/20 rounded-lg flex items-center justify-center mb-4">
              <Database className="text-[#9634F6]" size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2">Banco de Dados</h3>
            <p className="text-gray-400">Modelagem e gerenciamento com MongoDB, PostgreSQL e PrismaORM.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#1B1D20] p-6 rounded-lg shadow-lg"
          >
            <div className="w-14 h-14 bg-[#9634F6]/20 rounded-lg flex items-center justify-center mb-4">
              <Code className="text-[#9634F6]" size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2">Desenvolvimento</h3>
            <p className="text-gray-400">Criação de sites e sistemas web completos, do design à implementação.</p>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={item} className="bg-[#1B1D20] p-4 rounded-lg">
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-[#9634F6]">{skill.level}%</span>
              </div>
              <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-[#9634F6] rounded-full"
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
