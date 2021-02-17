import React from "react";

import { Carousel } from "antd";

function Home() {
  const contentStyle = {
    height: "200px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <>
      <div className="home-items">
        <h1>
          <img src="./logo.jpeg" />
        </h1>
      </div>

      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>Welcome to Mario's Painting Roswell</h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            Schedule a time to meet a painting professional at your home. We’ll
            hear out all your needs and get right to work creating a quote for
            your home.
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            Get a clear scope of the project in your inbox with specified paint
            colors, materials and exact pricing.
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            Sign your quote and select your start date. Complete a small
            checklist to ensure a smooth painting process.
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            Checkout the work and let us know if you were satified!
          </h3>
        </div>
      </Carousel>
    </>
  );
}

export default Home;
