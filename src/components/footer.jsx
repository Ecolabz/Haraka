import React from "react";
import { Link } from "react-router-dom";
import { FaqLink } from "../constants/shared-services";
import { linkedIn, meta, twitter } from "../assets/icons";
import "../assets/styles/pages.scss";

function BaseInfo() {
  const date = new Date().getFullYear();
  return (
    <div>
      <div className="footer-divider"></div>
      <footer>
        <div className="footer-row">
          <div className="footer-container">
            <h5>Contact</h5>
            <Link to="/">hello@haraka.com</Link>
          </div>
          <div className="footer-container">
            <h5>Explore</h5>
            <FaqLink />
            <Link to="/">Careers</Link>
          </div>
          <div className="footer-container">
            <h5>Contact</h5>
            <Link to="/">
              {" "}
              <img src={linkedIn} alt="Instagram" />
              LinkedIn
            </Link>
            <Link to="/">
              {" "}
              <img src={meta} alt="Meta" />
              Meta
            </Link>
            <Link to="/">
              {" "}
              <img src={twitter} alt="Twitter" />
              Twitter
            </Link>
          </div>
        </div>
        <p className="text-center">© {date} Haraka - All Rights reserved.</p>
      </footer>
    </div>
  );
}
export default BaseInfo;
