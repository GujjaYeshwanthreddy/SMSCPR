import React from "react";
import { NavLink } from "react-router-dom";

const Home = ({ mainMenuOpen }) => {
  return (
    <NavLink
      to="/"
      end
      className={({ isActive }) =>
        `flex items-center gap-2 text-sm  px-2 py-1.5 rounded-md cursor-pointer
        ${
          isActive ? "bg-[#005A9C] text-white" : "text-white hover:bg-[#005A9C]"
        }`
      }
    >
      <img src="/navbar/house.svg" alt="house-logo" className="w-5 h-5" />

      {mainMenuOpen && <span>Home</span>}
    </NavLink>
  );
};

export default Home;
