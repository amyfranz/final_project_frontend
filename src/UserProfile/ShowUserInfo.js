import React from "react";

export default function ShowUserInfo({ user, viewFollowings }) {
  return (
    <div>
      <img src={user.profile_pic} alt="" />
      <h1>
        {user.first_name} {user.last_name}
      </h1>
      <h3>{user.username}</h3>
      <div>
        {user.following_count < 0 ? (
          <h4>Following: 0</h4>
        ) : (
          <h4 onClick={(e) => viewFollowings()}>
            Following: {user.following_count} pets
          </h4>
        )}
      </div>
    </div>
  );
}
