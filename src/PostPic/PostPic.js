import React, { Component } from "react";
import ShowImage from "../components/ShowImage";

export default class PostPic extends Component {
  constructor() {
    super();
    this.state = { image: "", effect: "auto_color", loading: false };
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
            <div>
              <ShowImage
                image={this.state.image.split("/").slice(-1)[0].split(".")[0]}
                effect={this.state.effect}
              />
              <div>
                <input
                  type="radio"
                  name="effect"
                  value="auto_color"
                  defaultChecked
                  onChange={this.radioButtonChange}
                />
                <label>
                  <p>None</p>
                  <img src={this.state.image} alt="" />
                </label>
                <input
                  type="radio"
                  name="effect"
                  value="art:al_dente"
                  onChange={this.radioButtonChange}
                />
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
                  value="art:audrey"
                  onChange={this.radioButtonChange}
                />
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
                  value="art:aurora"
                  onChange={this.radioButtonChange}
                />
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
                  value="art:daguerre"
                  onChange={this.radioButtonChange}
                />
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
                  value="art:eucalyptus"
                  onChange={this.radioButtonChange}
                />
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
                  value="art:fes"
                  onChange={this.radioButtonChange}
                />
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
                  value="art:frost"
                  onChange={this.radioButtonChange}
                />
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
                  value="art:hairspray"
                  onChange={this.radioButtonChange}
                />
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
                  value="art:refresh"
                  onChange={this.radioButtonChange}
                />
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
                  value="art:sizzle"
                  onChange={this.radioButtonChange}
                />
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
                  value="art:zorro"
                  onChange={this.radioButtonChange}
                />
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
                  value="art:incognito"
                  onChange={this.radioButtonChange}
                />
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
                  value="art:ukulele"
                  onChange={this.radioButtonChange}
                />
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
                  value="art:peacock"
                  onChange={this.radioButtonChange}
                />
                <label>
                  <p>Peacock</p>
                  <ShowImage
                    image={
                      this.state.image.split("/").slice(-1)[0].split(".")[0]
                    }
                    effect="art:peacock"
                  />
                </label>
              </div>
            </div>
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
  radioButtonChange = (e) => {
    this.setState({ effect: e.target.value });
  };
}
