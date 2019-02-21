import React, { Component } from "react";

class Foother extends Component {
  render() {
    return (
      <div className="ui stackable four column grid">
        <a className="column" href="https://www.facebook.com/nest/">
          <i className="facebook f icon" />
        </a>

        <a className="column" href="https://twitter.com/nest">
          <i className="twitter icon" />
        </a>
        <a
          className="column"
          href="https://www.youtube.com/channel/UCWmlRLAOpx9f1t_cVkBx8-g"
        >
          <i className="youtube icon" />
        </a>
        <a
          className="column"
          href="https://github.com/DennisCarcamo/ExamUX.git"
        >
          <i className="github icon" />
        </a>
      </div>
    );
  }
}

export default Foother;
