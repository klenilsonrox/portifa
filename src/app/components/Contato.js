import React from 'react';
import { MdContacts } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { FaLinkedin,FaWhatsappSquare,FaInstagramSquare   } from "react-icons/fa";
import Link from 'next/link';


const Contato = ({func,setState}) => {
  return (

    <div className='flex inset-0 bg-black fixed items-center justify-center z-30 bg-opacity-80 backdrop-blur-sm'  id='modalContato' onClick={func}>
           <div className='bg-[#282A2D] w-full max-w-md rounded-md p-4 flex flex-col items-center justify-center' data-aos="fade-down">
            <div className='w-full flex flex-col items-center justify-center relative'>
                <button className='absolute right-0 top-0 text-gray-600 text-xl border rounded-full p-1 border-gray-600' onClick={()=>setState(state=>!state)}><IoMdClose /></button>
            <MdContacts className='text-4xl text-gray-500'/>
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
        </div>
  );
};

export default Contato;