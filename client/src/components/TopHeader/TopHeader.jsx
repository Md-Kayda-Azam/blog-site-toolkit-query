import React from "react";
import "./TopHeader.scss";

const TopHeader = () => {
  return (
    <div className="top-header">
      <div className="date">
        <p>Thursday, April 6, 2023</p>
      </div>
      <div className="social-icons">
        <ul>
          <li>
            <a href="#">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopHeader;
