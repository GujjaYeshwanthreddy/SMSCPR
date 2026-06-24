import React from "react";

const Navbar = ({ mainMenuOpen, setMainMenuOpen }) => {
  return (
    <div className="bg-[#003F70] h-[110px] w-full">
      <nav className="h-full flex items-center justify-between px-3 md:px-8 text-white py-3 overflow-hidden">
        <div className="flex items-center gap-3 md:gap-8">
          <img
            src="/navbar/left-arrow.svg"
            alt="toggle-menu"
            className="cursor-pointer w-6 h-6 md:w-8 md:h-8"
            onClick={() => setMainMenuOpen(!mainMenuOpen)}
          />

          <img
            src="/strategic-logo.svg"
            alt="logo-img"
            className="h-[70px] w-[110px] md:h-[150px] md:w-[150px]"
          ></img>
        </div>
        <div className="flex items-center gap-3  mr-2 mb:2">
          <img
            src="/navbar/globe.svg"
            alt="globe-logo"
            className="w-7 h-7 md:w-10 md:h-10"
          ></img>
          <img
            src="/navbar/bell.svg"
            alt="bell=logo"
            className="w-7 h-7 md:w-10 md:h-10"
          ></img>
          <img
            src="/navbar/circle-user.svg"
            alt="circle-user.logo"
            className="w-7 h-7 md:w-10 md:h-10"
          ></img>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
