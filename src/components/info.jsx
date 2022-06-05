import React from "react";

import {
  offerIconFastDelivery,
  offerIconSaveTime,
  offerIconBigSavings,
  offerIconSuperSafe,
  experienceImage,
  experiencePopup,
} from '../assets/images';

import "../assets/styles/pages.scss";

function Info() {

  return (
    <div className="info" id="info">
      <div className="relative max1200 w96">
        <div className="row pb-5">
          <div className="col-md-12 my-3">
            <div className="w96">
              <div className="text-center">
                <p className="pt-4 increased c-faint-font">What We Offer</p>
                <h4 className="increased-xl">We offer an outstanding service on-time everytime</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 my-3">
            <div className="w96 info-card" data-aos="zoom-in">
              <div className="">
                <img src={offerIconFastDelivery} alt="" />
              </div>
              <h4 className="increased mt-3">Fast delivery</h4>
              <p className="c-faint-font">
                Enjoy fast delivery of your best foods and groceries from your favourite stores within one hour or less. 
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 my-3">
            <div className="w96 info-card" data-aos="zoom-in" data-aos-delay="200">
              <div className="">
                <img src={offerIconSaveTime} alt="" />
              </div>
              <h4 className="increased mt-3">Saves time</h4>
              <p className="c-faint-font">
                Skip the confusing hours of searching and comparing vendors with all stores, reviews and delivery within your reach. 
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 my-3">
            <div className="w96 info-card" data-aos="zoom-in" data-aos-delay="400">
              <div className="">
                <img src={offerIconBigSavings} alt="" />
              </div>
              <h4 className="increased mt-3">Big Deals. Big Savings.</h4>
              <p className="c-faint-font">
                Variety is the spice of life. Enjoy unrestricted access to amazing deals for you to pick the best. 
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 my-3">
            <div className="w96 info-card" data-aos="zoom-in" data-aos-delay="600">
              <div className="">
                <img src={offerIconSuperSafe} alt="" />
              </div>
              <h4 className="increased mt-3">Super safe</h4>
              <p className="c-faint-font">
                Experience transparency from visible vendor ratings and reviews to live communication and tracking in real-time. 
              </p>
            </div>
          </div>
        </div>
      </div>



      <div className="row py-4">
        <div className="col-md-6 my-3 center-info">
          <div className="w90 max500">
            <h2 className="increased-x mb-4">
              Welcome to the simplified experience
            </h2>
            <div className="px-2">
              <h4 className="increased c-faint">
                Join our web of stores
              </h4>
              <p className="c-faint-font mb-4">
                Stay on-demand with increased sales and reduced dependency on inventory when you 
              </p>
              <h4 className="increased c-faint">
                Ride and earn with us
              </h4>
              <p className="c-faint-font mb-4">
                Own a vehicle? Perfect! Join our team of delivery riders shopping and delivering orders on their 
                schedule while earning to their satisfaction.
              </p>
              <h4 className="increased c-faint">
                Work in-house with us
              </h4>
              <p className="c-faint-font">
                Enjoy moving the needle towards a unified goal? Join our team in stitching a seamless experience for users. 
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 my-3 center-info">
          <div className="experience-image">
            <div className="imh im-holder mb-3" data-aos="fade-up">
              <img src={experienceImage} alt="" />
            </div>
            <div className="imh im-popup" data-aos="zoom-in" data-aos-delay="1000" data-aos-duration="400">
              <img src={experiencePopup} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Info;
