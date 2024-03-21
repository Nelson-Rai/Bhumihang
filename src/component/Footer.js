import React from 'react'

export default function Footer() {
  return (
    <div>
    <footer className="bg-light text-center text-lg-start ">
    <div className="container p-1 pt-4 d-flex flex-row mx-5 justify-content-center justify-items-end"> 
      <a className="text-dark mx-2" href="https://www.facebook.com/nelson.rai.7792" target='_blank'><i className="fa fa-facebook-official fa-2x" aria-hidden="true"></i></a> 
      <a className="text-dark mx-2" href="https://www.instagram.com/nelsonrai07/" target='_blank'><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></a>
      <a className="text-dark mx-2" href="https://www.linkedin.com/in/nelson-rai-bb978b220/" target='_blank'><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>

    </div>
  <div className="text-center p-2">
    © 2024 Copyright:
    <a className="text-dark" href="#">bhumihangrai.com</a>
  </div>
</footer>
    </div>
  )
}
