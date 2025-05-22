'use client'
import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import ProductCard from './produtos/product-card'
import Header from './produtos/Header'
import Footer from './produtos/Footer'
import { baseUrl } from '../../../baseUrl'
import Link from 'next/link'

function SearchResults() {
  const router = useRouter()
  const params = useParams()
  const name = params.name
  
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (name) {
      const fetchProducts = async () => {
        try {
          setLoading(true)
          const response = await fetch(`${baseUrl}/products/search/${encodeURIComponent(name)}`)
          const data = await response.json()
          if (data.success) {
            setProducts(data.data)
          } else {
            setError('Nenhum produto encontrado')
          }
        } catch (err) {
          setError('Erro ao buscar produtos')
        } finally {
          setLoading(false)
        }
      }

      fetchProducts()
    }
  }, [name])

  if (loading) return (
    <div className='min-h-screen'>
      <Header />
      <div className="container mx-auto py-8 min-h-screen">
        {/* Skeleton para o título e botão voltar */}
        <div className="mb-8">
          <div className="h-8 w-64 bg-gray-200 rounded mb-4 animate-pulse"></div>
          <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
        </div>
        
        {/* Skeleton para a grade de produtos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="bg-gray-200 h-48 animate-pulse"></div>
              <div className="p-4">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-2 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )

  if (error) return <div className="container mx-auto py-8 text-center text-red-500">{error}</div>

  return (
    <div>
      <Header />
      <div className="container mx-auto py-8 min-h-screen">
        <div>
          <h1 className="text-2xl font-bold mb-6">Resultados para: "{name}"</h1>
          <Link href="/produtos" className='mb-4 block text-blue-500 underline'>← Voltar</Link>
        </div>
        
        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {products.map(product => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <p>Nenhum produto encontrado com esse nome.</p>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default SearchResults