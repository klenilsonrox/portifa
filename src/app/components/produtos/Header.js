'use client'
import { Sparkles } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation" // Importe o useRouter

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("") // Estado para o termo de busca
  const router = useRouter() // Hook para navegação

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      router.push(`/search/${encodeURIComponent(searchTerm.trim())}`)
      setSearchTerm("") // Limpa o campo após a busca
    }
  }

  return (
    <header className="bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg">
      <div className="container mx-auto py-6 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link href="/produtos" className="text-3xl font-bold flex items-center">
              <Sparkles className="mr-2" />
              Ofertas Incríveis
            </Link>
            
            {/* Botão para mobile */}
            <div className="md:hidden">
              <button 
                className="text-white p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Campo de busca - visível em todas as telas */}
          <form onSubmit={handleSearch} className="w-full md:w-auto md:flex-1 md:max-w-md mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar produtos..."
                className="w-full py-2 px-4 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button 
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-pink-500 hover:text-pink-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </form>

          {/* Menu para desktop (hidden em mobile) */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <Link href="/produtos" className="hover:text-pink-200 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/categorias" className="hover:text-pink-200 transition-colors">
                  Categorias
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        
        {/* Menu para mobile (aparece quando isMenuOpen é true) */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link 
                  href="/produtos" 
                  className="hover:text-pink-200 transition-colors block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Início
                </Link>
              </li>
              <li>
                <Link 
                  href="/categorias" 
                  className="hover:text-pink-200 transition-colors block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Categorias
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}