import React, { Component } from "react";
import API from "../API";

export default class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      first_name: "",
      last_name: "",
      username: "",
      email: "",
    };
  }

  componentDidMount() {
    API.get(`users/${this.props.match.params.id}`).then((user) =>
      this.setState({
        first_name: user.first_name,
        last_name: user.last_name,
        username: user.username,
        email: user.email,
        loading: false,
      })
    );
  }

  render() {
    return (
      <div>
        {this.state.loading ? (
          <h1>Loading...</h1>
        ) : (
          <form onSubmit={this.handleEditProfile}>
            <label>First Name:</label>
            <input
              type="text"
              value={this.state.first_name}
              name="first_name"
              placeholder="First Name"
              onChange={this.handleChange}
              required
            />
            <label>Last Name:</label>
            <input
              type="text"
              value={this.state.last_name}
              name="last_name"
              placeholder="Last Name"
              onChange={this.handleChange}
              required
            />
            <label>Username:</label>
            <input
              type="text"
              value={this.state.username}
              name="username"
              placeholder="Username"
              onChange={this.handleChange}
              required
            />
            <label>Email:</label>
            <input
              type="email"
              value={this.state.email}
              name="email"
              placeholder="Email"
              onChange={this.handleChange}
              required
            />
            <input type="submit" value="Save" />
          </form>
        )}
      </div>
    );
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleEditProfile = (e) => {
    e.preventDefault();
    const body = {
      user: {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        username: this.state.username,
        email: this.state.email,
      },
    };
    API.patch(`users/${this.props.match.params.id}`, body);
    this.props.history.push(`/user_profile/${this.props.match.params.id}`);
  };
}
