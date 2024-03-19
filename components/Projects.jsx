"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProjectItems from 'components/ProjectItems'
import Tello from 'public/images/Tello.jpg'
import Bagging_algoritm from 'public/images/NN.png'
import Unity from 'public/images/Unity.gif'
import "@styles/Fonts.css"

const Projects = () => {
    return (


        <div className="w-full">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <p className="flex justify-center pt-6 font-face-my69 xs:text-5xl md:text-7xl tracking-widest uppercase text-[#3C3935]  xs:pb-8 md:pd-0">
                    MY Project.
                </p>
                <div className="flex w-full border-2 rounded-lg border-[#3C3935]"></div>

                <div className="md:grid grid-cols-12  pt-20 gap-20 gap-y-16">


                    <div className="col-start-1 col-end-8 " >
                        <div>
                            <ProjectItems
                                title_1=''
                                title_2=''
                                backgraundImg={"/images/web_image2.png"}
                                projectUrl='https://github.com/Pudding2159/Drone-Face-Tracking-and-Photo-Classification-with-Tello'
                                height="100%"
                                width="100%"
                            />

                            <div className="flex md:pl-5 py-4 gap-x-4 justify-start">
                                <div className="border text-sm uppercase border-[#000] text-[#303030] py-2 px-4 rounded-full inline-block">
                                    web developing
                                </div>

                                <div className="border text-sm uppercase border-[#000] text-[#303030] py-2 px-4 rounded-full inline-block">
                                    Next.js
                                </div>

                                <div className="border text-sm uppercase border-[#000] text-[#303030] py-2 px-4 rounded-full inline-block">
                                    2024
                                </div>


                            </div>
                        </div>
                    </div>


                    <div className="col-start-8 col-end-13 py-16 ">
                        <div>
                            <ProjectItems
                                title_1=''
                                title_2=''
                                backgraundImg={"/images/game_image.png"}
                                projectUrl='https://github.com/Pudding2159/Unity-2D-Simple-Mobile-Game'
                                height="100%"
                                width="100%"
                            />
                            <div className="md:pl-5 py-4 flex gap-x-4 justify-start">
                                <div className="border text-sm uppercase border-[#000] text-[#303030] py-2 px-4 rounded-full inline-block">
                                    Game developing
                                </div>

                                <div className="border text-sm uppercase border-[#000] text-[#303030] py-2 px-4 rounded-full inline-block">
                                    Unity
                                </div>

                                <div className="border text-sm uppercase border-[#000] text-[#303030] py-2 px-4 rounded-full inline-block">
                                    2023
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className="col-start-1 col-end-6 py-16 ">

                        <ProjectItems
                            title_1=''
                            title_2=''
                            backgraundImg={"/images/image_web_5.png"}
                            projectUrl='https://github.com/Pudding2159/Bagging-Algorithm-for-Neural-Networks'
                            height="100%"
                            width="100%"
                        />
                        <div className="md:pl-5 py-4 flex gap-x-4 justify-start">
                            <div className="border text-sm uppercase border-[#000] text-[#303030] py-2 px-4 rounded-full inline-block">
                                <p className="md:hidden flex">
                                    AI
                                </p>
                                <p className="hidden md:flex">
                                    AI developing
                                </p>
                            </div>

                            <div className="border text-sm uppercase border-[#000] text-[#303030] py-2 px-4 rounded-full inline-block">
                                Neural Networks
                            </div>

                            <div className="border text-sm uppercase border-[#000] text-[#303030] py-2 px-4 rounded-full inline-block">
                                2022
                            </div>

                        </div>
                    </div>

                    <div className="col-start-6 col-end-13 py-16">

                        <ProjectItems
                            title_1=''
                            title_2=''
                            backgraundImg={"/images/web_image_4.png"}
                            projectUrl='https://github.com/Pudding2159/Bagging-Algorithm-for-Neural-Networks'
                            height="100%"
                            width="100%"
                        />
                        <div className="md:pl-5 py-4 flex gap-x-4 justify-start">
                            <div className="border text-sm uppercase border-[#000] text-[#303030] py-2 px-4 rounded-full inline-block">
                                <p className="md:hidden flex">
                                    AI
                                </p>
                                <p className="hidden md:flex">
                                    AI developing
                                </p>
                            </div>

                            <div className="border text-sm uppercase border-[#000] text-[#303030] py-2 px-4 rounded-full inline-block">
                                Algorithm
                            </div>

                            <div className="border text-sm uppercase border-[#000] text-[#303030] py-2 px-4 rounded-full inline-block">
                                2023
                            </div>

                        </div>
                    </div>





                </div>
            </div>
        </div>
    )
}

export default Projects