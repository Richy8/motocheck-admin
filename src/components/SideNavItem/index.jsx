import React from "react";
import { Link } from "react-router-dom";

import "./index.scss";

const index = ({ nav }) => {
  return (
    <Link
      to=""
      className={`sidebar-item ${nav.link === "/" && "sidebar-item-active"}`}
    >
      <div className={`icon ${nav.icon}`}></div>
      <div className="text">{nav.text}</div>
    </Link>
  );
};

export default index;
