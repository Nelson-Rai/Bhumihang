import React from 'react'

export default function Work() {
  
  return (
    <>
        <div className="container p-4 mb-4" id='work'>
          <div className=''>
              <h6>MY WORK</h6>
              <h1>RECENT WORKS</h1>
          </div>
        
          <section className="py-2">
        <div className="container d-flex row justify-content-between">
        <div className=" my-1 col-sm-6 col-md-3" >
            <div className="card mx-1 cardStyle">
            <img
              src="assets/card1.jpg"
              className="card-img-top img-fluid"
              alt="Software Image..."
            />
            <div className="card-body">
              <span>Software</span>
              <p className="card-text text-justify">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
                <a href="" className="btn btn-link">more</a>
              </p>
            </div>
            </div>
          </div>
          <div className=" my-1 col-sm-6 col-md-3" >
            <div className="card mx-1 cardStyle">
            <img
              src="assets/card2.jpg"
              className="card-img-top img-fluid"
              alt="Website Development.."
            />
            <div className="card-body">
              <span>Website Development</span>
              <p className="card-text text-justify">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
                <a href="" className="btn btn-link">more</a>
              </p>
            </div>
            </div>
          </div>
          <div className=" my-1 col-sm-6 col-md-3" >
            <div className="card mx-1 cardStyle">
            <img
              src="assets/card3.jpg"
              className="card-img-top img-fluid"
              alt="Application Development.."
            />
            <div className="card-body">
              <span>Application Development</span>
              <p className="card-text text-justify">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
                <a href="" className="btn btn-link">more</a>
              </p>
            </div>
          </div>
          </div>
          <div className=" my-1 col-sm-6 col-md-3" >
            <div className="card mx-1 cardStyle">
            <img
              src="assets/card2.png"
              className="card-img-top img-fluid"
              alt="Web Design.."
            />
            <div className="card-body">
              <span>Web Design</span>
              <p className="card-text text-justify">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
                <a href="" className="btn btn-link">more</a>
              </p>
            </div>
          </div>
          </div>
        </div>
      </section>
      </div>
      
    </>
  )
}
