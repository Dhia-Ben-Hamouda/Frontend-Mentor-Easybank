import React from "react";
import currency from "./images/image-currency.jpg";

const Blog = ()=>{
  return(
    <section id="blog">
      <h1>Latest articles</h1>
      <div className="container">
        <div className="card">
          <img src={currency} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Blog;