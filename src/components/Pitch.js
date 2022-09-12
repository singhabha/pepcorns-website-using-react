import React from "react";
import "./Pitch.css";

function Pitch() {
  return (
    <div className="pitch">
      <div className="pitch-head">
        <h4>DECK</h4>
        {/* <button>DOWNLOAD PITCH DECK</button> */}
        <a href="https://api.pepcorns.com/clientassets/icon1651230174497.pdf">
          {" "}
          <button className="pitch-btn">DOWNLOAD PITCH DECK</button>
        </a>
      </div>
      <div className="description border">
        <h4>10 Seconds Pitch</h4>
        <p className="detail">
          Online search, compare & booking platform for self-drive cars, charter
          flights, living space & more that rewards users
        </p>
      </div>
      <div className="info border">
        <h5>Deck Info</h5>
        <h1 className="heading-main">LetzRent</h1>
      </div>
      <div className="highlights border">
        <h3 className="heading">Highlights</h3>
        <li>Running profitable pilot in Bengaluru.</li>
        <li>
          20k+ registered users, 4.2 app rating and 10k+ social media following{" "}
        </li>
        <li>Company is projecting 100cr+ transaction volume in 5 years</li>
        <li>
          Founder with the marketing expertise of 17+ years in Reliance,
          Naaptol, Tv9 and Zee and more.
        </li>
        <li>GenZ CTO and co-founder.</li>
        <li>Expansion is easy and the untapped customer base is huge.</li>
        <li>Been in news articles, already making buzz.</li>
      </div>
      <div className="traction-img border ">
        <img src="./assets/images/1651352968445-10.png" alt="img" />
      </div>
      <div className="rent-img border">
        <h3>Traction</h3>
        <img src="/assets/images/1651352942115-6.png" alt="" />
      </div>
      <div className="low-price border">
        <h3>Customers Want Low Prices</h3>
        <p className="detail">
          To get low prices 85% of the consumers check at least 2 data points
          (Source: BCG Consumer Trends). In various sectors information centred
          buying has been made more efficient by companies like MMT for Travel,
          Policy bazaar for Insurance, Myntra or Shopperstop for Lifestyle
          products. However for rental products, there is no one & to fill this
          need and make the process efficient we launched LetzRent, hoping to
          have a first-mover advantage and dominate the market in the coming
          future.
        </p>
        <img src="./assets/images/low-price.png" alt="img" />
      </div>
      <div className="kyc border">
        <h3>Single KYC</h3>
        <p className="detail">
          Renting is a KYC dependent process, every time a customer books a
          service from a different service provider he/she will have to get a
          new KYC done. With Letzrent, the hassle of multiple KYC gets removed
          and with a single KYC, customers can rent from multiple brands.
        </p>
      </div>
      <div className="selection border">
        <h3>Vast Selection</h3>
        <p className="detail">
          Being an aggregator Letzrent offers more options than category
          leaders.
        </p>
        <img src="./assets/images/selection.png" alt="img" />
      </div>
      <div className="renting border">
        <h3>Why Renting? </h3>
        <ol>
          <li>
            {" "}
            Demographic Twist: Commitment phobic millennials prefer an asset
            lite life with a bias toward renting rather than buying.
          </li>
          <li>
            Flexibility: Renting allows people to upgrade or change assets
            easily.
          </li>
          <li>
            {" "}
            Convenience: With the rental customers dispense with the headache of
            down payment, maintenance, insurance etc.
          </li>
        </ol>
        <img src="./assets/images/renting.png" alt="img" />
      </div>
      <div className="market border">
        <h3>Market Size</h3>
        <img src="./assets/images/market.png" alt="img" />
      </div>
      <div className="compete border">
        <h3>Competitors</h3>
        <img src="./assets/images/compete.png" alt="img" />
      </div>
      <div className="feedback border">
        <h3>Feedback: People love us</h3>
        <img src="./assets/images/feedback.png" alt="img" />
      </div>
      <div className="future border">
        <h3>Future and growth</h3>
        <img src="./assets/images/f-1.png" alt="img" />
        <img src="./assets/images/f-2.png" alt="img" />
      </div>
      <div className="team border">
        <h3>Core team</h3>
        <img src="./assets/images/team.png" alt="img" />
      </div>
      <div className="doc border">
        <h3>Documents for Investors</h3>
        <ul className="doc-ul">
          <a href="https://drive.google.com/file/d/1clHQGD__nkbsA-cLz3A6_tABUuk5rl3w/view">
            {" "}
            <li>Due Diligence Report</li>
          </a>
          <a href="https://drive.google.com/file/d/1i02nUH-27EhiROtNlvXOfkPP7iTfwjpw/view">
            <li>Certificate of Incorporation</li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Pitch;
