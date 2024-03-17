import React from 'react'
import Image from 'next/image'
import '@styles/Gears.css'
import '@styles/Fonts.css';
import { Reveal } from '@components/Reveal';
import "@styles/animate_text.css"

const Skills = () => {
    return (

        <div className="w-full h-full md:p-2 pt-24">
            <div className="flex flex-row items-center justify-center w-full h-auto gap-20">
                <div className="pt-3 flex felx-row gap-12 ">
                    <div className="hidden md:flex">
                        <div>
                            <div className="gear"></div>
                            <div className="gear2"></div>
                        </div>
                    </div>
                    <p className="pt-6 font-face-my69 xs:text-5xl md:text-7xl tracking-widest uppercase text-[#7C90A1]  xs:pb-8 md:pd-0">
                        MY SKILLS.
                    </p>
                </div>
            </div>
            <Reveal>

                <div className="pb-20">
                    <div className="flex w-full border-2 rounded-lg border-[#7C90A1]"></div>
                    <div className="flex w-full h-auto flex-row justify-center">


                        <div className="max-w-[1240px] w-full m-auto md:grid grid-cols-5 md:justify-between xs:relative text-left md:p-5" >

                            <div className='flex'>
                                <p className='font-face-my69 text-4xl tracking-widest uppercase text-[#7C90A1] xs:p-8 md:p-0 md:pt-10'>
                                    Web Developing
                                </p>
                            </div>

                            <div className='flex flex-col gap-4 font-face-my69 text-4xl tracking-widest uppercase text-[#7C90A1] md:col-start-3 xs:pl-10 md:pt-10'>
                                <div className="pb-5 z-10">Using Technology</div>
                                <div className="z-10">React</div>
                                <div className="z-10">Next.js</div>
                                <div className="z-10">Tailwind.CSS</div>
                                <div className="absolute bottom-0 top-1/2 left-0 transform translate-y-1/2 z-1 md:hidden">
                                    <p className=" tracking-widest font-face-my69 text-[200px] font-[900] text-[#8c806c4f]">.01</p>
                                </div>
                            </div>

                            {/* <div className="hidden md:flex flex-row justify-start items-start col-start-5">
                                <p className="font-face-my69 text-[200px] font-[900] text-[#8c806c69]">.01</p>
                            </div> */}

                            <div className="hidden md:flex flex-row justify-start items-start col-start-5 glitch-wrapper p-2">
                                <div className="font-face-my69 uppercase glitch" data-text=".01">
                                    <p className='hidden md:flex'>.01</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </Reveal>



            <Reveal>

                <div className="pb-20">
                    <div className="flex w-full border-2 rounded-lg border-[#7C90A1]"></div>
                    <div className="flex w-full h-auto flex-row justify-center">


                        <div className="max-w-[1240px] w-full m-auto md:grid grid-cols-5 md:justify-between xs:relative text-left md:p-5" >

                            <div className='flex'>
                                <p className='font-face-my69 text-4xl tracking-widest uppercase text-[#7C90A1] xs:p-8 md:p-0 md:pt-10'>
                                    App Developing
                                </p>
                            </div>

                            <div className='flex flex-col gap-4 font-face-my69 text-4xl tracking-widest uppercase text-[#7C90A1] md:col-start-3 xs:pl-10 md:pt-10'>
                                <div className="pb-5 z-10">Using Technology</div>
                                <div className="z-10">Android Studio</div>
                                <div className="z-10">Xamarin</div>
                                <div className="z-10">Unity</div>
                                <div className="absolute bottom-0 top-1/2 left-0 transform translate-y-1/2 z-1 md:hidden">
                                    <p className=" tracking-widest font-face-my69 text-[200px] font-[900] text-[#8c806c4f]">.02</p>
                                </div>
                            </div>

                            {/* <div className="hidden md:flex flex-row justify-start items-start col-start-5">
                                <p className="font-face-my69 text-[200px] font-[900] text-[#8c806c69]">.01</p>
                            </div> */}

                            <div className="hidden md:flex flex-row justify-start items-start col-start-5 glitch-wrapper p-2">
                                <div className="font-face-my69 uppercase glitch" data-text=".02">
                                    <p className='hidden md:flex'>.02</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </Reveal>

            <Reveal>

                <div className="pb-20">
                    <div className="flex w-full border-2 rounded-lg border-[#7C90A1]"></div>
                    <div className="flex w-full h-auto flex-row justify-center">


                        <div className="max-w-[1240px] w-full m-auto md:grid grid-cols-5 md:justify-between xs:relative text-left md:p-5" >

                            <div className='flex'>
                                <p className='font-face-my69 text-4xl tracking-widest uppercase text-[#7C90A1] xs:p-8 md:p-0 md:pt-10'>
                                    AI Model Development
                                </p>
                            </div>

                            <div className='flex flex-col gap-4 font-face-my69 text-4xl tracking-widest uppercase text-[#7C90A1] md:col-start-3 xs:pl-10 md:p-0 md:pt-10'>
                                <div className="pb-5 z-10">Using Technology</div>
                                <div className="z-10">Pytorch</div>
                                <div className="z-10">TensorFlow</div>
                                <div className="z-10">Keras</div>
                                <div className="absolute bottom-0 top-1/2 left-0 transform translate-y-1/2 z-1 md:hidden">
                                    <p className=" tracking-widest font-face-my69 text-[200px] font-[900] text-[#8c806c4f]">.03</p>
                                </div>
                            </div>

                            {/* <div className="hidden md:flex flex-row justify-start items-start col-start-5">
                                <p className="font-face-my69 text-[200px] font-[900] text-[#8c806c4f]">.03</p>
                            </div> */}

                            <div className="hidden md:flex flex-row justify-start items-start col-start-5 glitch-wrapper p-2">
                                <div className="font-face-my69 uppercase glitch" data-text=".03">
                                    <p className='hidden md:flex'>.03</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </Reveal>









        </div>
    )
}

export default Skills