import React from "react";
import CampaignsDropdown from "../sidebar/CampaignsDropdown";
import Tools from "../sidebar/Tools";
import Numbers from "../sidebar/Numbers";
import Contacts from "../sidebar/Contacts";
import Reports from "../sidebar/Reports";
import Api from "../sidebar/Api";
import Home from "../sidebar/Home";
import Dashboard from "../sidebar/Dashboard";
import Livechat from "../sidebar/Livechat";
import { Outlet } from "react-router-dom";

const MainContent = ({ mainMenuOpen }) => {
  return (
    <div className="flex flex-1">
      <div
        className={`relative bg-[#006EC2] fixed left-0
  transition-all duration-300 overflow-hidden
  ${mainMenuOpen ? "w-[220px] md:w-[260px]" : "w-[70px]"}
  h-[calc(100vh-110px)]`}
      >
        <div className="flex flex-col h-full top-[64px] ">
          <div className="flex flex-col h-[calc(100%-110px)] mt-2 ml-4 mr-4 overflow-hidden">
            <ul className="mt-2 space-y-2 gap-2 ">
              <Home mainMenuOpen={mainMenuOpen} />
              <Dashboard mainMenuOpen={mainMenuOpen} />

              {mainMenuOpen && (
                <h1 className="text-xl  text-white">Communication</h1>
              )}

              <CampaignsDropdown mainMenuOpen={mainMenuOpen} />

              <Tools mainMenuOpen={mainMenuOpen} />
              <Livechat mainMenuOpen={mainMenuOpen} />
              {mainMenuOpen && <h1 className="text-xl text-white">Manage</h1>}

              <Numbers mainMenuOpen={mainMenuOpen} />

              <Contacts mainMenuOpen={mainMenuOpen} />

              <Reports mainMenuOpen={mainMenuOpen} />

              <Api mainMenuOpen={mainMenuOpen} />
            </ul>
          </div>
          <div className="px-4 pb-4 space-y-2">
            {mainMenuOpen && <h1 className="text-xl  text-white">Personal</h1>}

            <div className="flex start  gap-3 ">
              <img
                src="/navbar/coins.svg"
                alt="coins-logo"
                className="w-5 h-5 mt-1"
              />

              {mainMenuOpen && (
                <div className="flex flex-col">
                  <h1 className="text-xl text-white">Credits</h1>

                  <span className="text-xl text-white">USD 86,682.27</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
   <div className="flex-1 min-w-0 transition-all duration-300">
  <Outlet />
</div>
    </div>
  );
};

export default MainContent;
