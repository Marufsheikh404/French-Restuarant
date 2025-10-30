import { FaFacebookF } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";
import { AiOutlineYoutube } from "react-icons/ai";
const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-200 mt-5">
            {/* Top Section */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 p-6 lg:p-10">
                {/* Contact */}
                <aside className="flex-1 bg-gray-800 p-6  flex flex-col gap-3 shadow-lg">
                    <h1 className="text-2xl font-bold mb-2">CONTACT US</h1>
                    <p className="text-sm font-medium">123 ABS Street, Uni 21, Bangladesh</p>
                    <p className="text-sm font-medium">+880123456789</p>
                    <p className="text-sm font-medium">Mon - Fri: 08:00 - 22:00</p>
                    <p className="text-sm font-medium">Sat - Sun: 10:00 - 23:00</p>
                </aside>

                {/* Social */}
                <nav className="flex-1 bg-gray-700 p-6  flex flex-col gap-4 shadow-lg items-start">
                    <h1 className="text-2xl font-bold">Social</h1>
                    <p className="text-sm font-medium">Join Us on Social Media</p>
                    <div className="flex gap-4 mt-2">
                        {/* Twitter */}
                        <a className="hover:text-blue-400 transition-colors">
                            <LuTwitter />
                        </a>
                        {/* YouTube */}
                        <a className="hover:text-red-500 transition-colors">
                            <AiOutlineYoutube />
                        </a>
                        {/* Facebook */}
                        <a className="hover:text-blue-600 transition-colors">
                           <FaFacebookF />
                        </a>
                    </div>
                </nav>
            </div>

            {/* Bottom Section */}
            <div className="bg-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 p-4 md:p-6 text-sm rounded-t-xl">
                <aside className="flex items-center gap-2">
                    <svg width="36" height="36" viewBox="0 0 24 24" className="fill-current">
                        <path d="M22.672 15.226l-2.432.811..."></path>
                    </svg>
                    <p className="place-items-center">Copyright © {new Date().getFullYear()} - All rights reserved</p>
                </aside>

                <nav className="flex gap-4 mt-2 md:mt-0">
                    <a className="hover:text-blue-400 transition-colors">
                        <LuTwitter />
                    </a>
                    <a className="hover:text-red-500 transition-colors">
                        <AiOutlineYoutube />
                    </a>
                    <a className="hover:text-blue-600 transition-colors">
                            <FaFacebookF />
                    </a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
