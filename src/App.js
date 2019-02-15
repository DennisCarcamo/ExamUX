import React, { Component } from "react";
//import { Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import NavbarContainer from "./containers/NavbarContainer";
import HeaderContainer from "./containers/HeaderContainer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarContainer />
        <HeaderContainer />
        {/* <HeaderContainer/>*/}
      </div>
    );
  }
}

export default App;
