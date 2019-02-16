import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
        <div class="ui three column centered grid">
      <div class="ui placeholder segment">
        <div class="ui two column very relaxed stackable grid">
          <div class="column">
            <div class="ui form">
              <div class="field">
                <label>Username</label>
                <div class="ui left icon input">
                  <input type="text" placeholder="Username" />
                  <i class="user icon" />
                </div>
              </div>
              <div class="field">
                <label>Password</label>
                <div class="ui left icon input">
                  <input type="password" />
                  <i class="lock icon" />
                </div>
              </div>
              <div class="ui blue submit button">Login</div>
            </div>
          </div>
          <div class="middle aligned column">
            <div class="ui big button">
              <i class="signup icon" />
              Sign Up
            </div>
          </div>
        </div>
        <div class="ui vertical divider">Or</div>
      </div>
      </div>
    );
  }
}

export default Login;
