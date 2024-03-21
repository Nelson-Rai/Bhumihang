import React, { useState } from 'react'

function Navbar() {
  const [activeLink, setActiveLink] = useState('home');

  const homeClick = () => {
    setActiveLink('home')
  }
  const aboutMeClick = () => {
    setActiveLink('aboutMe')
  }
  const servicesClick = () => {
    setActiveLink('services')
  }
  const skillsClick = () => {
    setActiveLink('skills')
  }
    const worksClick = () => {
    setActiveLink('works')
  }
  const contactClick = () => {
    setActiveLink('contact')
  }
    const navbarStyle = {
        position: 'sticky',
        top: 0,
        zIndex: 100,
      };
    const cursorDefault ={
      cursor: 'default'
    }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light " style={navbarStyle}>
  <div className="container">
    <a className="navbar-brand " style={cursorDefault} href="#">Portfolio</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className={`nav-link ${activeLink ==='home'?'active':''}`} onClick={homeClick} aria-current="page" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${activeLink ==='aboutMe'?'active':''}`} onClick={aboutMeClick} href="#about">About Me</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${activeLink ==='services'?'active':''}`} onClick={servicesClick} href="#services">Services</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${activeLink ==='skills'?'active':''}`} onClick={skillsClick} href="#skills">Skills</a>
        </li>
                <li className="nav-item">
          <a className={`nav-link ${activeLink ==='works'?'active':''}`} onClick={worksClick} href="#work">Works</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${activeLink ==='contact'?'active':''}`} onClick={contactClick} href="#contact">Contact</a>
        </li>

        
        
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
