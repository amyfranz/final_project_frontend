import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function NewComment({ handleNewComment }) {
  return (
    <form onSubmit={handleNewComment} className="NewComment">
      <input type="text" name="newComment" placeholder="new comment" required />
      <button type="submit" name="Submit">
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </form>
  );
}
