import React, { Component } from "react";
import API from "../API";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import "./EditProfile.css";

// This is code to edit a edit a users profile
// It was done by Amy Franz
// Lasted edited on 11/05/2020

export default class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      first_name: "",
      last_name: "",
      username: "",
      email: "",
      image: "",
      user_errors: null,
    };
  }

  // Accessing the users information to prefill the input boxes
  componentDidMount() {
    API.get(`users/${this.props.match.params.id}`).then((user) =>
      this.setState({
        first_name: user.first_name,
        last_name: user.last_name,
        username: user.username,
        email: user.email,
        image: user.profile_pic,
      })
    );
  }

  render() {
    return (
      <div className="EditUser">
        <form
          className="EditUserForm"
          onSubmit={(e) =>
            this.state.loading ? this.isLoading(e) : this.handleEditProfile(e)
          }
        >
          {/* Checks if the state has any errors and if so it prepending the errors at the start of the form*/}
          <div className="Errors">
            {this.state.user_errors
              ? this.state.user_errors.map((error, index) => (
                  <h1 key={index}>{error}</h1>
                ))
              : null}
          </div>
          {/* Shows a loading sign if the image is loading else it shows the image */}
          <div className="EditUserProfilePic">
            {this.state.loading ? (
              <FontAwesomeIcon icon={faSpinner} spin size="6x" />
            ) : (
              <img src={this.state.image} alt="" className="EditUserImage" />
            )}
            <input
              type="file"
              name="files"
              onChange={(e) => this.fileChange(e)}
              accept=".png, .jpg, .jpeg"
            />
          </div>
          <div className="EditUserFormField">
            <div className="EditUserFormLabels">
              <label>
                <p>First Name:</p>
              </label>
            </div>
            <input
              type="text"
              value={this.state.first_name}
              name="first_name"
              placeholder="First Name"
              onChange={this.handleChange}
            />
          </div>
          <div className="EditUserFormField">
            <div className="EditUserFormLabels">
              <label>
                <p>Last Name:</p>
              </label>
            </div>
            <input
              type="text"
              value={this.state.last_name}
              name="last_name"
              placeholder="Last Name"
              onChange={this.handleChange}
            />
          </div>
          <div className="EditUserFormField">
            <div className="EditUserFormLabels">
              <label>
                <p>Username:</p>
              </label>
            </div>
            <input
              type="text"
              value={this.state.username}
              name="username"
              placeholder="Username"
              onChange={this.handleChange}
            />
          </div>
          <div className="EditUserFormField">
            <div className="EditUserFormLabels">
              <label>
                <p>Email:</p>
              </label>
            </div>
            <input
              type="text"
              value={this.state.email}
              name="email"
              placeholder="Email"
              onChange={this.handleChange}
            />
          </div>
          <div className="EditUserBtns">
            <input type="submit" value="Save" />
            {/* Sends a user back to the users profile if clicked on the back button */}
            <button
              onClick={(e) =>
                this.props.history.push(`/users/${this.props.match.params.id}`)
              }
            >
              Back
            </button>
          </div>
        </form>
      </div>
    );
  }

  // Changes the state when an input has been changed
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // User selects and image and this image is uploaded to cloudinary and is then saved in the state
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

  // Checks if the image has been uploaded to cloudinary and is saved in state
  isLoading = (e) => {
    e.preventDefault();
    this.setState({ user_errors: ["please wait till the image has loaded"] });
  };

  // Updates the user profile
  handleEditProfile = (e) => {
    e.preventDefault();
    const body = {
      user: {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        username: this.state.username,
        email: this.state.email,
        profile_pic: this.state.image,
      },
    };
    API.patch(`users/${this.props.match.params.id}`, body).then(
      ({ messages }) => {
        // Checks if the patch request has been successful
        messages !== "success"
          ? this.setState({ user_errors: messages })
          : this.props.history.push(`/users/${this.props.match.params.id}`);
      }
    );
  };
}
