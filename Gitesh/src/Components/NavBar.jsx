import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CgMenuLeft } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-scroll";

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const navMenu = [
        { name: "Home", link: "/" },
        { name: "About", link: "Section1" },
        { name: "Skills", link: "Section2" },
        { name: "Projects", link: "Section3" },
        { name: "Contact", link: "Section4" },
    ];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const linkStyle = ({ isActive }) =>
        isActive
            ? "text-white"
            : "text-[#5f5f70] hover:text-white";

    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? "backdrop-blur-md bg-black/40 border-b border-white/10"
                : "bg-transparent"
                }`}
        >
            <nav className="flex justify-between items-center p-4 max-w-7xl mx-auto font-Syne">

                {/* Logo */}
                <div className='flex items-center gap-2'>
                    <img src="https://res.cloudinary.com/dh52la71p/image/upload/v1773765844/Gemini_Generated_Image_ze044kze044kze04-Photoroom_fq7z3f.png" alt="Gitesh"
                        className='w-8 h-8 rounded-full bg-linear-to-r from-[#f68b43] via-[#bf72a2] to-[#a164d6]' />
                    <h1 className='text-xl tracking-wide text-white font-bold'>
                        Gitesh <span className="bg-linear-to-r from-[#f68b43] via-[#bf72a2] to-[#a164d6] bg-clip-text text-transparent tracking-wide">Kumar</span>
                    </h1>
                </div>

                {/* Desktop Menu */}
                <ul className='hidden lg:flex justify-between items-center w-108 text-sm text-[#5f5f70] font-Outfit '>
                    {navMenu.map((v, i) => (
                        <li key={i}>
                            <Link
                                to={v.link}
                                smooth={true}
                                duration={500}
                                offset={5}
                                spy={true}
                                activeClass="text-white"
                                className='relative hover:text-white duration-300 group'
                            >
                                {v.name}
                                <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-[#f68b43] via-[#bf72a2] to-[#a164d6] group-hover:w-full transition-all duration-300 ease-in-out '></span>
                            </Link>
                        </li>))}
                    <button className='bg-[#ff811a] text-black  text-sm hover:shadow-[0_0_40px_hsla(27,100%,55%,0.4)] transition-all duration-300 hover:-translate-y-0.5 py-2 px-4 rounded-2xl'
                        onClick={() =>
                            window.open(
                                "https://wa.me/918219569378?text=Hi%20I%20am%20interested%20in%20your%20services",
                                "_blank"
                            )
                        }
                    >
                        Hire Me
                    </button>
                </ul>

                {/* Mobile Button */}
                <button className="lg:hidden text-white text-2xl" onClick={toggleMenu}>
                    {isMenuOpen ? <RxCross2 /> : <CgMenuLeft />}
                </button>
            </nav>

            {/* Mobile Menu with Animation */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="lg:hidden bg-black/70 backdrop-blur-md px-6 py-6 space-y-4 items-center text-center  rounded-xl absolute top-16 left-4 right-4 z-40"
                    >
                        {navMenu.map((item, i) => (
                            <Link
                                key={i}
                                to={item.link}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                className="block text-gray-300 hover:text-orange-400 text-lg "
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}

                        <button
                            className="w-full bg-orange-500 text-black py-2 rounded-xl"
                            onClick={() =>
                                window.open(
                                    "https://wa.me/918219569378?text=Hi%20I%20am%20interested%20in%20your%20services",
                                    "_blank"
                                )
                            }
                        >
                            Hire Me
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}