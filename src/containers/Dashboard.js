import React, { Component } from "react";
import Header from "../components/Header";
import UserProfile from "../UserProfile/UserProfile";
import PetProfile from "../PetsProfile/PetProfile";
import ShowPost from "../Post/ShowPost";
import Search from "../Search/Search.js";
import PostPic from "../PostPic/PostPic";
import EditProfile from "../UserProfile/EditProfile";
import PetAddOrEdit from "../PetsProfile/PetAddOrEdit";
import NavBar from "../components/NavBar";
import API from "../API";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";

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

  // componentDidUpdate(prevProps) {
  //   if (prevProps.user !== this.props.user) {
  //     this.setState({
  //       loading: false,
  //       selected_user: this.props.user,
  //     });
  //   }
  // }

  render() {
    //   const renderPage = () => {
    //     let page;
    //     switch (this.state.page) {
    //       case "Profile":
    //         page = (
    //           <UserProfile
    //             user={this.state.selected_user}
    //             loggedUserID={this.props.user.id}
    //             handlePageChange={this.handlePageChange}
    //           />
    //         );
    //         break;
    //       case "PetProfile":
    //         page = this.props.user.pets ? (
    //           <PetProfile
    //             pet={this.state.selected_pet}
    //             loggedUser={this.props.user}
    //             handlePageChange={this.handlePageChange}
    //             handleNewFollow={this.handleNewFollow}
    //           />
    //         ) : null;
    //         break;
    //       case "ShowPost":
    //         page = this.props.user.pets ? (
    //           <ShowPost
    //             post={this.state.selected_post}
    //             handlePageChange={this.handlePageChange}
    //             handleNewComment={this.handleNewComment}
    //             handleNewLike={this.handleNewLike}
    //             userLogged={
    //               this.props.user.id === this.state.selected_user.id
    //                 ? true
    //                 : false
    //             }
    //             liked={
    //               this.state.selected_post.likes.find(
    //                 (like) => like.user.id === this.props.user.id
    //               )
    //                 ? true
    //                 : false
    //             }
    //           />
    //         ) : null;
    //         break;
    //       case "Search":
    //         page = <Search handlePageChange={this.handlePageChange} />;
    //         break;
    //       case "PostPic":
    //         page = <PostPic handlePageChange={this.handlePageChange} />;
    //         break;
    //       case "EditProfile":
    //         page = (
    //           <EditProfile
    //             user={this.props.user}
    //             handlePageChange={this.handlePageChange}
    //             handleEditProfile={this.handleEditProfile}
    //           />
    //         );
    //         break;
    //       case "AddPet":
    //         page = (
    //           <PetAddOrEdit
    //             pet={this.state.selected_pet}
    //             type={this.state.page}
    //             handlePageChange={this.handlePageChange}
    //             handleAddOrEditPet={this.handleAddOrEditPet}
    //           />
    //         );
    //         break;
    //       case "EditPet":
    //         page = (
    //           <PetAddOrEdit
    //             pet={this.state.selected_pet}
    //             type={this.state.page}
    //             handlePageChange={this.handlePageChange}
    //             handleAddOrEditPet={this.handleAddOrEditPet}
    //           />
    //         );
    //         break;
    //       default:
    //         page = (
    //           <UserProfile
    //             user={this.state.selected_user}
    //             loggedUserID={this.props.user.id}
    //             handlePageChange={this.handlePageChange}
    //           />
    //         );
    //         break;
    //     }
    //     return page;
    //   };

    return (
      //     <div>
      //       <Header
      //         handlePageChange={this.handlePageChange}
      //         signOut={this.props.signOut}
      //       />
      //       {/* <PostPic /> */}
      //       <div>{this.state.loading ? <h1>loading...</h1> : renderPage()}</div>
      //       <NavBar handlePageChange={this.handlePageChange} />
      //     </div>
      //   );
      // }
      // handleEditProfile = (e) => {
      //   e.preventDefault();
      //   const body = {
      //     user: {
      //       first_name: e.target.first_name.value,
      //       last_name: e.target.last_name.value,
      //       username: e.target.username.value,
      //       email: e.target.email.value,
      //     },
      //   };
      //   API.patch(`users/${this.props.user.id}`, body);
      //   this.handlePageChange("Profile", "user");
      // };

      // handleAddOrEditPet = (e) => {
      //   e.preventDefault();
      //   const body = {
      //     pet: {
      //       name: e.target.name.value,
      //       bio: e.target.bio.value,
      //       user_id: this.props.user.id,
      //     },
      //   };
      //   if (e.target.AddOrEdit.value === "AddPet") {
      //     API.post("pets", body);
      //   } else {
      //     API.patch(`pets/${this.state.selected_pet.id}`, body);
      //   }
      //   this.handlePageChange("Profile", "user");
      // };

      // handleNewComment = (e) => {
      //   e.preventDefault();
      //   const body = {
      //     comment: {
      //       post_id: this.state.selected_post.id,
      //       user_id: this.props.user.id,
      //       comment: e.target.newComment.value,
      //       created_at: Date.now(),
      //     },
      //   };
      //   API.post("comments", body);
      // };
      // handleNewLike = (e, liked) => {
      //   e.preventDefault();
      //   const body = {
      //     like: {
      //       post_id: this.state.selected_post.id,
      //       user_id: this.props.user.id,
      //       created_at: Date.now(),
      //     },
      //   };
      //   liked
      //     ? API.post("likes", body)
      //     : API.destroy(
      //         `likes/${
      //           this.state.selected_post.likes.find(
      //             (like) => like.user.id === this.props.user.id
      //           ).id
      //         }`
      //       );
      // };
      // handleNewFollow = (e, followed) => {
      //   e.preventDefault();
      //   const body = {
      //     following: {
      //       pet_id: this.state.selected_pet.id,
      //       user_id: this.props.user.id,
      //     },
      //   };
      //   followed
      //     ? API.post("followings", body)
      //     : API.destroy(
      //         `followings/${
      //           this.state.selected_pet.followings.find(
      //             (follow) => follow.user.id === this.props.user.id
      //           ).id
      //         }`
      //       );
      // }
      <div>
        <Header signOut={this.props.signOut} history={this.props.history} />
        <div>
          <Route
            exact
            path={`/user_profile/:id`}
            render={(routerProps) => (
              <UserProfile {...routerProps} LoggedUserId={this.props.user} />
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
            path={`/add_pet/:id`}
            render={(routerProps) => (
              <PetAddOrEdit {...routerProps} LoggedUserId={this.props.user} />
            )}
          />
          <Route
            path={`/edit_pet/:id`}
            render={(routerProps) => (
              <PetAddOrEdit {...routerProps} LoggedUserId={this.props.user} />
            )}
          />
          <Route
            path={`/edit_profile/:id`}
            render={(routerProps) => <EditProfile {...routerProps} />}
          />
          <Route
            path={`/post_pic/:id`}
            render={(routerProps) => <PostPic {...routerProps} />}
          />
        </div>
        <NavBar history={this.props.history} LoggedUserId={this.props.user} />
      </div>
    );
  }
}

// switch (this.state.page) {
//       case "Profile":
//         page = (
//           <UserProfile
//             user={this.state.selected_user}
//             loggedUserID={this.props.user.id}
//             handlePageChange={this.handlePageChange}
//           />
//         );
//         break;
//       case "PetProfile":
//         page = this.props.user.pets ? (
//           <PetProfile
//             pet={this.state.selected_pet}
//             loggedUser={this.props.user}
//             handlePageChange={this.handlePageChange}
//             handleNewFollow={this.handleNewFollow}
//           />
//         ) : null;
//         break;
//       case "ShowPost":
//         page = this.props.user.pets ? (
//           <ShowPost
//             post={this.state.selected_post}
//             handlePageChange={this.handlePageChange}
//             handleNewComment={this.handleNewComment}
//             handleNewLike={this.handleNewLike}
//             userLogged={
//               this.props.user.id === this.state.selected_user.id
//                 ? true
//                 : false
//             }
//             liked={
//               this.state.selected_post.likes.find(
//                 (like) => like.user.id === this.props.user.id
//               )
//                 ? true
//                 : false
//             }
//           />
//         ) : null;
//         break;
//       case "Search":
//         page = <Search handlePageChange={this.handlePageChange} />;
//         break;
//       case "PostPic":
//         page = <PostPic handlePageChange={this.handlePageChange} />;
//         break;
//       case "EditProfile":
//         page = (
//           <EditProfile
//             user={this.props.user}
//             handlePageChange={this.handlePageChange}
//             handleEditProfile={this.handleEditProfile}
//           />
//         );
//         break;
//       case "AddPet":
//         page = (
//           <PetAddOrEdit
//             pet={this.state.selected_pet}
//             type={this.state.page}
//             handlePageChange={this.handlePageChange}
//             handleAddOrEditPet={this.handleAddOrEditPet}
//           />
//         );
//         break;
//       case "EditPet":
//         page = (
//           <PetAddOrEdit
//             pet={this.state.selected_pet}
//             type={this.state.page}
//             handlePageChange={this.handlePageChange}
//             handleAddOrEditPet={this.handleAddOrEditPet}
//           />
//         );
//         break;
//       default:
//         page = (
//           <UserProfile
//             user={this.state.selected_user}
//             loggedUserID={this.props.user.id}
//             handlePageChange={this.handlePageChange}
//           />
//         );
//         break;
//     }
//     return page;

export default withRouter(Dashboard);
