import React from "react";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Footer from "./Footer.jsx";
import Blog from "./Blog.jsx";
import "../styles/styles.scss";

const App = ()=>{
  return(
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Blog/>
      <Footer/>
    </>
  )
}

export default App;