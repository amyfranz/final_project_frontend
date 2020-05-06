import React, { Component } from "react";
import ShowUserInfo from "./ShowUserInfo";
import LoggedUserBtns from "./UserBtns";
import ListPets from "./ListPets";
import EditProfile from "../UserProfile/EditProfile";
import PetAddOrEdit from "../PetsProfile/PetAddOrEdit";
import Destroy from "../Destroy/Destroy";
import "../Destroy/Destroy.css";
import API from "../API";
import "./UserProfile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default class UserProfile extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      user: "",
      edit: false,
      editing: "",
      PetsErrors: null,
      UserErrors: null,
      delete: false,
      deleteError: null,
    };
  }
  componentDidMount() {
    API.get(`users/${this.props.match.params.id}`).then((user) => {
      this.setState({ user, loading: false });
    });
  }

  componentWillUnmount() {
    this.setState({ user: "", loading: true });
  }
  render() {
    return (
      <div className="UserProfile">
        {this.state.delete ? (
          <Destroy
            handleDelete={this.handleDelete}
            cancelDelete={this.cancelDelete}
            type="user"
            deleteErrors={this.state.deleteError}
          />
        ) : null}
        {this.state.loading ? (
          <div>
            <FontAwesomeIcon className="Loading" icon={faSpinner} spin />
          </div>
        ) : (
          <div>
            {!this.state.edit ? (
              <div
                className={`UserProfileShowUser ${
                  this.state.delete ? "Blur" : ""
                }`}
              >
                <div>
                  <ShowUserInfo
                    user={this.state.user}
                    viewFollowings={this.viewFollowings}
                  />
                </div>
                <div>
                  {this.state.user.id === this.props.LoggedUserId ? (
                    <LoggedUserBtns
                      editUser={this.editUser}
                      addPet={this.addPet}
                      deleteProfile={() => this.setState({ delete: true })}
                    />
                  ) : null}
                </div>
                <div>
                  {this.state.user.pets ? (
                    <div>
                      <h1 className="UserProfilePets">Owner of:</h1>
                      <div className="UserProfilePetProfile">
                        <ListPets
                          pets={this.state.user.pets}
                          props={this.props}
                        />
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            ) : (
              <div>
                {this.state.editing === "user" ? (
                  <EditProfile
                    user={this.state.user}
                    handleEditProfile={this.handleEditProfile}
                    goBack={this.goBack}
                    errors={this.state.UserErrors}
                  />
                ) : (
                  <PetAddOrEdit
                    submit={this.handleAddPet}
                    goBack={this.goBack}
                    errors={this.state.PetsErrors}
                  />
                )}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
  goBack = () => {
    this.setState({ edit: false, editing: "" });
  };
  editUser = () => {
    this.setState({ edit: true, editing: "user" });
  };

  addPet = () => {
    this.setState({ edit: true, editing: "pet" });
  };

  viewFollowings = () => {
    this.props.history.push(`/list_user_following/${this.state.user.id}`);
  };
  handleDelete = (e) => {
    e.preventDefault();
    if (e.target.delete.value === "delete") {
      API.destroy(`users/${this.props.LoggedUserId}`);
      this.props.signOut();
      this.props.history.push("/");
    } else {
      this.setState({ deleteError: "you did not type 'delete' correctly" });
    }
  };

  cancelProfile = (e) => {
    e.preventDefault();
    this.setState({ delete: false, deleteError: null });
  };

  handleEditProfile = (e, image) => {
    e.preventDefault();
    const body = {
      user: {
        first_name: e.target.first_name.value,
        last_name: e.target.last_name.value,
        username: e.target.username.value,
        email: e.target.email.value,
        profile_pic: image,
      },
    };
    API.patch(`users/${this.state.user.id}`, body).then(
      ({ user, messages }) => {
        messages
          ? this.setState({ UserErrors: messages })
          : this.setState({ user, edit: false, editing: "" });
      }
    );
  };
  handleAddPet = (e, image) => {
    e.preventDefault();
    const body = {
      pet: {
        name: e.target.name.value,
        bio: e.target.bio.value,
        user_id: this.state.user.id,
        profile_pic: image,
      },
    };
    API.post("pets", body).then(({ user, messages }) => {
      messages
        ? this.setState({ PetsErrors: messages })
        : this.setState({ user, edit: false, editing: "" });
    });
  };
}
