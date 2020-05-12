import React from "react";
import "./Header.css";

export default function Header({ history, signOut, LoggedUserId }) {
  return (
    <div className="Header">
      <h1 className="HeaderPetatude" onClick={(e) => history.push(`/`)}>
        Petatude
      </h1>
      <h1 className="HeaderSignOut" onClick={signOut}>Log Out</h1>
    </div>
  );
}
