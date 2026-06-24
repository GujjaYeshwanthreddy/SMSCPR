import React from "react";
import { NavLink } from "react-router-dom";

const Dashboard = ({ mainMenuOpen }) => {
  return (
    <NavLink
      to="/dashboard"
      className={({ isActive }) =>
        `flex items-center gap-3 text-base px-2 py-2 rounded-md cursor-pointer
        ${
          isActive ? "bg-[#005A9C] text-white" : "text-white hover:bg-[#005A9C]"
        }`
      }
    >
      <img src="/navbar/gauge.svg" alt="dashboard-logo" className="w-8 h-8" />

      {mainMenuOpen && <span>Dashboard</span>}
    </NavLink>
  );
};

export default Dashboard;
