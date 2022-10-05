import React from "react";
import { Link } from "react-router-dom";
import { FaqLink } from "../constants/shared-services";
import { instagram, twitter } from "../assets/icons";
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
            <a href="mailto:hello@haraka.shop">hello@haraka.shop</a>
          </div>
          <div className="footer-container">
            <h5>Explore</h5>
            <FaqLink />
            <Link to="/about">About Us</Link>
            <Link to="/terms">Terms & Conditions</Link>
          </div>
          <div className="footer-container">
            <h5>Follow Us</h5>
            <a
              href="https://instagram.com/haraka_shop"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img src={instagram} alt="Instagram" />
              haraka_shop
            </a>

            <a
              href="https://twitter.com/harakashop?s=21&t=FI6veeEfoOcqeMw20SAlcw"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img src={twitter} alt="Twitter" />
              harakashop
            </a>
          </div>
        </div>
        <p className="text-center">© {date} Haraka - All Rights reserved.</p>
      </footer>
    </div>
  );
}
export default BaseInfo;
