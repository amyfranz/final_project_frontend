import React from "react";

export default function PostStats({ post }) {
  //handleNewLike, userLogged, liked }) {
  return (
    <div>
      <h3>
        {/* {userLogged ? (
          <span>Likes</span>
        ) : liked ? (
          <span onClick={(e) => handleNewLike(e, false)}>Unlike</span>
        ) : (
          <span onClick={(e) => handleNewLike(e, true)}>Like</span>
        )}
        :  */}
        Likes: {post.like_count}
      </h3>
      <h3>Comments: {post.comments.length}</h3>
    </div>
  );
}
