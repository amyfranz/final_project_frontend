import React, { Component } from "react";
import ShowUserInfo from "./ShowUserInfo";
import LoggedUserBtns from "./UserBtns";
import ListPets from "./ListPets";

// export default function UserProfile(props) {
//   const { loggedUser } = props;
//   return (
//     <div>
//       hello
//       {/* <ShowUserInfo user={user} />
//       {user.id === loggedUserId ? (
//         <LoggedUserBtns handlePageChange={handlePageChange} />
//       ) : null}
//       <ListPets pets={user.pets || []} handlePageChange={handlePageChange} /> */}
//     </div>
//   );
// }
import API from "../API";

export default class UserProfile extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      user: "",
    };
  }
  componentDidMount() {
    API.get(`users/${this.props.match.params.id}`).then((user) =>
      this.setState({ user, loading: false })
    );
  }
  render() {
    return (
      <div>
        {this.state.loading ? (
          <h1>Loading....</h1>
        ) : (
          <div>
            <div>
              <ShowUserInfo user={this.state.user} />
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
                <ListPets pets={this.state.user.pets} props={this.props} />
              ) : null}
            </div>
          </div>
        )}
      </div>
    );
  }
  editUser = () => {
    this.props.history.push(`/edit_profile/${this.props.LoggedUserId}`);
  };

  addPet = () => {
    this.props.history.push(`/add_pet/${this.props.LoggedUserId}`);
  };

  deleteProfile = () => {
    alert("profile deleted");
  };
}
