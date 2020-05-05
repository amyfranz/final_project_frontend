import React, { Component } from "react";
import LogIn from "../LogIn/LogIn";
import SignUp from "../SignIn/SignIn";

export default class Authorization extends Component {
  constructor() {
    super();
    this.state = {
      logIn: true,
    };
  }
  render() {
    return (
      <div>
        {this.state.logIn ? (
          <LogIn
            LogIn={this.props.LogInFormSubmit}
            changeLogIn={this.changeLogIn}
          />
        ) : (
          <SignUp changeLogIn={this.changeLogIn} />
        )}
      </div>
    );
  }
  changeLogIn = () => {
    this.setState({ logIn: !this.state.logIn });
  };
}
