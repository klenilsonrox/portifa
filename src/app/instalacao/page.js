"use client"
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#0a0014] to-[#1a002a] text-gray-200 flex flex-col items-center px-4 py-10">
      <div className="max-w-3xl w-full space-y-8">
        <header className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-600">
            Como Instalar APP na TV Box
          </h1>
          <p className="text-gray-400">
            Bem-vindo! Vamos aprender como instalar um aplicativo APK na sua TV
            Box usando um PenDrive. Essa é a maneira mais simples e segura de
            instalar apps. Vamos começar!
          </p>
        </header>

        <section className="space-y-4 bg-[#0e001e]/60 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-purple-800/40">
          <p className="leading-relaxed text-gray-300">
            Sejam bem-vindos a mais um tutorial! Neste guia, você vai aprender
            como instalar um aplicativo APK na sua TV Box usando um PenDrive de
            forma simples e rápida em nosso app. Vamos começar?
          </p>

          <h2 className="text-2xl font-semibold text-purple-400 mt-6">
            Computador / Notebook 💻
          </h2>

          <ol className="list-decimal list-inside space-y-2 text-gray-300">
            <li>
              Clique no link abaixo para baixar o arquivo APK do aplicativo:
              <div className="mt-2">
                <Link
                  href="https://tinyurl.com/4f6xdnhu"
                  className="inline-block mt-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 transition rounded-lg text-white font-medium"
                >
                  📥 Baixar aplicativo (clique aqui)
                </Link>
              </div>
            </li>
            <li>O arquivo APK será baixado para a pasta padrão de downloads.</li>
            <li>Conecte o pen drive a uma porta USB do seu computador.</li>
            <li>Navegue até a pasta onde o arquivo foi baixado.</li>
            <li>Copie o arquivo APK (Ctrl + C).</li>
            <li>Abra a pasta do pen drive e cole o arquivo (Ctrl + V).</li>
            <li>Aguarde a transferência ser concluída.</li>
          </ol>

          <h2 className="text-2xl font-semibold text-purple-400 mt-8">
            TV BOX 📺
          </h2>

          <ol className="list-decimal list-inside space-y-2 text-gray-300">
            <li>Conecte o pen drive a uma porta USB da sua TV Box.</li>
            <li>Navegue até “My Apps” e em seguida “Explore”.</li>
            <li>Vá até a opção “USB”.</li>
            <li>Selecione o arquivo APK e escolha “Instalar”.</li>
            <li>Aguarde até que a instalação seja concluída.</li>
            <li>Após a instalação, clique em “Abrir”.</li>
          </ol>

          <p className="text-gray-400 mt-6">
            ✅ Seguindo esses passos, você poderá instalar facilmente
            aplicativos na sua TV Box usando um pen drive.
          </p>
        </section>

        <footer className="text-center text-gray-500 text-sm pt-6 border-t border-purple-900/40">
          © {new Date().getFullYear()} Tutorial de Instalação | Desenvolvido por{" "}
          <span className="text-purple-400 font-medium">Clenilson Brandão</span>
        </footer>
      </div>
    </main>
  );
};

export default Page;
