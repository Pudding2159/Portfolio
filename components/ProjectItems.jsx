"use client"; 
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const ProjectItems = ({ title_1, title_2, backgraundImg, projectUrl, height, width }) => {
    return (
        <div className="relative flex items-center justify-center h-full w-full rounded-xl overflow-hidden group">
            {/* Градиентный фон и изображение */}
            <div className="absolute inset-0 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 z-10 bg-gradient-to-r from-[#51ace5] to-[#1111115f]"></div>
            <img
                className="object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110 opacity-100 group-hover:opacity-10 z-0"
                src={backgraundImg}
                alt="/"
                style={{ width: width ? width : '100%', height: height ? height : '100%' }}
            />
            {/* Текстовый блок, который становится видимым при наведении */}
            <div className="hidden group-hover:flex absolute inset-0 items-center justify-center flex-col z-20">
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

