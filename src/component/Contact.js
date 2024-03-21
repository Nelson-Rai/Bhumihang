import React from 'react'

export default function Contact() {
  return (
    <>
    <div className='container p-4' id='contact'>
    <div className=''>
        <h6>GET IN TOUCH</h6>
        <h1>CONTACT</h1>
    </div>
    <div className="d-flex row">
      <form className="row g-3 col-md-6">
      <div className="col-md-6">
    <label htmlFor="fullname" className="form-label">Full Name</label>
    <input type="text" className="form-control" id="fullname"/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-12">
    <label htmlFor="subject" className="form-label">Subject</label>
    <input type="text" className="form-control" id="subject" placeholder="subject.."/>
  </div>
  <div className="col-12">
    <label htmlFor="message" className="form-label">Message</label>
    <textarea name="message" className="form-control" id="" cols="30" rows="6"></textarea>
    
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Send Message</button>
  </div>
</form>

<div className="col-md-6 mt-4">
 <div className="container mt-10 px-10 row align-items-center">
    
      <div className="col-md-2 p-2 d-flex justify-content-center"><i className="fa fa-envelope-o fa-3x" aria-hidden="true"></i></div>
      <div className="col-md-10 p-2">infobhumi21@gmail.com</div>
      
      <div className="col-md-2 p-2 d-flex justify-content-center"><i className="fa fa-map-marker fa-3x" aria-hidden="true"></i></div>
      <div className="col-md-10 p-2">Main Road, Biratnagar, Nepal</div>
      
      <div className="col-md-2 p-2 d-flex justify-content-center"><i className="fa fa-mobile fa-3x" aria-hidden="true"></i></div>
      <div className="col-md-10 p-2">+977 981-4381820 <br /> +977 976-2333786</div>

      <div className="col-md-2 p-2 d-flex justify-content-center"><i className="fa fa-whatsapp fa-3x" aria-hidden="true"></i></div>
      <div className="col-md-10 p-2">+977 981-4381820 <br /> +977 976-2333786</div>
 </div>
</div>
</div>
    </div>

    </>
  )
}
