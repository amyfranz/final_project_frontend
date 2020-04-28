import React from "react";

export default function PetBtns({ editPet, deletePet, newPost }) {
  return (
    <div>
      <button onClick={editPet}>Edit Pet</button>
      <button onClick={newPost}>Add A Post</button>
      <button onClick={deletePet}>Delete Pet</button>
    </div>
  );
}
