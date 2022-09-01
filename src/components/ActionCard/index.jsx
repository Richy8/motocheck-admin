import React from "react";
import "./index.scss";

const index = ({ action }) => {
  return (
    <div className={`action-card pointer brand-light-${action.color}-bg`}>
      <div className={`icon-wrapper brand-${action.color}-bg`}>
        <div className={`icon ${action.icon}`}></div>
      </div>

      <div>
        <div className="title">Create new</div>
        <div className="meta">{action.text}</div>
      </div>

      <div className="link-indicator icon-arrow-right brand-black"></div>
    </div>
  );
};

export default index;
