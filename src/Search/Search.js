import React, { Component } from "react";
import ShowUsers from "../components/ShowUsers";
import API from "../API";

export default class Search extends Component {
  constructor() {
    super();
    this.state = { input: "", users: "", loading: true };
    API.get("search_user").then((users) =>
      this.setState({ users, loading: false })
    );
  }
  render() {
    const userResults =
      this.state.users && this.state.input.length > 0
        ? this.state.users.map((user) =>
            user.username
              .toLowerCase()
              .includes(this.state.input.toLowerCase()) ? (
              <div
                key={user.id}
                onClick={(e) =>
                  this.props.history.push(`/user_profile/${user.id}`)
                }
              >
                <ShowUsers user={user} />
              </div>
            ) : null
          )
        : null;
    return (
      <div>
        {this.state.loading ? (
          <h1>loading...</h1>
        ) : (
          <div>
            <input
              type="text"
              placeholder="search for a user using their username"
              name="search"
              onChange={(e) => this.setState({ input: e.target.value })}
              focus="true"
            />
            <div>{userResults}</div>
          </div>
        )}
      </div>
    );
  }
  handleOnClick = (user) => {
    API.get(`users/${user.id}`).then((user) =>
      this.props.handlePageChange("Profile", "user", user)
    );
  };
}
