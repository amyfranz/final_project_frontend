// import React from "react";
import PostInfo from "./PostInfo";
import PostStats from "./PostStats";
import Comments from "./Comments";

// export default function ShowPost({ userLogged }) {
//   componentD
//   return (
//     <div>
//       <PostInfo post={post} />
//       <PostStats
//         post={post}
//         handleNewLike={handleNewLike}
//         userLogged={userLogged}
//         liked={liked}
//       />
//       <Comments
//         comments={post.comments}
//         handleNewComment={handleNewComment}
//         userLogged={userLogged}
//       />
//     </div>
//   );
// }

import React, { Component } from "react";
import API from "../API";

export default class ShowPost extends Component {
  constructor() {
    super();
    this.state = { post: "", loading: true };
  }
  componentDidMount() {
    API.get(`posts/${this.props.match.params.id}`).then((post) =>
      this.setState({ post, loading: false })
    );
  }

  render() {
    return (
      <div>
        {this.state.loading ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            <PostInfo post={this.state.post} />
            <PostStats
              post={this.state.post}
              handleNewLike={this.handleNewLike}
              userLogged={this.props.LoggedUserId}
              liked={
                this.state.post.likes.find(
                  (like) => like.user.id === this.props.LoggedUserId
                )
                  ? true
                  : false
              }
            />
            <Comments
              comments={this.state.post.comments}
              handleNewComment={this.handleNewComment}
              userLogged={this.props.LoggedUserId}
            />
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
      ? API.post("likes", body)
      : API.destroy(
          `likes/${
            this.state.post.likes.find(
              (like) => like.user.id === this.props.user.id
            ).id
          }`
        );
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
    API.post("comments", body);
  };
}
