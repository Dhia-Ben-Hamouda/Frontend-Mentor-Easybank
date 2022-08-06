import React from "react";
import currency from "./images/image-currency.jpg";

const Blog = () => {
  return (
    <section id="blog">
      <h1>Latest articles</h1>
      <div className="container">
        <div className="card">
          <img src={currency} alt="" />
          <div>
            <p>By Claire Robinson</p>
            <h2>Recieve money in any currency with no fees</h2>
            <h4>The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …</h4>
          </div>
        </div>

        <div className="card">
          <img src={currency} alt="" />
          <div>
            <p>By Wilson Hutton</p>
            <h2>Treat yourself without worrying about money</h2>
            <h4>Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …</h4>
          </div>
        </div>

        <div className="card">
          <img src={currency} alt="" />
          <div>
            <p>By Wilson Hutton</p>
            <h2>Take your Easybank card wherever you go We want</h2>
            <h4>We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you ...</h4>
          </div>
        </div>

        <div className="card">
          <img src={currency} alt="" />
          <div>
            <p>By Claire Robinson</p>
            <h2>Our invite-only Beta accounts are now live!</h2>
            <h4>After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...</h4>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Blog;