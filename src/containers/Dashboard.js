import React, { Component } from "react";
import Header from "../Header/Header";
import UserProfile from "../UserProfile/UserProfile";
import PetProfile from "../PetsProfile/PetProfile";
import ShowPost from "../Post/ShowPost";
import Search from "../Search/Search.js";
import ListUserFollowings from "../components/ListUserFollowings";
import ListPetsFollowers from "../components/ListPetsFollowers";
import Updates from "../updates/updates";
import BrowsePosts from "../BrowsePosts/BrowsePosts";
import NavBar from "../NavBar/NavBar";
import { Route, withRouter } from "react-router-dom";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }
  componentDidMount() {
    this.setState({
      loading: false,
    });
    this.props.history.push(`/user_profile/${this.props.user}`);
  }

  handleSignOut = () => {
    this.props.signOut();
    this.props.history.push("/");
  };

  render() {
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
            path={`/user_profile/:id`}
            render={(routerProps) => (
              <UserProfile
                {...routerProps}
                signOut={this.props.signOut}
                LoggedUserId={this.props.user}
              />
            )}
          />
          <Route
            path={`/pet_profile/:id`}
            render={(routerProps) => (
              <PetProfile {...routerProps} LoggedUserId={this.props.user} />
            )}
          />
          <Route
            path={`/post/:id`}
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
            path={`/browse`}
            render={(routerProps) => <BrowsePosts {...routerProps} />}
          />
        </div>
      </div>
    );
  }
}
export default withRouter(Dashboard);
