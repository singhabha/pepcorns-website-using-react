import React from "react";
import "./Navbar.css";
import { useState } from "react";
import Model from "./Model.js";

function Navbar() {
  const [show, setShow] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  return (
    <>
      <div className="navbar">
        <div className="nav">
          <li>-Dashboard</li>
          <ul className="item">
            <li className="user" onClick={() => setShow(!show)}>
              <img src="./assets/svg/dealer_reg.svg" alt="logo" width={35} />
            </li>
          </ul>
        </div>
        {show ? (
          <div className="welcome-card">
            <div className="dropdown-header">
              <p className="wel">Welcome!</p>
            </div>
            <div className="divider"></div>
            <div
              className="logout"
              onClick={() => {
                setOpenPopup(true);
                setShow(false);
              }}
            >
              <p> Logout</p>
            </div>
          </div>
        ) : null}
      </div>
      {openPopup && <Model cancelCard={setOpenPopup} />}
    </>
  );
}

export default Navbar;
