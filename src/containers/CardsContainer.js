import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import Cards from "../components/Cards"

class CardsContainer extends Component {
    render() {
      return (
          <div className="iu two cards">
          <Cards/>
          </div>
        );
    }
  }
  
  export default CardsContainer;