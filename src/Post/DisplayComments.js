import React from "react";

export default function DisplayComments({ comment }) {
  return (
    <div>
      <h3>
        {comment.comment} by {comment.user.username}
      </h3>
    </div>
  );
}
