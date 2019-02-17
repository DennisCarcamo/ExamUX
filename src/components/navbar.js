import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

class Navbar extends Component {
  render() {
    return (
      <div className="ui secondary  menu">
        <div className="right menu">
          <a className="item" >
            <i className="wrench icon" />
            Support
          </a>
          <a className="item">
            <i className="user icon" />
            Log in
          </a>

          <a className="item">
            <i className="cart icon" />
            Cart
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;