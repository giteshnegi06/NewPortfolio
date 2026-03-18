import React from 'react'
import DotGrid from './DotGrid';
import StateBlinkComponent from './StateBlinkComponent';
import RotatingText from "./ui/rotating-text"
import { GoDownload } from "react-icons/go";
import { HiArrowLongRight } from "react-icons/hi2";
import { FiGithub } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import Resume from "../PDF/MyResume.pdf"
import { IoIosArrowDown } from "react-icons/io";
import Lanyard from './Lanyard';




export default function Home() {

    return (
        <>
            <div className='h-215 bg-black relative overflow-hidden'>
                <div className='absolute inset-0 z-0'>
                    <DotGrid />
                </div>
                <div className='max-w-7xl w-screen mx-auto h-full z-10 relative flex-col items-center px-4 lg:px-10 py-16'>
                    <div className='flex items-center'>
                        <div className='text-white max-w-2xl '>
                            <div className='flex  gap-3  justify-center border items-center rounded-3xl w-55 text-center h-10 border-[#f68b43] '>
                                <StateBlinkComponent />
                                <p className=' text-[#75758a] flex text-center text-sm'>Open to new opportunities</p>
                            </div>
                            <h1 className=' leading-1 mt-10'>
                                <span className='block text-3xl text-[#75758a] font-serif mb-5'>Hello, I'm</span>
                                <span className='block text-8xl font-serif'>Gitesh</span>
                                <span className='block text-8xl bg-linear-to-r from-[#f68b43] via-[#bf72a2] to-[#a164d6] bg-clip-text text-transparent font-serif'>Kumar</span>
                            </h1>
                            <h2 className=''>
                                <RotatingText
                                    text={["Web Designer", "Frontend Engineer", "UI/UX Enthusiast", "MERN Stack Expert", "Freelancer"]}
                                    duration={2500}
                                    y={40}
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                    className="bg-linear-to-r from-[#8152c8] via-[#a680ca] to-[#be69cd] bg-clip-text text-transparent text-2xl font-sans"
                                />
                            </h2>
                            <p className='text-balance font-serif text-xl mt-8 mb-10 text-[#75758a]'>
                                BCA Graduate & MERN Stack Developer crafting high-performance, visually stunning web experiences. I turn complex problems into elegant digital solutions.
                            </p>
                            <div className='flex gap-5 mb-10'>
                                <a href="/" className='group px-5 md:px-7 py-3.5 rounded-xl bg-[#ff811a] text-black font-semibold text-sm hover:shadow-[0_0_40px_hsla(27,100%,55%,0.4)] transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2'>View Projects
                                    <span className='group-hover:translate-x-1 transition-transform'>
                                        <HiArrowLongRight size={20} />
                                    </span>
                                </a>
                                <a href={Resume}
                                    download="Gitesh_Kumar_Resume.pdf"
                                    className='text-sm py-3.5 px-5 md:px-7 bg-transparent rounded-2xl text-white border border-[#1b1b27] flex text-center items-center gap-2 font-semibold hover:border-[#ff811a]/40 hover:bg-[#ff811a]/5 transition-all duration-300 hover:-translate-y-0.5'>
                                    <GoDownload size={20} /> Download CV</a>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <a href="/" className='bg-[#171721] border border-[#1b1b27] h-10 w-10 rounded-xl flex justify-center items-center'><FiGithub color='#75758a' /></a>
                                <a href="/" className='bg-[#171721] border border-[#1b1b27] h-10 w-10 rounded-xl flex justify-center items-center'><LuLinkedin color='#75758a' /></a>
                                <a href="/" className='bg-[#171721] border border-[#1b1b27] h-10 w-10 rounded-xl flex justify-center items-center'><MdOutlineMailOutline color='#75758a' /></a>
                                <div class="h-px w-10 bg-[#1b1b27] mx-1" bis_skin_checked="1"></div>
                                <p className='text-[#75758a] font-serif text-sm'>Find me online</p>
                            </div>
                        </div>
                        <div className="App">
                            <Lanyard
                                position={[0, 0, 20]}
                                gravity={[0, -40, 0]}
                            />
                        </div>
                    </div>
                    <div className='hidden mt-20 lg:flex justify-center items-center text-white animate-bounce'>
                        <a href="/" className='flex flex-col items-center hover:text-[#ff811a] transition-all duration-300'>
                            <span className='flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group tracking-widest'>SCROLL</span>
                            <span className="lucide lucide-arrow-down group-hover:translate-y-1 transition-transform"><IoIosArrowDown size={20} /></span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}