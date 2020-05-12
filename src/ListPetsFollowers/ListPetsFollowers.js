import React, { Component } from "react";
import API from "../API";
import ShowUsers from "../components/ShowUsers";
import "./ListPetsFollowers.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default class ListPetsFollowers extends Component {
  constructor() {
    super();
    this.state = {
      users: "",
      loading: true,
    };
  }
  componentDidMount() {
    API.get(`petsFollowers/${this.props.match.params.id}`).then((users) =>
      this.setState({ users, loading: false })
    );
  }
  render() {
    return (
      <div className="ListPetsFollowers">
        {this.state.loading ? (
          <FontAwesomeIcon className="Loading" icon={faSpinner} spin />
        ) : (
          this.state.users.map((user, index) => (
            <div
              key={index}
              onClick={(e) =>
                this.props.history.push(`/users/${user.user.id}`)
              }
            >
              <ShowUsers user={user.user} />
            </div>
          ))
        )}
      </div>
    );
  }
}
