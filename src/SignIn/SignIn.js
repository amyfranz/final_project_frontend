import React, { Component } from "react";
import "./SignIn.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
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
      errors: [],
    };
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    if (this.state.password !== this.state.password_confirmation) {
      this.state.errors.push("passwords do not match");
      this.setState({ errors: this.state.errors });
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
        ? this.setState({ errors: user.messages })
        : this.props.changeLogIn();
    });
  };

  addUserToState = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const src = this.state.image
      ? this.state.image
      : "assets/unkown_person.png";
    return (
      <div className="SignIn">
        <div className="SignInLogo">
          <div className="SignInLogoImage">
            <img src="assets/dog_logo.png" alt="" />
          </div>
          <h1 className="SignInLogoTitle">Petatude</h1>
        </div>
        <form
          onSubmit={(e) =>
            this.state.loading ? this.isLoading(e) : this.onFormSubmit(e)
          }
          className="SignInForm"
        >
          <div className="Errors">
            {this.state.errors.length > 0
              ? this.state.errors.map((error, index) => (
                  <h1 key={index}>{error}</h1>
                ))
              : null}
          </div>
          <div className="SignInFromProfilePic">
            <div className="SignInFromProfilePicPic">
              {this.state.loading ? (
                <FontAwesomeIcon icon={faSpinner} spin size="6x" />
              ) : (
                <img src={src} alt="" />
              )}
            </div>
            <div className="SignInFromProfilePicChoose">
              <input
                type="file"
                name="files"
                onChange={(e) => this.fileChange(e)}
                accept=".png, .jpg, .jpeg"
              />
            </div>
          </div>
          <input
            type="text"
            name="first_name"
            onChange={this.addUserToState}
            placeholder="First Name"
          ></input>
          <input
            type="text"
            name="last_name"
            onChange={this.addUserToState}
            placeholder="Last Name"
          ></input>
          <input
            type="text"
            name="username"
            onChange={this.addUserToState}
            placeholder="Username"
          ></input>
          <input
            type="email"
            name="email"
            onChange={this.addUserToState}
            placeholder="Email Address"
          ></input>
          <input
            type="password"
            name="password"
            onChange={this.addUserToState}
            placeholder="Password"
          ></input>
          <input
            type="password"
            name="password_confirmation"
            onChange={this.addUserToState}
            placeholder="Password Confirmation"
          ></input>
          <input type="submit" value="Submit" />
          <p onClick={() => this.props.changeLogIn()}>Already A User? Log In</p>
        </form>
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
