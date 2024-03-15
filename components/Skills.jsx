import React from 'react'
import Image from 'next/image'
const Skills = () => {
    return (



        <div className="w-full lg:h-screen p-2">

            <div className="max-w-[1240px] mx-auto flex-col justify-center h-full">
                <p className="text-5xl tracking-widest uppercase text-[#5651e3] " style={{ marginTop: '170px' }}>
                    MY SKILLS
                </p>

                <div className="py-5 grid md:grid-cols-2 lg:grid-cols-4 gap-8">



                    <div className="p-9 shadow rounded-xl hover: scale-100 ease-in duration-300" >
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src='/icons/Python-Light.svg'
                                    width={64}
                                    height={64}
                                    alt='/'
                                />
                            </div>
                            <div className="flex flex-col items-center">
                                <h3 className="text-xl tracking-widest uppercase text-[#FFD343]">Python</h3>

                            </div>
                        </div>
                    </div>


                    <div className="p-9 shadow rounded-xl hover: scale-100 ease-in duration-300" >
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src='/icons/CS.svg'
                                    width={64}
                                    height={64}
                                    alt='/'
                                />
                            </div>
                            <div className="flex flex-col items-center">
                                <h3 className="text-xl tracking-widest uppercase text-[#953CAD]">CS</h3>

                            </div>
                        </div>
                    </div>



                    <div className="p-9 shadow rounded-xl hover: scale-100 ease-in duration-300" >
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src='/icons/JavaScript.svg'
                                    width={64}
                                    height={64}
                                    alt='/'
                                />
                            </div>
                            <div className="flex flex-col items-center">
                                <h3 className="text-xl tracking-widest uppercase text-[#F0DB4F]">JavaScript</h3>

                            </div>
                        </div>
                    </div>

                    <div className="p-9 shadow rounded-xl hover: scale-100 ease-in duration-300" >
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src='/icons/C.svg'
                                    width={64}
                                    height={64}
                                    alt='/'
                                />
                            </div>
                            <div className="flex flex-col items-center">
                                <h3 className="text-xl tracking-widest uppercase text-[#394AAB]">C</h3>

                            </div>
                        </div>
                    </div>


                    <div className="p-9 shadow rounded-xl hover: scale-100 ease-in duration-300" >
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src='/icons/PyTorch-Light.svg'
                                    width={64}
                                    height={64}
                                    alt='/'
                                />
                            </div>
                            <div className="flex flex-col items-center">
                                <h3 className="text-xl tracking-widest uppercase text-[#EE4C2C]">PyTorch</h3>

                            </div>
                        </div>
                    </div>

                    
                    <div className="p-9 shadow rounded-xl hover: scale-100 ease-in duration-300" >
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src='/icons/Unity-Dark.svg'
                                    width={64}
                                    height={64}
                                    alt='/'
                                />
                            </div>
                            <div className="flex flex-col items-center">
                                <h3 className="text-xl tracking-widest uppercase text-[#242938]">Unity</h3>

                            </div>
                        </div>
                    </div>


                    
                    <div className="p-9 shadow rounded-xl hover: scale-100 ease-in duration-300" >
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src='/icons/TensorFlow-Light.svg'
                                    width={64}
                                    height={64}
                                    alt='/'
                                />
                            </div>
                            <div className="flex flex-col items-center">
                                <h3 className="text-xl tracking-widest uppercase text-[#FF6F00]">TensorFlow</h3>

                            </div>
                        </div>
                    </div>

                    
                    <div className="p-9 shadow rounded-xl hover: scale-100 ease-in duration-300" >
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src='/icons/TailwindCSS-Dark.svg'
                                    width={64}
                                    height={64}
                                    alt='/'
                                />
                            </div>
                            <div className="flex flex-col items-center">
                                <h3 className="text-xl tracking-widest uppercase text-[#1DC0BA]">TailwindCSS</h3>

                            </div>
                        </div>
                    </div>

                    
                    <div className="p-9 shadow rounded-xl hover: scale-100 ease-in duration-300" >
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src='/icons/Git.svg'
                                    width={64}
                                    height={64}
                                    alt='/'
                                />
                            </div>
                            <div className="flex flex-col items-center">
                                <h3 className="text-xl tracking-widest uppercase text-[#F03C2E]">Git</h3>

                            </div>
                        </div>
                    </div>

                    <div className="p-9 shadow rounded-xl hover: scale-100 ease-in duration-300" >
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src='/icons/React-Light.svg'
                                    width={64}
                                    height={64}
                                    alt='/'
                                />
                            </div>
                            <div className="flex flex-col items-center">
                                <h3 className="text-xl tracking-widest uppercase text-[#4fc7ff]">React</h3>

                            </div>
                        </div>
                    </div>





                </div>
            </div>

        </div>
    )
}

export default Skills