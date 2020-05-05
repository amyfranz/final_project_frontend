import React from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faHome,
  faUserAlt,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

export default function NavBar({ history, LoggedUserId }) {
  return (
    <ul className="NavBar">
      <li onClick={(e) => history.push(`/user_profile/${LoggedUserId}`)}>
        <div className="NavBarLink">
          <div className="NavBarFontAwesome">
            <FontAwesomeIcon className="NavBarFontAwesomeIcon" icon={faUserAlt} />
          </div>
          <p>profile</p>
        </div>
      </li>
      <li onClick={(e) => history.push("/search")}>
        <div className="NavBarLink">
          <div className="NavBarFontAwesome">
            <FontAwesomeIcon className="NavBarFontAwesomeIcon" icon={faSearch} />
          </div>
          <p>search</p>
        </div>
      </li>
      <li onClick={(e) => history.push("/updates")}>
        <div className="NavBarLink">
          <div className="NavBarFontAwesome">
            <FontAwesomeIcon className="NavBarFontAwesomeIcon" icon={faBell} />
          </div>
          <p>updates</p>
        </div>
      </li>
      <li onClick={(e) => history.push("/browse")}>
        <div className="NavBarLink">
          <div className="NavBarFontAwesome">
            <FontAwesomeIcon className="NavBarFontAwesomeIcon" icon={faHome} />
          </div>
          <p>browse</p>
        </div>
      </li>
    </ul>
  );
}
