import { Suspense } from 'react'
import ContatoClient from '../components/ContatoClient'


export default function ContatoPage() {
  return (
    <Suspense fallback={<div className="text-center p-10">Carregando...</div>}>
     <ContatoClient />
    </Suspense>
  )
}
ContatoClient