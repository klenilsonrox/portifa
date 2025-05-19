'use client'
import { useEffect, useState } from "react"
import { baseUrl } from "../../../baseUrl"
import Footer from "../components/produtos/Footer"
import Header from "../components/produtos/Header"
import ProductList from "../components/produtos/product-list"
import Loading from "../components/produtos/loading"

// Função para buscar todos os produtos


export default  function Home() {
  const [products,setProducts] = useState([])
  const [loading,setLoading] = useState(false)

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
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-blue-50">
      <Header />
      
      <main className="container mx-auto py-12 px-4">
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-700 mb-3">Produtos em Destaque</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Confira nossa seleção de produtos incríveis com os melhores preços do mercado. 
              Todos os produtos são originais e possuem garantia.
            </p>
          </div>
          
          <div className="min-h-[600px] flex justify-center">
            {loading ? <Loading /> : <ProductList products={products} />}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}