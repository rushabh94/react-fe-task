import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Navigation = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component={NavLink}
          to="/login"
          style={{ textDecoration: "none", color: "inherit" }}>
          Profile
        </Typography>
        <div style={{ marginLeft: "auto" }}>
          <Typography
            variant="body1"
            component={NavLink}
            to="/login"
            style={{
              marginLeft: 20,
              textDecoration: "none",
              color: "inherit",
            }}>
            Login
          </Typography>
          <Typography
            variant="body1"
            component={NavLink}
            to="/signup"
            style={{
              marginLeft: 20,
              textDecoration: "none",
              color: "inherit",
            }}>
            Sign Up
          </Typography>
          <Typography
            variant="body1"
            component={NavLink}
            to="/all-post"
            style={{
              marginLeft: 20,
              textDecoration: "none",
              color: "inherit",
            }}>
            All Post
          </Typography>
          <Typography
            variant="body1"
            component={NavLink}
            to="/create-post"
            style={{
              marginLeft: 20,
              textDecoration: "none",
              color: "inherit",
            }}>
            Create Post
          </Typography>
          <Typography
            variant="body1"
            component={NavLink}
            to="/all-reminder"
            style={{
              marginLeft: 20,
              textDecoration: "none",
              color: "inherit",
            }}>
            All Reminder
          </Typography>
          <Typography
            variant="body1"
            component={NavLink}
            to="/create-reminder"
            style={{
              marginLeft: 20,
              textDecoration: "none",
              color: "inherit",
            }}>
            Create Reminder
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
