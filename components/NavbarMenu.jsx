"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill, BsHouseAdd } from 'react-icons/bs'
import '@styles/Light_style.css'

const NavbarM = () => {
    const [nav, setNav] = useState(false);
    const [showNav, setShowNav] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleNav = () => {
        setNav(!nav);
    };

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
                setShowNav(false);
            } else { // if scroll up show the navbar
                setShowNav(true);
            }

            // remember current page location to use in the next move
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            // cleanup function to remove the listener when the component unmounts
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);

    return (
        <div className={`fixed w-full h-20 shadow-xl z-[100] ${!showNav && 'top-[-100%]'} transition-top duration-300`}>
            <div className='fixed w-full h-20 bg-[#1e3e5ed4] shadow-xl z-[100]'>
                <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>


                    <div className="py-5 w-full">
                        <ul className='hidden md:flex flex-row justify-center gap-32' >
                            <Link href='/'>
                                <h1>
                                    <span className="key-tag font-face-my69 text-xl" >
                                        Home
                                    </span>
                                </h1>
                            </Link>
                            <Link href='/'>
                                <h1>
                                    <span className="key-tag font-face-my69 text-xl" >
                                        Skills
                                    </span>
                                </h1>
                            </Link><Link href='/'>
                                <h1>
                                    <span className="key-tag font-face-my69 text-xl" >
                                        Contact
                                    </span>
                                </h1>
                            </Link><Link href='/'>
                                <h1>
                                    <span className="key-tag font-face-my69 text-xl" >
                                        Project
                                    </span>
                                </h1>
                            </Link>
                        </ul>
                    </div>

                    <div className="flex flex-none md:px-10 xs:px-5">
                        <div onClick={handleNav}>
                            <Image
                                src='/icons/Home_Icon.png'
                                width={47}
                                height={47}
                                alt='Home'
                            />
                        </div>
                    </div>
                </div>


                <div className={nav ? 'fixed left-0 top-0 w-full bg-black/70' : ''} >
                    <div className={nav
                        ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                        : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                    } >

                        <div>
                            <div className="flex w-full items-center justify-between">
                                <Image
                                    src="/icons/Home_Icon.png"
                                    width={150}
                                    height={150}
                                    alt="/"
                                />
                                <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer" >

                                    <AiOutlineClose />
                                </div>
                            </div>

                            <div className="border-b border-gray-300 my-4" >
                                <p className="w-[85%] md:w-[90%] py-4" >Lest build somesing legendery</p>
                            </div>

                        </div >
                        <div>
                            <ul>
                                <Link href='/'>
                                    <li className='py-4 text-sm'>
                                        Home
                                    </li>
                                </Link>
                                <Link href='/'>
                                    <li className='py-4 text-sm'>
                                        Skills
                                    </li>
                                </Link> <Link href='/'>
                                    <li className='py-4 text-sm '>
                                        About me
                                    </li>
                                </Link> <Link href='/'>
                                    <li className='py-4 text-sm'>
                                        Project
                                    </li>
                                </Link>
                            </ul>
                            <div className="pt-40" >

                                <p className="uppercase tracking-widest text-[#5651e5]" >
                                    Let's connect
                                </p>
                                <div className='flex items-center justify-between my-4 w-full sm:w-[40%]'>
                                    <div
                                        className='rounded-full shadow-lg shadow-gray-400 pt-3 cursor-pointer hover:scale-105 ease-in duration-300 w-10 h-10 flex items-center justify-center'
                                    > <FaLinkedinIn style={{ position: 'relative', top: '-4px', left: '-1px' }} />
                                    </div>
                                    <div
                                        className='rounded-full shadow-lg shadow-gray-400 pt-3 cursor-pointer hover:scale-105 ease-in duration-300 w-10 h-10 flex items-center justify-center'
                                    > <FaGithub style={{ position: 'relative', top: '-4px', left: '-1px' }} />
                                    </div>
                                    <div
                                        className='rounded-full shadow-lg shadow-gray-400 pt-3 cursor-pointer hover:scale-105 ease-in duration-300 w-10 h-10 flex items-center justify-center'
                                    > <AiOutlineMail style={{ position: 'relative', top: '-4px', left: '-1px' }} />
                                    </div>
                                    <div
                                        className='rounded-full shadow-lg shadow-gray-400 pt-3 cursor-pointer hover:scale-105 ease-in duration-300 w-10 h-10 flex items-center justify-center'
                                    > <BsFillPersonLinesFill style={{ position: 'relative', top: '-4px', left: '-1px' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </div>
            </div>
        </div>
    );
};

export default NavbarM;



