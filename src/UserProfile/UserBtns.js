import React from "react";

export default function UserBtns({ history, user, deleteProfile }) {
  return (
    <div className="UserProfileUserInfoBtns">
      <button onClick={(e) => history.push(`${user}/edit`)}>
        Edit Profile
      </button>
      <button onClick={(e) => history.push(`${user}/pets`)}>
        Add A Pet
      </button>
      <button onClick={deleteProfile}>Delete Profile</button>
    </div>
  );
}
