import React from "react";
import DisplayComments from "./DisplayComments";
import NewComment from "./NewComment";

export default function Comments({ comments, handleNewComment, userLogged }) {
  return (
    <div>
      <h1>Comments:</h1>
      {comments
        .sort((a, b) => (a.created_at < b.created_at ? -1 : 1))
        .map((comment, index) => (
          <DisplayComments comment={comment} key={index} />
        ))}
      {userLogged ? null : <NewComment handleNewComment={handleNewComment} />}
    </div>
  );
}
