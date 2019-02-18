import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div className="ui three column centered grid">
        <div className="ui placeholder segment">
          <div className="ui two column very relaxed stackable grid">
            <div className="column">
              <div className="ui form">
                <div className="field">
                  <label>Username</label>
                  <div className="ui left icon input">
                    <input type="text" placeholder="Username" />
                    <i className="user icon" />
                  </div>
                </div>
                <div className="field">
                  <label>Password</label>
                  <div className="ui left icon input">
                    <input type="password" />
                    <i className="lock icon" />
                  </div>
                </div>
                <div className="ui teal submit button">Login</div>
              </div>
            </div>
            <div className="middle aligned column">
              <div className="ui big button">
                <i className="signup icon" />
                Sign Up
              </div>
            </div>
          </div>
          <div className="ui vertical divider">Or</div>
        </div>
      </div>
    );
  }
}

export default Login;