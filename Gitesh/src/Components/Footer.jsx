import React from 'react'
import { FiGithub } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from "react-scroll";
export default function Footer() {
    const navMenu = [
        { name: "Home", link: "/" },
        { name: "About", link: "Section1" },
        { name: "Skills", link: "Section2" },
        { name: "Projects", link: "Section3" },
        { name: "Contact", link: "Section4" },
    ];

    const socialIcon = [
        { Icon: <FiGithub />, href: "https://github.com/giteshnegi06" },
        { Icon: <LuLinkedin />, href: "https://www.linkedin.com/in/gitesh-kumar-83772a359" },
        { Icon: <MdOutlineMailOutline />, href: "mailto:negigitesh@gmail.com" },
    ]
    return (
        <footer className=' bg-[#08080c] py-10'>
            <div className='max-w-7xl px-10 m-auto'>
                <div className='flex items-center justify-between '>
                    <div className='flex items-center gap-4 '>
                        <img src="https://res.cloudinary.com/dh52la71p/image/upload/v1773765844/Gemini_Generated_Image_ze044kze044kze04-Photoroom_fq7z3f.png" alt="Gitesh"
                            className='w-10 h-10 rounded-full bg-linear-to-r from-[#f68b43] via-[#bf72a2] to-[#a164d6]' />
                        <h1 className='text-2xl font-serif tracking-wide text-white'>
                            Gitesh <span className="bg-linear-to-r from-[#f68b43] via-[#bf72a2] to-[#a164d6] bg-clip-text text-transparent text-2xl tracking-wide">Kumar</span>
                        </h1>
                    </div>
                    <ul className='hidden lg:flex justify-between items-center w-80 text-xs text-[#5f5f70] font-bold '>
                        {navMenu.map((v, i) => (
                            <li key={i}>
                                <Link
                                    to={v.link}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    spy={true}
                                    activeClass="text-white"
                                    className='relative hover:text-[#f68b43] duration-300 group'
                                >
                                    {v.name}
                                    <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-[#f68b43] via-[#bf72a2] to-[#a164d6] group-hover:w-full transition-all duration-300 ease-in-out '></span>
                                </Link>
                            </li>))}
                    </ul>
                    <div className="flex gap-3 items-center">
                        {socialIcon.map((v, i) => (

                            <a key={i} href={v.href} target="_blank" rel="noopener noreferrer" className="group w-10 h-10 rounded-xl bg-[#171721] border border-[#75758a]/5 flex items-center justify-center 
                                    text-[#75758a] hover:text-[#ff811a] hover:border-[#ff811a]/30 transition-all duration-300 hover:-translate-y-0.5">
                                {v.Icon}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="my-6 h-px w-full bg-[linear-gradient(90deg,transparent,rgba(246,139,67,0.5),rgba(191,114,162,0.5),rgba(161,100,214,0.5),transparent)]"></div>
                <p className=' text-center text-xs text-[#75758a] font-sans'>
                    &copy;
                    2026 
                    <span className='text-white font-medium'> Gitesh Kumar</span>
                    . Designed & Built with ❤️ using React & Tailwind CSS.
                </p>
            </div>
        </footer>
    )
}
