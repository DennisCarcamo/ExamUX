import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";

class Navbar extends Component {
 
  render() {
    return (
      <div class="ui secondary  menu">
        <div class="right menu">
          <a class="item">
            <i class="wrench icon" />
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
