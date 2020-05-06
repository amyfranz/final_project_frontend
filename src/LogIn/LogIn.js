import React, { Component } from "react";
import "./LogIn.css";

export default class LogIn extends Component {
  constructor() {
    super();
    this.state = {
      username: null,
      password: null,
    };
  }
  addUserToState = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="LogInContainer">
        <div className="LogInLogo">
          <img src="assets/cat_logo.png" alt="" />
          <h1>Petatude</h1>
        </div>
        <div className="Errors">
          {this.props.error ? <h1>{this.props.error}</h1> : null}
        </div>
        <form
          onSubmit={(e) => this.props.LogIn(e, this.state)}
          className="LogInForm"
        >
          <div className="LogInFormTitle">
            <h1>Log In</h1>
          </div>
          <input
            type="text"
            name="username"
            onChange={this.addUserToState}
            placeholder="Username"
          ></input>
          <input
            type="password"
            name="password"
            onChange={this.addUserToState}
            placeholder="Password"
          ></input>
          <input type="submit" value="Submit" />
          <div className="GoToNewUser">
            <p onClick={this.props.changeLogIn}>Not A User? Sign Up</p>
          </div>
        </form>
      </div>
    );
  }
}
