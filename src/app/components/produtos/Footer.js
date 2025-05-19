import { Heart, Instagram, Facebook, Twitter } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Ofertas Incríveis</h3>
            <p className="text-white/80">
              Encontre as melhores ofertas de produtos com preços incríveis. Site de afiliados com os melhores produtos
              do mercado.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white hover:text-pink-200 transition-colors">
                <Instagram />
              </a>
              <a href="#" className="text-white hover:text-pink-200 transition-colors">
                <Facebook />
              </a>
              <a href="#" className="text-white hover:text-pink-200 transition-colors">
                <Twitter />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/80 hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="#categorias" className="text-white/80 hover:text-white transition-colors">
                  Categorias
                </Link>
              </li>
              <li>
                <Link href="#sobre" className="text-white/80 hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="#contato" className="text-white/80 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Categorias</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors">
                  Celulares
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors">
                  Eletrônicos
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors">
                  Informática
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors">
                  Acessórios
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="text-white/80">contato@ofertasincriveis.com</li>
              <li className="text-white/80">(11) 99999-9999</li>
              <li className="text-white/80">São Paulo, SP</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p>© 2025 Ofertas Incríveis. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm flex items-center justify-center">
            Feito com <Heart className="mx-1 text-pink-300 fill-current" size={16} /> para nossos clientes
          </p>
          <p className="mt-2 text-xs text-white/70">
            Este site contém links de afiliados. Ao clicar nestes links, podemos receber uma comissão pela venda.
          </p>
        </div>
      </div>
    </footer>
  )
}
