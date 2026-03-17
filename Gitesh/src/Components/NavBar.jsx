import React from 'react'
import { CgMenuLeft } from "react-icons/cg";

export default function NavBar() {

    const navMenu = [
        { name: 'Home', link: '/' },
        { name: 'About', link: '/about' },
        { name: 'Skills', link: '/skills' },
        { name: 'Projects', link: '/projects' },
        { name: 'Contact', link: '/contact' },
    ]
    return (
        <>
            <header className='flex justify-center bg-black text-white'>
                <nav className='flex justify-between items-center p-4 w-screen max-w-7xl h-18 px-10 py-4 mx-auto'>
                    <div className='flex items-center gap-4'>
                        <img src="https://res.cloudinary.com/dh52la71p/image/upload/v1773765844/Gemini_Generated_Image_ze044kze044kze04-Photoroom_fq7z3f.png" alt="Gitesh"
                            className='w-10 h-10 rounded-full bg-linear-to-r from-[#f68b43] via-[#bf72a2] to-[#a164d6]' />
                        <h1 className='text-2xl font-smithen tracking-wide'>
                            Gitesh <span className="bg-linear-to-r from-[#f68b43] via-[#bf72a2] to-[#a164d6] bg-clip-text text-transparent text-2xl font-smithen tracking-wide">Kumar</span>
                        </h1></div>
                    <ul className='hidden lg:flex justify-between items-center w-108 text-sm text-[#5f5f70] font-bold '>
                        {navMenu.map((v, i) => (
                            <li key={i}><a href={v.link} className=' hover:text-white duration-300'>{v.name}</a></li>
                        ))}
                        <button className='bg-[#f68b43] hover:bg-[#e07a3a] duration-400 shadow hover:shadow-2xl  shadow-[#f68b43] text-white font-bold py-2 px-4 rounded-2xl'>
                            Hire Me
                        </button>
                    </ul>

                    <div className='lg:hidden'>
                        <CgMenuLeft size={28} />
                    </div>
                </nav>
            </header>
        </>
    )
}
