import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../css/homepage.css";

class DemoCarousel extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <img alt="img0" src={require("../img/picsea-357048-unsplash.jpg")} />
          <p className="legend">TU FAMILIA PRIMERO</p>
        </div>
        <div>
          <img
            alt="img1"
            src={require("../img/jose-soriano-1231568-unsplash.jpg")}
          />
          <p className="legend">PROTEGE TU HOGAR</p>
        </div>
        <div>
          <img
            alt="img2"
            src={require("../img/daniel-tausis-563581-unsplash.jpg")}
          />
          <p className="legend">EVITA DESASTRES</p>
        </div>
        <div>
          <img
            alt="img3"
            src={require("../img/dan-lefebvre-1237718-unsplash.jpg")}
          />
          <p className="legend">NEST ES SENCILLO, PERO ELEGANTE</p>
        </div>
        <div>
          <img
            alt="img4"
            src={require("../img/nate-bell-471321-unsplash.jpg")}
          />
          <p className="legend">LO TRADICIONAL NO ES SUFICIENTE</p>
        </div>
      </Carousel>
    );
  }
}

export default DemoCarousel;
