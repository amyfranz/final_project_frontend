import React from "react";
import PetsInfo from "../components/PetsInfo";

export default function ListPets({ pets, props }) {
  const petsMap =
    pets.length > 0
      ? pets.map((pet, index) => (
          <div
            onClick={(e) => props.history.push(`/pet_profile/${pet.id}`)}
            key={index}
          >
            <PetsInfo pet={pet} />
          </div>
        ))
      : null;
  return (
    <div>
      <h1>Owner of:</h1>
      {petsMap}
    </div>
  );
}
