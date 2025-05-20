import React from 'react';
import { LayoutList, Box, Power } from 'lucide-react';

const HeaderDashBoard = () => {
  return (
    <div className="h-screen w-64 bg-white shadow-md flex flex-col fixed">
      {/* Logo/Header */}
      <div className="p-6 border-b border-gray-100">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-[#A955F5] to-[#E749A1] bg-clip-text text-transparent">
          Dashboard
        </h1>
      </div>
      
      {/* Navigation Links */}
      <nav className="flex-1 flex flex-col p-4 space-y-2">
        <a 
          href="/dashboard/categorias" 
          className="flex items-center p-3 rounded-lg hover:bg-[#F4F4FC] text-gray-700 hover:text-[#A955F5] transition-colors group"
        >
          <LayoutList className="w-5 h-5 mr-3 group-hover:text-[#E749A1]" />
          <span className="font-medium">Categorias</span>
        </a>
        
        <a 
          href="/dashboard/produtos" 
          className="flex items-center p-3 rounded-lg hover:bg-[#F4F4FC] text-gray-700 hover:text-[#A955F5] transition-colors group"
        >
          <Box className="w-5 h-5 mr-3 group-hover:text-[#E749A1]" />
          <span className="font-medium">Produtos</span>
        </a>
      </nav>
      
      {/* Logout Button */}
      <div className="p-4 border-t border-gray-100">
        <button className="flex items-center w-full p-3 rounded-lg hover:bg-[#F4F4FC] text-gray-700 hover:text-[#A955F5] transition-colors group">
          <Power className="w-5 h-5 mr-3 group-hover:text-[#E749A1]" />
          <span className="font-medium">Sair</span>
        </button>
      </div>
    </div>
  );
};

export default HeaderDashBoard;