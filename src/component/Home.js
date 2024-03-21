import React from 'react'

function Home() {
  return (
    <div className='vh-100' id='home'>
        <img src="assets/home.jpg" className="img-fluid overflow-hidden vw-20 col-md-12 imgStyle" alt="..." />
      <div className="container textInfo col-4 col-sm-6 col-md-12">
      <h1>Hi,<br/>
      I'm BhumiHang</h1>
      <p>A web developer with years of experience in HTML, CSS, JS, ReactJs, Python, Django, MySQL and many more.</p>
      <a href="downloads/bhumihang-rai-cv-for-python-with-django.pdf" download><button className='downloadButton'>Download CV <i className="fa fa-download" aria-hidden="true"></i> </button></a>
      </div>
    </div>
  )
}

export default Home
