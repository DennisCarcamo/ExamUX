import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import Cards from "../components/Cards";
import items from "../items.js";
import "../css/homepage.css";

class CardsContainer extends Component {
  render() {
    console.log(items);
    let itemList = items.map(item => {
      return (
        <Cards
          title={item.title}
          price={item.price}
          pictureUrl={item.pictureUrl}
        />
      );
    });
    return (
      <div id="cardscontainer">
        <div className="ui four cards">{itemList}</div>
      </div>
    );
  }
}

/*
    padding-right: 25px;
    padding-left: 25px; 
  */

export default CardsContainer;
