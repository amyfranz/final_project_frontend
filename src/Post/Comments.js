import React from "react";
import DisplayComments from "./DisplayComments";

export default function Comments({ comments }) {
  return (
    <div className="Comments">
      <h1>Comments:</h1>
      <div className="DisplayComments style-1">
        {comments
          .sort((a, b) => (a.created_at < b.created_at ? -1 : 1))
          .map((comment, index) => (
            <DisplayComments comment={comment} key={index} />
          ))}
      </div>
    </div>
  );
}
