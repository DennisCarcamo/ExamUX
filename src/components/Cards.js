import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import "../css/homepage.css";


class Cards extends Component {
  render() {
    console.log(this.props)
    let {title, price, pictureUrl} = this.props;
    return (
      <a className="teal card" href="" id="card">
          <div className="image">
            <img alt="img" src={(`${pictureUrl}`)} />
          </div>
          <div className="content">
            <div className="header">{title}</div>
            <div className="description">$ {price} USD</div>
          </div>
          <div className="extra content">
            <span className="center floated">
              <div className="ui vertical animated button" tabIndex="0">
                <div className="hidden content">
                  <i className="cart plus icon" />
                </div>
                <div className="visible content">Get it</div>
              </div>
            </span>
          </div>
        </a>
    );
  }
}

export default Cards;