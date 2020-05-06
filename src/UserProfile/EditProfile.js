import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

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
    };
  }

  componentDidMount() {
    this.setState({
      first_name: this.props.user.first_name,
      last_name: this.props.user.last_name,
      username: this.props.user.username,
      email: this.props.user.email,
      image: this.props.user.profile_pic,
    });
  }
  componentDidUpdate(prevProps) {
    if (prevProps.errors !== this.props.errors) {
      setTimeout(() => {
        this.setState({ errors: [] });
      }, 10000);
    }
  }

  render() {
    return (
      <div className="EditUser">
        <form
          className="EditUserForm"
          onSubmit={(e) =>
            this.state.loading
              ? this.isLoading(e)
              : this.props.handleEditProfile(e, this.state.image)
          }
        >
          <div className="Errors">
            {this.props.errors
              ? this.props.errors.map((error, index) => (
                  <h1 key={index}>{error}</h1>
                ))
              : null}
          </div>
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
            <button onClick={this.props.goBack}>Back</button>
          </div>
        </form>
      </div>
    );
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
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
