import React, { Component } from "react";

export default class PostPic extends Component {
  constructor() {
    super();
    this.state = { image: "", loading: false };
  }
  render() {
    return (
      <div>
        <form
          onSubmit={(e) =>
            this.state.loading
              ? this.isLoading(e)
              : this.props.submit(e, this.state.image)
          }
        >
          <h1>Preview Image</h1>
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
            name="bio"
            placeholder="Image Bio"
            onChange={this.bioChange}
            required
          />
          <input type="submit" value="submit" />
        </form>
        <button onClick={this.props.goBack}>Go back</button>
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

  bioChange = (e) => {
    this.setState({ bio: e.target.value });
  };

  isLoading = (e) => {
    e.preventDefault();
    alert("please wait till the image is loaded");
  };
}
