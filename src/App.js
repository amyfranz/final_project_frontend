import React, { Component } from "react";
import Dashboard from "./containers/Dashboard.js";
import Authorization from "./containers/Authorization";
import { BrowserRouter as Router } from "react-router-dom";
import API from "./API.js";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      authenticated: false,
    };
  }

  componentDidMount() {
    if (localStorage.token) {
      API.getWithToken("validate", localStorage.token).then((json) =>
        this.SignIn(json.user, json.token)
      );
    }
  }

  render() {
    return (
      <div>
        {this.state.authenticated ? (
          <Router>
            <Dashboard signOut={this.signOut} user={this.state.user} />
          </Router>
        ) : (
          <Authorization LogInFormSubmit={this.LogInFormSubmit} />
        )}
      </div>
    );
  }

  SignIn = (user, token) => {
    if (token) {
      this.setState({ user, authenticated: true });
      localStorage.token = token;
    } else {
      alert("Sign in details are incorrect");
    }
  };

  signOut = () => {
    API.get(`signout/${this.state.user}`).then((e) => {
      this.setState({
        user: null,
        authenticated: false,
      });
      localStorage.removeItem("token");
    });
  };

  LogInFormSubmit = (event, data) => {
    event.preventDefault();
    API.post("sign_in", data).then(({ user, token }) => {
      this.SignIn(user, token);
    });
  };
}
