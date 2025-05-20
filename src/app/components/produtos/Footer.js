import { Heart, Instagram, Facebook, Twitter } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="flex justify-between flex-col lg:flex-row gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Ofertas Incríveis</h3>
            <p className="text-white/80  max-w-[400px]">
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
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="text-white/80">klenilsoncoc@gmail.com</li>
              <li className="text-white/80">(31) 99231-1170</li>
              <li className="text-white/80">Belo Horizonte, MG</li>
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
