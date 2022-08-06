import React from "react";
import img1 from "../images/icon-online.svg";
import img2 from "../images/icon-budgeting.svg";
import img3 from "../images/icon-onboarding.svg";
import img4 from "../images/icon-api.svg";

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
            <h5>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</h5>
          </div>
          <div className="item">
            <img src={img2} alt="" />
            <h2>Simple Budgeting</h2>
            <h5>Simple Budgeting See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.</h5>
          </div>
          <div className="item">
            <img src={img3} alt="" />
            <h2>Fast onboarding</h2>
            <h5>Fast Onboarding We don’t do branches. Open your account in minutes online and start taking control of your finances right away.</h5>
          </div>
          <div className="item">
            <img src={img4} alt="" />
            <h2>Open API</h2>
            <h5>Open API Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</h5>
          </div>
        </div>
      </section>
    </>
  )
}

export default About;