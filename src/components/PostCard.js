import React from "react";

export default function PostCard({ post }) {
  return (
    <div>
      {post.image ? <img src={post.image} alt="" /> : null}
    </div>
  );
}
