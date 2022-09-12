import React from "react";
import "./Sidebar.css";
import { GrMoney } from "react-icons/gr";

function Sidebar() {
  return (
    <div>
      <div className="cards">
        <div className="first"></div>
        <div className="card1">
          <div className="min-price">₹ 0</div>
          <div className="total-inv">0 % of minimum goal raised </div>
        </div>
        <div className="card1">
          <div className="price total-inv"> 0</div>
          <div className="inv-info">Total Investors </div>
        </div>
        <div className="card1">
          <div className="price total-inv"> 0 Days</div>
          <div className="inv-info">Left to Invest </div>
        </div>
        <div className="card1">
          <div className="red-btn">
            <button className="money">
              <p className="m-icon">
                {" "}
                <GrMoney />
              </p>
              <p> Campaign Expired</p>
            </button>
            <p className="total-in">₹ 1000 Minimum Investment</p>
          </div>
        </div>
      </div>
      <div className="cards">
        <div className="card-info">
          <h1>Deal Terms</h1>
          <p>Perks you will receive for Investing Letzrent</p>
        </div>
        <div className="card1 card2">
          <div className="rs">₹ 2000</div>
          <div className="p">Invest</div>
          <div className="list">
            <p>
              • LetzRent Premium Apparel (T-shirts & Coffee Mug) • Early access
              to new features & promotions
            </p>
            <p> TNC : Limited to the first 100</p>
          </div>
          <div className="btn-invest">
            <button>Invest</button>
          </div>
        </div>
        <div className="card1 card2">
          <div className="rs">₹ 5000</div>
          <div className="p">Invest</div>
          <div className="list">
            <p>
              • LetzRent Premium Apparel Box (T-shirts, Sweatshirts & additional
              Swag) | • Early access to new features & promotions
            </p>
            <p> TNC : Limited to the first 100</p>
          </div>
          <div className="btn-invest">
            <button>Invest</button>
          </div>
        </div>
        <div className="card1 card2">
          <div className="rs">₹ 10000</div>
          <div className="p">Invest</div>
          <div className="list">
            <p>
              • Exclusive interest in owning equity with an investment of
              ₹50,000 — ₹2,00,000 | • Invite to exclusive LetzRent team chat | •
              LetzRent Premium Apparel Box (T-shirts, Sweatshirts & additional
              Swag) | • Early access to new features & promotionsz
            </p>
            <p>
              TNC : Equity benefits with no voting rights. Limited to the first
              5 investors
            </p>
          </div>
          <div className="btn-invest">
            <button>Invest</button>
          </div>
        </div>
        <div className="card1 card2">
          <div className="rs">₹ 25000</div>
          <div className="p">Invest</div>
          <div className="list">
            <p>
              • Exclusive interest in owning equity with an investment of
              ₹3,00,000 — ₹10,00,000 • One-on-one 30 minute video call with
              Co-Founders • Invite to exclusive LetzRent team chat • LetzRent
              Premium Apparel Box (T-shirts, Sweatshirts & additional Swag) •
              Early access to new features & promotions
            </p>
            <p>
              TNC : Equity benefits with no voting rights. Limited to the first
              5 investors.{" "}
            </p>
          </div>
          <div className="btn-invest">
            <button>Invest</button>
          </div>
        </div>
        <div className="card1 card2">
          <div className="rs">₹ 50000</div>
          <div className="p">Invest</div>
          <div className="list">
            <p>
              • Exclusive interest in owning equity with an investment of
              ₹11,00,000 — ₹30,00,000 • In-Person dinner with Co-Founder in
              Whitefield, Bangalore • One-on-one 30 minute video call with
              Co-Founders • Invite to exclusive LetzRent team chat • LetzRent
              Premium Apparel Box (T-shirts, Sweatshirts & additional Swag) •
              Early access to new features & promotions
            </p>
            <p>
              TNC : Equity benefits with voting rights. Limited to the first 5
              investors.
            </p>
          </div>
          <div className="btn-invest">
            <button>Invest</button>
          </div>
        </div>
        <div className="card1 card2">
          <div className="rs">₹ 100000</div>
          <div className="p">Invest</div>
          <div className="list">
            <p>
              • Exclusive interest in owning equity with an investment of above
              ₹40,00,000 • LetzRent Weekend Experience: Flight & Hotel on us •
              In-Person dinner with Co-Founder in Whitefield, Bangalore •
              One-on-one 30 minute video call with Co-Founders • Invite to
              exclusive LetzRent team chat • LetzRent Premium Apparel Box
              (T-shirts, Sweatshirts & additional Swag) • Early access to new
              features & promotions
            </p>
            <p>
              TNC : Equity benefits with voting rights(open for discussion of
              term sheet). Limited to the first 2 investors.
            </p>
          </div>
          <div className="btn-invest">
            <button>Invest</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
