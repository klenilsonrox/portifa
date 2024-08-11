'use client'
import React, { useState } from 'react';
import { FaNodeJs } from "react-icons/fa";
import { RiReactjsFill,RiNextjsFill,RiHtml5Line,RiTailwindCssFill  } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiPrisma } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { DiMongodb } from "react-icons/di";
import { BsFillTelephoneMinusFill } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import Link from 'next/link';
import { IoMdClose } from "react-icons/io";
import { FaEye,FaEyeSlash  } from "react-icons/fa";

const Page = () => {
const [cv,setOnCv]=useState(false)
const [foto,setFoto]=useState(false)

function openCv(){
  setOnCv(true)
}

function closeCv(e){
  if(e.target.id==="cv"){
    setOnCv(false)
  }
}

function verFoto(){
  setFoto(foto=>!foto)
}

  return (
    <>
    
    {cv && <div className='flex inset-0 fixed justify-center bg-white border-2 bg-opacity-15 backdrop-blur-sm p-2 z-50' id='cv' onClick={closeCv}>
      <div className='shadow-neumorph bg-gradient-to-br overflow-auto lg:overflow-hidden flex flex-col lg:flex-row from-[#E2E8EC] gap-6 to-[#ffffff] rounded-lg w-full max-w-4xl anima'>
      <div className='bg-blue-400 p-2 lg:overflow-y-scroll scrollbar-blue w-full max-w-[350px]'>
        <div>{!foto && <img src="./images/eu.jpg" alt="" className='w-[60px] h-[60px] rounded-full object-cover mx-auto' />}
        {foto && <img src="./images/eu.jpg" alt="" className='w-[250px] h-[250px] rounded-full object-cover mx-auto anima' />}
        <button onClick={verFoto} className='flex items-center gap-2 mx-auto text-white'>{!foto ? "ver foto":"esconder foto"} {!foto ? <FaEye />:<FaEyeSlash />} </button>
        </div>

        <div className='text-white mt-6  border-t '>
          <p className='text-xl font-bold'>Contato</p>
          <a href='https://wa.me/55031992311170?text=Ol%C3%A1,%20vim%20pelo%20seu%20portf%C3%B3lio' target='_blank' className='flex items-center gap-2'><BsFillTelephoneMinusFill className='text-xl'/> 031992311170</a>
          <a href='mailto:klenilsoncoc@gmail.com' className='flex items-center gap-2'><FaTelegramPlane  className='text-xl'/> klenilsoncoc@gmail.com</a>
          <Link href="https://klenodev.vercel.app/" target='_blank' className='flex items-center gap-2'><IoIosLink className='text-xl'/>https://klenodev.vercel.app/</Link>
        </div>

        <div className='text-white mt-6  border-t'>
          <p className='text-xl font-bold'>Habilidades e competências</p>
          <ul className='max-w-[300px]'>
            <li className='list-disc ml-4'>Html</li>
            <li className='list-disc ml-4'>Css</li>
            <li className='list-disc ml-4'>Tailwind</li>
            <li className='list-disc ml-4'>Javascript</li>
            <li className='list-disc ml-4'>ReactJs</li>
            <li className='list-disc ml-4'>NextJs</li>
<li className='list-disc ml-4'>NodeJs</li>
<li className='list-disc ml-4'>MongoDb</li>
<li className='list-disc ml-4'>Comprometimento em criar códigos dentro das boas práticas.</li>
<li className='list-disc ml-4'>Atenção aos detalhes ao realizartestes funcionais</li>
<li className='list-disc ml-4'>Flexibilidade para trabalhar com diferentes metodologias e tecnologias</li>
<li className='list-disc ml-4'>Iniciativa para buscar aprimoramento constante</li>
<li className='list-disc ml-4'>Trabalho em equipe para realizar projetos em conjunto</li>
<li className='list-disc ml-4'>Boa gestão do tempo para priorizartarefas e cumprir prazos</li>
          </ul>
        </div>


      </div>
      <div className='mt-4 p-2 relative'>
        <button className='absolute right-2 top-0 shadow-neumorph rounded-full p-2' onClick={()=>setOnCv(false)}><IoMdClose className='text-2xl'/></button>
      <h1 className='text-[40px] font-bold text-blue-500 '> Clenilson Brandao</h1>
      <div className='mt-6 max-w-lg border-t border-black'>
        <p className='font-bold text-xl'>RESUMO</p>
        <p>Tenho mais de 2 anos de experiência com desenvolvimento front-end, com foco em
frameworks como ReactJs e NextJs. Com sólido conhecimento técnico e
dedicação para criar interfaces envolventes e intuitivas em projetos
desafiadores.
Profissional com excelentes habilidades de comunicação e amplo
conhecimento em Javascript e ReactJs. Sempre em busca das melhores
soluções aos problemas apresentados, de forma a colaborar com a rotina
diária e prestar um serviço de alta qualidade.
</p>
      </div>

<div className='mt-6'>
  <p className='font-bold text-xl border-t border-black'>EXPERIÊNCIA PROFISSIONAL</p>
  <div className='flex justify-between text-sm'>
    <p className='font-medium'>Desenvolvedor web</p>
    <p className='mr-4'>06/2023 - atual</p>
  </div>
  <p className='text-sm font-medium'>Freelancher - Belo Horizonte - MG</p>
  <ul className='flex gap-2 flex-col mt-4'>
<li>Planejamento e execução de atividades, contribuindo para o bom
andamento das operações dentro dos prazos estabelecidos.</li>
<li>Planejamento e execução de atividades, contribuindo para o bom
andamento das operações dentro dos prazos estabelecidos.</li>

<li>Utilização de ferramentas de controle de versão, como Git, gerenciando
o código-fonte.</li>

  </ul>
</div>

      </div>
      </div>
    </div>}

    <div className='flex w-full max-w-7xl flex-col lg:flex-row mx-auto gap-10 p-4 lg:p-0'>
      <div className='lg:h-screen main lg:sticky top-0 flex items-center justify-center'>
        <div className='flex flex-col items-center lg:items-start gap-4 w-full max-w-2xl overflow-hidden'>
          
          <div className='relative w-[150px] h-[150px] rounded-full '>
          <img 
            src="./images/eu.jpg" 
            alt=""  
            className='w-[150px] h-[150px] lg:mb-4 rounded-full z-40 absolute'
          />
          <div className='border-[#FF014F] animate-spin border-2 rounded-full border-t-transparent z-50 w-[152px] h-[152px]'>

          </div>
        
          </div>
          <p className='text-[31px] lg:text-[60px] font-bold lg:leading-10 leading-3 mt-4'>
            Olá, eu sou <span className='text-[#FF014F]'>Clenilson,</span>
          </p>
          <p className='text-[30px] lg:text-[50px] font-bold text-[#3C3E41] leading-3 lg:leading-10'>
            Desenvolvedor Web<span className='text-[60px]'>.</span>
          </p>
          <p className='mt-2 lg:mt-2 lg:text-xl text-[#7D7F83]'>
            Sou o desenvolvedor web fullstack para uma #empresa em Lugar Nenhum, OR. Tenho uma grande paixão por efeitos de UI, animações e criação de experiências de usuário intuitivas e dinâmicas.
          </p>
          <div className='flex gap-8 relative mb-4 lg:my-4'>
            <button className='bg-[#ECF0F3] text-[#FF014F] transition-all hover:bg-[#FF014F] hover:text-white relative  font-medium shadow-neumorph px-8 py-3 rounded-md' onClick={openCv}>
              Currículo
            </button>

            <Link href="https://wa.me/55031992311170?text=Olá,%20vim%20pelo%20seu%20portfólio" target='_blank' className='bg-[#ECF0F3] text-[#FF014F] transition-all hover:bg-[#FF014F] hover:text-white relative  font-medium shadow-neumorph px-8 py-3 rounded-md'>
              Contate-me
            </Link>
          </div>
        </div>
      </div>

      <div className='w-full flex-1'>

      <div className=' lg:mt-[100px]'>
  <div className='shadow-neumorph bg-gradient-to-br from-[#E2E8EC] to-[#ffffff] rounded-lg p-6'>
    <h1 className='border-b border-gray-300 text-[30px] font-bold pb-4 mt-2'>Sobre mim</h1>
    <p className='mt-6 lg:text-[17px] text-[#3e3e3f]'>
      Olá, sou um desenvolvedor Front-End e posso construir seu site como você quiser. Posso personalizar o plugin e o tema do WordPress. E tenho dois anos de experiência no figma. Agora posso projetar seu portfólio.
    </p>
    <p className='mt-6 text-[#3e3e3f] text-[17px] mb-2'>
      Tenho três anos de experiência com HTML, CSS, JavaScript. E posso projetar seu aplicativo web.
    </p>
  </div>
</div>

<div className='w-full flex-1 mt-[60px]'>
  <div className='shadow-neumorph bg-gradient-to-br from-[#E2E8EC] to-[#ffffff] rounded-lg p-6'>
    <h1 className='border-b border-gray-300 text-[30px] font-bold pb-4'>Minhas Habilidades</h1>
    <div className='grid grid-cols-3 lg:grid-cols-4 gap-4 items-start mt-6'>
    <p className='shadow-neumorph bg-gradient-to-br from-[#E2E8EC] p-3 px-4 flex items-center justify-center flex-col rounded-md to-[#ffffff]'><RiHtml5Line   className='text-4xl text-[#FC4F13]'/> <span>HTML</span> </p>
    <p className='shadow-neumorph bg-gradient-to-br from-[#E2E8EC] p-3 rounded-md px-4 flex items-center justify-center flex-col to-[#ffffff]'><FaCss3Alt   className='text-4xl text-[#3D9DD7]'/><span>CSS</span></p>
      <p className='shadow-neumorph bg-gradient-to-br from-[#E2E8EC] p-3 rounded-md px-4 flex items-center justify-center flex-col to-[#ffffff]'><RiReactjsFill  className='text-4xl text-[#66DBFB]'/><span>React</span></p>
      <p className='shadow-neumorph bg-gradient-to-br from-[#E2E8EC] p-3 rounded-md px-4 flex items-center justify-center flex-col to-[#ffffff]'><RiNextjsFill   className='text-4xl text-[#080808]'/><span>Next</span></p>
      <p className='shadow-neumorph bg-gradient-to-br from-[#E2E8EC] p-3 rounded-md px-4 flex items-center justify-center flex-col to-[#ffffff]'><FaNodeJs className='text-4xl text-green-600'/><span>Node</span></p>
      <p className='shadow-neumorph bg-gradient-to-br from-[#E2E8EC] p-3 rounded-md px-4 flex items-center justify-center flex-col to-[#ffffff]'><BiLogoPostgresql  className='text-4xl text-[#376695]'/><span>Postgres</span></p>
      <p className='shadow-neumorph bg-gradient-to-br from-[#E2E8EC] p-3 rounded-md px-4 flex items-center justify-center flex-col to-[#ffffff]'><SiPrisma  className='text-4xl text-[#0A3C54]'/><span>Prisma</span></p>
      <p className='shadow-neumorph bg-gradient-to-br from-[#E2E8EC] p-3 rounded-md px-4 flex items-center justify-center flex-col to-[#ffffff]'><RiTailwindCssFill   className='text-4xl text-[#4BAAB6]'/><span>Tailwind</span></p>
      <p className='shadow-neumorph bg-gradient-to-br from-[#E2E8EC] p-3 rounded-md px-4 flex items-center justify-center flex-col to-[#ffffff]'><TbSql className='text-4xl text-[#1F1F1F]'/><span>SQL</span></p>
      <p className='shadow-neumorph bg-gradient-to-br from-[#E2E8EC] p-3 rounded-md px-4 flex items-center justify-center flex-col to-[#ffffff]'><DiMongodb  className='text-4xl text-[#1F1F1F]'/><span>MongoDB</span></p>
    </div>
  </div>
</div>


<div className='w-full flex-1 mt-[60px] mb-10'>
  <div className='shadow-neumorph bg-gradient-to-br from-[#E2E8EC] to-[#ffffff] rounded-lg p-6'>
    <h1 className='border-b border-gray-300 text-[30px] font-bold pb-4 '>Meus serviços</h1>
    <ul className='mt-6 flex flex-col gap-2 lg:text-[17px] text-[#3e3e3f]'>
    <li className='before:w-2 before:h-1 before:bg-[#FF014F] before:block flex items-center gap-2'>Desenvolvimento de Sites e Aplicativos Web Personalizados</li>
      <li className='before:w-2 before:h-1 before:bg-[#FF014F] before:block flex items-center gap-2'>Criação de Landing Pages Otimizadas para Conversão</li>
      <li className='before:w-2 before:h-1 before:bg-[#FF014F] before:block flex items-center gap-2'>Integração de APIs e Serviços de Terceiros</li>
      <li className='before:w-2 before:h-1 before:bg-[#FF014F] before:block flex items-center gap-2'>Desenvolvimento de Backends Escaláveis e Seguros</li>
      <li className='before:w-2 before:h-1 before:bg-[#FF014F] before:block flex items-center gap-2'>Configuração e Gerenciamento de Bancos de Dados.</li>
    </ul>
  </div>
</div>

      </div>
    </div>
    </>
  );
};

export default Page;
