import React from "react";
import Emitter from "utilities/emitter";
import { SideNavItem } from "components";
import { sideNavLinks } from "constants";

import "./index.scss";

const Index = () => {
  const brandLogo = require("assets/motocheck.png");
  const [toggle, setToggle] = React.useState(false);

  const hideSidebar = (evt) => {
    if (evt.target.classList.contains("sidebar-build-cover")) setToggle(false);
  };

  const closeSidebar = () => setToggle(false);

  React.useEffect(() => {
    Emitter.addListener("showSidebar", () => setToggle(true));
  }, []);

  return (
    <div
      className={`sidebar-build-cover ${toggle && "toggle-sidebar"}`}
      onClick={hideSidebar}
    >
      <div className="sidebar-build">
        {/* CLOSE TOGGLER */}
        <div
          className="close-toggler pointer rounded-8 d-md-none"
          onClick={() => closeSidebar()}
        >
          <div className="wrapper w-100 h-100">
            <div className="icon-close brand-text">&times;</div>
          </div>
        </div>

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

export default Index;
