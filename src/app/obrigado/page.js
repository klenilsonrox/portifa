import React from 'react';

const page = () => {
  return (
    <div className='flex items-center justify-center h-screen p-4'>
        <div class="bg-white p-6 rounded-lg shadow-lg max-w-md text-center ">
    <svg class="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2l4-4m1-4v6m-1 4l1 1m1 4a9 9 0 110-18 9 9 0 0118 0 9 9 0 01-9 9z"></path>
    </svg>
    <h1 class="text-2xl font-semibold text-gray-800 mb-2">Mensagem Recebida!</h1>
    <p class="text-gray-600 mb-4">Obrigado por entrar em contato comigo. Sua mensagem foi recebida e e eu vou respondê-lo(a) em breve.</p>
    <a href="/" class="inline-block bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300">Voltar para a Home</a>
</div>
    </div>
  );
};

export default page;