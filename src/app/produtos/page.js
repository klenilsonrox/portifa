"use client"
import { useEffect, useState } from "react"
import { baseUrl } from "../../../baseUrl"
import Footer from "../components/produtos/Footer"
import Header from "../components/produtos/Header"
import ProductList from "../components/produtos/product-list"
import Loading from "../components/produtos/loading"

export default function Home() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [pagination, setPagination] = useState({
    total: 0,
    page: 1,
    pages: 1,
    limit: 10,
  })

  async function getProducts(page = 1) {
    try {
      setLoading(true)
      const res = await fetch(`${baseUrl}/products?page=${page}&limit=${pagination.limit}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (!res.ok) {
        throw new Error("Falha ao buscar produtos")
      }

      const data = await res.json()
      setProducts(data.data)
      setPagination(data.pagination)
    } catch (error) {
      console.error("Erro ao buscar produtos:", error)
      return []
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getProducts(pagination.page)
  }, [pagination.page])

  // Função para ir para a próxima página
  const nextPage = () => {
    if (pagination.page < pagination.pages) {
      setPagination((prev) => ({ ...prev, page: prev.page + 1 }))
    }
  }

  // Função para ir para a página anterior
  const prevPage = () => {
    if (pagination.page > 1) {
      setPagination((prev) => ({ ...prev, page: prev.page - 1 }))
    }
  }

  // Função para ir para uma página específica
  const goToPage = (page) => {
    setPagination((prev) => ({ ...prev, page }))
  }

  // Renderiza os botões de paginação
  const renderPaginationButtons = () => {
    const buttons = []
    const maxButtons = 5 // Número máximo de botões de página para mostrar

    let startPage = Math.max(1, pagination.page - Math.floor(maxButtons / 2))
    const endPage = Math.min(pagination.pages, startPage + maxButtons - 1)

    // Ajusta o startPage se estamos no final
    if (endPage - startPage + 1 < maxButtons) {
      startPage = Math.max(1, endPage - maxButtons + 1)
    }

    // Botão para primeira página
    if (startPage > 1) {
      buttons.push(
        <button key="first" onClick={() => goToPage(1)} className="px-3 py-1 mx-1 rounded border hover:bg-gray-100">
          1
        </button>,
      )

      if (startPage > 2) {
        buttons.push(
          <span key="dots1" className="mx-1">
            ...
          </span>,
        )
      }
    }

    // Botões de página
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => goToPage(i)}
          className={`px-3 py-1 mx-1 rounded border ${
            pagination.page === i ? "bg-purple-600 text-white" : "hover:bg-gray-100"
          }`}
        >
          {i}
        </button>,
      )
    }

    // Botão para última página
    if (endPage < pagination.pages) {
      if (endPage < pagination.pages - 1) {
        buttons.push(
          <span key="dots2" className="mx-1">
            ...
          </span>,
        )
      }

      buttons.push(
        <button
          key="last"
          onClick={() => goToPage(pagination.pages)}
          className="px-3 py-1 mx-1 rounded border hover:bg-gray-100"
        >
          {pagination.pages}
        </button>,
      )
    }

    return buttons
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-blue-50">
      <Header />

      <main className="container mx-auto py-12 px-4">
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-700 mb-3">Produtos em Destaque</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Confira nossa seleção de produtos incríveis com os melhores preços do mercado. Todos os produtos são
              originais e possuem garantia.
            </p>
          </div>

          <div className="min-h-[600px] flex flex-col justify-between">
            {loading ? <Loading /> : <ProductList products={products} />}

            {/* Paginação */}
            {!loading && pagination.pages > 1 && (
              <div className="flex justify-center items-center mt-8 flex-wrap">
                <button
                  onClick={prevPage}
                  disabled={pagination.page === 1}
                  className={`px-4 py-2 mx-1 rounded border ${
                    pagination.page === 1 ? "bg-gray-200 cursor-not-allowed" : "hover:bg-gray-100"
                  }`}
                >
                  Anterior
                </button>

                <div className="flex mx-2">{renderPaginationButtons()}</div>

                <button
                  onClick={nextPage}
                  disabled={pagination.page === pagination.pages}
                  className={`px-4 py-2 mx-1 rounded border ${
                    pagination.page === pagination.pages ? "bg-gray-200 cursor-not-allowed" : "hover:bg-gray-100"
                  }`}
                >
                  Próxima
                </button>
              </div>
            )}

            {/* Informações da paginação */}
            {!loading && products.length > 0 && (
              <div className="text-center text-gray-500 mt-4">
                Mostrando {products.length} de {pagination.total} produtos | Página {pagination.page} de{" "}
                {pagination.pages}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
