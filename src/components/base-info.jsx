import React from "react";
import {
  googleButton,
  appleButton,
  footerPhone
} from '../assets/images';
import "../assets/styles/pages.scss";

function BaseInfo() {

  return (
    <div className="pre-footer">
      <div className="footer-card">
        <div className="max350 text-sect">
          <h2 className="mb-4 increased-xl">Get started with Haraka today</h2>
        <div className="info-grid">
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
        <span></span>
        <div className="image">
          <div className="imh" data-aos="zoom-in">
            <img src={footerPhone} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default BaseInfo;
