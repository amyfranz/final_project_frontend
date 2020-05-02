import React, { Component } from "react";

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

  render() {
    return (
      <div>
        <form
          onSubmit={(e) =>
            this.state.loading
              ? this.isLoading(e)
              : this.props.handleEditProfile(e, this.state.image)
          }
        >
          <input
            type="file"
            name="files"
            onChange={(e) => this.fileChange(e)}
            accept=".png, .jpg, .jpeg"
          />
          {this.state.loading ? (
            <h3>Loading...</h3>
          ) : (
            <img src={this.state.image} alt="" />
          )}
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
        <button onClick={this.props.goBack}>Go back</button>
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
