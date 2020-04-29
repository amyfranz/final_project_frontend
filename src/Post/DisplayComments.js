import React from "react";

export default function DisplayComments({ comment }) {
  return (
    <div>
      <h3>
        {comment.comment} by {comment.id}
      </h3>
    </div>
  );
}
