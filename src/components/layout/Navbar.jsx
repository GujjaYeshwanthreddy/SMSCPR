import React from "react";

const Navbar = ({ mainMenuOpen, setMainMenuOpen }) => {
  return (
   <div className="fixed top-0 left-0 right-0 z-50 bg-[#003F70] h-[80px] w-full">
      <nav className="h-full flex items-center justify-between px-3 md:px-8 text-white py-3 overflow-hidden">
        <div className="flex items-center gap-3 md:gap-8">
          <img
            src="/navbar/left-arrow.svg"
            alt="toggle-menu"
            className="cursor-pointer w-8 h-8"
            onClick={() => setMainMenuOpen(!mainMenuOpen)}
          />

          <img
            src="/strategic-logo.svg"
            alt="logo-img"
          className="h-15 w-auto justify-center"
          ></img>
        </div>
  <div className="flex items-center gap-16">
          <img
            src="/navbar/globe.svg"
            alt="globe-logo"
            className="w-9 h-9 "
          ></img>
          <img
            src="/navbar/bell.svg"
            alt="bell=logo"
            className="w-9 h-9"
          ></img>
          <img
            src="/navbar/circle-user.svg"
            alt="circle-user.logo"
            className="w-9 h-9"
          ></img>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
