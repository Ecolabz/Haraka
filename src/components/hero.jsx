import React from "react";

import { heroImage, appleButton, googleButton } from "../assets/images";

import "../assets/styles/pages.scss";

function Hero() {
  return (

    <div>
      <div className="hero-section">
        <div className="hero-container">
          <div className="hero-text">
            <h2 className="">
              Your best foods and groceries delivered just in-time
            </h2>

            <p className=" my-4">
              Enjoy the ease of ordering on time from the right place at the
              best cost-all while clicking a button
            </p>

            <div className="info-grid max350 center-item">
              <div
                className="imh clickable-shadow rad-10 mb-3"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                <a href="/">
                  <img src={googleButton} alt="" />
                </a>
              </div>
              <span></span>
              <div
                className="imh clickable-shadow rad-10 mb-3"
                data-aos="fade-up"
                data-aos-delay="1200"
              >
                <a href="/">
                  <img src={appleButton} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="vehicle">
            <img
              src={heroImage}
              alt=""
              data-aos="zoom-out"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
