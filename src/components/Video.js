import React from "react";
import "./Video.css";
import Sidebar from "./Sidebar";
import ToggleButtons from "./ToggleButtons";
import { MdContentCopy, MdLocationPin } from "react-icons/md";
import { AiFillChrome } from "react-icons/ai";
import { BsYoutube, BsInstagram, BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";

function Video() {
  return (
    <div className="section1">
      <div className="left">
        <div className="video-title">
          <a href="https://www.youtube.com/watch?v=biGcDeB2PbQ">
            Unable to view video ? Click here
          </a>
        </div>
        <div className="video-container">
          <div className="bg-dark"></div>
          <div className="thumbnail">
            <a href="https://www.youtube.com/watch?v=biGcDeB2PbQ&t=1s">
              {" "}
              <div id="bg-img"></div>
            </a>

            <div className="yt-heading">
              <div className="yt-title-logo">
                <a href="https://www.youtube.com/channel/UCKVZ0FaPLFvSHLfe2WisryQ">
                  {" "}
                  <img
                    src="./assets/images/channels4_profile.jpg"
                    alt=""
                    width={40}
                  />
                </a>
              </div>
              <div className="yt-title-text">
                <h5>
                  LetzRent for Pepcorns | Making renting simple, affordable and
                  rewarding.
                </h5>
              </div>
              <div className="copy-icon">
                <MdContentCopy />
                <p className="copy">Copy link</p>
              </div>
            </div>
            <a href="https://www.youtube.com/watch?v=biGcDeB2PbQ&t=1s">
              <div className="yt-icon">
                <BsYoutube size={70} className="yt" />
              </div>
            </a>
          </div>
        </div>

        <div className="footer">
          <div className="location text">
            <Link to="https://www.instagram.com/letzrent.official/">
              <p>
                {" "}
                <MdLocationPin />
                Mumbai,Maharashtra
              </p>
            </Link>
          </div>
          <div className="web-link text">
            <a href="https://letzrent.com">
              {" "}
              {/* <IoLocationSharp /> */}
              <p>
                <AiFillChrome />
                https://letzrent.com
              </p>
            </a>
          </div>
          <div className="social-links">
            <a
              href="https://www.instagram.com/letzrent.official/"
              className="insta"
            >
              {" "}
              <BsInstagram size={15} />
            </a>

            <a
              href="https://www.facebook.com/LetzRent.official/"
              className="fb"
            >
              <BsFacebook size={16} />
            </a>
            <a
              href="https://www.youtube.com/watch?v=biGcDeB2PbQ"
              className="ytube"
            >
              <BsYoutube size={16} />
            </a>
          </div>
        </div>
        <div>
          {" "}
          <ToggleButtons />
        </div>
      </div>
      <div className="right">
        <Sidebar />
      </div>
    </div>
  );
}

export default Video;
