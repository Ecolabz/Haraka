import React, { useEffect } from "react";

import Header from "../../components/header";
import { aboutImage } from "../../assets/images/index";
import Footer from "../../components/footer";

import "../../assets/styles/pages.scss";

function AboutPage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className="about">
      <Header />
      <div className="sub-about w96 max 1200">
        <div className="py-5"></div>
        <div className="row py-5">
          <div className="col-md-6 mobile-fade">
            <div className="w90 max450 center-info imh rad-10-im" data-aos="flip-left">
              <img src={aboutImage} alt="" className="rad-10-im" />
            </div>
          </div>
          <div className="col-md-6 center-info center-mobile">
            <div className="w90 max450">
              <h2 className="increase-xl mb-5">
                We are here to make your life easy
              </h2>
              <p>
                Haraka makes your life easier as you can order groceries , food and services from the shops and small 
                businesses you are already familiar with and get it delivered to you on the same day (even within 1 hour) to 
                save your precious time and money with just a few clicks!
              </p>
            </div>
          </div>
          <div className="col-md-6 web-fade">
            <div className="w90 max450 center-info imh" data-aos="flip-left">
              <img src={aboutImage} alt="" className="rad-10" />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
export default AboutPage;
