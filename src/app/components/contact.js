"use client"

import React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Phone, Mail, Linkedin, Send } from "lucide-react"

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({ name: "", email: "", message: "" })

      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 3000)
    }, 1500)
  }

  const openWhatsApp = () => {
    window.open(`https://wa.me/5531992311170`, "_blank")
  }

  return (
    <section id="contact" className="py-20 px-4 bg-[#0E1013]" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Entre em <span className="text-[#9634F6]">Contato</span>
          </h2>
          <div className="w-20 h-1 bg-[#9634F6] mx-auto"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1"
          >
            <h3 className="text-2xl font-bold mb-6">Vamos Conversar</h3>
            <p className="text-gray-400 mb-8">
              Estou disponível para novos projetos e oportunidades. Entre em contato para discutirmos como posso ajudar
              a transformar suas ideias em realidade.
            </p>

            <div className="space-y-6">
              <motion.div className="flex items-center gap-4" whileHover={{ x: 5 }}>
                <div className="w-12 h-12 bg-[#9634F6]/20 rounded-full flex items-center justify-center">
                  <Phone className="text-[#9634F6]" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-white">WhatsApp</h4>
                  <button onClick={openWhatsApp} className="text-gray-400 hover:text-[#9634F6]">
                    (31) 99231-1170
                  </button>
                </div>
              </motion.div>

              <motion.div className="flex items-center gap-4" whileHover={{ x: 5 }}>
                <div className="w-12 h-12 bg-[#9634F6]/20 rounded-full flex items-center justify-center">
                  <Mail className="text-[#9634F6]" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-white">Email</h4>
                  <a href="mailto:klenilsoncoc@gmail.com" className="text-gray-400 hover:text-[#9634F6]">
                    contato@clenilsonbrandao.com
                  </a>
                </div>
              </motion.div>

              <motion.div className="flex items-center gap-4" whileHover={{ x: 5 }}>
                <div className="w-12 h-12 bg-[#9634F6]/20 rounded-full flex items-center justify-center">
                  <Linkedin className="text-[#9634F6]" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-white">LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/clenilson-brandao/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#9634F6]"
                  >
                    clenilson-brandao
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex-1"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1B1D20] border border-gray-700 rounded-lg focus:outline-none focus:border-[#9634F6] text-white"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1B1D20] border border-gray-700 rounded-lg focus:outline-none focus:border-[#9634F6] text-white"
                  placeholder="Seu email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#1B1D20] border border-gray-700 rounded-lg focus:outline-none focus:border-[#9634F6] text-white resize-none"
                  placeholder="Sua mensagem"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#9634F6] hover:bg-[#8429e0] text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    <span>Enviar Mensagem</span>
                    <Send size={18} />
                  </>
                )}
              </motion.button>

              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-500 text-center"
                >
                  Mensagem enviada com sucesso!
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
