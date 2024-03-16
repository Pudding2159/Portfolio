import React from 'react'
import Image from 'next/image'
import '@styles/Gears.css'
import '@styles/Fonts.css';
import { Reveal } from '@components/Reveal';

const Skills = () => {
    return (

        <div className="w-full h-full p-2">
            <div className="flex flex-row items-center justify-center w-full h-auto gap-20">
                <div className="pt-3 flex felx-row gap-12 ">
                    <div className="hidden md:flex">
                        <div>
                            <div className="gear"></div>
                            <div className="gear2"></div>
                        </div>
                    </div>
                    <p className="pt-6 font-face-my69 text-7xl tracking-widest uppercase text-[#5651e3]  xs:pb-8 md:pd-0">
                        MY SKILLS.
                    </p>
                </div>
            </div>
            <Reveal>

                <div className="pb-20">
                    <div class="flex w-full border-2 rounded-lg border-[#5651e3]"></div>
                    <div className="flex w-full h-auto flex-row justify-center">


                        <div className="max-w-[1240px] w-full m-auto md:grid grid-cols-5 md:justify-between xs:relative text-left md:p-5" >

                            <div className='flex'>
                                <p className='font-face-my69 text-4xl tracking-widest uppercase text-[#5651e3] xs:p-8 md:p-0 md:pt-10'>
                                    Web Developing
                                </p>
                            </div>

                            <div class='flex flex-col gap-4 font-face-my69 text-4xl tracking-widest uppercase text-[#333335e3] md:col-start-3 xs:p-10 md:p-0 md:pt-10'>
                                <div className="pb-5 z-10">Using Technology</div>
                                <div className="z-10">React</div>
                                <div className="z-10">Next.js</div>
                                <div className="z-10">Tailwind.CSS</div>
                                <div className="absolute bottom-0 top-1/2 left-0 transform translate-y-1/2 z-1 md:hidden">
                                    <p class=" tracking-widest font-face-my69 text-[200px] font-[900] text-[#7644ec48]">.01</p>
                                </div>
                            </div>

                            <div class="hidden md:flex flex-row justify-start items-start col-start-5">
                                <p class="font-face-my69 text-[200px] font-[900] text-[#7644ec48]">.01</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>
            <Reveal>

                <div className="pb-20">
                    <div class="flex w-full border-2 rounded-lg border-[#5651e3]"></div>
                    <div className="flex w-full h-auto flex-row justify-center">


                        <div className="max-w-[1240px] w-full m-auto md:grid grid-cols-5 md:justify-between xs:relative text-left md:p-5" >

                            <div className='flex'>
                                <p className='font-face-my69 text-4xl tracking-widest uppercase text-[#5651e3] xs:p-8 md:p-0 md:pt-10'>
                                    App Developing
                                </p>
                            </div>

                            <div class='flex flex-col gap-4 font-face-my69 text-4xl tracking-widest uppercase text-[#333335e3] md:col-start-3 xs:p-10 md:p-0 md:pt-10'>
                                <div className="pb-5 z-10">Using Technology</div>
                                <div className="z-10">Android Studio</div>
                                <div className="z-10">Xamarin</div>
                                <div className="z-10">Unity</div>
                                <div className="absolute bottom-0 top-1/2 left-0 transform translate-y-1/2 z-1 md:hidden">
                                    <p class=" tracking-widest font-face-my69 text-[200px] font-[900] text-[#7644ec48]">.02</p>
                                </div>
                            </div>

                            <div class="hidden md:flex flex-row justify-start items-start col-start-5">
                                <p class="font-face-my69 text-[200px] font-[900] text-[#7644ec48]">.02</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>

            <Reveal>

                <div className="pb-20">
                    <div class="flex w-full border-2 rounded-lg border-[#5651e3]"></div>
                    <div className="flex w-full h-auto flex-row justify-center">


                        <div className="max-w-[1240px] w-full m-auto md:grid grid-cols-5 md:justify-between xs:relative text-left md:p-5" >

                            <div className='flex'>
                                <p className='font-face-my69 text-4xl tracking-widest uppercase text-[#5651e3] xs:p-8 md:p-0 md:pt-10'>
                                    AI Model Development
                                </p>
                            </div>

                            <div class='flex flex-col gap-4 font-face-my69 text-4xl tracking-widest uppercase text-[#333335e3] md:col-start-3 xs:p-10 md:p-0 md:pt-10'>
                                <div className="pb-5 z-10">Using Technology</div>
                                <div className="z-10">Pytorch</div>
                                <div className="z-10">TensorFlow</div>
                                <div className="z-10">Keras</div>
                                <div className="absolute bottom-0 top-1/2 left-0 transform translate-y-1/2 z-1 md:hidden">
                                    <p class=" tracking-widest font-face-my69 text-[200px] font-[900] text-[#7644ec48]">.03</p>
                                </div>
                            </div>

                            <div class="hidden md:flex flex-row justify-start items-start col-start-5">
                                <p class="font-face-my69 text-[200px] font-[900] text-[#7644ec48]">.03</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>









        </div>
    )
}

export default Skills