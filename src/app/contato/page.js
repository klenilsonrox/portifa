import Link from 'next/link';
import React from 'react';
import { FaLinkedin,FaWhatsappSquare,FaInstagramSquare,FaMailBulk     } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";


const page = () => { 


  return (
    <div className="p-4 max-w-3xl mx-auto bg-[#282A2D] text-gray-200 border-gray-600 rounded-md border flex justify-between items-start min-h-[400px] animaLeft">
      <div>
      <h1 className='text-2xl flex items-center gap-2  before:w-4 before:h-1 before:bg-[#B854FF] '>Contato</h1>
      <div className='my-4'>
                <p className='text-xl text-center text-gray-300 leading-6'>Escolha a forma de contato de sua preferência</p>
                <div className=' mt-6 flex gap-2 flex-col justify-center '>
            <div className='flex items-center justify-between rounded-md gap-4 bg-[#0E1013] cursor-pointer hover:scale-105 transition-all'>
            <div className='flex items-center gap-2'>
            <Link href="https://www.linkedin.com/in/clenilson-brandao/" target='_blank'><FaLinkedin className='text-5xl transition-all text-gray-400' /></Link>
            <p>Linkedin</p>
            </div>
            <GoArrowUpRight className='mr-2 text-2xl'/>
            </div>
             <div className='flex items-center justify-between rounded-md gap-4 bg-[#0E1013] cursor-pointer hover:scale-105 transition-all'>
            <div className='flex items-center gap-2'>
           <Link href="https://wa.me/55031992311170?text=Olá,%20vim%20pelo%20seu%20portfólio" target='_blank'><FaWhatsappSquare className='text-5xl transition-all text-gray-400' /></Link>
           <p>Whatsapp</p>
           </div>
           <GoArrowUpRight className='mr-2 text-2xl'/>
            </div>
            <div className='flex items-center justify-between rounded-md gap-4 bg-[#0E1013] cursor-pointer hover:scale-105 transition-all'>
            <div className='flex items-center gap-2'>
           <Link href="https://www.instagram.com/klenilsonrox" target='_blank'><FaInstagramSquare  className='text-5xl transition-all text-gray-400'/></Link>
           <p>Instagram</p>
           </div>
           <GoArrowUpRight className='mr-2 text-2xl'/>
           </div>
           <a href="mailto:klenilsoncoc@gmail.com" className='flex items-center justify-between rounded-md gap-4 bg-[#0E1013] cursor-pointer hover:scale-105 transition-all'>
            <div className='flex items-center gap-2'>   
  <FaMailBulk className='text-5xl transition-all text-gray-400' />
           <p>Email</p>
           </div>
           <GoArrowUpRight  className='mr-2 text-2xl'/>
           </a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default page;