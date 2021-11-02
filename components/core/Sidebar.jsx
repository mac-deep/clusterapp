import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Divider, Drawer, ListItemButton } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import BookmarksIcon from "@mui/icons-material/Bookmarks";

const data = [
  { icon: <PersonIcon />, label: "Your Profile" },
  { icon: <LocalFireDepartmentIcon />, label: "On Going" },
  { icon: <BookmarksIcon />, label: "Saved for later" },
];

const Sidebar = () => (
  <List>
    {data.map((item) => (
      <ListItemButton>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.label} />
      </ListItemButton>
    ))}
    <Divider />
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
  </List>
);

export default Sidebar;
