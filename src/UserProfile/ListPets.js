import React from "react";
import PetsInfo from "../components/PetsInfo";

export default function ListPets({ pets, props }) {
  const petsMap =
    pets.length > 0
      ? pets.map((pet, index) => (
          <div className="UserProfileDisplayPets"
            onClick={(e) => props.history.push(`/pets/${pet.id}`)}
            key={index}
          >
            <PetsInfo pet={pet}/>
          </div>
        ))
      : <h1>This user has no pets.</h1>;
  return (
    <div>
      {petsMap}
    </div>
  );
}
