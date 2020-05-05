import React from "react";

export default function UserBtns({ editUser, addPet, deleteProfile }) {
  return (
    <div className="UserProfileUserInfoBtns">
      <button onClick={editUser}>Edit Profile</button>
      <button onClick={addPet}> Add A Pet</button>
      <button onClick={deleteProfile}>Delete Profile</button>
    </div>
  );
}
