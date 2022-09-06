import React from "react";
import { Outlet } from "react-router-dom";
import { SideBar, TopBar } from "components";

import "./index.scss";

function Index() {
  React.useLayoutEffect(() => {
    document.body.style.backgroundColor = "#f5f3fa";
  }, []);

  return (
    <div className="base-layout">
      {/* SIDEBAR BUILD */}
      <SideBar />

      {/* BODY BUILD */}
      <div className="body-build">
        {/* TOP BAR BUILD */}
        <TopBar />

        {/* CONTENT BUILD */}
        <Outlet />
      </div>
    </div>
  );
}

export default Index;
