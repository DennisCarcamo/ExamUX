import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

class Navbar extends Component {
  state = {};
  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };
  render() {
    const { activeItem } = this.state;
    return (
      <Menu>
        <Menu.Item
          name="name"
          active={activeItem == "name"}
          onClick={this.mark}
        >
          Name
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item
            name="login"
            active={activeItem == "login"}
            onClick={this.mark}
          >
            Login
          </Menu.Item>

          <Menu.Item
            name="support"
            active={activeItem == "Support"}
            onClick={this.mark}
          >
            Support
          </Menu.Item>


        </Menu.Menu>
      </Menu>
    );
  }
}

export default Navbar;
