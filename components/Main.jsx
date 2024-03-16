'use client'
import React from 'react'
// import '@styles/Main.css';
import '@styles/Fonts.css';
import '@styles/Light_style.css'


import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill, BsHouseAdd } from 'react-icons/bs'


const Main = () => {
    return (
        <div className="w-full h-screen text-center">
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center' >

                <div>

                    <p className='uppercase text-sm tracking-widest text-[#B7B7B7] text-center p-3' >Let's build together</p>

                    <h1 className='uppercase text-5xl text-[#B1BDC9] text-center sm:hidden font-face-my69'>
                        HI THERE, I'M <span className="text-[#d2d2d2] key-tag font-face-gm">MYKYTA</span>
                    </h1>

                    <h1 className='uppercase py-2 text-9xl text-[#B1BDC9] hidden md:block font-face-my69'>
                        Hi, there I'm <span className="text-[#B7B7B7] key-tag whitespace-nowrap  ">Mykyta Makhorin</span>
                    </h1>

                    <h1 className='uppercase py-2 xs:text-lg sm:text-xs md:text-xl tracking-widest text-[#B1BDC9]'>
                        Student of <span className="text-[#B7B7B7] "> The Technical University of Košice </span>
                        and a <span className="text-[#B7B7B7]"> Junior</span> programmer.
                    </h1>

                    <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                        <div className='flex items-center justify-between my-4 w-full sm:w-[100%]'>


                            <a href="https://www.linkedin.com/in/mykyta-makhorin-3991a8204/" target="_blank" rel="noopener noreferrer">
                                <div
                                    className='rounded-full shadow-lg shadow-gray-400 pt-6 cursor-pointer hover:scale-105 ease-in duration-300 w-12 h-12 flex items-center justify-center'
                                    style={{ backgroundColor: 'white' }}
                                > <FaLinkedinIn style={{ position: 'relative', top: '-10px', left: '0px' }} />
                                </div>
                            </a>

                            <a href="https://github.com/Pudding2159" target="_blank" rel="noopener noreferrer">
                                <div
                                    className='rounded-full shadow-lg shadow-gray-400 pt-6 cursor-pointer hover:scale-105 ease-in duration-300 w-12 h-12 flex items-center justify-center'
                                    style={{ backgroundColor: 'white' }}
                                > <FaGithub style={{ position: 'relative', top: '-10px', left: '0px' }} />
                                </div>
                            </a>


                            <a href="mailto:nikitos2159@gmail.com" target="_blank" rel="noopener noreferrer">
                                <div
                                    className='rounded-full shadow-lg shadow-gray-400 pt-6 cursor-pointer hover:scale-105 ease-in duration-300 w-12 h-12 flex items-center justify-center'
                                    style={{ backgroundColor: 'white' }}
                                > <AiOutlineMail style={{ position: 'relative', top: '-10px', left: '0px' }} />
                                </div>
                            </a>


                            <a href="https://web-portfolio-pearl-seven.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <div
                                    className='rounded-full shadow-lg shadow-gray-400 pt-6 cursor-pointer hover:scale-105 ease-in duration-300 w-12 h-12 flex items-center justify-center'
                                    style={{ backgroundColor: 'white' }}
                                > <BsFillPersonLinesFill style={{ position: 'relative', top: '-10px', left: '0px' }} />
                                </div>
                            </a>

                        </div>


                    </div>

                </div>

            </div>
        </div>
    )
}

export default Main