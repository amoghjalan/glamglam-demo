import List from "@mui/material/List";
import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import PersonalVideoIcon from "@mui/icons-material/PersonalVideo";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import StoreIcon from "@mui/icons-material/Store";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <List
          sx={{ width: "100%", maxWidth: 500, color: "#fffff" }}
          component="nav"
        >
          <ListItemButton selected={true} className="list">
            <ListItemIcon>
              <HomeIcon className="icon" />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton className="list">
            <ListItemIcon>
              <GroupsIcon className="icon" />
            </ListItemIcon>
            <ListItemText primary="Chat" />
          </ListItemButton>
          <ListItemButton className="list">
            <ListItemIcon>
              <PersonalVideoIcon className="icon" />
            </ListItemIcon>
            <ListItemText primary="Off-Screen" />
          </ListItemButton>
          <ListItemButton className="list">
            <ListItemIcon>
              <VideoLibraryIcon className="icon" />
            </ListItemIcon>
            <ListItemText primary="Short" />
          </ListItemButton>
          <ListItemButton className="list">
            <ListItemIcon>
              <StoreIcon className="icon" />
            </ListItemIcon>
            <ListItemText primary="NFT Market" />
          </ListItemButton>
        </List>
      </div>
    </div>
  );
}
