import React, { Component } from "react";
import PetsInfo from "../components/PetsInfo";
import API from "../API";

export default class ListUserFollowings extends Component {
  constructor() {
    super();
    this.state = {
      pets: "",
      loading: true,
    };
  }
  componentDidMount() {
    API.get(`userFollowing/${this.props.match.params.id}`).then((pets) =>
      this.setState({ pets, loading: false })
    );
  }
  render() {
    return (
      <div>
        {this.state.loading ? (
          <h1>Loading..</h1>
        ) : this.state.pets.length > 0 ? (
          this.state.pets.map((pet, index) => (
            <div
              onClick={(e) =>
                this.props.history.push(`/pet_profile/${pet.pet.id}`)
              }
              key={index}
            >
              {/* {console.log(pet.pet)} */}
              <PetsInfo pet={pet.pet} />
            </div>
          ))
        ) : null}
      </div>
    );
  }
}
