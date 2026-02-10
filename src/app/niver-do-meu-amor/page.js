"use client";

import { useState, useRef } from "react";
import Image from "next/image";

const slides = [
  { img: "/images/img5.jpg", text: "Cada segundo com você é um presente 💖" },
  { img: "/images/img6.jpg", text: "Seu sorriso virou meu lugar seguro ✨" },
  { img: "/images/img7.jpg", text: "Obrigado por ser meu apoio, meu carinho e meu lar 🤍" },
  { img: "/images/img14.jpg", text: "Com vocês, tudo faz mais sentido 🥰" },
  { img: "/images/img9.jpg", text: "Quero viver muitos momentos assim com você 💫" },
  { img: "/images/img10.jpg", text: "Feliz aniversário, meu amor 🎉🎂 Eu te amo ❤️" },
  { img: "/images/img11.jpg", text: "Cada detalhe seu me faz ter certeza do quanto eu te amo 💕" },
  { img: "/images/img12.jpg", text: "Vocês chegram e deixaram tudo mais leve 🌸" },
  { img: "/images/img13.jpg", text: "Eu amo dividir a vida com vocês 💑" },
  { img: "/images/img8.jpg", text: "Seu abraço é onde meu coração descansa 🤍" },
  { img: "/images/img15.jpg", text: "Com você eu aprendi o que é amor de verdade ✨" },
  { img: "/images/img16.jpg", text: "Que a gente continue escrevendo nossa história juntos 💫" },
];

export default function Home() {
  const [index, setIndex] = useState(-1);
  const audioRef = useRef(null);

  const start = () => {
    audioRef.current?.play();
    setIndex(0);
  };

  const next = () => {
    if (index < slides.length) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-500 to-red-500 p-4 overflow-hidden">

      {/* CORAÇÕES */}
      <div className="hearts">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i}>❤️</span>
        ))}
      </div>

      <audio ref={audioRef} src="/musica.mp3" loop />

      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 text-center animate-fade">

        {/* TELA INICIAL */}
        {index === -1 && (
          <>
            <h1 className="text-2xl font-bold text-pink-600 mb-4">
              Antes de começar...
            </h1>

            <p className="text-gray-600 mb-6">
              Coloque o fone de ouvido 🎧 <br />
              Tenho algo muito especial pra você 💖
            </p>

            <button
              onClick={start}
              className="px-6 py-3 bg-pink-500 text-white rounded-xl text-lg font-semibold hover:scale-105 transition"
            >
              Clique aqui ✨
            </button>
          </>
        )}

        {/* SLIDES */}
        {index >= 0 && index < slides.length && (
          <>
            <div onClick={next} className="cursor-pointer animate-scale">
              <Image
                src={slides[index].img}
                alt="Foto especial"
                width={400}
                height={400}
                className="rounded-xl mx-auto"
              />
            </div>

            <p className="mt-4 text-lg font-semibold text-gray-700 animate-fade">
              {slides[index].text}
            </p>

            <div className="flex justify-between mt-6">
              <button
                onClick={prev}
                disabled={index === 0}
                className="px-4 py-2 rounded-lg bg-gray-200 disabled:opacity-50"
              >
                ⬅️
              </button>

              <button
                onClick={next}
                className="px-4 py-2 rounded-lg bg-pink-500 text-white"
              >
                ➡️
              </button>
            </div>
          </>
        )}

        {/* MENSAGEM FINAL TRAVADA */}
        {index === slides.length && (
          <div className="animate-fade">
            <h2 className="text-3xl font-extrabold text-pink-600 mb-4">
              FELIZ ANIVERSÁRIO ❤️🎂
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Hoje é o seu dia, mas quem ganha o presente sou eu por ter você na minha vida.  
              <br /><br />
              Obrigado por ser quem você é, por me amar, me apoiar e caminhar comigo.  
              <br /><br />
              Que todos os seus sonhos se realizem — e que eu esteja ao seu lado em cada um deles.
            </p>

            <p className="mt-6 text-xl font-semibold text-pink-500">
              Eu te amo infinitamente 💖
            </p>
          </div>
        )}
      </div>

      {/* ESTILOS */}
      <style jsx>{`
        .animate-fade {
          animation: fade 0.8s ease-in-out;
        }

        .animate-scale {
          animation: scale 0.5s ease-in-out;
        }

        @keyframes fade {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes scale {
          from { transform: scale(0.95); }
          to { transform: scale(1); }
        }

        .hearts span {
          position: absolute;
          bottom: -10px;
          animation: float 6s linear infinite;
          font-size: 22px;
          opacity: 0.7;
        }

        .hearts span:nth-child(odd) {
          left: 20%;
          animation-duration: 7s;
        }

        .hearts span:nth-child(even) {
          left: 70%;
          animation-duration: 5s;
        }

        @keyframes float {
          from { transform: translateY(0); }
          to { transform: translateY(-110vh); }
        }
      `}</style>
    </main>
  );
}
