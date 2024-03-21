import React, {useState} from 'react'

export default function Card1() {
    const [expand, setExpand] = useState(false);

    const toggleExpand = () => {
      setExpand(!expand);
    }
  
  return (
    <div>
      <div className="card mx-1 cardStyle">
            <img
              src="assets/card1.jpg"
              className="card-img-top img-fluid"
              alt="Software Image..."
            />
            <div className="card-body">
              <h5 className="card-title fw-bold text-decoration-underline">Software</h5>
              {!expand? (
              <p className="card-text text-justify">                
              From concept to execution, I create robust and scalable software solutions tailored to your specific needs. Whether you require custom applications, 
              <button className="btn btn-link" onClick={toggleExpand}>Read more</button>
              </p>
               ):( 
                <p className="card-text text-justify"> 
                From concept to execution, I create robust and scalable software solutions tailored to your specific needs. Whether you require custom applications,  automation tools, or enterprise software, I deliver efficient and effective solutions.
                <button className="btn btn-link" onClick={toggleExpand}>Read less</button>
              </p>
              )}
            </div>
            </div>
    </div>
  )
}
