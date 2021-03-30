import React from "react";

import { Image, Carousel, Row } from "antd";

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
      <Row className = "home-items">
        <img src="./logo.jpeg" class="logo-image" alt="" />
      </Row>

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

      <div className="background-text">
        <h3> Our Story </h3>
        <Image width={200} src="./homepic.jpeg" />
        <p>
          {" "}
          In the year 1998 , Mario Rodriguez immigrated to the United States
          with his wife to seek a better opportunities and a better future.
          Immigrating to the U.S with 10 cents in his pocket, he began to search
          for a job and started working for a painting company in metro Atlanta.
          Around the time of the great recession in the US, Mario was let go
          from his job due to the financial crisis. At the time he had to
          provide his two kids and wife, and starting job hunting around
          especially in the painting industry. Two months later a woman named
          Cathy Petretti, presented a idea for him to become a freelancer. Cathy
          started to spread the word to teachers around the school (where she
          worked at) if anyone needed some painting work done at their home.
          Soon enough Mario got calls and started working as a freelancer and
          created the company Mario's Painting of Roswell.
        </p>
      </div>
    </>
  );
}

export default Home;
