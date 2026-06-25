import React from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const CampaignsDropdown = ({
  mainMenuOpen,
  activeDropdown,
  setActiveDropdown,
}) => {
  const open = activeDropdown === "campaigns";

  return (
    <>
      <motion.li
        layout
        onClick={() => setActiveDropdown(open ? null : "campaigns")}
        className="flex items-center justify-between gap-2 text-sm cursor-pointer px-2 py-1.5 rounded-md hover:bg-[#005A9C]"
      >
        <div className="flex items-center gap-2 text-white">
          <img src="/navbar/bullhorn.svg" alt="bullhorn" className="w-6 h-6" />

          {mainMenuOpen && <span>Campaigns</span>}
        </div>

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
            className="overflow-hidden ml-2 mt-2 space-y-0.5 text-sm text-white"
          >
            <li>
              <NavLink
                to="/campaigns/send-message"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-2 py-1.5 rounded-md ${
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

            <li>
              <NavLink
                to="/campaigns/two-way-messaging"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-2 py-1.5 rounded-md ${
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

            <li>
              <NavLink
                to="/campaigns/autoresponders"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-2 py-1.5 rounded-md ${
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

            <li>
              <NavLink
                to="/campaigns/schedule-campaigns"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-2 py-1.5 rounded-md ${
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
