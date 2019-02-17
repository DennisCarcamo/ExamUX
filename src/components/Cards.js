import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";


class Cards extends Component {
  render() {
    return (
      <div className="ui two cards">
        {/*--------------------------------------thermostat Card -----------------------------*/}
        <a className="teal card">
          <div className="image">
            <img src={require("../img/thermo.png")} />
          </div>
          <div className="content">
            <div className="header">Nest Learning Thermostat</div>
            <div className="description">$350 USD</div>
          </div>
          <div className="extra content">
            <span className="center floated">
              <button className="ui vertical animated button" tabindex="0">
                <div className="hidden content">
                  <i className="cart plus icon" />
                </div>
                <div className="visible content">Get it</div>
              </button>
            </span>
          </div>
        </a>

        {/*--------------------------------------Smoke Alarm Card -----------------------------*/}
        <a className="teal card">
          <div className="image">
            <img src={require("../img/smoke.png")} />
          </div>
          <div className="content">
            <div className="header">Nest Smoke and CO Alarm</div>
            <div className="description">$110 USD</div>
          </div>
          <div className="extra content">
            <span className="center floated">
              <div className="ui vertical animated button" tabindex="0">
                <div className="hidden content">
                  <i className="cart plus icon" />
                </div>
                <div className="visible content">Get it</div>
              </div>
            </span>
          </div>
        </a>

         {/*--------------------------------------Nest Secure Card -----------------------------*/}
         <a className="teal card">
          <div className="image">
            <img src={require("../img/IQ.png")} />
          </div>
          <div className="content">
            <div className="header">Nest Cam Outdoor IQ</div>
            <div className="description">$220 USD</div>
          </div>
          <div className="extra content">
            <span className="center floated">
              <div className="ui vertical animated button" tabindex="0">
                <div className="hidden content">
                  <i className="cart plus icon" />
                </div>
                <div className="visible content">Get it</div>
              </div>
            </span>
          </div>
        </a>
        {/*--------------------------------------Nest Yale Card -----------------------------*/}
         <a className="teal card">
          <div className="image">
            <img src={require("../img/yalelock.png")} />
          </div>
          <div className="content">
            <div className="header">Yale Lock</div>
            <div className="description">$200 USD</div>
          </div>
          <div className="extra content">
            <span className="center floated">
              <div className="ui vertical animated button" tabindex="0">
                <div className="hidden content">
                  <i className="cart plus icon" />
                </div>
                <div className="visible content">Get it</div>
              </div>
            </span>
          </div>
        </a>

      </div>
    );
  }
}

export default Cards;
