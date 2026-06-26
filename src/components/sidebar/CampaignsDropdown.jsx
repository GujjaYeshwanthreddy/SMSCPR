import React from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const CampaignsDropdown = ({
  mainMenuOpen,
  activeDropdown,
  setActiveDropdown,
}) => {
  // Check whether the Campaigns dropdown is expanded
  const open = activeDropdown === "campaigns";

  return (
    <>
      {/* Campaigns parent menu item */}
      <motion.li
        layout
        onClick={() => setActiveDropdown(open ? null : "campaigns")}
        className="flex items-center justify-between px-2 py-2 rounded-lg text-sm cursor-pointer hover:bg-[#005A9C]"
      >
        {/* Campaigns icon and label */}
        <div className="flex items-center gap-2 text-white">
          <img
            src="/navbar/bullhorn.svg"
            alt="bullhorn"
            className="w-6 h-6"
          />

          {mainMenuOpen && <span>Campaigns</span>}
        </div>

        {/* Dropdown expand/collapse indicator */}
        {mainMenuOpen && (
          <motion.img
            src="/cheveron-down.svg"
            alt="chevron"
            className="w-5 h-5"
            animate={{ rotate: open ? 180 : 0 }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          />
        )}
      </motion.li>

      {/* Animated Campaigns submenu */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            layout
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              layout: {
                duration: 0.25,
                ease: "easeInOut",
              },
              height: {
                duration: 0.3,
                ease: "easeInOut",
              },
              opacity: {
                duration: 0.15,
              },
            }}
            style={{ willChange: "height, opacity" }}
            className="overflow-hidden ml-2 mt-2 space-y-1 text-sm text-white"
          >
            {/* Send Message navigation link */}
            <li>
              <NavLink
                to="/campaigns/send-message"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-2 py-1.5 rounded-lg ${
                    isActive
                      ? "bg-[#005A9C] text-white"
                      : "text-white hover:bg-[#005A9C]"
                  }`
                }
              >
                <img
                  src="/navbar/campaigns/paper-plane.svg"
                  alt="paper-plane"
                  className="w-5 h-5"
                />
                <span>Send Message</span>
              </NavLink>
            </li>

            {/* Two-Way Messaging navigation link */}
            <li>
              <NavLink
                to="/campaigns/two-way-messaging"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-2 py-1.5 rounded-lg ${
                    isActive
                      ? "bg-[#005A9C] text-white"
                      : "text-white hover:bg-[#005A9C]"
                  }`
                }
              >
                <img
                  src="/navbar/campaigns/arrows-turn-to-dots.svg"
                  alt="2-way"
                  className="w-5 h-5"
                />
                <span>2-Way Messaging</span>
              </NavLink>
            </li>

            {/* Autoresponders navigation link */}
            <li>
              <NavLink
                to="/campaigns/autoresponders"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-2 py-1.5 rounded-lg ${
                    isActive
                      ? "bg-[#005A9C] text-white"
                      : "text-white hover:bg-[#005A9C]"
                  }`
                }
              >
                <img
                  src="/navbar/campaigns/sliders.svg"
                  alt="autoresponders"
                  className="w-5 h-5"
                />
                <span>Autoresponders</span>
              </NavLink>
            </li>

            {/* Schedule Campaigns navigation link */}
            <li>
              <NavLink
                to="/campaigns/schedule-campaigns"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-2 py-1.5 rounded-lg ${
                    isActive
                      ? "bg-[#005A9C] text-white"
                      : "text-white hover:bg-[#005A9C]"
                  }`
                }
              >
                <img
                  src="/navbar/campaigns/calendar-clock.svg"
                  alt="schedule"
                  className="w-5 h-5"
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