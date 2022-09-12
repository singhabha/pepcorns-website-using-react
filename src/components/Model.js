import React from "react";
import { BsQuestionCircleFill } from "react-icons/bs";
import "./Model.css";

function Model({ cancelCard }) {
  return (
    <div className="card">
      <div className="layout">
        <div className="content">
          <div className="title">
            <p>
              {" "}
              <BsQuestionCircleFill />
              Logout
            </p>
          </div>
          <div className="body">
            <p>Are you sure, you want to logout of the applicaton?</p>
          </div>
          <div className="btn">
            <a href="https://app.pepcorns.com/#!/login">
              {" "}
              <button className="pro">PROCEED</button>
            </a>
            <button className="cancel" onClick={() => cancelCard(false)}>
              CANCEL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Model;
