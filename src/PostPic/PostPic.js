import React, { Component } from "react";
import ShowImage from "../components/ShowImage";
import defaultImage from "../question_mark.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import "./PostPic.css";

export default class PostPic extends Component {
  constructor() {
    super();
    this.state = { image: "", effect: "auto_color", loading: false };
  }
  render() {
    return (
      <div className="PostPic">
        <form
          onSubmit={(e) =>
            this.state.loading
              ? this.isLoading(e)
              : this.props.submit(e, this.state.image)
          }
          className="PostPicForm"
        >
          <div className="PostPicImage">
            {this.state.loading ? (
              <FontAwesomeIcon icon={faSpinner} spin size="6x" />
            ) : (
              <div className="PostPicPic">
                {this.state.image ? (
                  <ShowImage
                    image={
                      this.state.image.split("/").slice(-1)[0].split(".")[0]
                    }
                    effect={this.state.effect}
                  />
                ) : (
                  <img src={defaultImage} alt="" />
                )}
              </div>
            )}
            <input
              type="file"
              name="files"
              onChange={(e) => this.fileChange(e)}
              accept=".png, .jpg, .jpeg"
              required
            />
          </div>
          <input
            type="text"
            name="bio"
            className="BioInput"
            placeholder="Image Bio"
            onChange={this.bioChange}
            required
          />
          {this.state.image ? (
            <div className="filter">
              <div className="filterContainer">
                <label>
                  <p>None</p>
                  <img src={this.state.image} alt="" />
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
                    image={
                      this.state.image.split("/").slice(-1)[0].split(".")[0]
                    }
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
                    image={
                      this.state.image.split("/").slice(-1)[0].split(".")[0]
                    }
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
                    image={
                      this.state.image.split("/").slice(-1)[0].split(".")[0]
                    }
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
                    image={
                      this.state.image.split("/").slice(-1)[0].split(".")[0]
                    }
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
                    image={
                      this.state.image.split("/").slice(-1)[0].split(".")[0]
                    }
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
                    image={
                      this.state.image.split("/").slice(-1)[0].split(".")[0]
                    }
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
                    image={
                      this.state.image.split("/").slice(-1)[0].split(".")[0]
                    }
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
                    image={
                      this.state.image.split("/").slice(-1)[0].split(".")[0]
                    }
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
                    image={
                      this.state.image.split("/").slice(-1)[0].split(".")[0]
                    }
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
                    image={
                      this.state.image.split("/").slice(-1)[0].split(".")[0]
                    }
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
                    image={
                      this.state.image.split("/").slice(-1)[0].split(".")[0]
                    }
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
                    image={
                      this.state.image.split("/").slice(-1)[0].split(".")[0]
                    }
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
                    image={
                      this.state.image.split("/").slice(-1)[0].split(".")[0]
                    }
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
                    image={
                      this.state.image.split("/").slice(-1)[0].split(".")[0]
                    }
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
          ) : null}
          <div className="PostPicBtns">
            <input type="submit" value="Post" />
            <button onClick={this.props.goBack}>Back</button>
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
}
