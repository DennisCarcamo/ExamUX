import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";

class Toolbar extends Component {
  state = {};
  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };
  render() {
    const { activeItem } = this.state;
    return (
      <div className="ui teal three item inverted menu">
        <a className="item">NESNT AT HOME</a>
        <a className="item">FOR BUSINESS</a>
        <a className="item">OFFERS</a>
        <a className="item">PRODUCTS</a>
      </div>
    );
  }
}

export default Toolbar;
