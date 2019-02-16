import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";

class Cards extends Component {
  render() {
    return (
      <div class="ui two cards">
        {/*--------------------------------------thermostat Card -----------------------------*/}
        <a class="teal card">
          <div class="image">
            <img src={require("../img/thermo.png")} />
          </div>
          <div class="content">
            <div class="header">Nest Learning Thermostat</div>
            <div class="description">$350 USD</div>
          </div>
          <div class="extra content">
            <span class="center floated">
              <div class="ui vertical animated button" tabindex="0">
                <div class="hidden content">
                  <i class="cart plus icon" />
                </div>
                <div class="visible content">Get it</div>
              </div>
            </span>
          </div>
        </a>

        {/*--------------------------------------Smoke Alarm Card -----------------------------*/}
        <a class="teal card">
          <div class="image">
            <img src={require("../img/smoke.png")} />
          </div>
          <div class="content">
            <div class="header">Nest Smoke and CO Alarm</div>
            <div class="description">$110 USD</div>
          </div>
          <div class="extra content">
            <span class="center floated">
              <div class="ui vertical animated button" tabindex="0">
                <div class="hidden content">
                  <i class="cart plus icon" />
                </div>
                <div class="visible content">Get it</div>
              </div>
            </span>
          </div>
        </a>

         {/*--------------------------------------Nest Secure Card -----------------------------*/}
         <a class="teal card">
          <div class="image">
            <img src={require("../img/Secure.png")} />
          </div>
          <div class="content">
            <div class="header">Nest Secure System</div>
            <div class="description">$110 USD</div>
          </div>
          <div class="extra content">
            <span class="center floated">
              <div class="ui vertical animated button" tabindex="0">
                <div class="hidden content">
                  <i class="cart plus icon" />
                </div>
                <div class="visible content">Get it</div>
              </div>
            </span>
          </div>
        </a>
        {/*--------------------------------------Nest Yale Card -----------------------------*/}
         <a class="teal card">
          <div class="image">
            <img src={require("../img/yalelock.png")} />
          </div>
          <div class="content">
            <div class="header">Yale Lock</div>
            <div class="description">$110 USD</div>
          </div>
          <div class="extra content">
            <span class="center floated">
              <div class="ui vertical animated button" tabindex="0">
                <div class="hidden content">
                  <i class="cart plus icon" />
                </div>
                <div class="visible content">Get it</div>
              </div>
            </span>
          </div>
        </a>

      </div>
    );
  }
}

export default Cards;
