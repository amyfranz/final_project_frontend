import React from "react";
import "cloudinary-core";
import { Image, Transformation, CloudinaryContext } from "cloudinary-react";

export default function ShowImage({ image, effect }) {
  return (
    <div>
      {image ? (
        <CloudinaryContext cloudName="petatude">
          <Image publicId={image}>
            <Transformation effect={effect} />
          </Image>
        </CloudinaryContext>
      ) : null}
    </div>
  );
}
