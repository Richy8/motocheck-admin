import React from "react";
import { SideNavItem } from "components";
import { sideNavLinks } from "constants";

import "./index.scss";

const index = () => {
  const brandLogo = require("assets/motocheck.png");

  return (
    <div className={`sidebar-build-cover`}>
      <div className="sidebar-build">
        {/* BRAND NAME SECTION */}
        <div className="brand-row">
          <div className="wrapper">
            <img src={brandLogo} alt="Motocheck" />
          </div>
        </div>

        {/* NAV ITEMS AREA */}
        <div className="nav-item-area w-100">
          {sideNavLinks.map((nav, index) => (
            <SideNavItem nav={nav} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
