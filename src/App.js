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
    <Home/>
    <About/>
    <Services/>
    <Skills/>
    <Work/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
