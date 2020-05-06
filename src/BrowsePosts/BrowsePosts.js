import React, { Component } from "react";
import API from "../API";
import Posts from "../containers/Posts";
import InfiniteScroll from "react-infinite-scroll-component";
import "./BrowsePosts.css";

export default class BrowsePosts extends Component {
  constructor() {
    super();
    this.state = { posts: [] };
  }

  componentDidMount() {
    this.getPosts();
  }
  render() {
    return (
      <div className="Browse">
        <InfiniteScroll
          dataLength={this.state.posts.length}
          next={this.getPosts}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          <Posts props={this.props} posts={this.state.posts} />
        </InfiniteScroll>
      </div>
    );
  }
  getPosts = () => {
    API.get("randomPosts").then((posts) => {
      console.log(this.state.posts.concat(posts));
      this.state.posts.concat(posts);
      this.setState({ posts: this.state.posts.concat(posts) });
    });
  };
}
