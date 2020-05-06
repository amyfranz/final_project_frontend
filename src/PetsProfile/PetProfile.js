import PetsInfo from "../components/PetsInfo";
import PetStats from "./PetStats";
import PetBtns from "./PetBtns";
import Posts from "../containers/Posts";
import PetBtnNotLoggedUser from "./PetBtnNotLoggedUser";
import PetAddOrEdit from "../PetsProfile/PetAddOrEdit";
import PostPic from "../PostPic/PostPic";
import API from "../API";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default class PetProfile extends Component {
  constructor() {
    super();
    this.state = {
      pet: "",
      loading: true,
      editing: false,
      posting: false,
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
        {this.state.loading ? (
          <FontAwesomeIcon className="Loading" icon={faSpinner} spin />
        ) : (
          <div>
            {!this.state.editing ? (
              <div>
                {!this.state.posting ? (
                  <div className="PetProfileInfo">
                    <PetsInfo pet={this.state.pet} />
                    <PetStats
                      pet={this.state.pet}
                      viewFollowers={this.viewFollowers}
                    />
                    {this.state.pet.user_id === this.props.LoggedUserId ? (
                      <PetBtns
                        editPet={this.editPet}
                        deletePet={this.deletePet}
                        newPost={this.newPost}
                      />
                    ) : (
                      <PetBtnNotLoggedUser
                        followed={
                          this.state.pet.followings.find(
                            (following) =>
                              following.user_id === this.props.LoggedUserId
                          )
                            ? true
                            : false
                        }
                        handleNewFollow={this.handleNewFollow}
                      />
                    )}
                    <Posts posts={this.state.pet.posts} props={this.props} />
                  </div>
                ) : (
                  <PostPic submit={this.submitNewPost} goBack={this.goBack} />
                )}
              </div>
            ) : (
              <PetAddOrEdit
                pet={this.state.pet}
                submit={this.handleEditPet}
                goBack={this.goBack}
              />
            )}
          </div>
        )}
      </div>
    );
  }
  goBack = () => {
    this.setState({ editing: false, posting: false });
  };
  editPet = () => {
    this.setState({ editing: true });
  };

  newPost = () => {
    this.setState({ posting: true });
  };

  deletePet = () => {
    const q = "To delete your pet, please type 'delete'";
    var response = prompt(q);
    if (response === "delete") {
      API.destroy(`pets/${this.state.pet.id}`).then((e) =>
        this.props.history.push(`/user_profile/${this.props.LoggedUserId}`)
      );
    }
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

  handleEditPet = (e, image) => {
    e.preventDefault();
    const body = {
      pet: {
        name: e.target.name.value,
        bio: e.target.bio.value,
        profile_pic: image,
      },
    };
    API.patch(`pets/${this.state.pet.id}`, body).then((pet) => {
      this.setState({ pet, editing: false });
    });
  };

  submitNewPost = (e, image) => {
    e.preventDefault();
    debugger;
    const body = {
      post: {
        bio: e.target.bio.value,
        pet_id: this.state.pet.id,
        posted: Date.now,
        image: image,
        effect: e.target.effect.value,
      },
    };
    API.post("posts", body).then((pet) =>
      this.setState({ pet, posting: false })
    );
  };
}
