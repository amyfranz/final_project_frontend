import React from "react";

export default function NavBar({ history, LoggedUserId }) {
  return (
    <div>
      <ul>
        <li onClick={(e) => history.push(`/user_profile/${LoggedUserId}`)}>
          profile
        </li>
        <li onClick={(e) => history.push("/search")}>search</li>
      </ul>
    </div>
  );
}
