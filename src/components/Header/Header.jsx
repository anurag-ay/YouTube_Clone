import {
  Mic,
  Notifications,
  Search,
  VideoCallRounded,
  ViewHeadline,
  YouTube,
} from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <div className="header">
      <div className="header_right">
        <IconButton>
          <ViewHeadline />
        </IconButton>
        <div className="youTube_icon">
          <IconButton>
            <YouTube />
          </IconButton>
        </div>
        <h3 className="youTube_text">YouTube</h3>
      </div>
      <div className="header_center">
        <form>
          <input type="text" />
          <button type="submit">
            <IconButton>
              <Search />
            </IconButton>
          </button>
          <IconButton>
            <Mic />
          </IconButton>
        </form>
      </div>
      <div className="header_left">
        <IconButton>
          <VideoCallRounded />
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>
        <IconButton>
          <Avatar />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
<h2>Header</h2>;
