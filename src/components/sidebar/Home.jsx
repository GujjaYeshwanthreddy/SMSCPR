import React from "react";
import { NavLink } from "react-router-dom";

const Home = ({ mainMenuOpen }) => {
  return (
    // Home navigation link
    <NavLink
      to="/"
      end
      className={({ isActive }) =>
        `flex items-center justify-start gap-2 text-sm py-2 px-2 rounded-lg cursor-pointer
        ${
          isActive
            ? "bg-[#005A9C] text-white"
            : "text-white hover:bg-[#005A9C]"
        }`
      }
    >
      {/* Home icon */}
      <img
        src="/navbar/house.svg"
        alt="house-logo"
        className="w-5 h-5"
      />

      {/* Display the label when the sidebar is expanded */}
      {mainMenuOpen && <span>Home</span>}
    </NavLink>
  );
};

export default Home;