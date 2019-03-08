import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import Toolbar from "../components/Toolbar";
import "../css/homepage.css";


class ToolbarContainer extends Component {
  render() {
    return (
    <div id="toolbar">
    <Toolbar/>
    </div>
    );
  }
}

export default ToolbarContainer;
