import React from "react";
import PostCard from "../components/PostCard";

export default function update({ updates, props }) {
  return (
    <div>
      {updates.map((update, index) => (
        <div key={index}>
          <div onClick={e => props.history.push(`/pet_profile/${update.pet_id}`)}>
            <img src={update.pet_profile_pic} alt="" />
           </div>
          <h1>{update.pet_name}</h1>
          <div onClick={e => props.history.push(`/post/${update.id}`)}>
            <PostCard post={update} />
          </div>
        </div>
      ))}
    </div>
  );
}
