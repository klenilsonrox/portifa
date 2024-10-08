import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "KlenoDev desenvolvedor web",
  description: "KlenoDev desenvolvedor fullstack",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
        <link rel="icon" href="./images/favicon.png" />
      <body className={`${inter.className}`}>
      {children}
        </body>
    </html>
  );
}
