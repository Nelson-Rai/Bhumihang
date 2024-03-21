import React, { useState } from 'react'

export default function Work3() {
    const [expand, setExpand] = useState(false);

    const toggleExpand = () => {
      setExpand(!expand);
    }
  return (
    <div className="card mx-1 cardStyle">
            <img
              src="assets/card3.jpg"
              className="card-img-top img-fluid"
              alt="Application Development.."
            />
            <div className="card-body">
              <h5 className="card-title fw-bold text-decoration-underline">Application Development</h5>
              {!expand?(
              <p className="card-text text-justify">
              In today's mobile-centric world, having a standout application is essential. I specialize in developing cross-platform mobile 
              <button className="btn btn-link" onClick={toggleExpand}>Read more</button>
              <a href="#" target='_blank'  className="btn btn-primary m-2" onClick={toggleExpand}>Demo</a>
              </p>
               ):( 
                <p className="card-text text-justify"> 
                In today's mobile-centric world, having a standout application is essential. I specialize in developing cross-platform mobile  applications that provide seamless experiences across devices. 
                <button className="btn btn-link" onClick={toggleExpand}>Read less</button>
                <a href="#" target='_blank'  className="btn btn-primary m-2" onClick={toggleExpand}>Demo</a>
                </p>
              )}
            </div>
          </div>
  )
}
