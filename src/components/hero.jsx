import React from "react";

import {
  heroImage,
  popupLeft,
  popupRight,
  popupBottom,
  appleButton,
  googleButton
} from '../assets/images';

import "../assets/styles/pages.scss";

function Hero() {

  return (
    <div className="hero" id="home">
      <div className="header-space"></div>
      <div className="hero-spread">
        <div className="text-sect">
         <div className="text-holder">
          <h2 className="">Your best foods and groceries delivered just in-time</h2>
          <p className=" c-faint-font">
            Enjoy the ease of ordering on time from the right place at the best 
            cost-all while clicking a button
          </p>
          <div className="info-grid max350">
            <div className="imh clickable-shadow rad-10 mb-3" data-aos="fade-up" data-aos-delay="1000">
              <a href="/">
                <img src={googleButton} alt="" />
              </a>
            </div>
            <span></span>
            <div className="imh clickable-shadow rad-10 mb-3" data-aos="fade-up" data-aos-delay="1200">
              <a href="/">
                <img src={appleButton} alt="" />
              </a>
            </div>
          </div>
         </div>
        </div>
        <div className="img-sect">
          <div className="relative w100">
            <div className="imh im-holder">
              <img src={heroImage} alt="" data-aos="zoom-out" />
            </div>
            <div className="floater-left imh">
              <img src={popupLeft} alt="" data-aos="zoom-in" data-aos-delay="600" />
            </div>
            <div className="floater-right imh">
              <img src={popupRight} alt="" data-aos="zoom-in" data-aos-delay="800" />
            </div>
            <div className="floater-bottom imh">
              <img src={popupBottom} alt="" data-aos="zoom-in" data-aos-delay="1000" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
