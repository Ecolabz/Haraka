import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./../assets/styles/layout.scss";
import { FaqLink } from "../constants/shared-services";
import { logo } from "./../assets/images";

function Header() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  return (
    <div
      className={
        openMobileMenu
          ? "header open-mobile-menu"
          : "header close-mobile-menu"
      }
    >
      <div className="sub-layer"></div>
      <div className="case spread-info md-open relative">
        <div className="logo-mini ml-3">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="spread-info">
          <div className="mobile-menu pr-4">
            <i className="fas fa-bars" onClick={toggleMobileMenu}></i>
          </div>
        </div>
      </div>
      <div className="w90 spread-nav-web relative">
        <div className="logo md-close-im">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="nav">
                
          <ul>
            <li>
              <div className="text-center">
                <Link to="/about">
                  <span className="clickable">About</span>
                </Link>
              </div>
            </li>
            <li className="center-menu">
              <div className="text-center">
                <FaqLink/>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Header;
