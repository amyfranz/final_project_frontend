import PetsInfo from "../components/PetsInfo";
import PetStats from "./PetStats";
import PetBtns from "./PetBtns";
import Posts from "../containers/Posts";
import PetBtnNotLoggedUser from "./PetBtnNotLoggedUser";
import PetAddOrEdit from "../EditOrAddPet/PetAddOrEdit";
import PostPic from "../PostPic/PostPic";
import API from "../API";
import Destroy from "../Destroy/Destroy";
import "../Destroy/Destroy.css";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import "./PetProfile.css";

export default class PetProfile extends Component {
  constructor() {
    super();
    this.state = {
      pet: "",
      loading: true,
      delete: false,
      deleteError: null,
    };
  }

  componentDidMount() {
    API.get(`pets/${this.props.match.params.id}`).then((pet) => {
      this.setState({ pet, loading: false });
    });
  }
  componentWillUnmount() {
    this.setState({ pet: "", loading: true });
  }
  render() {
    return (
      <div>
        {this.state.delete ? (
          <Destroy
            handleDelete={this.handleDelete}
            cancelDelete={this.cancelDelete}
            type="user"
            deleteErrors={this.state.deleteError}
          />
        ) : null}
        {this.state.loading ? (
          <FontAwesomeIcon className="Loading" icon={faSpinner} spin />
        ) : (
          <div className={`PetProfileInfo ${this.state.delete ? "Blur" : ""}`}>
            <PetsInfo pet={this.state.pet} />
            <PetStats pet={this.state.pet} viewFollowers={this.viewFollowers} />
            {this.state.pet.user_id === this.props.LoggedUserId ? (
              <PetBtns
                props={this.props}
                deletePet={(e) => this.setState({ delete: true })}
              />
            ) : (
              <PetBtnNotLoggedUser
                followed={
                  this.state.pet.followings.find(
                    (following) => following.user_id === this.props.LoggedUserId
                  )
                    ? true
                    : false
                }
                handleNewFollow={this.handleNewFollow}
              />
            )}
            <Posts posts={this.state.pet.posts} props={this.props} />
          </div>
        )}
      </div>
    );
  }

  handleDelete = (e) => {
    e.preventDefault();
    if (e.target.delete.value === "delete") {
      API.destroy(`pets/${this.state.pet.id}`).then((e) =>
        this.props.history.push(`/users/${this.props.LoggedUserId}`)
      );
    } else {
      this.setState({ deleteError: "you did not type 'delete' correctly" });
    }
  };

  cancelDelete = (e) => {
    e.preventDefault();
    this.setState({ delete: false, deleteError: null });
  };

  handleNewFollow = (e, followed) => {
    e.preventDefault();
    const body = {
      following: {
        pet_id: this.state.pet.id,
        user_id: this.props.LoggedUserId,
      },
    };
    const follow = this.state.pet.followings.find(
      (follow) => follow.user_id === this.props.LoggedUserId
    );
    followed
      ? API.post("followings", body).then((pet) => this.setState({ pet }))
      : API.destroy(`followings/${follow.id}`)
          .then((res) => res.json())
          .then((pet) => this.setState({ pet }));
  };
  viewFollowers = () => {
    this.props.history.push(`/list_pets_followers/${this.state.pet.id}`);
  };
}
