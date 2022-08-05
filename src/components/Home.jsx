import React from "react";
import img from "./images/bg-intro-desktop.svg";
import mockup from "./images/image-mockups.png";

const Home = ()=>{
  return(
    <>
      <section id="home">
        <div className="container">
          <div className="text">
            <h1>Next generation digital banking</h1>
            <h3>Take your financial life online . Your easybank account will be a one-stop shop for spending , saving , budgeting , investing , and mush more.</h3>
            <button>Request invite</button>
          </div>
          <img className="svg" src={img} alt="" />
          <img src={mockup} alt=""  />
        </div>
      </section>
    </>
  )
}

export default Home;