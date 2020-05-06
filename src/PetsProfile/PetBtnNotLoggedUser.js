import React from "react";

export default function PetBtnNotLoggedUser({ followed, handleNewFollow }) {
  return (
    <div className="PetProfileFollowing">
      {followed ? (
        <button
          onClick={(e) => {
            handleNewFollow(e, false);
          }}
        >
          Unfollow
        </button>
      ) : (
        <button
          onClick={(e) => {
            handleNewFollow(e, true);
          }}
        >
          Follow
        </button>
      )}
    </div>
  );
}
