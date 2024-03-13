import '@styles/globals.css';
import Nav from 'components/Nav';
import NavbarM from 'components/NavbarMenu';
import Main from "components/Main";
import About from "components/About"
import Skills from 'components/Skills';
import Projects from 'components/Projects';
import Contact from 'components/Contact';


const Home = ({ children }) => {
    return (
        <div>
            <NavbarM />

            <div className="main">
                <div className="gradient" />
            </div>

            <main className='app'>
                <Main />
                <About />
                <Skills />
                <Projects />
                {/* <Contact/> */}
                {/* <Nav/> */}
                {children}
            </main>


        </div>

    );
}

export default Home;
