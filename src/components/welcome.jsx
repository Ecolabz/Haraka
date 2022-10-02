import React from "react";
import { phone } from "../assets/images";

const welcome = () => {
  return (
    <div>
      <div className="welcome-section">
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
            <div
              className="welcome-lead"
              data-aos="fade-up"
              data-aos-delay="1200"
            >
              <h1>Welcome to the simplified experience</h1>

              <div className="col-item">
                <h2>Join our web of stores</h2>
                <p>
                  Stay on-demand with increased sales and reduced dependency on
                  inventory when you
                </p>
              </div>
              <div className="col-item">
                <h2>Ride and earn with us</h2>
                <p>
                  Own a vehicle? Perfect! Join our team of delivery riders
                  shopping and delivering orders on their schedule while earning
                  to their satisfaction.
                </p>
              </div>
              <div className="col-item">
                <h2>Work in-house with us</h2>
                <p>
                  Enjoy moving the needle towards a unified goal? Join our team
                  in stitching a seamless experience for users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default welcome;
