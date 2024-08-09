
'use client'
import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import Header from './components/Header';

export default function Home() {
  return (
      <div className='bg-[rgb(14,16,19)]'>
        <div className="bg-[rgb(14,16,19)] text-white min-h-screen w-full max-w-7xl mx-auto flex flex-col justify-between p-4">
          <main className="flex-grow max-w-7xl mx-auto p-4">
              {/* Seção Sobre Mim */}
              <section id="about" className="my-8 text-center">
                  <img
                      src="https://img.freepik.com/vetores-gratis/hacker-operando-uma-ilustracao-do-icone-dos-desenhos-animados-laptop-conceito-de-icone-de-tecnologia-isolado-estilo-flat-cartoon_138676-2387.jpg?semt=ais_hybrid"
                      alt="Clenilson"
                      className="mx-auto w-48 h-48 rounded-full border-4 border-[#B452FF]"
                  />
                  <h2 className="text-4xl font-bold mt-4">Clenilson Brandão</h2>
                  <p className="mt-2 text-gray-400">Tenho 2 anos e meio de estudo em desenvolvimento de software, com experiência em Node.js, React.js, Next.js, Tailwind CSS, MongoDB, PostgreSQL, Prisma, MySQL, e muito mais.</p>
              </section>

              {/* Seção de Skills */}
              <section id="skills" className="my-12">
                  <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
                  <div className="flex justify-center w-full max-w-[375px] lg:max-w-7xl overflow-x-scroll lg:overflow-x-auto lg:flex-wrap space-x-4 px-4">
                      {['HTML', 'CSS', 'JavaScript', 'ReactJS', 'NextJS', 'TailwindCSS', 'MongoDB', 'Express', 'NodeJS', 'Postgres', 'MySQL', 'Prisma'].map((skill, index) => (
                          <motion.div
                              key={index}
                              className="bg-[#282A2D] shadow-lg rounded-lg px-4 py-2 text-center text-[#B452FF] m-2"
                              whileHover={{ scale: 1.05 }}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                          >
                              {skill}
                          </motion.div>
                      ))}
                  </div>
              </section>

              {/* Projetos */}
              <section id="projects" className="my-12">
                  <h2 className="text-3xl font-bold text-center mb-8">Projetos</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Projeto rxCampanhas */}
                      <motion.div 
                          className="bg-[#282A2D] shadow-lg rounded-lg overflow-hidden"
                          whileHover={{ scale: 1.05 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                      >
                          <img src="./images/rifa.png" alt="rxCampanhas" className="w-full h-48 object-cover" />
                          <div className="p-4">
                              <h3 className="text-2xl font-semibold text-[#B452FF]">rxCampanhas</h3>
                              <p className="mt-2 text-gray-400">Projeto de rifas onde os usuários podem comprar rifas e administradores podem gerenciar as rifas. Tecnologias usadas: Next.js, TailwindCSS, MongoDB...</p>
                              <a href="https://rxcampanhas.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 bg-[#B452FF] text-white px-4 py-2 rounded-md hover:bg-[#9a3ccc]">Ver Projeto</a>
                          </div>
                      </motion.div>
                      
                      {/* Projeto RxBank */}
                      <motion.div 
                          className="bg-[#282A2D] shadow-lg rounded-lg overflow-hidden"
                          whileHover={{ scale: 1.05 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                      >
                          <img src="./images/banco.png" alt="RxBank" className="w-full h-48 object-cover" />
                          <div className="p-4">
                              <h3 className="text-2xl font-semibold text-[#B452FF]">RxBank</h3>
                              <p className="mt-2 text-gray-400">Projeto de um banco fictício onde os usuários podem criar conta, fazer e receber transferências. Tecnologias usadas: Next.js, TailwindCSS, MongoDB...</p>
                              <a href="https://rxbank.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 bg-[#B452FF] text-white px-4 py-2 rounded-md hover:bg-[#9a3ccc]">Ver Projeto</a>
                          </div>
                      </motion.div>
                  </div>
              </section>

              {/* Contato */}
              <section id="contact" className="my-12 text-center">
                  <h2 className="text-3xl font-bold mb-8">Contato</h2>
                  <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
                      <form className="w-full md:w-1/2 bg-[#282A2D] p-6 rounded-lg shadow-lg">
                          <div className="mb-4">
                              <label className="block text-left text-[#B452FF] mb-2" htmlFor="name">Nome</label>
                              <input className="w-full p-2 rounded bg-[#0E1013] text-white border border-[#B452FF]" type="text" id="name" name="name" required />
                          </div>
                          <div className="mb-4">
                              <label className="block text-left text-[#B452FF] mb-2" htmlFor="email">Email</label>
                              <input className="w-full p-2 rounded bg-[#0E1013] text-white border border-[#B452FF]" type="email" id="email" name="email" required />
                          </div>
                          <div className="mb-4">
                              <label className="block text-left text-[#B452FF] mb-2" htmlFor="message">Mensagem</label>
                              <textarea className="w-full p-2 rounded bg-[#0E1013] text-white border border-[#B452FF]" id="message" name="message" rows="5" required></textarea>
                          </div>
                          <button className="w-full bg-[#B452FF] text-white py-2 rounded hover:bg-[#9a3ccc]">Enviar</button>
                      </form>
                      
                      <div className="flex justify-center space-x-4 md:w-1/2">
                          <a href="https://www.linkedin.com/in/clenilson-brandao/" target="_blank" rel="noopener noreferrer" className="text-[#B452FF] text-4xl hover:text-white">
                              <FaLinkedin />
                          </a>
                          <a href="https://www.instagram.com/klenilsonrox" target="_blank" rel="noopener noreferrer" className="text-[#B452FF] text-4xl hover:text-white">
                              <FaInstagram />
                          </a>
                          <a href="https://wa.me/+55031992311170" target="_blank" rel="noopener noreferrer" className="text-[#B452FF] text-4xl hover:text-white">
                              <FaWhatsapp />
                          </a>
                      </div>
                  </div>
              </section>
          </main>
        
      </div>
      </div>
  );
}