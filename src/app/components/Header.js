'use client'

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Importando ícones do react-icons

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-[#0E1013] text-white py-4 shadow-lg">
            <div className="max-w-7xl mx-auto flex justify-between items-center w-full px-4">
                <h1 className="text-4xl font-bold text-[#B452FF]">KlenoDev</h1>
                {/* Botão do Menu Hamburger */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-3xl text-[#B452FF]"
                    >
                        {isOpen ? <FaTimes /> : <FaBars />} {/* Ícones de abertura e fechamento */}
                    </button>
                </div>
                {/* Menu de Navegação */}
                <nav className={`md:flex md:items-center md:space-x-6 ${isOpen ? 'block' : 'hidden'} md:block absolute md:relative top-full left-0 w-full md:w-auto bg-[#0E1013] md:bg-transparent z-50`}>
                    <a href="#about" className="block py-2 px-4 hover:text-[#B452FF] md:inline">Sobre Mim</a>
                    <a href="#skills" className="block py-2 px-4 hover:text-[#B452FF] md:inline">Skills</a>
                    <a href="#projects" className="block py-2 px-4 hover:text-[#B452FF] md:inline">Projetos</a>
                    <a href="#contact" className="block py-2 px-4 hover:text-[#B452FF] md:inline">Contato</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
