import React from "react";
import "./Details.css";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { TbHandFinger } from "react-icons/tb";
import { SiGooglechrome } from "react-icons/si";

function Details() {
  return (
    <div className="details">
      <div className="detail-title">
        <span>Meet our strong</span>and visionary team members
      </div>
      <div className="cofounders">
        <div className="card1">
          <div className="pic">
            {" "}
            <img
              src="https://api.pepcorns.com/clientassets/icon1651231237314.jpg"
              alt="img"
            />
          </div>
          <div className="name">Manish Pratik</div>
          <div className="role">CoFounder</div>
          <div className="contact">

            <a
              href="https://twitter.com/manishpratik"
              className="twitter contact-links"
            >
              <AiFillTwitterCircle size={42} />
            </a>
            <a href="/" className="faceb contact-links">
              <BsFacebook size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/manishpratik/"
              className="ln contact-links"
            >
              <SiGooglechrome size={16} />
            </a>
          </div>
        </div>
        <div className="card1">
          <div className="pic">
            <img
              src="https://api.pepcorns.com/clientassets/icon1651243119561.jpg"
              alt="img"
            />
          </div>
          <div className="name">Gautam Menon</div>
          <div className="role">CoFounder</div>
          <div className="contact">
            <a href="/" className="twitter contact-links">
              {" "}
              <AiFillTwitterCircle size={36} />
            </a>
            <a href="/" className="faceb contact-links">
              {" "}
              <BsFacebook size={16} />
            </a>
            <a
              className="ln contact-links"
              href="https://www.linkedin.com/in/gautam-menon-040379208"
            >
              <SiGooglechrome size={16} />
            </a>
          </div>
        </div>
      </div>
      <div className="use">
        <p>
          How will we use funds : Sales & Marketing - 50% | Human Resource-30% |
          Technology -10% | OPEX-10%
        </p>
      </div>
      <div className="card3">
        <div className="card1">
          <div className="date">
            <h5 className="start">
              START DATE{" "}
              <span className="finger-icon">
                <TbHandFinger size={30} />
              </span>
            </h5>
            <p className="date-p">2022-06-26 16:38:05</p>
          </div>
          <p className="deadline-p">
            <span className="success"> Ends in</span>0 Days
          </p>
        </div>
        <div className="card1">
          <div className="date">
            <h5 className="start">
              TARGET RAISE{" "}
              <span className="target-icon">
                <SiGooglechrome size={30} />
              </span>
            </h5>

            <p className="date-p">5000000</p>
          </div>
          <p className="deadline-p">
            <span className="success">0%</span> Raised So far
          </p>
        </div>
      </div>
      <div className="card4 card1">
        <h3>Frequently Asked Question [Found 3]</h3>
        <div className="c2 c1">
          <div className="ques">What does your company do ?</div>
          <p>
            LetzRent is an online search, compare & booking platform for
            self-drive car rental that rewards users for renting. We aggregate
            rental deals from multiple service providers and present them to
            users with prices, reviews & facts to make an informed decision.
            Currently running a pilot in Bangalore by aggregating Zoomcar, Avis,
            Mychoize & Wowcarz.
          </p>
        </div>
        <div className="c2 c1">
          <div className="ques">Where do you want to be in 5 years ?</div>
          <p>Uber for Self Drive Car Rental</p>
        </div>
        <div className="c2 c3 c1">
          <div className="ques">
            Why did you choose this idea, what's your biggest Obstacle?
          </div>
          <p>
            Customers want low Prices: And to get low prices 85% of the
            consumers check at least 2 data points (Source: BCG Consumer
            Trends). In various sectors information-centred buying has been made
            more efficient by companies like MMT for Travel, Policy bazaar for
            Insurance, Myntra or Shopperstop for Lifestyle products. However,
            for rental products, there is no one & to fill this need and make
            the process efficient we launched Letzrent, hoping to have a
            first-mover advantage and dominate the market in t
          </p>
        </div>
      </div>
    </div>
  );
}

export default Details;
