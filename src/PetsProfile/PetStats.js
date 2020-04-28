import React from "react";

export default function PetStats({ pet }) {
  return (
    <div>
      <h4>Posts: {pet.posts ? pet.posts.length : 0}</h4>
      <h4>Followers: {pet.followings ? pet.followings.length : 0}</h4>
    </div>
  );
}
