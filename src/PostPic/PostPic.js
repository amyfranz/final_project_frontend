import React, { Component } from "react";
import ShowImage from "../components/ShowImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import API from "../API.js";
import "./PostPic.css";

export default class PostPic extends Component {
  constructor() {
    super();
    this.state = {
      image:
        "https://res.cloudinary.com/petatude/image/upload/v1589280161/pueb1c98sv3mpuymo7yx.png",
      bio: "",
      effect: "auto_color",
      loading: false,
      errors: null,
    };
  }

  render() {
    return (
      <div className="PostPic">
        <form
          onSubmit={(e) =>
            this.state.loading ? this.isLoading(e) : this.submitNewPost(e)
          }
          className="PostPicForm"
        >
          <div className="Errors">
            {this.state.errors
              ? this.state.errors.map((error, index) => (
                  <h1 key={index}>{error}</h1>
                ))
              : null}
          </div>
          <div className="PostPicImage">
            {this.state.loading ? (
              <FontAwesomeIcon icon={faSpinner} spin size="6x" />
            ) : (
              <div className="PostPicPic">
                <ShowImage
                  image={this.state.image.split("/").slice(-1)[0].split(".")[0]}
                  effect={this.state.effect}
                />
              </div>
            )}
            <input
              type="file"
              name="files"
              onChange={(e) => this.fileChange(e)}
              accept=".png, .jpg, .jpeg"
            />
          </div>
          <input
            type="text"
            name="bio"
            className="BioInput"
            placeholder="Image Bio"
            onChange={this.bioChange}
          />
          <div className="filter">
            <div className="filterContainer">
              <label>
                <p>None</p>
                <ShowImage
                  image={this.state.image.split("/").slice(-1)[0].split(".")[0]}
                  effect="auto_color"
                />
              </label>
              <input
                type="radio"
                name="effect"
                value="auto_color"
                defaultChecked
                onChange={this.radioButtonChange}
              />
            </div>
            <div className="filterContainer">
              <label>
                <p>Al Dente</p>
                <ShowImage
                  image={this.state.image.split("/").slice(-1)[0].split(".")[0]}
                  effect="art:al_dente"
                />
              </label>
              <input
                type="radio"
                name="effect"
                value="art:al_dente"
                onChange={this.radioButtonChange}
              />
            </div>
            <div className="filterContainer">
              <label>
                <p>Audrey</p>
                <ShowImage
                  image={this.state.image.split("/").slice(-1)[0].split(".")[0]}
                  effect="art:audrey"
                />
              </label>
              <input
                type="radio"
                name="effect"
                value="art:audrey"
                onChange={this.radioButtonChange}
              />
            </div>
            <div className="filterContainer">
              <label>
                <p>Aurora</p>
                <ShowImage
                  image={this.state.image.split("/").slice(-1)[0].split(".")[0]}
                  effect="art:aurora"
                />
              </label>
              <input
                type="radio"
                name="effect"
                value="art:aurora"
                onChange={this.radioButtonChange}
              />
            </div>
            <div className="filterContainer">
              <label>
                <p>Daguerre</p>
                <ShowImage
                  image={this.state.image.split("/").slice(-1)[0].split(".")[0]}
                  effect="art:daguerre"
                />
              </label>
              <input
                type="radio"
                name="effect"
                value="art:daguerre"
                onChange={this.radioButtonChange}
              />
            </div>
            <div className="filterContainer">
              <label>
                <p>Eucalyptus</p>
                <ShowImage
                  image={this.state.image.split("/").slice(-1)[0].split(".")[0]}
                  effect="art:eucalyptus"
                />
              </label>
              <input
                type="radio"
                name="effect"
                value="art:eucalyptus"
                onChange={this.radioButtonChange}
              />
            </div>
            <div className="filterContainer">
              <label>
                <p>Fes</p>
                <ShowImage
                  image={this.state.image.split("/").slice(-1)[0].split(".")[0]}
                  effect="art:fes"
                />
              </label>
              <input
                type="radio"
                name="effect"
                value="art:fes"
                onChange={this.radioButtonChange}
              />
            </div>
            <div className="filterContainer">
              <label>
                <p>Frost</p>
                <ShowImage
                  image={this.state.image.split("/").slice(-1)[0].split(".")[0]}
                  effect="art:frost"
                />
              </label>
              <input
                type="radio"
                name="effect"
                value="art:frost"
                onChange={this.radioButtonChange}
              />
            </div>
            <div className="filterContainer">
              <label>
                <p>Hairspray</p>
                <ShowImage
                  image={this.state.image.split("/").slice(-1)[0].split(".")[0]}
                  effect="art:hairspray"
                />
              </label>
              <input
                type="radio"
                name="effect"
                value="art:hairspray"
                onChange={this.radioButtonChange}
              />
            </div>
            <div className="filterContainer">
              <label>
                <p>Refresh</p>
                <ShowImage
                  image={this.state.image.split("/").slice(-1)[0].split(".")[0]}
                  effect="art:refresh"
                />
              </label>
              <input
                type="radio"
                name="effect"
                value="art:refresh"
                onChange={this.radioButtonChange}
              />
            </div>
            <div className="filterContainer">
              <label>
                <p>Sizzle</p>
                <ShowImage
                  image={this.state.image.split("/").slice(-1)[0].split(".")[0]}
                  effect="art:sizzle"
                />
              </label>
              <input
                type="radio"
                name="effect"
                value="art:sizzle"
                onChange={this.radioButtonChange}
              />
            </div>
            <div className="filterContainer">
              <label>
                <p>Zorro</p>
                <ShowImage
                  image={this.state.image.split("/").slice(-1)[0].split(".")[0]}
                  effect="art:zorro"
                />
              </label>
              <input
                type="radio"
                name="effect"
                value="art:zorro"
                onChange={this.radioButtonChange}
              />
            </div>
            <div className="filterContainer">
              <label>
                <p>Incognito</p>
                <ShowImage
                  image={this.state.image.split("/").slice(-1)[0].split(".")[0]}
                  effect="art:incognito"
                />
              </label>
              <input
                type="radio"
                name="effect"
                value="art:incognito"
                onChange={this.radioButtonChange}
              />
            </div>
            <div className="filterContainer">
              <label>
                <p>Ukulele</p>
                <ShowImage
                  image={this.state.image.split("/").slice(-1)[0].split(".")[0]}
                  effect="art:ukulele"
                />
              </label>
              <input
                type="radio"
                name="effect"
                value="art:ukulele"
                onChange={this.radioButtonChange}
              />
            </div>
            <div className="filterContainer">
              <label>
                <p>Peacock</p>
                <ShowImage
                  image={this.state.image.split("/").slice(-1)[0].split(".")[0]}
                  effect="art:peacock"
                />
              </label>
              <input
                type="radio"
                name="effect"
                value="art:peacock"
                onChange={this.radioButtonChange}
              />
            </div>
          </div>
          <div className="PostPicBtns">
            <input type="submit" value="Post" />
            <button
              onClick={(e) =>
                this.props.history.push(`/pets/${this.props.match.params.id}`)
              }
            >
              Back
            </button>
          </div>
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

  bioChange = (e) => {
    this.setState({ bio: e.target.value });
  };

  isLoading = (e) => {
    e.preventDefault();
    alert("please wait till the image is loaded");
  };
  radioButtonChange = (e) => {
    this.setState({ effect: e.target.value });
  };
  submitNewPost = (e) => {
    e.preventDefault();
    const body = {
      post: {
        bio: this.state.bio,
        pet_id: this.props.match.params.id,
        posted: Date.now,
        image: this.state.image,
        effect: this.state.effect,
      },
    };
    API.post("posts", body).then(({ messages }) =>
      messages !== "success"
        ? this.setState({ errors: messages })
        : this.props.history.push(`/pets/${this.props.match.params.id}`)
    );
  };
}
