import React from "react";

export default function Update() {
  return (
    <div>
      <form className="updateDetails">
        <input
          className="newUsername"
          type="text"
          placeholder="New Username"
          value=""
        ></input>
      </form>
    </div>
  );
}
