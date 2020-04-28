import React, { Component } from "react";

export default class PostPic extends Component {
  constructor() {
    super();
    this.state = { pic: "", src: "" };
  }
  render() {
    const reader = new FileReader();
    reader.addEventListener("load", function () {
      return this.result;
    });
    return (
      <div>
        <h1>Preview Image</h1>
        <input type="file" onChange={(e) => this.fileChange(e)} />
        <div className="imagePreview">
          <img
            src={
              this.state.pic
                ? console.log(reader.readAsDataURL(this.state.pic))
                : "https://i.ytimg.com/vi/Szy5Wm09ukY/maxresdefault.jpg"
            }
            alt="Preview"
            className="profileImage"
          />
        </div>
      </div>
    );
  }
  fileChange(e) {
    this.setState({ pic: e.target.files[0] });
  }

  //   src = () => {
  //     const reader = new FileReader();
  //     reader.addEventListener("load", function () {
  //       return this.result;
  //     });
  //     return reader.readAsDataURL(this.state.pic);
  //   };
}
