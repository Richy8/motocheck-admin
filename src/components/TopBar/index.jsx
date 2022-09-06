import React from "react";
import Emitter from "utilities/emitter";
import avatarImage from "assets/motocheck-avatar.png";
import "./index.scss";

const index = () => {
  return (
    <div className="top-wrapper">
      <div className="topbar-build">
        <div className="left-section">
          {/* HAMBURGER */}
          <div
            className="menu-icon pointer d-md-none"
            onClick={() => Emitter.emit("showSidebar")}
          >
            <div className="line line-one"></div>
            <div className="line line-two"></div>
            <div className="line line-three"></div>
          </div>

          {/* PAGE TITLE */}
          <div className="page-title color-text">Dashboard</div>
        </div>

        {/* USER AVATAR */}
        <div className="avatar-wrapper pointer">
          <div className="user-avatar brand-primary-bg">
            <img src={avatarImage} alt="user-avatar" />
          </div>

          <div className="icon icon-caret-down"></div>
        </div>
      </div>
    </div>
  );
};

export default index;
