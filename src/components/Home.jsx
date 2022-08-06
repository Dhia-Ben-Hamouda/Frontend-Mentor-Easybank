import React from "react";
import img from "./images/bg-intro-desktop.svg";
import mockups from "./images/image-mockups.png";

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
          <div className="images">
            <img src={img} className="svg" alt="" />
            <div className="mockups">
              <img src={mockups} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;