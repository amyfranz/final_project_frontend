import React from "react";

export default function PetsInfo({ pet }) {
  return (
    <div className="PetInfo">
      <img src={pet.profile_pic} alt="" />
      <div className="PetInfoInfo">
        <h2>{pet.name}</h2>
        <h4>{pet.bio}</h4>
      </div>
    </div>
  );
}
