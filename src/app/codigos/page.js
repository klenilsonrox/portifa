"use client"
import React, { useState } from "react";
import Link from "next/link";
import { FaDownload, FaMobileAlt, FaWindows, FaApple, FaCopy, FaCheck } from "react-icons/fa";

const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      onClick={handleCopy}
      className="ml-2 text-blueviolet hover:text-white transition-colors"
      title="Copiar"
    >
      {copied ? <FaCheck className="text-green-400" /> : <FaCopy />}
    </button>
  );
};

const page = () => {
  const apps = [
    {
      title: "📥 WPLAY P2P",
      downloader: "6968358",
      playStore: "44892",
    },
    {
      title: "📥 IPTV Purple com CDN P2P",
      downloader: "8339451",
      playStore: "54379",
    },
    {
      title: "📥 IPTV XCloud Wplay",
      downloader: "3948507",
      playStore: "17695",
    },
  ];

  const downloads = [
    {
      title: "📱 Xcloud Mobile",
      links: [
        { label: "Link Direto 1", url: "https://tinyurl.com/4xf59uf5" },
        { label: "Link Direto 2", url: "https://cutt.ly/ArxTzHWQ" },
      ],
      downloader: "2553300",
    },
    {
      title: "📱 Easy Player",
      links: [
        { label: "Link Direto 1", url: "https://tinyurl.com/ye2x7auc" },
        { label: "Link Direto 2", url: "https://cutt.ly/qrxTxiGa" },
      ],
      downloader: "1281092",
      playStore: "41451",
    },
    {
      title: "📱 Wapp Android Mobile",
      links: [
        { label: "Link Direto", url: "https://tinyurl.com/4shxz68s" },
      ],
      downloader: "8832511",
      playStore: "76595",
    },
  ];

  const desktop = [
    {
      title: "💻 Wplay Windows 1",
      links: [
        { label: "Link direto 1", url: "https://tinyurl.com/427jujt9" },
        { label: "Link direto 2", url: "https://cutt.ly/LrxTWzdu" },
      ],
    },
    {
      title: "💻 Wapp Windows 2",
      links: [
        { label: "Link direto 1", url: "https://tinyurl.com/34nsp7ec" },
        { label: "Link direto 2", url: "https://cutt.ly/8rxTWP1m" },
      ],
    },
    {
      title: "🍎 IPTV (MacOS)",
      links: [
        { label: "Link direto 1", url: "https://tinyurl.com/k5ssv8px" },
        { label: "Link direto 2", url: "https://cutt.ly/GrxTWNji" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0D0E0F] text-white py-10 px-4 md:px-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-blueviolet to-white bg-clip-text text-transparent">
        📦 Códigos e Links IPTV Atualizados
      </h1>

      {/* Códigos principais */}
      <div className="grid md:grid-cols-3 gap-6">
        {apps.map((app, i) => (
          <div
            key={i}
            className="bg-[#121212] p-5 rounded-2xl shadow-lg border border-blueviolet/40 hover:scale-[1.02] transition-transform"
          >
            <h2 className="text-xl font-semibold mb-3 flex items-center gap-2 text-blueviolet">
              <FaDownload /> {app.title}
            </h2>

            <div className="flex items-center">
              <p>📥 Downloader: <span className="text-blueviolet font-semibold">{app.downloader}</span></p>
              <CopyButton text={app.downloader} />
            </div>

            <div className="flex items-center mt-1">
              <p>🛒 Play Store: <span className="text-blueviolet font-semibold">{app.playStore}</span></p>
              <CopyButton text={app.playStore} />
            </div>
          </div>
        ))}
      </div>

      {/* Apps Mobile */}
      <h2 className="text-2xl font-bold mt-12 mb-6 flex items-center gap-2 text-blueviolet">
        <FaMobileAlt /> Versões Mobile
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {downloads.map((item, i) => (
          <div
            key={i}
            className="bg-[#121212] p-5 rounded-2xl shadow-lg border border-blueviolet/40"
          >
            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
            {item.links.map((link, j) => (
              <div key={j} className="flex items-center">
                <p>
                  🔗 {link.label}:{" "}
                  <Link
                    href={link.url}
                    target="_blank"
                    className="text-blueviolet hover:underline"
                  >
                    {link.url}
                  </Link>
                </p>
                <CopyButton text={link.url} />
              </div>
            ))}
            <div className="flex items-center mt-2">
              <p>📥 Downloader: <span className="text-blueviolet font-semibold">{item.downloader}</span></p>
              <CopyButton text={item.downloader} />
            </div>
            {item.playStore && (
              <div className="flex items-center mt-1">
                <p>🛒 Play Store: <span className="text-blueviolet font-semibold">{item.playStore}</span></p>
                <CopyButton text={item.playStore} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Versões Desktop */}
      <h2 className="text-2xl font-bold mt-12 mb-6 flex items-center gap-2 text-blueviolet">
        <FaWindows /> &nbsp; Versões Desktop / <FaApple className="inline" /> MacOS
      </h2>
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {desktop.map((item, i) => (
          <div
            key={i}
            className="bg-[#121212] p-5 rounded-2xl shadow-lg border border-blueviolet/40"
          >
            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
            {item.links.map((link, j) => (
              <div key={j} className="flex items-center">
                <p>
                  🔗 {link.label}:{" "}
                  <Link
                    href={link.url}
                    target="_blank"
                    className="text-blueviolet hover:underline"
                  >
                    {link.url}
                  </Link>
                </p>
                <CopyButton text={link.url} />
              </div>
            ))}
          </div>
        ))}
      </div>

      <footer className="text-center text-sm text-gray-400 mt-8 border-t border-blueviolet/30 pt-6">
        © {new Date().getFullYear()} - Desenvolvido por <span className="text-blueviolet font-semibold">Klenilson Rox</span>
      </footer>
    </div>
  );
};

export default page;
