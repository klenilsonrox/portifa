'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';

export default function WhatsAppRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Número de telefone e mensagem pré-definida
    const phoneNumber = '5531973316166'; // Adicione o código do país (55 para Brasil)
    const message = 'Olá, gostaria de fazer um teste do aplicativo IPTV';
    
    // Codificar a mensagem para URL
    const encodedMessage = encodeURIComponent(message);
    
    // Criar o link do WhatsApp
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}?text=${encodedMessage}`;
    
    // Redirecionar após um breve delay para melhor UX
    const timer = setTimeout(() => {

      window.location.href = 'https://wa.me/5531973316166?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20teste%20do%20aplicativo%20IPTV'

    }, 2000);

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
