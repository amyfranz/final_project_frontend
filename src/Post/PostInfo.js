import React from "react";
import ShowImage from "../components/ShowImage";

export default function PostInfo({ post }) {
  return (
    <div>
      <ShowImage
        image={post.image.split("/").slice(-1)[0].split(".")[0]}
        effect={post.effect}
      />
      <h1>{post.bio}</h1>
    </div>
  );
}
