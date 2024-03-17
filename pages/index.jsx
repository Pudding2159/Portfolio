"use client"; 
import React from 'react'
import '@styles/globals.css';
import Nav from 'components/Nav';
import NavbarM from 'components/NavbarMenu';
import Main from "components/Main";
import About from "components/About"
import Skills from 'components/Skills';
import Projects from 'components/Projects';
import Contact from 'components/Contact';
import { Reveal } from '@components/Reveal';
const Home = ({ children }) => {
    return (
        <div>

            <NavbarM />

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

                    {/* 
                    <Contact/> 
                     <Nav/> */}

                    {children}
                </div>
            </main>


        </div>

    );
}

export default Home;
