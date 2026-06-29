import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import CampaignsDropdown from "../sidebar/CampaignsDropdown";
import Tools from "../sidebar/Tools";
import Numbers from "../sidebar/Numbers";
import Contacts from "../sidebar/Contacts";
import Reports from "../sidebar/Reports";
import Api from "../sidebar/Api";
import Home from "../sidebar/Home";
import Dashboard from "../sidebar/Dashboard";
import Livechat from "../sidebar/Livechat";

const MainContent = ({ mainMenuOpen }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
   <div className="flex h-screen">
      <div
        className={`fixed left-0 top-[78px] bg-[#006EC2] transition-all duration-300
        ${mainMenuOpen ? "w-[240px]" : "w-[70px]"}
        h-[calc(100vh-78px)]`}
      >
        <div className="flex flex-col justify-between h-full px-3 pt-2 pb-7">
          <div className="flex-1 text-sm overflow-y-auto sidebar-scroll">
            <ul className="space-y-1">
              <Home mainMenuOpen={mainMenuOpen} />
              <Dashboard mainMenuOpen={mainMenuOpen} />

              {mainMenuOpen && (
                <h1 className="text-xs text-white mt-1 mb-1 px-3">
                  Communication
                </h1>
              )}

              <CampaignsDropdown
                mainMenuOpen={mainMenuOpen}
                activeDropdown={activeDropdown}
                setActiveDropdown={setActiveDropdown}
              />

              <Tools
                mainMenuOpen={mainMenuOpen}
                activeDropdown={activeDropdown}
                setActiveDropdown={setActiveDropdown}
              />

              <Livechat mainMenuOpen={mainMenuOpen} />

              {mainMenuOpen && (
                <h1 className="text-xs text-white mt-1 mb-1 px-3">Manage</h1>
              )}

              <Numbers
                mainMenuOpen={mainMenuOpen}
                activeDropdown={activeDropdown}
                setActiveDropdown={setActiveDropdown}
              />

              <Contacts
                mainMenuOpen={mainMenuOpen}
                activeDropdown={activeDropdown}
                setActiveDropdown={setActiveDropdown}
              />

              <Reports
                mainMenuOpen={mainMenuOpen}
                activeDropdown={activeDropdown}
                setActiveDropdown={setActiveDropdown}
              />

              <Api
                mainMenuOpen={mainMenuOpen}
                activeDropdown={activeDropdown}
                setActiveDropdown={setActiveDropdown}
              />
            </ul>
          </div>

          <div>
            {mainMenuOpen && (
              <h1 className="text-xs text-white mt-1 mb- px-3">Personal</h1>
            )}

            <div className="px-2">
              <div className="flex items-center gap-0.5">
                <img
                  src="/navbar/coins.svg"
                  alt="coins-logo"
                  className="w-5 h-5"
                />

                {mainMenuOpen && (
                  <h1 className="text-sm text-white  pl-3">Credits</h1>
                )}
              </div>

              {mainMenuOpen && (
                <span className="block text-sm text-white mt-2 pl-3">
                  USD 86,682.27
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div
  className={`flex-1 min-w-0 transition-all duration-300 pt-[78px] overflow-y-auto h-screen
        ${mainMenuOpen ? "ml-[240px]" : "ml-[70px]"}`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default MainContent;
