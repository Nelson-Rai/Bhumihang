import React, { useState } from 'react'

export default function Card2() {
    const [expand, setExpand] = useState(false);

    const toggleExpand = () => {
      setExpand(!expand);
    }
  return (
    <div className="card mx-1 cardStyle">
            <img
              src="assets/card2.jpg"
              className="card-img-top img-fluid"
              alt="Website Development.."
            />
            <div className="card-body">
              <h5 className="card-title fw-bold text-decoration-underline">Website Development</h5>
              {!expand?(
              <p className="card-text text-justify">
              Your website is your digital storefront, and to ensure it leaves a lasting impression. I design and develop responsive, user-friendly
              <button className="btn btn-link" onClick={toggleExpand}>Read more</button>
              </p>
               ):(
                <p className="card-text text-justify">
                    Your website is your digital storefront, and to ensure it leaves a lasting impression. I design and develop responsive, user-friendly websites that captivate audiences and drive engagement. From simple landing pages to complex e-commerce platforms, I bring your vision to life.
                 <button className="btn btn-link" onClick={toggleExpand}>Read less</button>
              </p>
              )}
            </div>
            </div>
  )
}
