'use client'
import Link from 'next/link';
import React, { useState } from 'react';

const Header = () => {
    const [menu, setOpenMenu] = useState(false);

    function openMenu() {
        setOpenMenu(menu => !menu);
    }

    function closeMenu(){
      setOpenMenu(false)
    }

    return (
        <div className="p-4 max-w-3xl mx-auto bg-[#282A2D] h-16 text-gray-200 relative rounded-md border flex-col lg:flex-row border-gray-600 flex justify-between items-center">
            <Link href="/" className='absolute lg:static left-2 z-50'>
                <h1 className='font-bold'>Kleno<span className='text-[#9933F8]'>Dev</span></h1>
            </Link>
            <button className="absolute right-2 z-50 lg:hidden" onClick={openMenu}>
                <div className="relative w-6 h-6 flex items-center justify-center">
                    <span
                        className={`block absolute w-full h-0.5 bg-[#9933F8] transform transition duration-300 ease-in-out ${menu ? "rotate-45" : "-translate-y-2"}`}
                    ></span>
                    <span
                        className={`block absolute w-full h-0.5 bg-[#9933F8] transform transition duration-300 ease-in-out ${menu ? "opacity-0" : ""}`}
                    ></span>
                    <span
                        className={`block absolute w-full h-0.5 bg-[#9933F8] transform transition duration-300 ease-in-out ${menu ? "-rotate-45" : "translate-y-2"}`}
                    ></span>
                </div>
            </button>
            <header className={`w-full lg:w-auto absolute right-0 top-[70px] lg:static lg:h-auto lg:top-0 overflow-hidden rounded-md left-0 flex justify-center ${!menu ? "h-0" : "h-screen"} transition-all ${menu ? "ativo" : ""} z-40 bg-[#282A2D]`}>
                <nav>
                    <ul className='flex gap-4 lg:flex-row flex-col pt-4 lg:pt-0'>
                        <li><Link href="/" className='hover:text-[#9933F8] transition-all' onClick={closeMenu}>Inicio</Link></li>
                        <li><Link href="/sobre" className='hover:text-[#9933F8] transition-all' onClick={closeMenu}>Sobre</Link></li>
                        <li><Link href="/projetos" className='hover:text-[#9933F8] transition-all' onClick={closeMenu}>Projetos</Link></li>
                        <li><Link href="/skills" className='hover:text-[#9933F8] transition-all' onClick={closeMenu}>Habilidades</Link></li>
                        <li><Link href="/contato" className='hover:text-[#9933F8] transition-all' onClick={closeMenu}>Contato</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;
