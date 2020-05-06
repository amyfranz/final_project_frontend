import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as fasfaHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farfaHeart } from "@fortawesome/free-regular-svg-icons";

export default function PostStats({ handleNewLike, post, LoggedUserId }) {
  return (
    <div className="ShowPostPostStats">
      <h3>
        {!post.likes.find((like) => like.user_id === LoggedUserId) ? (
          <span onClick={(e) => handleNewLike(e, true)}>
            <FontAwesomeIcon icon={farfaHeart} />
          </span>
        ) : (
          <span onClick={(e) => handleNewLike(e, false)}>
            <FontAwesomeIcon icon={fasfaHeart} />
          </span>
        )}
        {post.likes.length}
      </h3>
      <h3>Comments: {post.comments.length}</h3>
    </div>
  );
}
