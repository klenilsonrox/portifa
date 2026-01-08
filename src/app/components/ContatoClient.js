'use client'

import { useSearchParams } from 'next/navigation'

export default function ContatoClient() {
  const params = useSearchParams()
  const origem = params.get('origem') || 'youtube'

  const phone = '5531992311170'

  const mensagens = {
    lg: 'Vim do YouTube (TV LG) e quero o teste grátis',
    samsung: 'Vim do YouTube (Samsung) e quero o teste grátis',
    tcl: 'Vim do YouTube (TV TCL) e quero o teste grátis',
    hisense: 'Vim do YouTube (Hisense) e quero o teste grátis',
    firestick: 'Vim do YouTube (Fire Stick) e quero o teste grátis',
     tvbox: 'Vim do YouTube (TV Box) e quero o teste grátis',
          android: 'Vim do YouTube (Android tv) e quero o teste grátis',
    youtube : ' Olá, vim do youtube e gostaria de saber um teste grátis' 
  }

  const message = encodeURIComponent(
    mensagens[origem] || mensagens.youtube
  )

  const whatsappLink = `https://wa.me/${phone}?text=${message}`

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 px-4">
      <div className="max-w-md w-full bg-gray-900 border border-gray-800 rounded-2xl p-6 text-center shadow-xl">

        <h1 className="text-2xl font-bold text-white mb-3">
          📺 Teste IPTV Grátis
        </h1>

        <p className="text-gray-300 mb-6">
          IPTV rápido, estável e compatível com sua TV.
        </p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl transition"
        >
          👉 Receber teste grátis no WhatsApp
        </a>

      </div>
    </div>
  )
}
