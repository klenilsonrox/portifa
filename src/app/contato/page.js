import Link from 'next/link';
import React from 'react';
import { FaLinkedin,FaWhatsappSquare,FaInstagramSquare   } from "react-icons/fa";


const page = () => { 


  return (
    <div className="p-4 max-w-3xl mx-auto bg-[#282A2D] text-gray-200 border-gray-600 rounded-md border flex justify-between items-start min-h-[600px]" data-aos="fade-left">
      <div>
      <h1 className='text-2xl flex items-center gap-2  before:w-4 before:h-1 before:bg-[#B854FF] '>Contato</h1>
      <div className='my-4'>
                <p className='text-xl text-center text-gray-300 leading-6'>Escolha a forma de contato de sua preferência</p>
                <div className='p-4 flex items-center gap-2 justify-center '>
            <Link href="https://www.linkedin.com/in/clenilson-brandao/" target='_blank'><FaLinkedin className='text-5xl hover:scale-110 transition-all text-gray-400' /></Link>
            <Link href="https://wa.me/55031992311170?text=Olá,%20vim%20pelo%20seu%20portfólio" target='_blank'><FaWhatsappSquare className='text-5xl hover:scale-110 transition-all text-gray-400' /></Link>
            <Link href="https://www.instagram.com/klenilsonrox" target='_blank'><FaInstagramSquare  className='text-5xl hover:scale-110 transition-all text-gray-400'/></Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default page;