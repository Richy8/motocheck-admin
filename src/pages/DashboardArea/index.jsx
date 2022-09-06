import React from "react";
import { ActionCard, ActivityBlock } from "components";
import backdropChart from "assets/line-chart.svg";
import "./index.scss";

const actions = [
  {
    icon: "icon-notes",
    text: "Form",
    color: "orange",
  },
  {
    icon: "icon-users",
    text: "Autocenter",
    color: "pale",
  },
  {
    icon: "icon-files",
    text: "Dispatch",
    color: "red",
  },
];

const index = () => {
  return (
    <div className="dashboard-area">
      <div className="title-text brand-ash">Overview</div>

      {/* OVERVIEW AREA */}
      <div className="wrapper-row">
        <div className="overview-area brand-white-bg">
          {/* OVERVIEW CARD */}
          <div className="overview-card">
            <div className="title-row">
              <div className="text">228</div>

              <div className="indicator">
                <div className="icon icon-triangle brand-green"></div>
                <div className="indicator-text brand-ash">+3</div>
              </div>
            </div>

            <div className="meta">Autocenters</div>

            {/* BACKDROP */}
            <img src={backdropChart} alt="chart" className="backdrop" />
          </div>

          {/* OVERVIEW CARD */}
          <div className="overview-card">
            <div className="title-row">
              <div className="text">44</div>
            </div>

            <div className="meta">Forms Created</div>

            {/* BACKDROP */}
            <img src={backdropChart} alt="chart" className="backdrop" />
          </div>

          {/* OVERVIEW CARD */}
          <div className="overview-card">
            <div className="title-row">
              <div className="text">QWG3O32K</div>
            </div>

            <div className="meta">Organization Key</div>

            {/* BACKDROP */}
            <img src={backdropChart} alt="chart" className="backdrop" />
          </div>
        </div>
      </div>

      {/* KET ACTIONS AREA */}
      <div className="title-text brand-ash">Key actions</div>

      <div className="key-actions-area">
        {actions.map((action, index) => (
          <ActionCard action={action} key={index} />
        ))}
      </div>

      {/* ACTIVITY LOG AREA */}
      <div className="title-text brand-ash">Activity log</div>

      <ActivityBlock />

      <div className="load-more brand-black pointer">View more activity</div>
    </div>
  );
};

export default index;
