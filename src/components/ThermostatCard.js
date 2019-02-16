import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";

class ThermstatCard extends Component {
  render() {
    return (
      <div class="ui two cards">
        {/*--------------------------------------thermostat Card -----------------------------*/}
        <div class="card">
          <div class="image">
            <img src={require("../img/thermo.jpg")} />
          </div>
          <div class="content">
            <div class="header">Nest Learning Thermostat</div>
          </div>
          <div class="extra content">
            <span class="right floated">
                <div class="ui vertical animated button" tabindex="0">
                    <div class="visible contente">Get it</div>
                    <div class="hidden content">
                        <i class="cart plus icon"></i>
                    </div>
                </div>
            </span>
            <span>
              <i class="user icon" />
              75 Friends
            </span>
          </div>
        </div>

        {/*--------------------------------------Smoke Alarm Card -----------------------------*/}
        <div class="card">
          <div class="image">
            <img src={require("../img/thermo.jpg")} />
          </div>
          <div class="content">
            <div class="header">Matt Giampietro</div>
            <div class="meta">
              <a>Friends</a>
            </div>
            <div class="description">
              Matthew is an interior designer living in New York.
            </div>
          </div>
          <div class="extra content">
            <span class="right floated">Joined in 2013</span>
            <span>
              <i class="user icon" />
              75 Friends
            </span>
          </div>
        </div>
      </div>
      
    );
  }
}

export default ThermstatCard;
