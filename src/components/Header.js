import React from "react";

export default function Header({ history, signOut, LoggedUserId }) {
  return (
    <div>
      <h1 onClick={(e) => history.push(`/user_profile/${LoggedUserId}`)}>
        Petatude
      </h1>
      <h1 onClick={signOut}>Log Out</h1>
    </div>
  );
}
