import Link from "next/link"
import { ExternalLink, ShoppingBag, Tag } from 'lucide-react'

// Função para formatar o preço em formato brasileiro
function formatPrice(price) {
  if (!price) return null
  
  // Converte para número e depois para string formatada
  const numPrice = typeof price === 'string' ? Number(price.replace(",", ".")) : price
  return numPrice.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  })
}

export default function ProductList({ products }) {


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <div
          key={product._id}
          className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl relative"
        >
          <Link href={`/categorias/produto/${product.slug}`}>
            <div className="relative h-48 w-full bg-gray-100">
              <img 
                src={product.imageUrl || "/placeholder.svg"} 
                alt={product.name}
                className="w-full h-full object-contain p-4"
              />
              <div className="absolute top-2 right-2 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                {product.category.name}
              </div>
            </div>
          </Link>
          
          <div className="p-4">
            <Link href={`/produtos/${product.slug}`}>
              <h3 className="font-semibold text-lg text-gray-800 line-clamp-2 h-14 hover:text-purple-600 transition-colors">
                {product.name}
              </h3>
            </Link>
            
            {/* Exibição do preço */}
            {product.price ? (
              <div className="mt-3 mb-4">
                <div className="flex items-center">
                  <Tag className="text-purple-600 mr-2" size={16} />
                  <span className="text-xl font-bold text-purple-700">
                    R$ {Number(product.price.replace(",", ".")).toFixed(2)}
                  </span>
                </div>
                
              </div>
            ) : (
              <div className="mt-3 mb-4 text-gray-500 italic">
                Consulte o preço
              </div>
            )}
            
            <div className="mt-4 flex justify-between items-center">
              <Link
                href={`/produtos/${product.slug}`}
                className="text-purple-600 hover:text-purple-800 font-medium flex items-center"
              >
                <ShoppingBag className="mr-1 h-4 w-4" />
                Ver detalhes
              </Link>
              
              <a
                href={product.affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1.5 rounded-lg flex items-center hover:from-purple-600 hover:to-pink-600 transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                }}
              >
                <ExternalLink className="mr-1 h-4 w-4" />
                Comprar
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}