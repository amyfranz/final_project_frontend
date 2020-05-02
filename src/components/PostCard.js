import React from "react";
import "cloudinary-core";
import { Image, Transformation, CloudinaryContext } from "cloudinary-react";

export default function PostCard({ post }) {
  return (
    <div>
      {post.image ? (
        <CloudinaryContext cloudName="petatude">
          <Image publicId="u6vynektdiaiych782mv.jpg">
            <Transformation effect="auto_color" />
          </Image>
        </CloudinaryContext>
      ) : null}
    </div>
  );
}

// {
//   post.image ? (
//     <Image publicId={post.image}>
//       <Transformation effect="art:zorro" />
//     </Image>
//   ) : null;
// }

// return <div>{post.image ? <img src={post.image} alt="" /> : null}</div>;
