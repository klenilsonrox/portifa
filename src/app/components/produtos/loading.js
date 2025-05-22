export default function Loading() {
  return (
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            {/* Skeleton para a imagem */}
            <div className="relative h-48 w-full bg-gray-200 animate-pulse"></div>
            
            <div className="p-4">
              {/* Skeleton para o título */}
              <div className="h-6 bg-gray-200 rounded w-3/4 mb-3 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-4 animate-pulse"></div>
              
              {/* Skeleton para o preço */}
              <div className="flex items-center mt-3 mb-4">
                <div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
              </div>
              
              {/* Skeleton para os botões */}
              <div className="mt-4 flex justify-between items-center">
                <div className="h-8 bg-gray-200 rounded w-24 animate-pulse"></div>
                <div className="h-8 bg-gray-200 rounded w-20 animate-pulse"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
  )
}
