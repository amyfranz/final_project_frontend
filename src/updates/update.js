import React from "react";
import PostCard from "../components/PostCard";

export default function update({ updates, props }) {
  return (
    <div>
      {updates.map((update, index) => (
        <div key={index} className="ShowUpdates">
          <div className="PetInfo">
            <div
              onClick={(e) =>
                props.history.push(`/pets/${update.pet_id}`)
              }
              className="PetInfoImage"
            >
              <img src={update.pet_profile_pic} alt="" />
            </div>
            <div className="PetInfoName">
              <h1>{update.pet_name}</h1>
            </div>
          </div>
          <div
            className="UpdatePost"
            onClick={(e) => props.history.push(`/posts/${update.id}`)}
          >
            <PostCard post={update} />
          </div>
        </div>
      ))}
    </div>
  );
}
