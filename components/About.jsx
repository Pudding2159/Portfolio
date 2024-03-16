'use client'
import React from 'react'
import '@styles/Decoration.css';
import '@styles/Fonts.css';
import '@styles/Gears.css'
import { Reveal } from '@components/Reveal';


const About = () => {
    return (
        <div>
            <div className="w-full md:h-full p-2 flex items-center xs:py-20 md:py-48 z-[10] md:pt-[400px]" >
                <div className="max-w-[1240px] m-auto md:grid grid-cols-4 gap-8 z-[10]" >

                        <div className="flex text-center col-span-2 col-start-2 xs:pb-10 md:pd-0" >
                            <p className='uppercase md:text-7xl xs:text-6xl tracking-widest text-[#7C90A1] md:whitespace-nowrap font-face-my69 '>◖ABOUT ME.◗</p>
                            <div className="flex w-auto justify-center h-auto">
                            </div>
                        </div>


                        <div className='flex col-span-2 col-start-1 w-auto h-auto m-auto shadow-xl shadow-gray-900 rounded-xl  items-center justify-center p-6 pt-8 hover:scale-105 ease-in duration-300'>
                            <img className=' rounded-xl' src="/images/My_Image.jpg" alt='/' />
                        </div>


                        <div className="flex flex-col pt-20 col-span-2 col-start-3 w-auto h-auto  items-center text-left">
                            <p className="xs:text-4xl sm:text-4xl md:text-5xl text-[#8C806C] mt-4 font-face-lb">
                                I'm Mykyta, a programmer specializing in Intelligent Systems at the Technical University of Košice.
                                I excel in languages like C#, Python, and JavaScript, with a strong focus on game development using Unity.
                            </p>
                        </div>

                </div>
            </div>
        </div>
    )
}

export default About