import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../containers/HomePageContainer";
import Login from "../containers/LoginContainer";

class Navbar extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/login" component={Login} exact />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Navbar;

{
  /*<div class="ui secondary  menu">
        <div class="right menu">
          <a class="item">
            <i class="home icon" />
            Home
          </a>

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
*/
}
