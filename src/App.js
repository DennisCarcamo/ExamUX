import React, { Component } from "react";
//import { Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import NavbarContainer from "./containers/NavbarContainer";
import HeaderContainer from "./containers/HeaderContainer";
import ToolbarContainer from "./containers/ToolbarContainer";
import CardsContainer from "./containers/CardsContainer";
import Carousell from "./components/Carousel";
import FootherContainer from "./containers/FootherContainer";
import Popupwindow from "./components/PopupWindow";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarContainer />
        <HeaderContainer />
        <ToolbarContainer />
        <Carousell />
        <CardsContainer />
        <FootherContainer/>
      </div>
    );
  }
}

export default App;
