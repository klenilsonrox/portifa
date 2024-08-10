'use client'
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Link from 'next/link';
import Contato from '../components/Contato';

const page = () => {
    const [modalContato,setOpenMOdalContato]=useState(false)

    useEffect(()=>{
        AOS.init()
    },[])

    function openModalContato(){
        setOpenMOdalContato(true)
    }

    function closeModalContato(e){
        if(e.target.id==="modalContato"){
            setOpenMOdalContato(false)
        }
    }

  return (
    <>
    {modalContato && <Contato func={closeModalContato} setState={setOpenMOdalContato}/>}
    <div className="p-4 max-w-3xl mx-auto text-gray-300 rounded-md border flex justify-between border-gray-600 items-start min-h-[600px] bg-[#282A2D] ">
        
      <div className='animaLeft overflow-hidden'>
      <h1 className='text-2xl flex items-center gap-2  before:w-4 before:h-1 before:bg-[#B854FF] '>Sobre mim</h1>
      <div className='flex flex-col gap-6'>
        <p className='text-sm my-4'>Sou desenvolvedor front-end com mais de 2 anos de experiência, adquirida principalmente por meio de projetos pessoais, procuro sempre desenvolver sites responsivos e otimizados para SEO, constantemente estudo mais sobre novas tecnologias e frameworks para poder aprimorar minhas capacidades para desenvolver.
Estou entusiasmado em buscar minha primeira oportunidade profissional na área, meu objetivo é me tornar um profissional referência na área da programação.</p>
<div className='mb-4 flex gap-4'>
<buttom 
   class="inline-block bg-[#9933F8] text-white font-bold py-2 px-4 rounded hover:bg-[#282A2D] border border-gray-600 hover:border-gray-200 cursor-pointer" onClick={openModalContato}>Fale comigo</buttom>
   <Link href="/projetos" 
   class="inline-block bg-[#0E1013] text-white font-bold py-2 px-4 rounded hover:bg-[#282A2D] border border-gray-600 hover:border-gray-200">Projetos</Link>
</div>
<img src="https://portfolio-pedroalves.vercel.app/imagens/appreciate_dark.svg" alt="" className='max-w-[300px]'/>
      </div>
      </div>
    </div>
    </>
  );
};

export default page;