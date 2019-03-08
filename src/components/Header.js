import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";


class Header extends Component {
    render() {
      return (
        <img className="ui middle aligned medium image" alt="LogoNest" src={ require ("../img/LogoNest.png")} />    
        );
    }
  }
  
  export default Header;
