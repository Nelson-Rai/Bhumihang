import React from 'react'

export default function About() {
  return (
    <>
    <div className="container pt-3 mt-4" id='about'>
    
    <div className='d-flex flex-row row justify-content-between col-12'>
      
      <div className="profileImg col-sm-3 col-12">
        <img src="assets/bhumi.jpg" alt="BhumiHang Picture" className='img-fluid' />
      </div>
      <div className="aboutMe col-sm-8 col-12 d-flex flex-column justify-content-center">
        <div className=''>
        <h5>ABOUT ME</h5>
        <h1>WHO AM I?</h1>
        </div>
        <div className="">
        <p>I am a dedicated Python with Django developer with years of experience in web development. I specialize in crafting dynamic web applications, focusing on database management and RESTful APIs. I thrive on challenges and am passionate about creating efficient, user-friendly solutions. </p>
          <h4> Let's build something amazing together.</h4>
          <a href="#contact"><button className='hireButton'>Hire Me <i className="fa fa-envelope" aria-hidden="true"></i> </button></a>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}
