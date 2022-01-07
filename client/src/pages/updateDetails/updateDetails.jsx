import { useRef, useContext } from "react";
import { updateCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./updateDetails.css";

export default function UpdateDetails() {
  // const email = useRef();
  // const password = useRef();
  // const { user, isFetching, error, dispatch } = useContext(AuthContext);

  return (
    <div className="update">
      <div className="updateWrapper">
        <form className="updateBox">
          <div className="headerEditDetails">Edit Details</div>
          <input
            type="text"
            placeholder="New Username"
            className="updateInput"
          />
          <input type="text" placeholder="New City" className="updateInput" />
          <input type="text" placeholder="City" className="updateInput" />
          <input type="text" placeholder="From" className="updateInput" />
          <input
            type="text"
            placeholder="Relationship Status"
            className="updateInput"
          />
          <input
            type="text"
            placeholder="Description"
            className="updateInput"
          />
          <div className="labelsUpdate">Profile Picture:</div>
          <input type="file" className="updateInputImg" />
          <div className="labelsUpdate">Cover Picture:</div>
          <input type="file" className="updateInputImg" />
          <button className="updateButton" type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
