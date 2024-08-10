'use client'
import React, { useEffect } from 'react';


const page = () => {


  return (
    <div className="p-4 max-w-3xl mx-auto bg-[#282A2D] text-gray-200 border-gray-600 flex-col rounded-md border flex items-start min-h-[600px] animaLeft">
       <h1 className='text-2xl flex items-center gap-2  before:w-4 before:h-1 before:bg-[#B854FF] '>Habilidades</h1>
       <div className='mt-4 grid gap-2 grid-cols-3 lg:grid-cols-4 flex-wrap'>
       <p class="bg-gradient-to-r from-[#9933F8] to-[#8942EE] text-white px-4 rounded-md">HTML</p>
       <p class="bg-gradient-to-r from-[#9933F8] to-[#8942EE] text-white px-4 rounded-md">CSS</p>
       <p class="bg-gradient-to-r from-[#9933F8] to-[#8942EE] text-white px-4 rounded-md">Javascript</p>
       <p class="bg-gradient-to-r from-[#9933F8] to-[#8942EE] text-white px-4 rounded-md">Tailwind</p>
       <p class="bg-gradient-to-r from-[#9933F8] to-[#8942EE] text-white px-4 rounded-md">ReactJs</p>
       <p class="bg-gradient-to-r from-[#9933F8] to-[#8942EE] text-white px-4 rounded-md">NextJs</p>
       <p class="bg-gradient-to-r from-[#9933F8] to-[#8942EE] text-white px-4 rounded-md">NodeJs</p>
       <p class="bg-gradient-to-r from-[#9933F8] to-[#8942EE] text-white px-4 rounded-md">MongoDB</p>
       <p class="bg-gradient-to-r from-[#9933F8] to-[#8942EE] text-white px-4 rounded-md">Express</p>
       <p class="bg-gradient-to-r from-[#9933F8] to-[#8942EE] text-white px-4 rounded-md">Mongoose</p>
       <p class="bg-gradient-to-r from-[#9933F8] to-[#8942EE] text-white px-4 rounded-md">Prisma</p>
       <p class="bg-gradient-to-r from-[#9933F8] to-[#8942EE] text-white px-4 rounded-md">Postgres</p>
       <p class="bg-gradient-to-r from-[#9933F8] to-[#8942EE] text-white px-4 rounded-md">MySQL</p>
       </div>
    </div>
  );
};

export default page;