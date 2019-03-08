import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";

class Toolbar extends Component {
  render() {
    return (
      <div className="ui teal four item inverted menu" id="toolbar">
        <a className="active item">PRODUCTS</a>
        <a className="item">WORKS WITH NEST</a>
        <a className="item">NEST AT HOME</a>
        <a className="item">MORE</a>
      </div>
    );
  }
}

export default Toolbar;

{
  /*<button onClick={this.buttonFunction}>action </button>);*/
}
