"use client"

import { motion } from "framer-motion"
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-[#0E1013] border-t border-gray-800">
      <div className="container mx-auto py-12 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h3 className="text-2xl font-bold mb-2">
              <span className="text-[#9634F6]">Clenilson</span> Brandão
            </h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Desenvolvedor Full Stack especializado em criar sites e sistemas web modernos e responsivos.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/clenilsonbrandao"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/clenilson-brandao/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="mailto:klenilsoncoc@gmail.com"
                whileHover={{ y: -5 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 md:mt-0"
          >
            <motion.button
              onClick={scrollToTop}
              className="w-12 h-12 bg-[#9634F6]/20 rounded-full flex items-center justify-center text-[#9634F6] hover:bg-[#9634F6] hover:text-white transition-colors"
              whileHover={{ y: -5 }}
            >
              <ArrowUp size={20} />
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 mt-12 pt-8 text-center"
        >
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Clenilson Brandão. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
