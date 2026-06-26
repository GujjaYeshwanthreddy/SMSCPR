import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";

const Api = ({ mainMenuOpen, activeDropdown, setActiveDropdown }) => {
  // Check whether the API dropdown is expanded
  const open = activeDropdown === "api";

  return (
    <>
      {/* API parent menu item */}
      <motion.li
        layout
        onClick={() => setActiveDropdown(open ? null : "api")}
        className="flex items-center gap-2 cursor-pointer text-sm justify-between px-2 py-2 rounded-md hover:bg-[#005A9C]"
      >
        {/* API icon and label */}
        <div className="flex items-center gap-2 text-white">
          <img
            src="/navbar/code.svg"
            alt="code-logo"
            className="w-5 h-5"
          />

          {mainMenuOpen && <span>API</span>}
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

      {/* Animated submenu */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            layout
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
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
            {/* HTTP API navigation link */}
            <li>
              <NavLink
                to="/api/http-api"
                className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-[#005A9C] text-white"
              >
                <img
                  src="/navbar/reports/inbox.svg"
                  alt="http-api-logo"
                  className="w-5 h-5"
                />

                <span>HTTP API</span>
              </NavLink>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
};

export default Api;