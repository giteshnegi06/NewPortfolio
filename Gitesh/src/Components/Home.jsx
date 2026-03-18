import React from 'react'
import DotGrid from './DotGrid';
import StateBlinkComponent from './StateBlinkComponent';
import RotatingText from "./ui/rotating-text"

export default function Home() {

    return (
        <>
            <div className='h-210 bg-black relative overflow-hidden'>
                {/* Background DotGrid */}
                <div className='absolute inset-0 z-0'>
                    <DotGrid />
                </div>

                {/* Content */}
                <div className='max-w-7xl w-screen mx-auto h-full relative z-10 flex items-center px-4 lg:px-10'>
                    <div className='text-white max-w-4xl '>
                        <div className='flex  gap-3  justify-center border items-center rounded-3xl w-55 text-center h-10 border-[#f68b43] '>
                            <StateBlinkComponent />
                            <p className=' text-gray-400 flex text-center text-sm'>Open to new opportunities</p>
                        </div>
                        <h1 className=' leading-1 mt-20'>
                            <span className='block text-3xl text-gray-400 font-serif mb-5'>Hello, I'm</span>
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
                    </div>
                </div>
            </div>
        </>
    )
}