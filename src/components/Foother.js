import React, { Component } from "react";

class Foother extends Component {
  render() {
    return (
      <div className="ui stackable three column grid">
       <div className="column">
          <i className="facebook f icon" />
        </div>
        <div className="column">
          <i className="twitter icon" />
        </div>
        <div className="column">
          <i className="youtube icon" />
        </div>
      </div>
    );
  }
}

export default Foother;
