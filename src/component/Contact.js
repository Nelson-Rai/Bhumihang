import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


export default function Contact() {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_dsry8hj', 'template_a8eahkv', form.current, {
        publicKey: 'DjkuIucgghxnlHcFg',
      })
      .then(
        () => {
          setSuccessMessage('Email sent successfully!');
          setErrorMessage('');
        },
        (error) => {
          setErrorMessage(error.text);
          setSuccessMessage('');
        },
      );
  };

  return (
    <>
    <div className='container p-4' id='contact'>
    <div className=''>
        <h6>GET IN TOUCH</h6>
        <h1>CONTACT</h1>
    </div>
    <div className="d-flex row">
      <form className="row g-3 col-md-6" ref={form} onSubmit={sendEmail}>
        <div className="">
        {successMessage ?(
          alert(successMessage)
        ):null}
        {errorMessage ?(
          alert(errorMessage)
        ):null}
          {/* Success message */}
      {/* {successMessage && <Alert variant="success">{successMessage}</Alert>} */}
      
      {/* Error message */}
      {/* {errorMessage && <Alert variant="danger">{errorMessage}</Alert>} */}
        </div>
      <div className="col-md-6">
    <label htmlFor="user_name" className="form-label">Full Name</label>
    <input type="text" className="form-control" id="user_name" name='user_name' required/>
  </div>
  <div className="col-md-6">
    <label htmlFor="user_email" className="form-label">Email</label>
    <input type="email" className="form-control" id="user_email" name='user_email' required/>
  </div>
  <div className="col-12">
    <label htmlFor="subject" className="form-label">Subject</label>
    <input type="text" className="form-control" id="subject" name='subject' placeholder="subject.." required/>
  </div>
  <div className="col-12">
    <label htmlFor="message" className="form-label">Message</label>
    <textarea name="message" className="form-control" id="" cols="30" rows="6" required></textarea>
    
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
