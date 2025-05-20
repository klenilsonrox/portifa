"use client"

import { useState, useEffect } from "react"
import Header from "../components/produtos/Header"
import Footer from "../components/produtos/Footer"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { ExternalLink, ShoppingBag, Tag } from 'lucide-react'
import { baseUrl } from "../../../baseUrl"
import Loading from "../components/produtos/loading"
export default function Page() {
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  async function getProducts() {
    try {
      setLoading(true)
      const res = await fetch(`${baseUrl}/products`,
       
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
      )
      
      if (!res.ok) {
        throw new Error("Falha ao buscar produtos")
      }
      
      const data = await res.json()
      console.log(data.data)
      setProducts(data.data)
     
    } catch (error) {
      console.error("Erro ao buscar produtos:", error)
      return []
    }finally{
      setLoading(false)
    }
  }

  useEffect(()=>{
    getProducts()
},[])

  // Buscar categorias
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true)
        const response = await fetch(`${baseUrl}/categories`)
        const data = await response.json()

        if (data.success) {
          setCategories(data.data)
        } else {
          setError("Erro ao carregar categorias")
        }
      } catch (err) {
        setError("Erro ao conectar com o servidor")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchCategories()
  }, [])

  // Buscar produtos por categoria
  const fetchProductsByCategory = async (slug) => {
    try {
      setLoading(true)
      const response = await fetch(`${baseUrl}/categories/${slug}`)
      const data = await response.json()

      if (data.success) {
        setProducts(data.data.products)
        setSelectedCategory(data.data.category.name)
      } else {
        setError("Erro ao carregar produtos")
      }
    } catch (err) {
      setError("Erro ao conectar com o servidor")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  // Voltar para a lista de categorias
  const handleBackToCategories = () => {
    setSelectedCategory(null)
    getProducts()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
    

      <main className="flex-grow container mx-auto px-4 py-8">
        {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}

        {loading ? <Loading /> : (
          <>
            {!selectedCategory ? (
              <div>
                <h1 className="text-2xl font-bold mb-6">Categorias de Produtos</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {categories.map((category) => (
                    <Link href={`/categorias/${category.slug}`}
                      key={category._id}
                      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 cursor-pointer"
                      onClick={() => fetchProductsByCategory(category.slug)}
                    >
                      <h2 className="text-xl font-semibold capitalize">{category.name}</h2>
                      <p className="text-gray-500 text-sm mt-2">Clique para ver os produtos</p>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center mb-6">
                  <button
                    onClick={handleBackToCategories}
                    className="flex items-center text-gray-600 hover:text-gray-900 mr-4"
                  >
                    <ArrowLeft className="h-5 w-5 mr-1" />
                    Voltar
                  </button>
                  <h1 className="text-2xl font-bold">Produtos: {selectedCategory}</h1>
                </div>

                {products.length === 0 ? (
                  <p className="text-center py-8">Nenhum produto encontrado nesta categoria.</p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {products && products.map((product) => (
                       <div
          key={product._id}
          className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl relative"
        >
          <Link href={`/produto/${product.slug}`}>
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
                href={`/categorias/${product.slug}`}
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
                )}
              </div>
            )}
          </>
        )}
      </main>

      <Footer />
    </div>
  )
}
