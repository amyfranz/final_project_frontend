import React, { Component } from "react";
import ShowUserInfo from "./ShowUserInfo";
import LoggedUserBtns from "./UserBtns";
import ListPets from "./ListPets";
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
          <div
            className={`UserProfileShowUser ${this.state.delete ? "Blur" : ""}`}
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
                  history={this.props.history}
                  user={this.state.user.id}
                  deleteProfile={() => this.setState({ delete: true })}
                />
              ) : null}
            </div>
            <div>
              {this.state.user.pets ? (
                <div>
                  <h1 className="UserProfilePets">Owner of:</h1>
                  <div className="UserProfilePetProfile">
                    <ListPets pets={this.state.user.pets} props={this.props} />
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        )}
      </div>
    );
  }

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

  cancelDelete = (e) => {
    e.preventDefault();
    this.setState({ delete: false, deleteError: null });
  };
}
