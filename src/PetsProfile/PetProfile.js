// import React from "react";
import PetsInfo from "../components/PetsInfo";
import PetStats from "./PetStats";
import PetBtns from "./PetBtns";
import Posts from "../containers/Posts";
import PetBtnNotLoggedUser from "./PetBtnNotLoggedUser";
import API from "../API";

// export default function PetProfile({
//   pet,
//   loggedUser,
//   handlePageChange,
//   handleNewFollow,
// }) {
//   return (
//     <div>
//       hello
//       {/* <PetsInfo pet={pet} />
//       <PetStats pet={pet} />
//       {loggedUser.pets.includes(pet) ? (
//         <PetBtns handlePageChange={handlePageChange} pet={pet} />
//       ) : (
//         <PetBtnNotLoggedUser
//           followed={
//             pet.followings.find(
//               (following) => following.user_id === loggedUser.id
//             )
//               ? true
//               : false
//           }
//           handleNewFollow={handleNewFollow}
//         />
//       )}
//       <Posts posts={pet.posts} handlePageChange={handlePageChange} /> */}
//     </div>
//   );
// }

import React, { Component } from "react";

export default class PetProfile extends Component {
  constructor() {
    super();
    this.state = {
      pet: "",
      loading: true,
    };
  }

  componentDidMount() {
    API.get(`pets/${this.props.match.params.id}`).then((pet) => {
      this.setState({ pet, loading: false });
    });
  }
  render() {
    return (
      <div>
        {this.state.loading ? (
          <h1>Loading..</h1>
        ) : (
          <div>
            <PetsInfo pet={this.state.pet} />
            <PetStats pet={this.state.pet} />
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
  editPet = () => {
    this.props.history.push(`/edit_pet/${this.state.pet.id}`);
  };

  newPost = () => {
    this.props.history.push(`/post_pic/${this.state.pet.id}`);
  };

  deletePet = () => {
    alert("pet deleted");
  };
  handleNewFollow = (e, followed) => {
    debugger;
    e.preventDefault();
    const body = {
      following: {
        pet_id: this.state.pet.id,
        user_id: this.props.LoggedUserId,
      },
    };
    followed
      ? API.post("followings", body)
      : API.destroy(
          `followings/${
            this.state.pet.followings.find(
              (follow) => follow.user_id === this.props.LoggedUserId
            ).id
          }`
        );
  };
}
