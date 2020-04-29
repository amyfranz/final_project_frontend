import React, { Component } from "react";
import API from "../API";
import ShowUsers from "../components/ShowUsers";

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
      <div>
        {this.state.loading ? (
          <h1>Loading..</h1>
        ) : (
          this.state.users.map((user, index) => (
            <div
              key={index}
              onClick={(e) =>
                this.props.history.push(`/user_profile/${user.user.id}`)
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
