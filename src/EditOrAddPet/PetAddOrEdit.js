import React, { Component } from "react";
import defaultImage from "../paw.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import "./PetAddOrEdit.css";
import API from "../API";

export default class PetAddOrEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      bio: "",
      image: defaultImage,
      loading: false,
      edit: false,
      errors: [],
    };
  }

  componentDidMount() {
    if (!this.props.match.path.includes("users")) {
      API.get(`pets/${this.props.match.params.id}`).then((pet) =>
        this.setState({
          name: pet.name,
          bio: pet.bio,
          image: pet.profile_pic,
          edit: true,
        })
      );
    }
  }

  render() {
    return (
      <div className="EditOrAddPet">
        <form
          className="EditOrAddPetForm"
          onSubmit={(e) =>
            this.state.loading
              ? this.isLoading(e)
              : this.state.edit
              ? this.handleEditPet(e)
              : this.handleAddPet(e)
          }
        >
          <div className="Errors">
            {this.state.errors.length > 0
              ? this.state.errors.map((error, index) => (
                  <h1 key={index}>{error}</h1>
                ))
              : null}
          </div>
          <div className="EditOrAddPetProfilePic">
            {this.state.loading ? (
              <FontAwesomeIcon icon={faSpinner} spin size="6x" />
            ) : (
              <img
                src={this.state.image}
                alt=""
                className="EditOrAddPetImage"
              />
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
            <button
              onClick={(e) =>
                this.props.history.push(
                  this.state.edit
                    ? `/pets/${this.props.match.params.id}`
                    : `/users/${this.props.match.params.id}`
                )
              }
            >
              Back
            </button>
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
    this.setState({ errors: ["please wait till the image is loaded"] });
  };

  handleAddPet = (e) => {
    e.preventDefault();
    const body = {
      pet: {
        name: this.state.name,
        bio: this.state.bio,
        user_id: this.props.match.params.id,
        profile_pic: this.state.image,
      },
    };
    API.post("pets", body).then(({ messages }) => {
      messages !== "success"
        ? this.setState({ errors: messages })
        : this.props.history.push(`/users/${this.props.match.params.id}`);
    });
  };
  handleEditPet = (e) => {
    e.preventDefault();
    const body = {
      pet: {
        name: this.state.name,
        bio: this.state.bio,
        profile_pic: this.state.image,
      },
    };
    API.patch(`pets/${this.props.match.params.id}`, body).then(
      ({ messages }) => {
        messages !== "success"
          ? this.setState({ errors: messages })
          : this.props.history.push(`/pets/${this.props.match.params.id}`);
      }
    );
  };
}
