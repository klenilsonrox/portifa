'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { FaLinkedin,FaWhatsappSquare,FaInstagramSquare   } from "react-icons/fa";


const About = () => {
const [about,setOpenAbout]=useState(false)

function openAbout(){
  setOpenAbout(about=>!about)
}

  return (
    <div className='lg:max-w-[230px]  w-full overflow-hidden rounded-md bg-[#282A2D] text-gray-200 relative border border-gray-600 animaLeft'>
        <div>
        <img src="https://kbase.com.br/novo/wp-content/uploads/2019/06/linguagem-JavaScript.jpg" alt="" className='w-full max-h-[60px] object-cover' />
        </div>
        <img src="https://pbs.twimg.com/profile_images/490197750/clenilson3_400x400.jpg" alt="" className='max-w-[90px] rounded-full mx-auto relative top-[-50px] border-2 border-white'/>
        <div className={ `hidd transition-all ${about ? "ativo":""} `}>
        <div className='relative top-[-30px] border-b border-gray-600 pb-4 overflow-hidden'>
          <div className='flex items-center'>
          <button className='text-center mx-auto transition-all text-violet-400' onClick={openAbout}>{!about ? "Ver mais...":"Ver menos..." }</button>
          </div>
            <h1 className='text-center font-bold text-2xl text-gray-300 lg:text-[16px]'>Clenilson Brandao Costa</h1>
            <p className='text-xs text-center mt-4 px-2'>Desenvolvedor Web | ReactJs | NextJs | TailwindCss | NodeJs | MongoDB | Postgres | Mysql</p>
        </div>
        <div className='relative top-[-30px]'>
          <p className='text-center mt-4'>Belo Horizonte - MG </p>
        </div>
        <div className='p-4 flex items-center gap-2 justify-center relative top-[-30px]'>
            <Link href="https://www.linkedin.com/in/clenilson-brandao/" target='_blank'><FaLinkedin className='text-3xl hover:scale-110 transition-all text-[#9933F8]'/></Link>
            <Link href="https://wa.me/55031992311170?text=Olá,%20vim%20pelo%20seu%20portfólio" target='_blank'><FaWhatsappSquare className='text-3xl hover:scale-110 transition-all text-[#9933F8]'/></Link>
            <Link href="https://www.instagram.com/klenilsonrox" target='_blank'><FaInstagramSquare  className='text-3xl hover:scale-110 transition-all text-[#9933F8]'/></Link>
        </div>
        </div>
     </div>
  );
};

export default About;