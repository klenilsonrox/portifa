"use client"

import { useState, useEffect } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Pencil, Trash2 } from "lucide-react"
import { useRouter } from "next/navigation"
import DeleteConfirmation from "./delete-confirmation"
import EditProductModal from "./edit-modal"
import { getToken } from "../actions/getToken"
import { baseUrl } from "../../../baseUrl"
export default function DashboardProdutos() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [loading, setLoading] = useState(true)
const router = useRouter()
  async function verifyUser() {
        try {
            const token = await getToken()
           const res = await fetch(`${baseUrl}/auth/profile`,{
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
           }) 

           const data = await res.json()
   
          if(!data.user){
            router.push("/auth/login")
          }

        } catch (error) {
            console.log(error)
        }
  }

  useEffect(()=>{
verifyUser()
  },[])
  

  useEffect(() => {
    fetchProducts()
    fetchCategories()
  }, [])

  const fetchProducts = async () => {
    try {
      setLoading(true)
      const response = await fetch(`${baseUrl}/products`)
      const result = await response.json()

      if (result.success) {
        setProducts(result.data)
      }
    } catch (error) {
      console.error("Error fetching products:", error)
    } finally {
      setLoading(false)
    }
  }

  const fetchCategories = async () => {
    try {
      const response = await fetch(`${baseUrl}/categories`)
      const result = await response.json()

      if (result.success) {
        setCategories(result.data)
      }
    } catch (error) {
      console.error("Error fetching categories:", error)
    }
  }

  const handleEditClick = (product) => {
    setSelectedProduct(product)
    setIsEditModalOpen(true)
  }

  const handleDeleteClick = (product) => {
    setSelectedProduct(product)
    setIsDeleteModalOpen(true)
  }

  const handleDeleteConfirm = async () => {
    try {
      const token =await getToken()
      const response = await fetch(`${baseUrl}/products/${selectedProduct._id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })

      if (response.ok) {
        // Remove the product from the state
        setProducts(products.filter((p) => p._id !== selectedProduct._id))
        setIsDeleteModalOpen(false)
      } else {
        console.error("Failed to delete product")
      }
    } catch (error) {
      console.error("Error deleting product:", error)
    }
  }

  const handleUpdateProduct = async (updatedProduct) => {
    try {
      const token = await getToken()

      // Se não há produto selecionado, estamos criando um novo
      if (!selectedProduct) {
        const response = await fetch(`${baseUrl}/products`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedProduct),
        })

        if (response.ok) {
          fetchProducts()
          setIsEditModalOpen(false)
        } else {
          console.error("Failed to create product")
        }
      } else {
        // Caso contrário, estamos atualizando um existente
        const response = await fetch(`${baseUrl}/products/${selectedProduct._id}`, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedProduct),
        })

        if (response.ok) {
          fetchProducts()
          setIsEditModalOpen(false)
        } else {
          console.error("Failed to update product")
        }
      }
    } catch (error) {
      console.error("Error updating/creating product:", error)
    }
  }

  const formatPrice = (price) => {
    if (typeof price === "string") {
      // If price is already a string with comma as decimal separator
      return price
    }
    return new Intl.NumberFormat("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price)
  }

  return (
    <div className="min-h-screen bg-[#F7F0FF]">
      <div className="container ml-[280px] py-5">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-[#AB55F4]">Dashboard de Produtos</h1>
          <Button
            onClick={() => {
              setSelectedProduct(null)
              setIsEditModalOpen(true)
            }}
            className="bg-gradient-to-r from-[#AB55F4] to-[#E749A1] hover:opacity-90 text-white"
          >
            Adicionar Produto
          </Button>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#E749A1]"></div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-gradient-to-r from-[#AB55F4] to-[#E749A1]">
                  <TableHead className="text-white">Imagem</TableHead>
                  <TableHead className="text-white">Nome</TableHead>
                  <TableHead className="text-white">Preço</TableHead>
                  <TableHead className="text-white">Categoria</TableHead>
                  <TableHead className="text-white">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product._id} className="hover:bg-[#F7F0FF]/50">
                    <TableCell>
                      <img
                        src={product.imageUrl || "/placeholder.svg"}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                    </TableCell>
                    <TableCell className="font-medium">{product.name}</TableCell>
                    <TableCell>R$ {formatPrice(product.price)}</TableCell>
                    <TableCell>{product.category?.name || "Sem categoria"}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => handleEditClick(product)}
                          className="text-[#AB55F4] border-[#AB55F4] hover:bg-[#AB55F4] hover:text-white"
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => handleDeleteClick(product)}
                          className="text-[#E749A1] border-[#E749A1] hover:bg-[#E749A1] hover:text-white"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>

      {isDeleteModalOpen && (
        <DeleteConfirmation
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={handleDeleteConfirm}
          productName={selectedProduct?.name}
        />
      )}

      {isEditModalOpen && (
        <EditProductModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          onSave={handleUpdateProduct}
          product={selectedProduct}
          categories={categories}
        />
      )}
    </div>
  )
}
