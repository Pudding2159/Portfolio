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
                <p className="xs:text-5xl md:text-7xl tracking-widest uppercase text-[#5651e5] font-face-my69">
                    MY PROJECT
                </p>

                <div className="md:grid grid-cols-12  pt-20 gap-20 gap-y-32">


                    <div className="col-start-1 col-end-8 " >
                        <div>
                            <ProjectItems
                                title_1='Drone-Face-Tracking'
                                title_2='PyTorch Python'
                                backgraundImg={"/images/web_image2.png"}
                                projectUrl='https://github.com/Pudding2159/Drone-Face-Tracking-and-Photo-Classification-with-Tello'
                                height="100%"
                                width="100%"
                            // top_ = "90%"
                            />

                            <div className="md:pl-5 md:py-4 flex gap-x-4">
                                <div className="border text-sm uppercase border-[#000] text-[#303030] py-2 px-4 rounded-full inline-block">
                                    web developing
                                </div>

                                <div className="border text-sm uppercase border-[#000] text-[#303030] py-2 px-4 rounded-full inline-block">
                                    Front: Next.js, Rect
                                </div>

                                <div className="border text-sm uppercase border-[#000] text-[#303030] py-2 px-4 rounded-full inline-block">
                                    Back: flask, ngrok
                                </div>

                                <div className="border text-sm uppercase border-[#000] text-[#303030] py-2 px-4 rounded-full inline-block">
                                    2023
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-start-8 col-end-13 py-20 ">
                        <div>
                            <ProjectItems
                                title_1=''
                                title_2=''
                                backgraundImg={"/images/game_image.png"}
                                projectUrl='https://github.com/Pudding2159/Unity-2D-Simple-Mobile-Game'
                                height="100%"
                                width="100%"
                            />

                                

                        </div>
                    </div>

                    <div className="col-start-1 col-end-6 py-20 ">

                        <ProjectItems
                            title_1='Texture-Segmentation-Algorithm'
                            title_2=''
                            backgraundImg={"/images/image_web_5.png"}
                            projectUrl='https://github.com/Pudding2159/Bagging-Algorithm-for-Neural-Networks'
                            height="100%"
                            width="100%"
                        />

                    </div>

                    <div className="col-start-6 col-end-13">

                        <ProjectItems
                            title_1='Texture-Segmentation-Algorithm'
                            title_2=''
                            backgraundImg={"/images/web_image_4.png"}
                            projectUrl='https://github.com/Pudding2159/Bagging-Algorithm-for-Neural-Networks'
                            height="100%"
                            width="100%"
                        />

                    </div>





                </div>
            </div>
        </div>
    )
}

export default Projects