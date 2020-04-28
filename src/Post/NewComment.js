import React from "react";

export default function NewComment({ handleNewComment }) {
  return (
    <div>
      <form onSubmit={handleNewComment}>
        <input
          type="text"
          name="newComment"
          placeholder="new comment"
          required
        />
        <input type="submit" name="Submit" value="Submit" />
      </form>
    </div>
  );
}
