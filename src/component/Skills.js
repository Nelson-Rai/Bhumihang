import React, { useState } from "react";

export default function Skills() {
   return (
    <>
    <div className="container p-4 mb-4" id="skills">
    <div className=''>
        <h6>MY SPECIALITY</h6>
        <h1>MY SKILLS</h1>
        </div>
        <div className="text-justify">
        <p>&emsp; With a keen focus on Python with Django development, I excel in crafting dynamic web applications, proficiently managing databases, and implementing robust security measures. My expertise extends to front-end technologies like HTML, CSS (including Bootstrap & Tailwind CSS), and JavaScript (including React JS), enabling the creation of visually appealing and interactive user interfaces. My proficiency in RESTful APIs facilitates seamless communication between different components of web applications.
          </p>
          </div>
          <span>HTML5</span>
      <div className="progress">
        <div
          className="progress-bar progress-bar-striped progress-bar-animated"
          role="progressbar"
          style={{ width: `95%` }}
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <span>CSS3 (including Bootstrap & Tailwind CSS) </span>
      <div className="progress">
        <div
          className="progress-bar progress-bar-striped bg-success progress-bar-animated"
          role="progressbar"
          style={{ width: `90%` }}
          aria-valuenow="90"
          aria-valuemin="0"
          aria-valuemax="100"
        
        ></div>
      </div>
      <span>JavaScript (including React JS)</span>
      <div className="progress">
        <div
          className="progress-bar progress-bar-striped bg-info progress-bar-animated"
          role="progressbar"
          style={{ width: `80%` }}
          aria-valuenow="80"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <span>Python with Django</span>
      <div className="progress">
        <div
          className="progress-bar progress-bar-striped bg-warning progress-bar-animated"
          role="progressbar"
          style={{ width: `65%` }}
          aria-valuenow="65"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <span>Web Development</span>
      <div className="progress">
        <div
          className="progress-bar progress-bar-striped bg-danger progress-bar-animated"
          role="progressbar"
          style={{ width: `85%` }}
          aria-valuenow="85"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      </div>
    </>
  );
}
