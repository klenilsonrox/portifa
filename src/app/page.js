'use client'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const page = () => {

    useEffect(()=>{
        AOS.init();
    },[])


  return (
    <div>   
     <main className="p-4 max-w-3xl mx-auto bg-[#282A2D] text-gray-200 border-gray-600 flex-col gap-2 rounded-md border flex items-start min-h-[600px] overflow-hidden" data-aos="fade-left">
        <h1 className='lg:text-2xl flex items-center gap-2  before:w-4 before:h-1 before:bg-[#B854FF] '>Seja vem vindo(a)</h1>
        <p className='lg:mt-4 text-2xl lg:text-4xl font-bold flex items-center gap-2'>Desenvolvedor Web<span className='bg-[#B854FF] w-2 h-2 block text-4xl rounded-full anime'></span> </p>
        <div className='grid grid-cols-3 gap-4 mt-4'>
            <p className='bg-[#0E1013] px-6 py-2 rounded-md'>ReactJs</p>
            <p className='bg-[#0E1013] px-6 py-2 rounded-md'>NextJs</p>
            <p className='bg-[#0E1013] px-6 py-2 rounded-md'>Tailwind</p>
            <p className='bg-[#0E1013] px-6 py-2 rounded-md'>MongoDB</p>
            <p className='bg-[#0E1013] px-6 py-2 rounded-md'>Postgres</p>
            <p className='bg-[#0E1013] px-6 py-2 rounded-md'>Mysql</p>
        </div>
        <p className='lg:mt-5'>olá, sou o Clenilson. Prazer em ter você aqui :D</p>
     </main>
    </div>
  );
};

export default page;