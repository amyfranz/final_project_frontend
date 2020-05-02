import React, { Component } from "react";
import API from "../API";
import Update from "./update";

export default class updates extends Component {
  constructor() {
    super();
    this.state = {
      update: "",
      loading: true,
    };
  }
  componentDidMount() {
    API.get(`userUpdates/${this.props.LoggedUserId}`).then((update) =>
      this.setState({ update, loading: false })
    );
  }
  render() {
    return (
      <div>
        {this.state.loading ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            {this.state.update.length > 0 ? (
              <Update updates={this.state.update} props={this.props} />
            ) : (
              <h1>You have no new updates</h1>
            )}
          </div>
        )}
      </div>
    );
  }
}
