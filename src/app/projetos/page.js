'use client'
import React, { useState } from 'react';
import { FaRegEye } from "react-icons/fa";
import Projeto from '../components/Projeto';

const projetos = [
 {id:0, name:"RxBank", description:"Rx é um banco fictício onde as pessoas podem criar conta, enviar e receber dinheiro, cada conta já começa com um saldo de R$ 5000,00 para voce enviar pra qualquer usuário que já tenha criada conta na plataforma" , image:"./images/banco.png" ,tecnologias:["NextJs","Tailwind","NodeJs","MongoDB"],link:"https://rxbank.vercel.app"},
 {id:1, name:"Rx Campanhas", description:"Rx é um projeto de venda de rifas online onde as pessoas podem criar conta e comprar seus bilhetes, nesse projeto foram usadas as tecnologias NextJs, tawilind, MongoDB!" , image:"./images/rifa.png" ,tecnologias:["NextJs","Tailwind","NodeJs","MongoDB"],link:"https://rxcampanhas.vercel.app/"},
 {id:2, name:"Pytter Burger", description:"Pytter Burguer é um projeto de um cardápio digital de um freelancer que eu fiz para uma hamburgueria, através desse cardápio o cliente pode fazer o seu pedido e enviar o pedido direto para o whatsapp da loja, agilizando assim o atendimento sem a necessidade de enfrentar filas!" , image:"./images/pytter.png" ,tecnologias:["NextJs","Tailwind","NodeJs","MongoDB"],link:"https://pytterburger.com.br/"},
 {id:2, name:"Nutri", description:"Nutri é o projeto de uma landing page para uma nutricionista fictícia, o projeto foi feito usando NextJs e tailwind" , image:"./images/nutri.png" ,tecnologias:["NextJs","Tailwind"],link:"https://pagina-nutricionista.vercel.app/"}
]

const page = () => {
    const [projeto,setProjeto]= useState(null)
    const [modalProjeto,setOpenModalProjeto]=useState(false)

    function verProjeto(e){
        setOpenModalProjeto(true)
        const projetoClicado = projetos[e.target.id]
        setProjeto(projetoClicado)
    }

function close(e){
    if(e.target.id==="modalProjeto"){
        setOpenModalProjeto(false)
    }
}

  return (
   <>
  
  {modalProjeto && <Projeto  projeto={projeto} func={close} setState={setOpenModalProjeto}/> }

     <div className="p-4 max-w-3xl mx-auto bg-[#282A2D] text-gray-200 border-gray-600 rounded-md border flex justify-between items-start min-h-[450px] animaLeft">
      <div>
      <h1 className='text-2xl flex items-center gap-2  before:w-4 before:h-1 before:bg-[#B854FF] '>Projetos</h1>
      <div className='mt-4 grid  gap-4 max-h-[450px] overflow-y-scroll custom-scrollbar'>
        {projetos && projetos.map((projeto,index)=> (
            <div className='bg-[#0E1013] rounded-md overflow-hidden'>
                <img src={projeto.image} alt="" className='mt-2'/>
                <div className='p-4'>
                    <h1 className='before:bg-green-600 before:h-4 items-center before:w-1 before:block flex gap-2 before:rounded-md'>{projeto.name}</h1>
                    <p className='line-clamp-2 mt-2'>{projeto.description}</p>
                    <div className='flex gap-3 flex-wrap items-center  leading-3 mt-4'>
                        {projeto.tecnologias.map(tec=> (
                            <p className='bg-[#B854FF] py-2 px-4 rounded-md'>{tec}</p>
                        ) )}
                    </div>
            
                    <div className='mt-4 flex gap-4'>
                        <button className='cursor-pointer flex items-center gap-2  bg-[#1B1D20] px-4 py-2 rounded-md text-gray-300 ' id={projeto.id} onClick={verProjeto}> ver mais <FaRegEye/></button>
                    </div>
                </div>
            </div>
        ) )}
      </div>
      </div>
    </div>
   </>
  );
};

export default page;