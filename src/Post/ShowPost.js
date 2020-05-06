import React, { Component } from "react";
import PostInfo from "./PostInfo";
import PostStats from "./PostStats";
import Comments from "./Comments";
import NewComment from "./NewComment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import API from "../API";
import "./Post.css";

export default class ShowPost extends Component {
  constructor() {
    super();
    this.state = { post: "", owner_id: "", loading: true, errors: null };
  }
  componentDidMount() {
    API.get(`posts/${this.props.match.params.id}`).then((post) => {
      this.setState({ post, loading: false });
    });
  }

  render() {
    return (
      <div>
        {this.state.loading ? (
          <FontAwesomeIcon className="Loading" icon={faSpinner} spin />
        ) : (
          <div className="ShowPost">
            <div className="ShowPostInfo">
              <PostInfo post={this.state.post} />
              <PostStats
                LoggedUserId={this.props.LoggedUserId}
                post={this.state.post}
                handleNewLike={this.handleNewLike}
              />
            </div>
            <div className="ShowPostComments">
              <Comments
                comments={this.state.post.comments}
                handleNewComment={this.handleNewComment}
                userLogged={this.props.LoggedUserId}
              />
              <NewComment
                handleNewComment={this.handleNewComment}
                errors={this.state.errors}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
  handleNewLike = (e, liked) => {
    e.preventDefault();
    const body = {
      like: {
        post_id: this.state.post.id,
        user_id: this.props.LoggedUserId,
        created_at: Date.now(),
      },
    };
    liked
      ? API.post("likes", body).then((post) => this.setState({ post }))
      : API.destroy(
          `likes/${
            this.state.post.likes.find(
              (like) => like.user_id === this.props.LoggedUserId
            ).id
          }`
        )
          .then((res) => res.json())
          .then((post) => this.setState({ post }));
  };
  handleNewComment = (e) => {
    e.preventDefault();
    const body = {
      comment: {
        post_id: this.state.post.id,
        user_id: this.props.LoggedUserId,
        comment: e.target.newComment.value,
        created_at: Date.now(),
      },
    };
    API.post("comments", body).then((post) => {
      post.messages
        ? this.setState({ errors: post.messages })
        : this.setState({ post, errors: null });
    });
    e.target.reset();
    setTimeout(() => {
      this.setState({ errors: null });
    }, 2000);
  };
}
