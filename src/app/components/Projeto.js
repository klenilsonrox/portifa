'use client'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { MdClose } from "react-icons/md";
import { CiLink } from "react-icons/ci";
import Link from 'next/link';



const Projeto = ({projeto,func,setState}) => {

useEffect(()=>{
    AOS.init()
},[])

  return (
    <div className='fixed inset-0 bg-[#0E1013] flex items-center justify-center backdrop-blur-sm bg-opacity-25 p-4 z-50' id='modalProjeto' onClick={func}>
    <div className='bg-[#282A2D] w-full max-w-md rounded-md text-gray-400 relative border border-gray-600 p-2 overflow-hidden' data-aos="fade-down">
        <button className='absolute bg-white right-2 top-2 p-2 rounded-full' onClick={()=>setState(false)}><MdClose className='text-xl text-gray-600'/></button>
        <img src={projeto.image} alt={`imagem do ${projeto.name}`} />
        <div className='p-4'>
        <h1 className='before:bg-green-600 before:h-4 items-center before:w-1 before:block flex gap-2 before:rounded-md font-bold text-xl'>{projeto.name}</h1>
        <p className='my-4'>{projeto.description}</p>
        <div>
            <div>
            <p className='mb-2'>Tecnologias usadas:</p>
            <div className='flex items-start flex-wrap gap-2'>
            {projeto.tecnologias.map(tec=> (
                <p className='bg-[#B854FF] py-2 px-6 text-gray-800 rounded-md'>{tec}</p>
            ) )}
            </div>
            </div>
<div className='mt-4 flex gap-3 justify-between'>
    <Link href={projeto.link} className='bg-[#0E1013] px-6 py-2 rounded-md flex items-center gap-2'><CiLink className='text-2xl'/> Ver Projeto</Link>
    <button onClick={()=>setState(false)}>← Voltar</button>
</div>

        </div>
        </div>
    </div>
   </div>
  );
};

export default Projeto;