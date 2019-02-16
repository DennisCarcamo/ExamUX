import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

class Toolbar extends Component {
  state = {};
  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };
  render() {
    const { activeItem } = this.state;
    return (
      <div class="ui teal three item inverted menu">
        <a class="active item">PRODUCTS</a>
        <a class="item">NESNT AT HOME</a>
        <a class="item">FOR BUSINESS</a>
        <a class="item">OFFERS</a>
      </div>

      /* <Menu>
        <Menu.Menu position="center">
          <Menu.Item
            name="PRODUCST"
            active={activeItem == "PRODUCST"}
            onClick={this.mark}
          >
            PRODUCST
          </Menu.Item>

          <Menu.Item
            name="NEST AT HOME"
            active={activeItem == "NEST AT HOME"}
            onClick={this.mark}
          >
            NEST AT HOME
          </Menu.Item>

          <Menu.Item
            name="FOR BUSINESS"
            active={activeItem == "FOR BUSINESS"}
            onClick={this.mark}
          >
            FOR BUSINESS
          </Menu.Item>

          <Menu.Item
            name="OFFERS"
            active={activeItem == "OFFERS"}
            onClick={this.mark}
          >
            OFFERS
          </Menu.Item>
        </Menu.Menu>
     </Menu>*/
    );
  }
}

export default Toolbar;
