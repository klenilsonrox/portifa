'use client'
// components/Home.js
import React from "react";
import Image from "next/image";
import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#121212] text-white p-4">
      {/* Foto de perfil */}
      <div className="relative w-40 h-40 mb-6">
        <Image
          src="/images/perfil.jpg"
          alt="Klenilson Rox"
          layout="fill"
          className="rounded-full border-4 border-[#0D0E0F]"
        />
      </div>

      {/* Nome */}
      <h1 className="text-3xl font-bold mb-2">Klenilson Rox</h1>

      {/* Localização */}
      <div className="flex flex-col items-center mb-4">
        <p className="flex items-center gap-2 text-gray-300">
          <FaMapMarkerAlt className="text-green-500" /> Atual: Belo Horizonte 📍
        </p>
        <p className="flex items-center gap-2 text-gray-500">
          <FaMapMarkerAlt className="text-yellow-500" /> Anterior: Cachoeira de Pajeú 🌄
        </p>
      </div>

      {/* Contato WhatsApp */}
      <a
        href="https://wa.me/5531992311170"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-green-600 hover:bg-green-700 transition-colors text-white font-semibold py-3 px-6 rounded-lg shadow-lg"
      >
        <FaWhatsapp size={24} /> Me mande uma mensagem
      </a>
    </div>
  );
}
