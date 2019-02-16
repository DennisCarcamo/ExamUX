import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

class Navbar extends Component {
  state = {};
  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };
  render() {
    const { activeItem } = this.state;
    return (
      <div class="ui secondary  menu">
        <div class="right menu">
          <a class="item">
            <i class="wrech icon" />
            Support
          </a>
          <a class="item">
            <i class="user icon" />
            Log in
          </a>

          <a class="item">
            <i class="cart icon" />
            Cart
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;
