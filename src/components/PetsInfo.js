import React from "react";

export default function PetsInfo({ pet }) {
  return (
    <div>
      <h2>{pet.name}</h2>
      <h4>{pet.bio}</h4>
    </div>
  );
}
