import React from "react";
import { motion } from 'framer-motion';
import DotGrid from "../Components/DotGrid";
import StateBlinkComponent from "../Components/StateBlinkComponent";
import RotatingText from "../Components/ui/rotating-text";
import { GoDownload } from "react-icons/go";
import { HiArrowLongRight } from "react-icons/hi2";
import { FiGithub } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import Resume from "../PDF/MyResume.pdf";
import { IoIosArrowDown } from "react-icons/io";
import Lanyard from "../Components/Lanyard";

export default function Home() {

    const socialIcon =[
        {Icon:<FiGithub />},
        {Icon:<LuLinkedin />},
        {Icon:<MdOutlineMailOutline />},
    ]
    return (
        <div className="min-h-screen bg-black relative overflow-hidden">

            {/* Background */}
            <div className="absolute inset-0 z-0">
                <DotGrid />
            </div>

            {/* Main Container */}
            <div className="max-w-7xl mx-auto h-fit relative z-10 flex flex-col px-4 lg:px-10  ">

                <div className="flex flex-col lg:flex-row justify-between gap-10 pb-16">

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="text-white md:w-sm lg:w-2xl max-w-2xl z-30 mt-5 pt-24 pb-">

                            {<motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <div className="flex gap-3 justify-center border items-center rounded-3xl w-64 h-10 border-[#f68b43]">
                                    <StateBlinkComponent />
                                    <p className="text-[#75758a] text-sm">
                                        Open to new opportunities
                                    </p>
                                </div>
                            </motion.div>}

                            {/* Heading */}
                            <h1 className="mt-10 leading-tight">
                                <span className="block text-3xl text-[#75758a] font-serif mb-5">
                                    Hello, I'm
                                </span>

                                <span className="block text-6xl md:text-8xl font-serif">
                                    Gitesh
                                </span>

                                <span className="block text-6xl md:text-8xl bg-linear-to-r from-[#f68b43] via-[#bf72a2] to-[#a164d6] bg-clip-text text-transparent font-serif">
                                    Kumar
                                </span>
                            </h1>

                            {/* Rotating Text */}
                            <h2 className="mt-4">
                                <RotatingText
                                    text={[
                                        "Web Designer",
                                        "Frontend Engineer",
                                        "UI/UX Enthusiast",
                                        "MERN Stack Developer",
                                        "Freelancer",
                                    ]}
                                    duration={2500}
                                    y={40}
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                    className="bg-linear-to-r from-[#8152c8] via-[#a680ca] to-[#be69cd] bg-clip-text text-transparent text-2xl font-sans"
                                />
                            </h2>

                            {/* Description */}
                            <p className="text-balance font-serif text-lg md:text-xl mt-8 mb-10 text-[#75758a]">
                                BCA Graduate & MERN Stack Developer crafting high-performance,
                                visually stunning web experiences. I turn complex problems into
                                elegant digital solutions.
                            </p>

                            {/* Buttons */}
                            <div className="flex flex-wrap gap-5 mb-10">

                                <a
                                    href="/"
                                    className="group px-5 md:px-7 py-3.5 rounded-xl bg-[#ff811a] text-black font-semibold text-sm hover:shadow-[0_0_40px_hsla(27,100%,55%,0.4)] transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
                                >
                                    View Projects
                                    <span className="group-hover:translate-x-1 transition-transform">
                                        <HiArrowLongRight size={20} />
                                    </span>
                                </a>

                                <a
                                    href={Resume}
                                    download="Gitesh_Kumar_Resume.pdf"
                                    className="text-sm py-3.5 px-5 md:px-7 bg-transparent rounded-xl text-white border border-[#1b1b27] flex items-center gap-2 font-semibold hover:border-[#ff811a]/40 hover:bg-[#ff811a]/5 transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    <GoDownload size={20} />
                                    Download CV
                                </a>
                            </div>

                            {/* Social Links */}
                            <div className="flex gap-3 items-center">
                                    {socialIcon.map((v, i)=>(

                                <a key={i} className="group w-10 h-10 rounded-xl bg-[#171721] border border-border flex items-center justify-center text-[#75758a] hover:text-[#ff811a] hover:border-[#ff811a]/30 transition-all duration-300 hover:-translate-y-0.5">
                                    {v.Icon}
                                </a>
                                    ))}

                                <div className="h-px w-10 bg-[#1b1b27] mx-1"></div>

                                <p className="text-[#75758a] font-serif text-sm">
                                    Find me online
                                </p>
                            </div>
                        </div>
                    </motion.div>
                    {/* RIGHT SIDE (3D) */}
                    <div className="md:absolute md:right-0 lg:right-0 2xl:-right-20 h-200 md:h-full md:w-95 lg:w-120 xl:w-180 2xl:w-200 top-20">
                        <Lanyard
                            position={[0, 0, 24]}
                            gravity={[0, -40, 0]}
                            fov={14}
                            transparent
                        />
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="hidden lg:flex  justify-center items-center text-white animate-bounce">
                    <a className="flex flex-col items-center hover:text-[#ff811a] transition-all duration-300">
                        <span className="tracking-widest text-sm">SCROLL</span>
                        <IoIosArrowDown size={20} />
                    </a>
                </div>
            </div>
        </div>
    );
}