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
      image: "",
      loading: false,
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
        profile_pic: this.state.image,
      },
    }).then((user) => {
      user.messages
        ? user.messages.map((message) => alert(message))
        : this.props.changeLogIn();
    });
  };

  addUserToState = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <form
          onSubmit={(e) =>
            this.state.loading ? this.isLoading(e) : this.onFormSubmit(e)
          }
        >
          <input
            type="file"
            name="files"
            onChange={(e) => this.fileChange(e)}
            accept=".png, .jpg, .jpeg"
            required
          />
          {this.state.loading ? (
            <h3>Loading...</h3>
          ) : (
            <img src={this.state.image} alt="" />
          )}
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
        <p onClick={() => this.props.changeLogIn()}>Already A User? Log In</p>
      </div>
    );
  }
  fileChange = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "PostImages");
    this.setState({ loading: true });
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/petatude/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();

    this.setState({ image: file.secure_url, loading: false });
  };
  isLoading = (e) => {
    e.preventDefault();
    alert("please wait till the image is loaded");
  };
}
