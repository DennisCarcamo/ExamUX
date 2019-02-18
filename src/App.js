import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import Navbar from "./components/navbar";
import First from "./components/FirstLook";


import "./App.css";
import "semantic-ui-css/semantic.min.css";
import FisrtLook from "./components/FirstLook";


class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
      </div>
       
    );
  }
}

export default App;
