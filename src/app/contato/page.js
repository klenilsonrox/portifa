'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';

export default function WhatsAppRedirect() {
  const router = useRouter();

useEffect(() => {
  const phoneNumber = '5531973316166';
  const message = 'Olá, gostaria de fazer um teste do aplicativo IPTV';

  const encodedMessage = encodeURIComponent(message);

  // Link correto que abre direto no WhatsApp
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  const timer = setTimeout(() => {
    window.location.href = whatsappUrl;
  }, 0);

  return () => clearTimeout(timer);
}, []);

  return (
    <div className="min-h-screen bg-gradient-to-br bg-white flex items-center justify-center p-4">
      <Head>
        <title>Redirecionando para WhatsApp</title>
        <meta name="description" content="Redirecionando para conversa no WhatsApp" />
      </Head>

      
        <p className='text-xl font-bol'>Redirecionando para o Whatsapp aguarde...</p>
    </div>
  );
}
