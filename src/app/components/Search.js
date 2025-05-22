'use client'
import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation' // Corrigindo a importação
import ProductCard from './produtos/product-card'
import Header from './produtos/Header'
import Footer from './produtos/Footer'
import { baseUrl } from '../../../baseUrl'

function SearchResults() {
  const router = useRouter()
  const params = useParams() // Usando useParams para acessar os parâmetros da rota
  const name = params.name // Acessando o parâmetro name
  
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
  


  if (loading) return <div className="container mx-auto py-8 text-center">Carregando...</div>
  if (error) return <div className="container mx-auto py-8 text-center text-red-500">{error}</div>

  return (
   
    <div>
     <Header />
        <div className="container mx-auto py-8 min-h-screen">
      <div>
        <h1 className="text-2xl font-bold mb-6">Resultados para: "{name}"</h1>
        <button onClick={() => router.back()} className='mb-6'>Voltar</button>
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