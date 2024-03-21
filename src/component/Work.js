import React from 'react'
import Work1 from './works/Work1'
import Work2 from './works/Work2'
import Work3 from './works/Work3'
import Work4 from './works/Work4'

export default function Work() {
  
  return (
    <>
        <div className="container p-4 mb-4" id='work'>
          <div className=''>
              <h6>MY WORK</h6>
              <h1>RECENT WORKS</h1>
          </div>
        
          <section className="py-2">
        <div className="container d-flex row">
        <div className=" my-1 col-sm-6 col-md-3" >
            <Work1/>
          </div>
          <div className=" my-1 col-sm-6 col-md-3" >
            <Work2/>
          </div>
          {/* <div className=" my-1 col-sm-6 col-md-3" >
            <Work3/>
          </div>
          <div className=" my-1 col-sm-6 col-md-3" >
            <Work4/>
          </div> */}
        </div>
      </section>
      </div>
      
    </>
  )
}
