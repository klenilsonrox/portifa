'use client'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import React, { useEffect, useState } from 'react';
import { FaNodeJs } from "react-icons/fa";
import { RiReactjsFill,RiNextjsFill,RiHtml5Line,RiTailwindCssFill  } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiPrisma } from "react-icons/si";
import { FiArrowUpRight } from "react-icons/fi";
import { TbSql } from "react-icons/tb";
import { DiMongodb } from "react-icons/di";
import { FaInstagramSquare,FaLinkedin ,FaWhatsappSquare } from "react-icons/fa";
import { BsFillTelephoneMinusFill } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import Link from 'next/link';
import { IoMdClose } from "react-icons/io";
import { FaEye,FaEyeSlash  } from "react-icons/fa";

const projetos = [
  {id:0, name:"Rx Bank", description:"Rx Bank é um projeto de um banco fictício onde os usuários podem criar conta e enviar dinheiro para outros usuários que possuam conta, ao criar conta cada usuário começa com um saldo de R$ 5,000", image:"./images/banco.png", link:"https://rxbank.vercel.app/" , tecnologias:["Nextjs","Tailwind","NodeJs","MongoDB"], color:"bg-[#7228BC]"},
  {id:0, name:"Rx Campanhas", description:"Rx Campanhas é um projeto fictício de um sistema que vende rifas online, esse sistema tem um painel de adm onde o adm pode criar novas rifas, editar e deletar rifas já criadas, os usuários podem criar conta e comprar rifas", image:"./images/rifa.png", link:"https://rxcampanhas.vercel.app/" , tecnologias:["Nextjs","Tailwind","NodeJs","MongoDB"],color:"bg-[#1F2937]"},
  {id:0, name:"Pytter Burger", description:"Pytter Burger é um cardápio Online que fiz como freelancer para uma hamburgueria, através do site os usuários podem fazer o pedido, e enviar via Whatsapp, o que agiliza muito o atendimento para o dono do estabelecimento sem a necessidade de ficar perdendo tempo conversando com clientes.", image:"./images/pytter.png", link:"https://www.pytterburger.com.br" , tecnologias:["Nextjs","Tailwind"],color:"bg-[#000000]"},
  {id:0, name:"Nutri Ferraz", description:"Nutri Ferraz é um site para uma nutricionista Fictícia feito com NextJs e tailwind css!", image:"./images/nutri.png", link:"https://pagina-nutricionista.vercel.app/" , tecnologias:["Nextjs","Tailwind"],color:"bg-[#FED7B1]"},
]

