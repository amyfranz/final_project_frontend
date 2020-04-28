import React, { Component } from "react";

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
      <div>
        <form onSubmit={(e) => this.props.LogIn(e, this.state)}>
          <input
            type="text"
            name="username"
            onChange={this.addUserToState}
            placeholder="Username"
            required
          ></input>
          <input
            type="password"
            name="password"
            onChange={this.addUserToState}
            placeholder="Password"
            required
          ></input>
          <input type="submit" value="Submit" />
        </form>
        <p onClick={this.props.changeLogIn}>Not A User? Sign Up</p>
      </div>
    );
  }
}
