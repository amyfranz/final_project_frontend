import React, { Component } from "react";
import ShowUserInfo from "./ShowUserInfo";
import LoggedUserBtns from "./UserBtns";
import ListPets from "./ListPets";
import EditProfile from "../UserProfile/EditProfile";
import PetAddOrEdit from "../PetsProfile/PetAddOrEdit";
import API from "../API";

export default class UserProfile extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      user: "",
      edit: false,
      editing: "",
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
      <div>
        {this.state.loading ? (
          <h1>Loading....</h1>
        ) : (
          <div>
            {!this.state.edit ? (
              <div>
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
                      deleteProfile={this.deleteProfile}
                    />
                  ) : null}
                </div>
                <div>
                  {this.state.user.pets ? (
                    <div>
                      <h1>Owner of:</h1>
                      <ListPets
                        pets={this.state.user.pets}
                        props={this.props}
                      />
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
                  />
                ) : (
                  <PetAddOrEdit
                    submit={this.handleAddPet}
                    goBack={this.goBack}
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

  deleteProfile = () => {
    const q = "To delete your user, please type 'delete'";
    var response = prompt(q);
    if (response === "delete") {
      API.destroy(`users/${this.props.LoggedUserId}`);
      this.props.signOut();
    }
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
    API.patch(`users/${this.state.user.id}`, body).then((user) =>
      this.setState({ user, edit: false, editing: "" })
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
    API.post("pets", body).then((user) => {
      this.setState({ user, edit: false, editing: "" });
    });
  };
}
