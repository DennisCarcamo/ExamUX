import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 
class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={require("../img/picsea-357048-unsplash.jpg")} />
                    <p className="legend">TU FAMILIA PRIMERO</p>
                </div>
                <div>
                    <img src={require("../img/jose-soriano-1231568-unsplash.jpg")} />
                    <p className="legend">PROTEGE TU HOGAR</p>
                </div>
                <div>
                    <img src={require("../img/daniel-tausis-563581-unsplash.jpg")}  />
                    <p className="legend">EVITA DESASTRES</p>
                </div>
                <div>
                    <img src={require("../img/dan-lefebvre-1237718-unsplash.jpg")} />
                    <p className="legend">NEST ES SENCILLO, PERO ELEGANTE</p>
                </div>
                <div>
                    <img src={require("../img/nate-bell-471321-unsplash.jpg")}  />
                    <p className="legend">LO TRADICIONAL NO ES SUFICIENTE</p>
                </div>
            </Carousel>
        );
    }
};
 
export default DemoCarousel;