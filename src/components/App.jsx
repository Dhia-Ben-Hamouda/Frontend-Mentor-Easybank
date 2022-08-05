import React from "react";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import "./styles/styles.scss";

const App = ()=>{
  return(
    <>
      <Navbar/>
      <Home/>
      <About/>
    </>
  )
}

export default App;