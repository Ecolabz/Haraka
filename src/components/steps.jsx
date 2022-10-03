import React from "react";
import { phone } from "../assets/images";
import { step01 } from "../assets/icons";
import { step02 } from "../assets/icons";
import { step03 } from "../assets/icons";

const steps = () => {
  return (
    <div>
      <div className="steps-section">
        <div className="container hidden">
          <div className="row-item">
            <div className="phone-ui">
              <img
                src={phone}
                className="img-fluid"
                alt=""
                data-aos="zoom-out"
              />
            </div>
            <div className="step-lead" data-aos="fade-up" data-aos-delay="1200">
              <h1>Start using Haraka in few simple steps</h1>

              <div className="row-item">
                <div className="img">
                  <img src={step01} alt="" />
                </div>
                <p>Download Haraka on the App Store or Google Play</p>
              </div>
              <div className="row-item">
                <div className="img">
                  {" "}
                  <img src={step02} alt="" />
                </div>
                <p>Create an account with your email and phone</p>
              </div>
              <div className="row-item">
                <div className="img">
                  {" "}
                  <img src={step03} alt="" />
                </div>
                <p>Order your favourite meals from your favorite restaurants</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default steps;
