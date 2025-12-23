'use client'

import { useEffect } from 'react'

export default function WhatsAppRedirect() {
  useEffect(() => {
    const phone = '5531992311170'
    const message = 'Olá, vim do youtube e gostaria de um teste de IPTV'
    const encodedMessage = encodeURIComponent(message)

    // 1️⃣ tenta abrir o app direto (mobile)
    const appUrl = `whatsapp://send?phone=${phone}&text=${encodedMessage}`
    window.location.href = appUrl

    // 2️⃣ fallback automático (web)
    const fallback = setTimeout(() => {
      window.location.href = `https://wa.me/${phone}?text=${encodedMessage}`
    }, 1200)

    return () => clearTimeout(fallback)
  }, [])

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'sans-serif',
      textAlign: 'center'
    }}>
      <div>
        <h1>Redirecionando para o WhatsApp…</h1>
        <p>Se não abrir automaticamente, aguarde alguns segundos.</p>

        <a
          href="https://wa.me/5531992311170?text=Ol%C3%A1%2C%20vim%20do%20youtube%20e%20gostaria%20de%20um%20teste%20de%20IPTV"
          style={{
            marginTop: 20,
            display: 'inline-block',
            padding: '12px 20px',
            background: '#25D366',
            color: '#fff',
            borderRadius: 8,
            textDecoration: 'none',
            fontWeight: 'bold'
          }}
        >
          Abrir WhatsApp manualmente
        </a>
      </div>
    </div>
  )
}
