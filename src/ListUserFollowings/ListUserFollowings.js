import React, { Component } from "react";
import PetsInfo from "../components/PetsInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import API from "../API";
import "./ListUserFollowings.css";

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
          <FontAwesomeIcon className="Loading" icon={faSpinner} spin />
        ) : this.state.pets.length > 0 ? (
          this.state.pets.map((pet, index) => (
            <div
              onClick={(e) =>
                this.props.history.push(`/pets/${pet.pet.id}`)
              }
              key={index}
              className="ListUserFollowings"
            >
              <PetsInfo pet={pet.pet} />
            </div>
          ))
        ) : null}
      </div>
    );
  }
}
