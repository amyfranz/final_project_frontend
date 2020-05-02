import React from "react";

export default function PostStats({
  handleNewLike,
  post,
  LoggedUserId,
}) {
  return (
    <div>
      <h3>
        { !post.likes.find((like) => like.user_id === LoggedUserId) ? (
          <span onClick={(e) => handleNewLike(e, true)}>Like</span>
        ) : (
          <span onClick={(e) => handleNewLike(e, false)}>Unlike</span>
        )}
        : {post.likes.length}
      </h3>
      <h3>Comments: {post.comments.length}</h3>
    </div>
  );
}
