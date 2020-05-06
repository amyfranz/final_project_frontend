import React, { Component } from "react";
import API from "../API";
import Update from "./update";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import "./Updates.css";

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
          <FontAwesomeIcon className="Loading" icon={faSpinner} spin />
        ) : (
          <div className="Updates">
            {this.state.update.length > 0 ? (
              <Update updates={this.state.update} props={this.props} />
            ) : (
              <div className="NoUpdates">
                <h1>You have no new updates</h1>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}
