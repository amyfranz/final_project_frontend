import React from "react";

export default function PetStats({ pet, viewFollowers }) {
  return (
    <div>
      <h4>Posts: {pet.posts ? pet.posts.length : 0}</h4>
      {pet.number_followers > 0 ? (
        <h4 onClick={viewFollowers}>Followers: {pet.number_followers}</h4>
      ) : (
        <h4>Followers: 0</h4>
      )}
    </div>
  );
}
