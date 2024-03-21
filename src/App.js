import './App.css';
import About from './component/About';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Skills from './component/Skills';
import Work from './component/Work';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Services from './component/Services';

function App() {
  return (
    <>
    <Navbar/>
    <section id="home">
    <Home/>
    </section>
    <section id="aboutMe">
    <About/>
    </section>
    <section id="services">
    <Services/>
    </section>
    <section id="skills">
    <Skills/>
    </section>
    <section id="works">
    <Work/>
    </section>
    <section id="contact">
    <Contact/>
    </section>
    <Footer/>
    </>
  );
}

export default App;
