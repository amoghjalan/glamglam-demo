import HomeSharpIcon from "@material-ui/icons/HomeSharp";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export default function Navbar() {
  return (
    <nav>
      <div className="nav__container">
        <div className="nav__navlogo">
          <h3>GlamGram</h3>
        </div>

        <div className="nav__menu">
          <Paper component="form">
            <IconButton type="submit" aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase placeholder="  Search" />
          </Paper>
          <HomeSharpIcon />

          <div className="avatar__menu">
            <Avatar />
          </div>
        </div>
      </div>
    </nav>
  );
}
