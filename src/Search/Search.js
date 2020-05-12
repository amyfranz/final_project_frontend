import React, { Component } from "react";
import ShowUsers from "../components/ShowUsers";
import API from "../API";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner} from "@fortawesome/free-solid-svg-icons";
import "./Search.css";

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
                  this.props.history.push(`/users/${user.id}`)
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
          <FontAwesomeIcon className="Loading" icon={faSpinner} spin />
        ) : (
          <div className="Search">
            <div className="SearchInput">
              <input
                type="text"
                placeholder="search usernames..."
                name="search"
                onChange={(e) => this.setState({ input: e.target.value })}
                focus="true"
              />
            </div>
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
