import React, { Component } from "react";
import {Link} from "react-router-dom";
import Button from 'react';
import "semantic-ui-css/semantic.min.css";
import Login from "../containers/LoginContainer";

class Navbar extends Component {
 
  render() {
    return (
      <div className="ui secondary  menu">
        <div className="right menu">

          <Button component={Link} className="item" to={Login}>
            <i className="wrench icon" />
            Support
          </Button>
          <a className="item" >
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
