import { Inter } from "next/font/google";
import "../globals.css";
import HeaderDashBoard from "../components/HeaderDashBoard";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Klenilson Rox desenvolvedor web",
  description: "KlenoDev desenvolvedor fullstack, klenilson rox clenilson brandao costa, klenilson brandão costa, clenilson brandão costa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
    <meta name="google-site-verification" content="w1_83JbvqVcyUOJ6m8ALp55C7VuhgMuDfH80DnHvy2s" />
        <link rel="icon" href="./images/favicon.png" />
      <body className={`${inter.className} bg-[#F7F0FF] flex `}>
      <HeaderDashBoard />
      {children}
        </body>
    </html>
  );
}
