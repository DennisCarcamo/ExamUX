import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import ThermostatCard from "../components/ThermostatCard"
import SalarmCard from "../components/SalarmCard"

class CardsContainer extends Component {
    render() {
      return (
          <div class="iu two cards">
          <ThermostatCard/>
          <SalarmCard/>
          </div>
        );
    }
  }
  
  export default CardsContainer;