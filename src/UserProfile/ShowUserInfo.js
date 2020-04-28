import React from "react";

export default function ShowUserInfo({ user }) {
  return (
    <div>
      <h1>
        {user.first_name} {user.last_name}
      </h1>
      <h3>{user.username}</h3>
      <div>
        <h4>Following: {user.followings ? user.followings.length : 0} pets</h4>
      </div>
    </div>
  );
}
