import React from "react";
import PostCard from "../components/PostCard";

export default function Posts({ posts, props }) {
  return (
    <div>
      {posts
        .map((post, index) => (
          <div
            key={index}
            onClick={(e) => props.history.push(`/post/${post.id}`)}
          >
            <PostCard post={post} />
          </div>
        ))}
    </div>
  );
}
