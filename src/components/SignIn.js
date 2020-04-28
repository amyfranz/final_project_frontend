import React, { Component } from "react";
import API from "../API";

export default class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      username: "",
      email: "",
      password: "",
      password_confirmation: "",
    };
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    if (this.state.password !== this.state.password_confirmation) {
      alert("The user could not be created");
      return;
    }
    API.post("users", {
      user: {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
      },
    }).then(() => this.props.history.push("/login"));
  };

  addUserToState = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            name="first_name"
            onChange={this.addUserToState}
            placeholder="First Name"
            required
          ></input>
          <input
            type="text"
            name="last_name"
            onChange={this.addUserToState}
            placeholder="Last Name"
            required
          ></input>
          <input
            type="text"
            name="username"
            onChange={this.addUserToState}
            placeholder="Username"
            required
          ></input>
          <input
            type="email"
            name="email"
            onChange={this.addUserToState}
            placeholder="Email Address"
            required
          ></input>
          <input
            type="password"
            name="password"
            onChange={this.addUserToState}
            placeholder="Password"
            required
          ></input>
          <input
            type="password"
            name="password_confirmation"
            onChange={this.addUserToState}
            placeholder="Password Confirmation"
            required
          ></input>
          <input type="submit" value="Submit" />
        </form>
        <p onClick={this.props.changeLogIn}>Already A User? Log In</p>
      </div>
    );
  }
}
