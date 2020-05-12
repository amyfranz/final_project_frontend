import React from "react";

export default function PetBtns({ props, deletePet }) {
  return (
    <div className="PetsProfileBtns">
      <button
        onClick={(e) =>
          props.history.push(`/pets/${props.match.params.id}/edit`)
        }
      >
        Edit Pet
      </button>
      <button
        onClick={(e) =>
          props.history.push(`/pets/${props.match.params.id}/posts`)
        }
      >
        Add A Post
      </button>
      <button onClick={deletePet}>Delete Pet</button>
    </div>
  );
}
