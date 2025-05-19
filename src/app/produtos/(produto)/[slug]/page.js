import Footer from "@/app/components/produtos/Footer"
import Header from "@/app/components/produtos/Header"
import { ArrowLeft, ExternalLink, Star, Truck, Tag, CreditCard } from 'lucide-react'
import Link from "next/link"
import baseUrl from "../../../../../baseUrl"

// Função para formatar o preço em formato brasileiro
function formatPrice(price) {
  // Converte para número e depois para string formatada
  const numPrice = typeof price === 'string' ? Number(price.replace(",", ".")) : price
  return numPrice.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  })
}

// Função para buscar um produto por slug
async function getProductBySlug(slug) {
  try {
    const res = await fetch(`${baseUrl}/products/slug/${slug}`, {
      next: { revalidate: 1 },
    })

    if (!res.ok) {
      throw new Error(`Falha ao buscar produto com slug: ${slug}`)
    }

    const data = await res.json()
    console.log(data)
    return data.data
  } catch (error) {
    console.error(`Erro ao buscar produto com slug ${slug}:`, error)
    return null
  }
}

export default async function ProductPage({ params }) {
  const product = await getProductBySlug(params.slug)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-blue-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-purple-700 mb-4">Produto não encontrado</h1>
          <Link href="/produtos" className="text-purple-600 hover:text-purple-800 flex items-center justify-center">
            <ArrowLeft className="mr-2" /> Voltar para a página inicial
          </Link>
        </div>
      </div>
    )
  }

  // Calcular preço com desconto fictício para demonstração
  const originalPrice = Number(product.price.replace(",", "."))
  const discountPercentage = 12 // 12% de desconto
  const discountedPrice = originalPrice * (1 - discountPercentage / 100)
  
  // Calcular parcelas (exemplo: 12x sem juros)
  const installments = 12
  const installmentValue = originalPrice / installments

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-blue-50">
      <Header />

      <main className="container mx-auto py-12 px-4">
        <div className="mb-6">
          <Link href="/produtos" className="text-purple-600 hover:text-purple-800 flex items-center w-fit">
            <ArrowLeft className="mr-2" /> Voltar para a página inicial
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-80 md:h-96 bg-white rounded-lg overflow-hidden">
              <img
                src={product.imageUrl || "/placeholder.svg"}
                alt={product.name}
                className="object-contain p-4 w-full h-full"
              />
              <div className="absolute top-4 left-4 bg-pink-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                {product.category.name}
              </div>
            </div>

            <div className="flex flex-col">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
              
              {/* Seção de preço melhorada */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-5 rounded-xl mb-6 border border-purple-100">
                
                
                <div className="flex items-baseline">
                  <p className="text-3xl font-bold text-purple-700">
                
                     R$ {Number(product.price?.replace(",", ".")).toFixed(2)}
                  </p>
                </div>
                
               
              </div>


              <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-lg mb-6">
                <h3 className="font-semibold text-purple-700 mb-2">Características:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="bg-purple-500 rounded-full p-1 mr-2 mt-0.5">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    Produto original com garantia
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-500 rounded-full p-1 mr-2 mt-0.5">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    Envio rápido para todo o Brasil
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-500 rounded-full p-1 mr-2 mt-0.5">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    Melhor preço garantido
                  </li>
                </ul>
              </div>

              <div className="flex items-center mb-6">
                <Truck className="text-purple-600 mr-2" />
                <span className="text-gray-700">Frete grátis para todo o Brasil</span>
              </div>

              <div className="mt-auto">
                <a
                  href={product.affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-lg flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-colors text-lg font-bold"
                >
                  <ExternalLink className="mr-2" />
                  Comprar agora no Mercado Livre
                </a>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Você será redirecionado para o site do vendedor
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-purple-700 mb-6">Descrição do Produto</h2>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <p className="text-gray-700 leading-relaxed">
              Este {product.name} é um produto de alta qualidade disponível com as melhores condições do mercado.
              Aproveite esta oferta exclusiva e garanta já o seu!
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Ao comprar através do nosso link de afiliado, você não paga nada a mais por isso e ainda nos ajuda a
              manter este site com as melhores ofertas para você.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}