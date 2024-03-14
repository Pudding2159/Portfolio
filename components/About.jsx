    import React from 'react'

    const About = () => {
    return (




        <div className = "w-full md:h-screen p-2 flex items-center py-16 z-[10]" >
            <div className = "max-w-[1240px] m-auto md:grid grid-cols-4 gap-8 z-[10]" >


                <div className='col-span-2 col-start-2 w-auto h-auto m-auto shadow-xl shadow-gray-900 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <img className='rounded-xl' src="/assets/images/profile_image.png" alt='/'/>
                </div>

 
                <div className = "col-span-1 col-start-4" >
                    <p className='uppercase md: text-5xl tracking-widest text-[#5651e5]' style={{ marginTop: '50px' }}>ABOUT ME </p>
                    
                    <p className = "md: text-3xl p-6 text-gray-600 py-10 text-left">
                    I'm Mykyta, a programmer specializing in Intelligent Systems at the Technical University of Košice.
                    I excel in languages like C#, Python, and JavaScript, with a strong focus on game development using Unity    
                    </p>
                </div>


               
            </div>

        </div>
    
    
        )
    }

    export default About