import React, { Component } from "react";
import "./PetProfile.css";
import defaultImage from "../paw.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

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
    const src = this.state.image ? this.state.image : defaultImage;
    return (
      <div className="EditOrAddPet">
        <form
          className="EditOrAddPetForm"
          onSubmit={(e) =>
            this.state.loading
              ? this.isLoading(e)
              : this.props.submit(e, this.state.image)
          }
        >
          <div className="Errors">
            {this.props.errors
              ? this.props.errors.map((error, index) => (
                  <h1 key={index}>{error}</h1>
                ))
              : null}
          </div>
          <div className="EditOrAddPetProfilePic">
            {this.state.loading ? (
              <FontAwesomeIcon icon={faSpinner} spin size="6x" />
            ) : (
              <img src={src} alt="" className="EditOrAddPetImage" />
            )}
            <input
              type="file"
              name="files"
              onChange={(e) => this.fileChange(e)}
              accept=".png, .jpg, .jpeg"
            />
          </div>
          <div className="EditOrAddPetFormField">
            <div className="EditOrAddPetFormLabels">
              <label>
                <p>Name:</p>
              </label>
            </div>
            <input
              type="text"
              value={this.state.name}
              name="name"
              placeholder="Name"
              onChange={this.handleChange}
            />
          </div>
          <div className="EditOrAddPetFormField">
            <div className="EditOrAddPetFormLabels">
              <label>
                <p>Bio:</p>
              </label>
            </div>
            <input
              type="text"
              value={this.state.bio}
              name="bio"
              placeholder="Bio"
              onChange={this.handleChange}
            />
          </div>
          <div className="EditOrAddPetBtns">
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
