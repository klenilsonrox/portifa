import { Inter } from "next/font/google";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Feliz aniversário meu amor ❤️",
  description: "Um presente feito com amor 💖",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
    <meta name="google-site-verification" content="w1_83JbvqVcyUOJ6m8ALp55C7VuhgMuDfH80DnHvy2s" />
     
      <body className={`${inter.className}`}>
      {children}
        </body>
    </html>
  );
}
