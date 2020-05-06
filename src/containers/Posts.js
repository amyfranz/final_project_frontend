import React from "react";
import PostCard from "../components/PostCard";

export default function Posts({ posts, props }) {
  return (
    <div className="Posts">
      {posts.map((post, index) => (
        <div
          key={index}
          onClick={(e) => props.history.push(`/post/${post.id}`)}
          className="PostCard"
        >
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
}
