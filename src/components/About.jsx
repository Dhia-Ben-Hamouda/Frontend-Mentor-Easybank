import React from "react";
import img1 from "./images/icon-online.svg";
import img2 from "./images/icon-budgeting.svg";

const About = ()=>{
  return(
    <>
      <section id="about">
        <h1>Why chose Easybank ?</h1>
        <h3>we leverage Open Banking to turn yout bank account into your financial hub . <br/>
        Control your finances like never before .
        </h3>
        <div className="container">
          <div className="item">
            <img src={img1} alt="" />
            <h2>Online Banking</h2>
          </div>
        </div>
      </section>
    </>
  )
}

export default About;