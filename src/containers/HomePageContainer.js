import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import HeaderContainer from "../containers/HeaderContainer";
import ToolbarContainer from "../containers/ToolbarContainer";
import CardsContainer from "../containers/CardsContainer";
import Carouselcontainer from "../containers/CarouselContainer";
import FootherContainer from "../containers/FootherContainer";
import CarouselContainer from "../containers/CarouselContainer";

class HomePage extends Component {
  componentDidMount() {
    document.title = 'Nest';
  }
  render() {
    return (
      <div className="App">
        <HeaderContainer />
        <ToolbarContainer />
        <CarouselContainer />
        <CardsContainer />
        <FootherContainer />
      </div>
    );
  }
}

export default HomePage;