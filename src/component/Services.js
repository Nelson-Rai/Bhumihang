import React from "react";
import Card1 from "./services/Card1";
import Card2 from "./services/Card2";
import Card3 from "./services/Card3";
import Card4 from "./services/Card4";

export default function Services() { 

  return (
    <div className="container p-4 mt-3" id="services">
      <div className="">
        <h6>SERVICES</h6>
        <h1>WHAT I DO?</h1>
      </div>
      <div className="text-justify">
        <p> I specialize in crafting innovative and tailored solutions in software development, website development, application development, and web design. With a passion for technology and a dedication to excellence, I am empowering businesses and individuals to thrive in the digital realm.
        
          </p>
          </div>
        <div className="container d-flex row ">
        <div className=" my-1 col-sm-6 col-md-3" >
            <Card1/>
          </div>
          <div className=" my-1 col-sm-6 col-md-3" >
            <Card2/>
          </div>
          <div className=" my-1 col-sm-6 col-md-3" >
            <Card3/>
          </div>
          <div className=" my-1 col-sm-6 col-md-3" >
            <Card4/>
          </div>
        </div>
      
    </div>
  );
}
