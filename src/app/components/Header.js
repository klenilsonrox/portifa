'use client';

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-[#0E1013] text-white py-4 shadow-lg z-20  right-0 left-0">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4 relative">
                <h1 className="text-4xl font-bold text-[#B452FF]">KlenoDev</h1>
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-3xl text-[#B452FF] z-50"
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
                <nav className={`absolute lg:static top-0 left-0 w-full bg-[#0E1013] md:bg-transparent transition-transform duration-300 ease-in-out ${isOpen ? 'top-[66px]' : '-translate-y-full'}  md:translate-y-0 z-50`}>
                    <div className="flex flex-col md:flex-row md:items-center md:space-x-6 p-4">
                        <a href="#about" className="block py-2 px-4 hover:text-[#B452FF]">Sobre Mim</a>
                        <a href="#skills" className="block py-2 px-4 hover:text-[#B452FF]">Skills</a>
                        <a href="#projects" className="block py-2 px-4 hover:text-[#B452FF]">Projetos</a>
                        <a href="#contact" className="block py-2 px-4 hover:text-[#B452FF]">Contato</a>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
