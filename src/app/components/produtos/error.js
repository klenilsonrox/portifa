"use client"

import { useEffect } from "react"
import Link from "next/link"
import { AlertTriangle, RefreshCw } from "lucide-react"

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-blue-50 p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
        <div className="flex flex-col items-center text-center">
          <div className="bg-red-100 p-3 rounded-full mb-4">
            <AlertTriangle className="h-8 w-8 text-red-500" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Algo deu errado</h1>
          <p className="text-gray-600 mb-6">
            Desculpe, ocorreu um erro ao carregar esta página. Por favor, tente novamente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <button
              onClick={() => reset()}
              className="bg-purple-500 text-white py-2 px-4 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Tentar novamente
            </button>
            <Link
              href="/"
              className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors"
            >
              Voltar para o início
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
