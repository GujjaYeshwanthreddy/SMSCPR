import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const CampaignsDropdown = ({ mainMenuOpen }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <li
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 justify--base cursor-pointer px-2 py-2 rounded-md hover:bg-[#005A9C]"
      >
        <div className="flex items-center gap-3  text-white">
          <img src="/navbar/bullhorn.svg" alt="bullhorn" className="w-8 h-8" />

          {mainMenuOpen && <span className=" text-white">Campaigns</span>}
        </div>

        {mainMenuOpen && (
          <motion.img
            src="/cheveron-down.svg"
            alt="chevron"
            className="w-6 h-6 ml-auto"
            animate={{
              rotate: open ? 180 : 0,
            }}
            transition={{
              duration: 0.3,
            }}
          />
        )}
      </li>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden ml-2 mt-2 space-y-1 text-base text-white"
          >
            <li>
              <NavLink
                to="/campaigns/send-message"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-2 py-2 rounded-md
                  ${
                    isActive
                      ? "bg-[#005A9C] text-white"
                      : "text-white hover:bg-[#005A9C]"
                  }`
                }
              >
                <img
                  src="/navbar/campaigns/paper-plane.svg"
                  alt="paper-plane"
                />
                <span>Send Message</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/campaigns/two-way-messaging"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-2 py-2 rounded-md
                  ${
                    isActive
                      ? "bg-[#005A9C] text-white"
                      : "text-white hover:bg-[#005A9C]"
                  }`
                }
              >
                <img
                  src="/navbar/campaigns/arrows-turn-to-dots.svg"
                  alt="two-way"
                />
                <span>2-Way Messaging</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/campaigns/autoresponders"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-2 py-2 rounded-md
                  ${
                    isActive
                      ? "bg-[#005A9C] text-white"
                      : "text-white hover:bg-[#005A9C]"
                  }`
                }
              >
                <img src="/navbar/campaigns/sliders.svg" alt="autoresponders" />
                <span>Autoresponders</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/campaigns/schedule-campaigns"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-2 py-2 rounded-md
                  ${
                    isActive
                      ? "bg-[#005A9C] text-white"
                      : "text-white hover:bg-[#005A9C]"
                  }`
                }
              >
                <img
                  src="/navbar/campaigns/calendar-clock.svg"
                  alt="schedule"
                />
                <span>Schedule Campaigns</span>
              </NavLink>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
};

export default CampaignsDropdown;
