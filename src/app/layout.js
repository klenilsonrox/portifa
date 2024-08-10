import { Inter } from "next/font/google";
import "./globals.css";
import About from "./components/About";
import Header from "./components/Header";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "KlenoDev desenvolvedor web",
  description: "KlenoDev desenvolvedor fullstack",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className}`}>
        <div className="p-4">
          <Header />
        <div className="max-w-3xl mx-auto  mt-4 flex gap-4 flex-col items-start lg:flex-row">
          <About />
        <div className="w-full">
        {children}
        </div>
        </div>
        </div>
        </body>
    </html>
  );
}
