"use client";
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import "@styles/Button.sass"
import "@styles/Fonts.css"

export const ProjectItems = ({ title_1, title_2, backgraundImg, projectUrl, height, width, more }) => {
    return (
        <div className="relative flex items-center justify-center h-full w-full rounded-xl overflow-hidden group">
            {/* Градиентный фон и изображение */}
            <div className="absolute inset-0 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 z-10 bg-gradient-to-r from-[#3C3935] to-[#4d4d4db1]"></div>
            <img
                className="object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110 opacity-100 group-hover:opacity-10 z-0"
                src={backgraundImg}
                alt="/"
                style={{ width: width ? width : '100%', height: height ? height : '100%' }}
            />
            {/* Текстовый блок, который становится видимым при наведении */}
            <div className="hidden group-hover:flex absolute inset-0 items-center justify-center flex-col z-20">
                <h3 className="p-4 ms:p-5 text-[#d6bfae] font-face-my38 text-2xl ms:text-4xl tracking-wider text-center">{title_1}</h3>
                <h2 className="px-3 md:px-5 pb-10 text-[#d0d0d0] font-face-my38 text-xl ms:text-2xl text-center">{title_2}</h2>
                <a href={projectUrl} target="_blank" rel="noopener noreferrer">
                    <div className="custom-container">
                        <button className="custom-button">MORE INFO</button>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default ProjectItems

