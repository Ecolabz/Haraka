import React from "react";

import {
  offerIconFastDelivery,
  offerIconBigSavings,
  offerIconSaveTime,
  offerIconSuperSafe,
} from "../assets/icons";

import "../assets/styles/pages.scss";

function Info() {
  return (
    <div className="what-we-offer">
      <div className="container">
        <h2 className="text-center">What We Offer</h2>
        <h3 className="text-center">
          We offer an outstanding service on-time everytime
        </h3>
        <div className="row align-items-center justify-content-center mt-5">
          <div className="col-12 col-sm-6 col-lg-5">
            <div className="offer-card " data-aos="zoom-in">
              <div className="text-center">
                <img src={offerIconFastDelivery} alt="" />
              </div>
              <h4>Fast Delivery</h4>
              <p>
                Enjoy fast delivery of your best foods and groceries from your
                favourite stores within one hour or less.
              </p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-5">
            <div className="offer-card" data-aos="zoom-in" data-aos-delay="200">
              <div className="text-center">
                <img src={offerIconSaveTime} alt="" />
              </div>
              <h4>Saves Time</h4>
              <p>
                Skip the confusing hours of searching and comparing vendors with
                all stores, reviews and delivery within your reach.
              </p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-5">
            <div className="offer-card" data-aos="zoom-in" data-aos-delay="400">
              <div className="text-center">
                <img src={offerIconBigSavings} alt="" />
              </div>
              <h4>Big Deals. Big Savings</h4>
              <p>
                Variety is the spice of life. Enjoy unrestricted access to
                amazing deals for you to pick the best.
              </p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-5">
            <div
              className="offer-card "
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <div className="text-center">
                <img src={offerIconSuperSafe} alt="" />
              </div>
              <h4>Super Safe</h4>
              <p>
                Experience transparency from visible vendor ratings and reviews
                to live communication and tracking in real-time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Info;
