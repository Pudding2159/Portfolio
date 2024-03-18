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

                <div className="md:grid grid-cols-12 grid-rows-5 pt-20 gap-14 ">


                    <div className="col-start-1 col-end-8 " >
                        <ProjectItems
                            title_1='Drone-Face-Tracking'
                            title_2='PyTorch Python'
                            backgraundImg={"/images/web_image_.png"}
                            projectUrl='https://github.com/Pudding2159/Drone-Face-Tracking-and-Photo-Classification-with-Tello'
                            height_="600"
                            width_="600"
                        />
                    </div>
                    <div className="col-start-8 col-end-13 xs:py-20 xs:pr-7 ">

                        <ProjectItems
                            title_1='Mobile Unity Game'
                            title_2='Unity C#'
                            backgraundImg={"/images/web_image_.png"}
                            projectUrl='https://github.com/Pudding2159/Unity-2D-Simple-Mobile-Game'
                            height_="500"
                            width_="600"
                        />
                    </div>

                    {/* <div>

                        <ProjectItems
                            title_1='Bagging Algorithm for Neural-Networks' s
                            title_2='Sklearn'
                            backgraundImg={Bagging_algoritm}
                            projectUrl='https://github.com/Pudding2159/Bagging-Algorithm-for-Neural-Networks'
                        />

                    </div> */}




                </div>
            </div>
        </div>
    )
}

export default Projects