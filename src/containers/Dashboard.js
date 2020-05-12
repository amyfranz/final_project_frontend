import React, { Component } from "react";
import Header from "../Header/Header";
import UserProfile from "../UserProfile/UserProfile";
import PetProfile from "../PetsProfile/PetProfile";
import ShowPost from "../Post/ShowPost";
import Search from "../Search/Search.js";
import ListUserFollowings from "../ListUserFollowings/ListUserFollowings";
import ListPetsFollowers from "../ListPetsFollowers/ListPetsFollowers";
import Updates from "../updates/updates";
import BrowsePosts from "../BrowsePosts/BrowsePosts";
import NavBar from "../NavBar/NavBar";
import { Route, withRouter } from "react-router-dom";
import EditUserProfile from "../EditUserProfile/EditProfile";
import EditOrAddPet from "../EditOrAddPet/PetAddOrEdit";
import AddPost from "../PostPic/PostPic";
import API from "../API.js";

class Dashboard extends Component {
  handleSignOut = () => {
    this.props.signOut();
    this.props.history.push("/");
  };

  render() {
    window.onblur = () => {
      API.get(`signout/${this.props.user}`);
    };
    return (
      <div>
        <Header
          signOut={this.handleSignOut}
          history={this.props.history}
          LoggedUserId={this.props.user}
        />

        <NavBar history={this.props.history} LoggedUserId={this.props.user} />
        <div>
          <Route
            exact
            path={`/users/:id`}
            render={(routerProps) => (
              <UserProfile
                {...routerProps}
                signOut={this.props.signOut}
                LoggedUserId={this.props.user}
              />
            )}
          />
          <Route
            exact
            path={`/users/:id/edit`}
            render={(routerProps) => <EditUserProfile {...routerProps} />}
          />
          <Route
            exact
            path={`/pets/:id`}
            render={(routerProps) => (
              <PetProfile {...routerProps} LoggedUserId={this.props.user} />
            )}
          />
          <Route
            exact
            path={`/pets/:id/posts`}
            render={(routerProps) => <AddPost {...routerProps} />}
          />
          <Route
            exact
            path={`/pets/:id/edit`}
            render={(routerProps) => <EditOrAddPet {...routerProps} />}
          />
          <Route
            exact
            path={`/users/:id/pets`}
            render={(routerProps) => <EditOrAddPet {...routerProps} />}
          />
          <Route
            exact
            path={`/posts/:id`}
            render={(routerProps) => (
              <ShowPost {...routerProps} LoggedUserId={this.props.user} />
            )}
          />
          <Route
            path={`/search`}
            render={(routerProps) => (
              <Search {...routerProps} LoggedUserId={this.props.user} />
            )}
          />
          <Route
            path={`/list_pets_followers/:id`}
            render={(routerProps) => <ListPetsFollowers {...routerProps} />}
          />
          <Route
            path={`/list_user_following/:id`}
            render={(routerProps) => <ListUserFollowings {...routerProps} />}
          />
          <Route
            path={`/updates`}
            render={(routerProps) => (
              <Updates {...routerProps} LoggedUserId={this.props.user} />
            )}
          />
          <Route
            exact
            path={`/`}
            render={(routerProps) => <BrowsePosts {...routerProps} />}
          />
        </div>
      </div>
    );
  }
}
export default withRouter(Dashboard);

// submitNewPost = (e, image, effect) => {
//   e.preventDefault();
//   const body = {
//     post: {
//       bio: e.target.bio.value,
//       pet_id: this.state.pet.id,
//       posted: Date.now,
//       image: image,
//       effect: effect,
//     },
//   };
//   API.post("posts", body).then(({ pet, messages }) =>
//     messages
//       ? this.setState({ PostErrors: messages })
//       : this.setState({ pet, posting: false, PostErrors: null })
//   );
// };
