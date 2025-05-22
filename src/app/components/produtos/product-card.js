"use client"

import { ExternalLink, ShoppingBag } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl relative h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/produtos/${product.slug}`} className="block relative">
        <div className="relative w-full aspect-square sm:aspect-[4/3] bg-gray-100">
          <img
            src={product.imageUrl || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-full object-contain p-4"
          />
          <div className="absolute top-2 right-2 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            {product.category?.name || "Categoria"}
          </div>
        </div>
      </Link>

      <div className="p-3 sm:p-4 flex flex-col flex-grow">
        <Link href={`/produtos/${product.slug}`} className="block flex-grow">
          <h3 className="font-semibold text-base sm:text-lg text-gray-800 line-clamp-2 mb-2 sm:mb-4">{product.name}</h3>
        </Link>

        <div className="mt-auto flex justify-between items-center gap-2">
          <Link
            href={`/produtos/${product.slug}`}
            className="text-purple-600 hover:text-purple-800 font-medium flex items-center text-sm sm:text-base whitespace-nowrap"
          >
            <ShoppingBag className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden xs:inline">Ver detalhes</span>
            <span className="xs:hidden">Detalhes</span>
          </Link>

          <a
            href={product.affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg flex items-center hover:from-purple-600 hover:to-pink-600 transition-colors text-sm sm:text-base whitespace-nowrap"
            onClick={(e) => {
              e.stopPropagation()
            }}
          >
            <ExternalLink className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
            Comprar
          </a>
        </div>
      </div>
    </div>
  )
}
