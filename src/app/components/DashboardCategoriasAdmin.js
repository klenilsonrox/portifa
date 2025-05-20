"use client"

import { useState, useEffect } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Pencil, Trash2, Plus } from "lucide-react"
import { useRouter } from "next/navigation"
import DeleteConfirmation from "./delete-confirmation"
import { getToken } from "../actions/getToken"
import { baseUrl } from "../../../baseUrl"
import { EditCategoryModal } from "./editCategoryModal"

export default function DashboardCategorias() {
  const [categories, setCategories] = useState([])
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  async function verifyUser() {
    try {
      const token = await getToken()
      const res = await fetch(`${baseUrl}/auth/profile`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })

      const data = await res.json()

      if (!data.user) {
        router.push("/auth/login")
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    verifyUser()
  }, [])

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    try {
      setLoading(true)
      const response = await fetch(`${baseUrl}/categories`)
      const result = await response.json()
      console.log(result)

      if (result.success) {
        setCategories(result.data)
      }
    } catch (error) {
      console.error("Error fetching categories:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleEditClick = (category) => {
    setSelectedCategory(category)
    setIsEditModalOpen(true)
  }

  const handleDeleteClick = (category) => {
    setSelectedCategory(category)
    setIsDeleteModalOpen(true)
  }

  const handleDeleteConfirm = async () => {
    try {
      const token = await getToken()
      const response = await fetch(`${baseUrl}/categories/${selectedCategory._id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })

      if (response.ok) {
        setCategories(categories.filter((c) => c._id !== selectedCategory._id))
        setIsDeleteModalOpen(false)
      } else {
        console.error("Failed to delete category")
      }
    } catch (error) {
      console.error("Error deleting category:", error)
    }
  }

  const handleUpdateCategory = async (categoryData) => {
    try {
      const token = await getToken()
      const method = selectedCategory ? "PUT" : "POST"
      const url = selectedCategory 
        ? `${baseUrl}/categories/${selectedCategory._id}`
        : `${baseUrl}/categories`

      const response = await fetch(url, {
        method,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(categoryData),
      })

      if (response.ok) {
        fetchCategories()
        setIsEditModalOpen(false)
      } else {
        console.error(`Failed to ${selectedCategory ? 'update' : 'create'} category`)
      }
    } catch (error) {
      console.error(`Error ${selectedCategory ? 'updating' : 'creating'} category:`, error)
    }
  }

  return (
     <div className="min-h-screen w-full bg-[#F7F0FF] p-6">
      <div className="container ">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-[#AB55F4]">Dashboard de Categorias</h1>
          <Button
            onClick={() => {
              setSelectedCategory(null)
              setIsEditModalOpen(true)
            }}
            className="bg-gradient-to-r from-[#AB55F4] to-[#E749A1] hover:opacity-90 text-white"
          >
            <Plus className="mr-2 h-4 w-4" />
            Adicionar Categoria
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
                  <TableHead className="text-white">Nome</TableHead>
                  <TableHead className="text-white">Slug</TableHead>
                  <TableHead className="text-white">Data de Criação</TableHead>
                  <TableHead className="text-white">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {categories && categories.map((category) => (
                  <TableRow key={category._id} className="hover:bg-[#F7F0FF]/50">
                    <TableCell className="font-medium">{category.name}</TableCell>
                    <TableCell>{category.slug}</TableCell>
                    <TableCell>
                      {new Date(category.createdAt).toLocaleDateString('pt-BR')}
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => handleEditClick(category)}
                          className="text-[#AB55F4] border-[#AB55F4] hover:bg-[#AB55F4] hover:text-white"
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => handleDeleteClick(category)}
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
          itemName={selectedCategory?.name}
          itemType="categoria"
        />
      )}

      {isEditModalOpen && (
        <EditCategoryModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          onSave={handleUpdateCategory}
          category={selectedCategory}
        />
      )}
    </div>
  )
}