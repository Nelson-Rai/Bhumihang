import React, { useState } from 'react'

export default function Work2() {
    const [expand, setExpand] = useState(false);

    const toggleExpand = () => {
      setExpand(!expand);
    }
  return (
    <div className="card mx-1 cardStyle">
            <img
              src="assets/textUtility.png"
              className="card-img-top img-fluid "
              alt="Website Development.."
            />
            <div className="card-body">
              <h5 className='card-title fw-bold text-decoration-underline'>Text Utility</h5>
              {!expand?(
              <p className="card-text text-justify">
              This project introduces a novel text utility tool designed to streamline text processing tasks efficiently. This utility tool offers a range of functionalities including but not limited to
              <button className="btn btn-link" onClick={toggleExpand}>Read more</button>
              <a href="https://nelson-rai.github.io/textUtils/" target='_blank'  className="btn btn-primary m-2" onClick={toggleExpand}>Demo</a>
              </p>
               ):( 
                <p className="card-text text-justify"> 
                 This project introduces a novel text utility tool designed to streamline text processing tasks efficiently. This utility tool offers a range of functionalities including but not limited to text summarization, sentiment analysis, keyword extraction, and language translation.
                 <button className="btn btn-link" onClick={toggleExpand}>Read less</button>
                 <a href="https://nelson-rai.github.io/textUtils/" target='_blank'  className="btn btn-primary m-2" onClick={toggleExpand}>Demo</a>
              </p>
              )}
            </div>
            </div>
  )
}
