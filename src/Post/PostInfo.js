import React from "react";

export default function PostInfo({ post }) {
  return (
    <div>
      {post.image ? <img src={post.image} alt="" /> : null}
      <h1>{post.bio}</h1>
    </div>
  );
}
