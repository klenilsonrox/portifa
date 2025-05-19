export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-blue-50">
      <div className="text-center">
        <div
          className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-purple-500 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Carregando...
          </span>
        </div>
        <h2 className="mt-4 text-xl font-semibold text-purple-700">Carregando...</h2>
        <p className="text-gray-600 mt-2">Aguarde enquanto buscamos os melhores produtos para você!</p>
      </div>
    </div>
  )
}
