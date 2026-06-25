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
    <div className="flex flex-1">
      <div
        className={`fixed left-0 top-[67px] bg-[#006EC2] transition-all duration-300
        ${mainMenuOpen ? "w-[240px]" : "w-[70px]"}
        h-[calc(100vh-67px)]`}
      >

       <div className="flex flex-col h-full">
  <div className="flex-1 overflow-y-auto sidebar-scroll px-4 pt-2">
          <ul className="mt-3 space-y-1">
            <Home mainMenuOpen={mainMenuOpen} />

            <Dashboard mainMenuOpen={mainMenuOpen} />

            {mainMenuOpen && (
              <h1 className="text-sm text-white">Communication</h1>
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
              <h1 className="text-sm text-white">Manage</h1>
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
         <div className="px-4 py-3 shrink-0">


            {mainMenuOpen && (
              <h1 className="text-sm text-white">Personal</h1>
            )}

            <div className="flex items-start gap-2">
              <img
                src="/navbar/coins.svg"
                alt="coins-logo"
                className="w-5 h-5 mt-1"
              />

              {mainMenuOpen && (
                <div className="flex flex-col">
                  <h1 className="text-base text-white">Credits</h1>
                  <h2 className="text-base text-white">
                    USD 86,682.27
                  </h2>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`flex-1 min-w-0 transition-all duration-300 pt-[67px]
        ${mainMenuOpen ? "ml-[240px]" : "ml-[70px]"}`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default MainContent;