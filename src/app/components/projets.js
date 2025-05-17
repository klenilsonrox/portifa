"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github } from "lucide-react"

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [activeFilter, setActiveFilter] = useState("all")

  const projetos = [
    {
      id: 0,
      name: "Rx Bank",
      description:
        "Rx Bank é um projeto de um banco fictício onde os usuários podem criar conta e enviar dinheiro para outros usuários que possuam conta, ao criar conta cada usuário começa com um saldo de R$ 5,000",
      image: "/images/banco.png",
      link: "https://rxbank.vercel.app/",
      tecnologias: ["Nextjs", "Tailwind", "NodeJs", "MongoDB"],
      color: "bg-[#7228BC]",
    },
    {
      id: 1,
      name: "Rx Campanhas",
      description:
        "Rx Campanhas é um projeto fictício de um sistema que vende rifas online, esse sistema tem um painel de adm onde o adm pode criar novas rifas, editar e deletar rifas já criadas, os usuários podem criar conta e comprar rifas",
      image: "/images/rifa.png",
      link: "https://rxcampanhas.vercel.app/",
      tecnologias: ["Nextjs", "Tailwind", "NodeJs", "MongoDB"],
      color: "bg-[#1F2937]",
    },
    {
      id: 2,
      name: "Pytter Burger",
      description:
        "Pytter Burger é um cardápio Online que fiz como freelancer para uma hamburgueria, através do site os usuários podem fazer o pedido, e enviar via Whatsapp, o que agiliza muito o atendimento para o dono do estabelecimento sem a necessidade de ficar perdendo tempo conversando com clientes.",
      image: "/images/pytter.png",
      link: "https://www.pytterburger.com.br",
      tecnologias: ["Nextjs", "Tailwind"],
      color: "bg-[#000000]",
    },
    {
      id: 3,
      name: "Nutri Ferraz",
      description: "Nutri Ferraz é um site para uma nutricionista Fictícia feito com NextJs e tailwind css!",
      image: "/images/nutri.png",
      link: "https://pagina-nutricionista.vercel.app/",
      tecnologias: ["Nextjs", "Tailwind"],
      color: "bg-[#FED7B1]",
    },
    {
      id: 4,
      name: "Rx Burgers",
      description:
        "Rx Burguers é um projeto fullstack de um sistema de administraçao de pedidos e clientes, o projeto foi feito usando Nextjs e tailwind no frontend, prisma, postgres no backend!",
      image: "/images/burgers.png",
      link: "https://hamburgueriarx.vercel.app",
      tecnologias: ["Nextjs", "Tailwind", "NodeJs", "Prisma", "express"],
      color: "bg-red-600",
    },
  ]

  const filters = [
    { name: "Todos", value: "all" },
    { name: "NextJS", value: "Nextjs" },
    { name: "MongoDB", value: "MongoDB" },
    { name: "Prisma", value: "Prisma" },
  ]

  const filteredProjects =
    activeFilter === "all" ? projetos : projetos.filter((project) => project.tecnologias.includes(activeFilter))

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="projects" className="py-20 px-4 bg-[#1B1D20]" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Meus <span className="text-[#9634F6]">Projetos</span>
          </h2>
          <div className="w-20 h-1 bg-[#9634F6] mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 py-2 rounded-full transition-all ${
                activeFilter === filter.value
                  ? "bg-[#9634F6] text-white"
                  : "bg-[#0E1013] text-gray-300 hover:bg-[#9634F6]/20"
              }`}
            >
              {filter.name}
            </button>
          ))}
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="bg-[#0E1013] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 ${project.color} opacity-20`}></div>
                <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                  {project.name}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.name}</h3>
                <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tecnologias.map((tech, index) => (
                    <span key={index} className="text-xs bg-[#9634F6]/20 text-[#9634F6] px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[#9634F6] hover:text-[#8429e0] transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <span>Ver Projeto</span>
                    <ExternalLink size={16} />
                  </motion.a>
                  <motion.a
                    href="https://github.com/klenilsonrox"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    whileHover={{ y: -3 }}
                  >
                    <Github size={20} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
