import React from "react";

export default function Header({ handlePageChange, signOut }) {
  return (
    <div>
      <h1 onClick={(e) => handlePageChange("Profile", "user")}>Petatude</h1>
      <h1 onClick={signOut}>Log Out</h1>
    </div>
  );
}
