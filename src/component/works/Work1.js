import React, { useState } from 'react'

export default function Work1() {
    const [expand, setExpand] = useState(false);

    const toggleExpand = () => {
      setExpand(!expand);
    }
  return (
    <div className="card mx-1 cardStyle">
            <img
              src="assets/btrslogo.jpg"
              className="card-img-top img-fluid"
              alt="Software Image..."
            />
            <div className="card-body">
              <h5 className='card-title fw-bold text-decoration-underline'>Bus Ticket Reservation System</h5>
              {!expand?(
              <p className="card-text text-justify">
              The Bus Ticket Reservation System (BTRS) is an innovative solution designed to revolutionize the conventional process of booking bus tickets.
              <button className="btn btn-link" onClick={toggleExpand}>Read more</button>
              <a href="https://github.com/Nelson-Rai/BMS" target='_blank'  className="btn btn-primary m-2" onClick={toggleExpand}>Demo</a>
              </p>
              ):(
                <p className="card-text text-justify">
                    The Bus Ticket Reservation System (BTRS) is an innovative solution designed to revolutionize the conventional process of booking bus tickets.The BTRS incorporates a user-friendly interface that allows passengers to effortlessly browse through available bus routes, select preferred seats, and make secure online payments. 
              <button className="btn btn-link" onClick={toggleExpand}>Read less</button>
              <a href="https://github.com/Nelson-Rai/BMS" target='_blank'  className="btn btn-primary m-2" onClick={toggleExpand}>Demo</a>
              </p>)}
            </div>
            </div>
  )
}
