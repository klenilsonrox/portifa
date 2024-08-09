import { FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';


function Footer() {
    return (
        <footer className="bg-[#282A2D] text-white py-8">
            <div className="max-w-7xl mx-auto text-center">
                <div className="flex justify-center space-x-4 mb-4">
                    <a href="https://www.linkedin.com/in/clenilson-brandao/" target="_blank" rel="noopener noreferrer" className="text-[#B452FF] text-3xl hover:text-white">
                        <FaLinkedin />
                    </a>
                    <a href="https://www.instagram.com/klenilsonrox" target="_blank" rel="noopener noreferrer" className="text-[#B452FF] text-3xl hover:text-white">
                        <FaInstagram />
                    </a>
                    <a href="https://wa.me/031992311170" target="_blank" rel="noopener noreferrer" className="text-[#B452FF] text-3xl hover:text-white">
                        <FaWhatsapp />
                    </a>
                </div>
                <p className="text-gray-400">© 2024 KlenoDev. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}


export default Footer