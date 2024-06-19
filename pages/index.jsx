"use client";
import React from 'react'
import '@styles/globals.css';
import CustomCursor from '@components/Cursors';
import NavbarM from 'components/NavbarMenu';
import Main from "components/Main";
import About from "components/About"
import Skills from 'components/Skills';
import Projects from 'components/Projects';
import { Reveal } from '@components/Reveal';
import SmoothScroll from '@components/SmoothScroll';
const Home = ({ children }) => {
    return (
        <div>
            {/* <SmoothScroll> */}
                <div className="hidden md:flex">
                    <CustomCursor />
                </div>
                <NavbarM />

                <div className="circle"></div>
                <div className="main">
                    <div className="gradient" />
                </div>

                <main className='app'>
                    <div>
                        <Reveal>
                            <Main />
                        </Reveal>

                        <Reveal>
                            <About />
                        </Reveal>

                        <Reveal>
                            <Skills />
                        </Reveal>

                        <Reveal>
                            <Projects />
                        </Reveal>

                        {children}
                    </div>
                </main>

            {/* </SmoothScroll> */}
        </div>

    );
}

export default Home;
