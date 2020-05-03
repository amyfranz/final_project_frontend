import React from "react";
import ShowImage from "./ShowImage";

export default function PostCard({ post }) {
  return (
    <div>
      <ShowImage
        image={post.image.split("/").slice(-1)[0].split(".")[0]}
        effect={post.effect}
      />
    </div>
  );
}
