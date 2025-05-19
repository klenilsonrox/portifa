import { Sparkles } from "lucide-react"
import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg">
      <div className="container mx-auto py-6 px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-3xl font-bold flex items-center">
            <Sparkles className="mr-2" />
            Ofertas Incríveis
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="hover:text-pink-200 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="#categorias" className="hover:text-pink-200 transition-colors">
                  Categorias
                </Link>
              </li>
              <li>
                <Link href="#sobre" className="hover:text-pink-200 transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="#contato" className="hover:text-pink-200 transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </nav>
          <div className="md:hidden">
            <button className="text-white p-2">
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
      </div>
    </header>
  )
}
