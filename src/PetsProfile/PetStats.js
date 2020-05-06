import React from "react";

export default function PetStats({ pet, viewFollowers }) {
  return (
    <div className="PetStats">
      <h4>Posts: {pet.posts ? pet.posts.length : 0}</h4>
      {pet.followings.length > 0 ? (
        <h4 onClick={viewFollowers}>Followers: {pet.followings.length}</h4>
      ) : (
        <h4>Followers: 0</h4>
      )}
    </div>
  );
}
