import React, { Component } from "react";

export default class PetAddOrEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      bio: "",
      image: "",
      loading: false,
    };
  }

  componentDidMount() {
    if (this.props.pet) {
      this.setState({
        name: this.props.pet.name,
        bio: this.props.pet.bio,
        image: this.props.pet.profile_pic,
      });
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.props.submit(e, this.state.image)}>
          <h1>Preview Image</h1>
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
          <label>Name:</label>
          <input
            type="text"
            value={this.state.name}
            name="name"
            placeholder="Name"
            onChange={this.handleChange}
            required
          />
          <label>Bio:</label>
          <textarea
            type="text"
            value={this.state.bio}
            name="bio"
            placeholder="Bio"
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
}
