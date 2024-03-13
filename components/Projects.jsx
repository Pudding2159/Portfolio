import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProjectItems from 'components/ProjectItems'
import Tello from 'public/assets/images/Tello.jpg'
import Bagging_algoritm from 'public/assets/images/NN.png'
import Unity from 'public/assets/images/Unity.gif'


const Projects = () => {
    return (


        <div className="w-full">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <p className="text-5xl tracking-widest uppercase text-[#5651e5]">
                    MY PROJECT
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 py-10">


              
                <ProjectItems
                title_1 = 'Drone-Face-Tracking'
                title_2 = 'PyTorch Python'
                backgraundImg = {Tello}
                projectUrl = 'https://github.com/Pudding2159/Drone-Face-Tracking-and-Photo-Classification-with-Tello'
                />

                <ProjectItems
                title_1 = 'Mobile Unity Game'
                title_2 = 'Unity C#'
                backgraundImg = {Unity}
                projectUrl = 'https://github.com/Pudding2159/Unity-2D-Simple-Mobile-Game'
                />

                <ProjectItems
                title_1 = 'Bagging Algorithm for Neural-Networks's
                title_2 = 'Sklearn'
                backgraundImg = {Bagging_algoritm}
                projectUrl = 'https://github.com/Pudding2159/Bagging-Algorithm-for-Neural-Networks'
                />




                
                </div>
            </div>
        </div>
    )
}

export default Projects