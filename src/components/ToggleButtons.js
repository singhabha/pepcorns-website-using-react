import React, { Component } from "react";
import Pitch from "./Pitch";
import Details from "./Details";
import Update from "./Update";
import "./ToggleButtons.css";
import { RiShoppingBag3Fill } from "react-icons/ri";
export class ToggleButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabType: "general",
    };
  }

  toggleMe = (value) => {
    this.setState({
      tabType: value,
    });
  };

  render() {
    return (
      <>
        <div>
          <div
            className="buttons"
            style={{
              marginTop: "2rem",
              position: "relative",
            }}
          >
            {" "}
            <button
              id="btn-white"
              className="btn-white"
              onClick={() => {
                this.toggleMe("general");
              }}
            >
              <RiShoppingBag3Fill />
              Pitch
            </button>
            <button
              className="btn-white"
              onClick={() => {
                this.toggleMe("details");
              }}
            >
              {" "}
              <RiShoppingBag3Fill />
              Details
            </button>
            <button
              className="btn-white"
              onClick={() => {
                this.toggleMe("updates");
              }}
            >
              {" "}
              <RiShoppingBag3Fill />
              Updates
            </button>
            <button
              className="btn-white"
              onClick={() => {
                this.toggleMe("comments");
              }}
            >
              {" "}
              <RiShoppingBag3Fill />
              Comments(1)
            </button>
          </div>
          <div>
            {this.state.tabType === "general" && (
              <div>
                <Pitch />
              </div>
            )}
            {this.state.tabType === "details" && (
              <div>
                <Details />
              </div>
            )}
            {this.state.tabType === "updates" && (
              <div>
                <Update />
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}
export default ToggleButtons;
