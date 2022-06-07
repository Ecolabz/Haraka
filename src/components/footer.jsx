import React from "react";
import { Link } from "react-router-dom";
import { FaqLink } from "../constants/shared-services";
import "../assets/styles/pages.scss";

function BaseInfo() {

  return (
    <div className="footer">
      <div className="spread-info-web center-info-mobile font-weight-bold">
        <div className="my-2 py-1 media-links web-fade">
          <div>
            <a href="/" className="mx-2">
              <i className="fa-brands fa-twitter increased-x"></i>
            </a>
          </div>
          <div>
            <a href="/" className="mx-2">
              <i className="fa-brands fa-twitter increased-x"></i>
            </a>
          </div>
        </div>
        <div className="mt-2 py-1">
          <a href="mailto:hello@haraka.com">hello@haraka.com</a>
        </div>
        <div className="my-2 py-1 media-links mobile-fade">
          <div>
            <a href="/" className="mx-2">
              <i className="fa-brands fa-twitter increased-x"></i>
            </a>
          </div>
          <div>
            <a href="/" className="mx-2">
              <i className="fa-brands fa-twitter increased-x"></i>
            </a>
          </div>
        </div>
        <div className="my-2 py-1">
          <Link to="about">
            <span className="px-2 mx-2 clickable">About</span>
          </Link>
          <span className="px-2 mx-2 clickable"><FaqLink/></span>
        </div>
      </div>
    </div>
  );
}
export default BaseInfo;
