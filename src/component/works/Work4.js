import React, { useState } from 'react'

export default function Work4() {
    const [expand, setExpand] = useState(false);

    const toggleExpand = () => {
        setExpand(!expand);
    }

  return (
    <div className="card mx-1 cardStyle">
            <img
              src="assets/card2.png"
              className="card-img-top img-fluid"
              alt="Web Design.."
            />
            <div className="card-body">
              <h5 className="card-title fw-bold text-decoration-underline">Web Design</h5>
              {!expand?(
              <p className="card-text text-justify">
              A visually appealing design is the cornerstone of a successful online presence. I create stunning visuals that reflect your brand identity and captivate your
              <button className="btn btn-link" onClick={toggleExpand}>Read more</button>
              <a href="#" target='_blank'  className="btn btn-primary m-2" onClick={toggleExpand}>Demo</a>
              </p>
               ):( 
                <p className="card-text text-justify"> 
                 A visually appealing design is the cornerstone of a successful online presence. I create stunning visuals that reflect your brand identity and captivate your audience. From simple landing pages to complex e-commerce platforms, I prioritize user experience and ensure every design element serves a purpose.
                 <button className="btn btn-link" onClick={toggleExpand}>Read less</button>
                 <a href="#" target='_blank'  className="btn btn-primary m-2" onClick={toggleExpand}>Demo</a>
              </p>
              )}
            </div>
          </div>
  )
}
