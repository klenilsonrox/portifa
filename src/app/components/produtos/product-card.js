"use client"

import { ExternalLink, ShoppingBag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/produtos/${product.slug}`}>
        <div className="relative h-48 w-full bg-gray-100">
          <img src={product.imageUrl || "/placeholder.svg"} alt={product.name} fill className="object-contain p-4" />
          <div className="absolute top-2 right-2 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            {product.category.name}
          </div>
        </div>
      </Link>

      <div className="p-4">
       <Link href={`/produtos/${product._id}`} className="font-semibold text-lg text-gray-800 line-clamp-2 h-14">{product._id} aa</Link>
        <Link href={`/produtos/${product.slug}`}>
          <h3 className="font-semibold text-lg text-gray-800 line-clamp-2 h-14">{product.name}</h3>
  
        </Link>

        <div className="mt-4 flex justify-between items-center">
          <Link
            href={`/produto/${product.slug}`}
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

      {isHovered && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center p-6 opacity-0 hover:opacity-100 transition-opacity">
          <Link
            href={`/produtos/${product.slug}`}
            className="bg-white text-purple-600 font-bold py-2 px-4 rounded-full shadow-lg hover:bg-purple-50 transition-colors"
          >
            Ver detalhes
          </Link>
        </div>
      )}
    </div>
  )
}
