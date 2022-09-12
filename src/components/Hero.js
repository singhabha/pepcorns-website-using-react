import React from "react";
import { FaUserPlus, FaShare } from "react-icons/fa";
import "./Hero.css";
import Video from "./Video.js";

function Hero() {
  return (
    <div className="hero">
      <div className="btn">
        <button className="blue-btn">Dashboard</button>
        <div className="red-btn">
          <button>Login Now</button>
          <a href="https://pepcorns.com/">
            <button>Back to Website</button>
          </a>
        </div>
      </div>
      <div className="banner">
        <div className="logo">
          <img src="./assets/images/icon1651230435196.png" alt="logo" />
        </div>
        <div className="title">
          <h2 className="banner-title">Letzrent</h2>
          <p className="address">Address: Mumbai Maharastra</p>
          <p className="email">
            ● EMAIL : | Website : https://letzrent.com | PAN/TAN : AAJCR3294F
          </p>
          <p className="title-detail">
            Online search, compare & booking platform for self-drive cars,
            charter flights, living space & more that rewards users
          </p>
        </div>
        <div className="icons">
          <p className="follow">
            {" "}
            <FaUserPlus size={16} />
            Follow
          </p>
          <p className="share">
            <FaShare size={16} />
            Share
          </p>
        </div>
      </div>
      <div className="row">
        <ul className="row-ul">
          <li className="badge badge-gen">GEN Z FOUNDER</li>
          <li className="badge badge-mob">MOBILITY</li>
          <li className="badge badge-mob">E-COMMERCE</li>
        </ul>
      </div>
      <Video />
    </div>
  );
}

export default Hero;
