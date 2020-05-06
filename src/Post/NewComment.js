import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function NewComment({ handleNewComment, errors }) {
  return (
    <div>
      <form onSubmit={handleNewComment} className="NewComment">
        <input type="text" name="newComment" placeholder="new comment" />
        <button type="submit" name="Submit">
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </form>
      <div className="Errors">
        {errors
          ? errors.map((error, index) => <h1 key={index}>{error}</h1>)
          : null}
      </div>
    </div>
  );
}
