import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div className="p-4 max-w-3xl mx-auto bg-[#282A2D] text-gray-200 rounded-md border flex-col lg:flex-row border-gray-600 flex justify-between items-center">
      <Link href="/"><h1 className='font-bold'>Kleno<span className='text-[#9933F8]'>Dev</span> </h1></Link>
      <header>
        <nav>
            <ul className='flex gap-4 lg:flex-row'>
                <li><Link href="/" className='hover:text-[#9933F8] transition-all'>Inicio</Link></li>
                <li><Link href="/sobre" className='hover:text-[#9933F8] transition-all'>Sobre</Link></li>
                <li><Link href="/projetos" className='hover:text-[#9933F8] transition-all'>Projetos</Link></li>
                <li><Link href="/skills" className='hover:text-[#9933F8] transition-all'>Habilidades</Link></li>
                <li><Link href="/contato" className='hover:text-[#9933F8] transition-all'>Contato</Link></li>
            </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;