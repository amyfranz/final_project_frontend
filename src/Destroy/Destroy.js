import React from "react";
import "./Destroy.css";

export default function Delete({
  type,
  handleDelete,
  cancelDelete,
  deleteErrors,
}) {
  return (
    <div className="Delete">
      <form onSubmit={handleDelete}>
        <div className="DeleteInstructions">
          <h1>
            If you want to delete this {type}, type delete below and hit ok.
          </h1>
        </div>
        <div className="DeleteInput">
          <input name="delete" type="text" />
        </div>
        <div className="DeleteBtns">
          <button type="submit">OK</button>
          <button onClick={cancelDelete}>CANCEL</button>
        </div>
        <div className="DeleteErrors">
          <h1>{deleteErrors}</h1>
        </div>
      </form>
    </div>
  );
}
