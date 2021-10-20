import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import userImg from "../assets/currentUser.jpg";

export default function Navbar() {
  return (
    <nav>
      <div className="nav__container">
        <div className="nav__navlogo">
          <h3>GlamGram</h3>
        </div>

        <div className="nav__menu">
          <SearchIcon />
          <NotificationsIcon />

          <div className="avatar__menu">
            <Avatar src={userImg} alt="A" />
          </div>
        </div>
      </div>
    </nav>
  );
}