const Page = () => {
const [cv,setOnCv]=useState(false)
const [foto,setFoto]=useState(false)
const [projeto,setProjeto]=useState(false)
const [modalProjeto,setModalProjeto]=useState(false)
const [menu,setOpenMenu]=useState(false)
const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [message,setMessage]=useState("")

useEffect(()=>{
  AOS.init();
},[])

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

function closeMenu(){
  setOpenMenu(false)
}

function selectProjeto(index){
  setModalProjeto(true)
  const projetoSelecionado = projetos[index]
 setProjeto(projetoSelecionado)
}

function closeModalProjeto(e){
  if(e.target.id==="modalProjeto"){
    setModalProjeto(false)
  }
}

function openMenu(){
  setOpenMenu(menu=>!menu)
}

  return (
    <>

<div className='flex gap-2 mt-4 items-center justify-center mb-4 fixed flex-col right-2'>
  <div className='shadow-neumorph p-2 rounded-full'>
  <Link href="https://wa.me/55031992311170?text=Ol%C3%A1,%20vim%20pelo%20seu%20portf%C3%B3lio" target='_blank'><FaWhatsappSquare className='text-2xl'/></Link>
  </div>
  <div className='shadow-neumorph p-2 rounded-full'>
  <Link href="https://www.linkedin.com/in/clenilson-brandao/" target='_blank'><FaLinkedin className='text-2xl'/></Link>
  </div>
  <div className='shadow-neumorph p-2 rounded-full'>
  <Link href="https://www.instagram.com/klenilsonrox" target='_blank'><FaInstagramSquare className='text-2xl'/></Link>
  </div>
</div>


    <div className='py-4 border-b-2 fixed top-0 right-0 left-0 bg-white bg-opacity-45 backdrop-blur-sm '>
    <header className='max-w-7xl mx-auto flex justify-between items-center px-4 '>
      <button className='absolute right-2 lg:hidden' onClick={openMenu}><span className={` transition-all hamb ${menu ? "ativo":""}`}></span></button>
      <Link href="/"><h1 className='font-bold'>Kleno<span className='text-[#FF014F]'>Dev</span> </h1></Link>
      <div>
      <nav className={`absolute lg:static right-0 flex items-end justify-end top-14 overflow-hidden ${!menu ? "w-0":"w-[120px]"} lg:w-auto ${menu ? "animaMenu":""}`}>
        <ul className='flex lg:gap-4 text-[#7D7F83] flex-col z-50 bg-white w-full pt-4 transition-all lg:pt-0 lg:static lg:bg-transparent lg:h-auto lg:flex-row h-screen px-4 '>
          <li><Link onClick={closeMenu} href="">Início</Link></li>
          <li><Link onClick={closeMenu} href="#sobre">Sobre mim</Link></li>
          <li><Link onClick={closeMenu} href="#projetos">Projetos</Link></li>
          <li><Link onClick={closeMenu} href="#habilidades">Habilidades</Link></li>
          <li><Link onClick={closeMenu} href="#contato">Contato</Link></li>
        </ul>
      </nav>
      </div>
    </header>
    </div>

{modalProjeto && <div className='flex inset-0 fixed justify-center items-center bg-white border-2 bg-opacity-15 backdrop-blur-sm p-2 z-20' id='modalProjeto' onClick={closeModalProjeto}>
  <div className='max-w-lg w-full bg-gradient-to-br from-[#E2E8EC] to-[#ffffff] rounded-lg border-2 border-gray-300 '>
    <button className='absolute right-2 top-2 shadow-neumorph p-2 rounded-full' onClick={()=>setModalProjeto(false)}><IoMdClose className='text-xl'/></button>
    <img src={projeto.image} alt="" />
    <div className='p-5'>
    <h1 className='text-xl font-bold text-gray-600 my-2'>{projeto.name}</h1>
    <p className='mb-2'>{projeto.description}</p>
    <p className='font-medium'>tecnologias usadas:</p>
    <div className='grid gap-2 grid-cols-3 mt-2 text-white '>
      {projeto.tecnologias.map(tec=> (
        <p className={`${projeto.color} text-center rounded-md py-1`}>{tec}</p>
      ) )}
    </div>
    <div className='mt-6 flex justify-between'>
      <Link href={projeto.link} target='_blank' className='shadow-neumorph px-6 py-2 rounded-md flex items-center gap-2'><IoIosLink /> Ver projeto</Link>
      <button onClick={()=>setModalProjeto(false)}>Voltar</button>
    </div>
    </div>
  </div>
  </div>}
    
    {cv && <div className='flex inset-0 fixed justify-center bg-white border-2 bg-opacity-15 backdrop-blur-sm p-2 z-30' id='cv' onClick={closeCv}>
    <button className='fixed right-4 top-4 lg:top-2 bg-white lg:right-2 shadow-neumorph rounded-full p-2' onClick={()=>setOnCv(false)}><IoMdClose className='text-2xl'/></button>
      <div className='shadow-neumorph bg-gradient-to-br overflow-auto lg:overflow-hidden flex flex-col lg:flex-row from-[#E2E8EC]  gap-6 to-[#ffffff] rounded-lg w-full max-w-4xl anima'>
      <div className='bg-blue-400 p-2 lg:overflow-y-scroll scrollbar-blue w-full lg:max-w-[350px]'>
        <div>{!foto && <img src="./images/eu.jpg" alt="" className='w-[60px] h-[60px] rounded-full object-cover mx-auto' />}
        {foto && <img src="./images/eu.jpg" alt="" className='w-[250px] h-[250px] rounded-full object-cover mx-auto anima' />}
        <button onClick={verFoto} className='flex items-center gap-2 mx-auto text-white'>{!foto ? "ver foto":"esconder foto"} {!foto ? <FaEye />:<FaEyeSlash />} </button>
        </div>

        <div className='text-white mt-6  border-t'>
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
      <div className='mt-4 p-2 lg:overflow-y-scroll scrollbar-blue'>
      <h1 className='text-[40px] font-bold text-blue-500 '> Clenilson Brandao</h1>
      <div className='mt-6 max-w-lg border-t border-black'>
        <p className='font-bold text-xl'>RESUMO</p>
        <p>Tenho mais de 2 anos de experiência com desenvolvimento fullstack, com foco em
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

<div className='mt-6'>
  <p className='font-bold text-xl border-t border-black'>FORMAÇÂO ACADÊMICA</p>
  <div className='mt-2'>
    <p className='leading-4'>HTML e CSS para iniciantes</p>
    <small className='strong font-bold'>Origamid</small>
  </div>
  <div className='mt-2'>
    <p className='leading-4'>Javascript completo ES6</p>
    <small className='strong font-bold'>Origamid</small>
  </div>
  <div className='mt-2'>
    <p className='leading-4'>React completo</p>
    <small className='strong font-bold'>Origamid</small>
  </div>
  <div className='mt-2'>
    <p className='leading-4'>Typescript para iniciantes</p>
    <small className='strong font-bold'>Origamid</small>
  </div>
  <div className='mt-2'>
    <p className='leading-4'>React com typescript</p>
    <small className='strong font-bold'>Origamid</small>
  </div>
  <div className='mt-2'>
    <p className='leading-4'>NextJs</p>
    <small className='strong font-bold'>Origamid</small>
  </div>
  <div className='mt-2'>
    <p className='leading-4'>Banco de dados</p>
    <small className='strong font-bold'>b7Web</small>
  </div>
  <div className='mt-2'>
    <p className='leading-4'>Javascript</p>
    <small className='strong font-bold'>b7Web</small>
  </div>
  <div className='mt-2'>
    <p className='leading-4'>ReactJs</p>
    <small className='strong font-bold'>b7Web</small>
  </div>
</div>


      </div>
      </div>
    </div>}

    <div className='flex w-full max-w-7xl flex-col lg:flex-row mx-auto gap-10 p-4 lg:p-0 mt-20'>
      <div className='lg:h-screen main lg:sticky top-0 flex items-center justify-center'>
        <div className='flex flex-col items-center lg:items-start gap-4 w-full max-w-2xl overflow-hidden'>
          
          <div className=' w-[150px] h-[150px] rounded-full '>
          <img 
            src="./images/eu.jpg" 
            alt=""  
            className='w-[150px] h-[150px] lg:mb-4 rounded-full '
          />
          
          </div>
          <div className='text-[25px] lg:text-[60px] text-center leading-5 font-bold lg:leading-10 flex flex-col  text-gray-500'>
            <p>Olá, eu sou <span className='text-[#FF014F] '>Clenilson</span></p> <span className='mt-4'>Desenvolvedor Web</span>
          </div>
          
          <p className='mt-2 lg:mt-2 lg:text-xl text-[#7D7F83]'>
            Sou o desenvolvedor web fullstack Freelancer em busca da primeira Oportunidade como desenvolvedor web. Tenho uma grande paixão por efeitos de UI, animações e criação de experiências de usuário intuitivas e dinâmicas.
          </p>
          <div className='flex gap-8  mb-4 lg:my-4'>
            <button className='bg-[#ECF0F3] text-[#FF014F] transition-all hover:bg-[#FF014F] hover:text-white   font-medium shadow-neumorph px-8 py-3 rounded-md' onClick={openCv}>
              Currículo
            </button>

            <Link href="https://wa.me/55031992311170?text=Olá,%20vim%20pelo%20seu%20portfólio" target='_blank' className='bg-[#ECF0F3] text-[#FF014F] transition-all hover:bg-[#FF014F] hover:text-white   font-medium shadow-neumorph px-8 py-3 rounded-md'>
              Contate-me
            </Link>
          </div>
        </div>
      </div>

      <div className='w-full flex-1'>

      <div className=' lg:mt-[100px] animaLeft' id='sobre' >
  <div className='shadow-neumorph bg-gradient-to-br from-[#E2E8EC] to-[#ffffff] rounded-lg p-6'>
    <h1 className='border-b border-gray-300 text-[30px] text-gray-500 font-bold pb-4 mt-2'>Sobre mim</h1>
    <p className='mt-6 lg:text-[17px] text-[#3e3e3f]'>
      Olá, sou um desenvolvedor web fullstack e posso construir seu site ou sistema como você quiser. Tenho mais de 2 anos de experiência em Html, Css, Javascript, ReactJs,NextJs ,NodeJs, Postgres, MongoDB. Agora posso projetar seu portfólio.
    </p>
    <p className='mt-6 text-[#3e3e3f] text-[17px] mb-2'>
      e aí, vamos construir algo juntos?.
    </p>
  </div>
</div>

<div className='w-full flex-1 mt-[60px] animaRight' id='habilidades'>
  <div className='shadow-neumorph bg-gradient-to-br from-[#E2E8EC] to-[#ffffff] rounded-lg p-6'>
    <h1 className='border-b border-gray-300 text-[30px] font-bold pb-4 text-gray-500'>Habilidades</h1>
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

<div className='w-full flex-1 mt-[60px] animaRight' id='projetos'>
  <div className='shadow-neumorph bg-gradient-to-br from-[#E2E8EC] to-[#ffffff] rounded-lg p-6'>
    <h1 className='border-b border-gray-300 text-[30px] font-bold pb-4 text-gray-500'>Projetos</h1>
    <div className='flex flex-col gap-1 mt-6'>
    {projetos.map((projeto,index)=> (
      <div>
        <h1 className='cursor-pointer text-blue-600 underline flex items-center gap-3' id={projeto.id} onClick={()=>selectProjeto(index)} >{projeto.name} <FiArrowUpRight /></h1>
      </div>
    ) )}
    </div>
  </div>
</div>


<div className='w-full flex-1 mt-[60px] mb-10 animaRight' id='servicos'>
  <div className='shadow-neumorph bg-gradient-to-br from-[#E2E8EC] to-[#ffffff] rounded-lg p-6'>
    <h1 className='border-b border-gray-300 text-[30px] font-bold pb-4 text-gray-500'>Serviços</h1>
    <ul className='mt-6 flex flex-col gap-2 lg:text-[17px] text-[#3e3e3f]'>
    <li className='before:w-2 before:h-1 before:bg-[#FF014F] before:block flex items-center gap-2'>Desenvolvimento de Sites e Aplicativos Web Personalizados</li>
      <li className='before:w-2 before:h-1 before:bg-[#FF014F] before:block flex items-center gap-2'>Criação de Landing Pages Otimizadas para Conversão</li>
      <li className='before:w-2 before:h-1 before:bg-[#FF014F] before:block flex items-center gap-2'>Integração de APIs e Serviços de Terceiros</li>
      <li className='before:w-2 before:h-1 before:bg-[#FF014F] before:block flex items-center gap-2'>Desenvolvimento de Backends Escaláveis e Seguros</li>
      <li className='before:w-2 before:h-1 before:bg-[#FF014F] before:block flex items-center gap-2'>Configuração e Gerenciamento de Bancos de Dados.</li>
    </ul>
  </div>
</div>

<div className='w-full flex-1 mt-[60px] mb-10 animaRight' id='contato'>
  <div className='shadow-neumorph bg-gradient-to-br from-[#E2E8EC] to-[#ffffff] rounded-lg p-6'>
    <h1 className='border-b border-gray-300 text-[30px] font-bold pb-4 text-gray-500'>Contate-me</h1>
    <div>
     <form className='mt-6' action="https://formsubmit.co/klenilsoncoc@gmail.com" method="POST">
      <div className='flex flex-col'>
        <label htmlFor="name">Nome</label>
        <input type="text" name='name' value={name} onChange={({target})=>setName(target.value)} className='bg-white border py-3 rounded-md outline-none pl-2' placeholder='Seu nome'/>
      </div>
      <div className='flex flex-col mt-4'>
        <label htmlFor="email">Email</label>
        <input type="email" name='email' value={email} onChange={({target})=>setEmail(target.value)} className='bg-white border py-3 rounded-md outline-none pl-2' placeholder='Seu email'/>
      </div>
      <input type="hidden" name="_captcha" value="false"></input>
      <input type="hidden" name="_next" value="https://klenodev.vercel.app/obrigado"></input>
      <div className='flex flex-col mt-4'>
        <label htmlFor="message">Mensagem</label>
        <textarea name="message" id="" cols="30" value={message} onChange={({target})=>setMessage(target.value)} rows="5" className='outline-none border rounded-md p-2' placeholder='Sua mensagem'></textarea>
      </div>
      <button className='px-8 py-2 rounded-md bg-[#FF014F] mt-2 text-white' type='submit'>ENVIAR</button>
     </form>
    </div>
  </div>
</div>

<footer className='py-3 flex items-center justify-center text-gray-700'>
  <div className='mt-4'>
<p className='text-medium'>KlenoDev 2024 todos os direitos reservados!</p>
<div className='flex gap-2 mt-4 items-center justify-center mb-4'>
  <div className='shadow-neumorph p-2 rounded-full'>
  <Link href="https://wa.me/55031992311170?text=Ol%C3%A1,%20vim%20pelo%20seu%20portf%C3%B3lio" target='_blank'><FaWhatsappSquare className='text-2xl'/></Link>
  </div>
  <div className='shadow-neumorph p-2 rounded-full'>
  <Link href="https://www.linkedin.com/in/clenilson-brandao/" target='_blank'><FaLinkedin className='text-2xl'/></Link>
  </div>
  <div className='shadow-neumorph p-2 rounded-full'>
  <Link href="https://www.instagram.com/klenilsonrox" target='_blank'><FaInstagramSquare className='text-2xl'/></Link>
  </div>
</div>
<div>

</div>
</div>
</footer>

      </div>
    </div>

    </>
  );
};

export default Page;
