import "./closeFriend.css";
const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

export default function CloseFriend({ user }) {
  return (
    <li className="sidebarFriend">
      <img
        className="sidebarFriendImg"
        src={publicFolder + user.profilePicture}
        alt=""
      />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
}
