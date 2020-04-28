import React from "react";
import PostCard from "../components/PostCard";

export default function Posts({ posts, props }) {
  return (
    <div>
      {posts
        .sort((a, b) => (a.posted < b.posted ? 1 : -1))
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
