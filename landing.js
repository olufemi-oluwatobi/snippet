import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { bounce } from "react-animations";

import Nav from "../../nav";
const Bounce = styled.div`
  animation: 2s ${keyframes`${bounce}`} infinite;
`;
/**<img className="imgB1" src="images/rec2.png" />
                  <div className="imgA1">
                    <Bounce>
                      <img src="images/upload.png" />
                    </Bounce>
                  </div>**/
class LandingView extends Component {
  render() {
    return (
      <div>
        <Nav view={"landing"} />
        <header class="masthead">
          <div class="container h-100">
            <div style={{ marginTop: "97px" }} class="row h-100">
              <div class="col-lg-7 my-auto">
                <div class="header-content mx-auto main_header">
                  Adjust your cashbook{" "}
                  <span className="half_background">to the bank statement</span>
                </div>
                <br />
                <span className="main_text">
                  BankRec compares the financial records you have with what your
                  bank has and provides you with informative insights
                  <br />
                  <br />
                  <a
                    style={{
                      width: "auto",
                      height: "40px",
                      color: "white",
                      paddingLeft: "12px",
                      paddingRight: "12px",
                      paddingTop: "6px",
                      paddingBottom: "12px"
                    }}
                    className="landing_button"
                    href="/home"
                  >
                    Get started
                  </a>
                </span>
              </div>
              <div class="col-lg-5 my-auto">
                <div class="device-container">
                  <div class="device-mockup iphone6_plus portrait white">
                    <div class="device">
                      <div class="screen">
                        <div className="imgA1">
                          <Bounce>
                            <img src="images/upload.png" />
                          </Bounce>
                        </div>
                      </div>
                      <div class="button" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <footer style={{ marginTop: "-20px" }}>
          <img
            style={{
              width: "100%"
            }}
            src="images/spiral.png"
          />
          <div style={{ width: "100%", height: "20px", bacground: "white" }}>
            <span>mkfkfmkm</span>
          </div>
        </footer>
      </div>
    );
  }
}
export default LandingView;
