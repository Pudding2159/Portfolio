'use client'
import React from 'react'
import '@styles/Decoration.css';

const About = () => {
    return (
        // ▟▛
        <div>

            <div className="w-full md:h-screen p-2 flex items-center py-16 z-[10]" >
                <div className="max-w-[1240px] m-auto md:grid grid-cols-4 gap-8 z-[10]" >

                    <div className="text-center col-span-2 col-start-2" > 
                        <p className='uppercase md:text-7xl xs:text-4xl tracking-widest text-[#5651e5] md:whitespace-nowrap'> ◖ABOUT ME.◗ </p>
                    </div>

                    <div className='col-span-2 col-start-1 w-auto h-auto m-auto shadow-xl shadow-gray-900 rounded-xl flex items-center justify-center p-6 pt-8 hover:scale-105 ease-in duration-300'>
                        <img className=' rounded-xl' src="/images/My_Image.jpg" alt='/' />
                    </div>


                    <div className="pt-20 col-span-2 col-start-3 w-auto h-auto flex items-center text-left">
                        <p className="text-5xl text-[#cedeff] mt-4">
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