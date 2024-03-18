"use client"; 
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const ProjectItems = ({ title_1, title_2, backgraundImg, projectUrl, height_, width_ }) => {
    return (
        <div className="relative flex items-center justify-center h-full w-full rounded-xl group hover:bg-gradient-to-r from-[#51ace5] to-[#1111115f] overflow-hidden">
            <div className="overflow-hidden rounded-xl">
            <Image
    className="transition-transform duration-300 ease-in-out transform group-hover:scale-110 opacity-100 group-hover:opacity-10"
    src={backgraundImg}
    height={height_}
    width={width_}
    alt="/"
/>
            </div>
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
                <h3 className="text-2xl text-white tracking-wider text-center">{title_1}</h3>
                <p className="px-4 pt-0 text-white text-center">{title_2}</p>
                <a href={projectUrl} target="_blank" rel="noopener noreferrer">
                    <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">More info</p>
                </a>
            </div>
        </div>
    )
}

export default ProjectItems
