import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import HomePage from "./components/HomePage";
import NavBar from "./containers/NavbarContainer";
import Login from "./containers/LoginContainer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar/>
          <Switch>
            <Route path="/" component={HomePage} exact />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
