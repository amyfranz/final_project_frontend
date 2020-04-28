import React, { Component } from "react";
import API from "../API";

export default class PetAddOrEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      bio: "",
    };
  }

  componentDidMount() {
    if (this.props.match.path.includes("edit_pet")) {
      API.get(`pets/${this.props.match.params.id}`).then((pet) =>
        this.setState({
          name: pet.name,
          bio: pet.bio,
        })
      );
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOrEditPet}>
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
      </div>
    );
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddOrEditPet = (e) => {
    e.preventDefault();
    const body = {
      pet: {
        name: this.state.name,
        bio: this.state.bio,
        user_id: this.props.LoggedUserId,
      },
    };
    if (this.props.match.path.includes("edit_pet")) {
      API.patch(`pets/${this.props.match.params.id}`, body);
    } else {
      API.post("pets", body);
    }
    this.props.history.goBack();
  };
}
