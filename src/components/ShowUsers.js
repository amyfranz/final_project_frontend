import React from "react";

export default function ShowUsers({ user }) {
  return (
    <div className="ShowUserUserInfo">
      <div className="ShowUserProfilePic">
        <img src={user.profile_pic} alt="" />
      </div>
      <div className="ShowUserUserName">
        <h1>{user.username}</h1>
        <h2>
          {user.first_name} {user.last_name}
        </h2>
      </div>
    </div>
  );
}
