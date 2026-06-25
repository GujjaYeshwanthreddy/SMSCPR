import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Api = ({ mainMenuOpen, activeDropdown, setActiveDropdown }) => {
  const open = activeDropdown === "api";

  return (
    <>
      <motion.li
        layout
        onClick={() => setActiveDropdown(open ? null : "api")}
        className="flex items-center gap-2 cursor-pointer text-sm justify-between px-2 py-1.5 rounded-md hover:bg-[#005A9C]"
      >
        <div className="flex items-center gap-2 text-white">
          <img src="/navbar/code.svg" alt="code-logo" className="w-5 h-5" />

          {mainMenuOpen && <span>API</span>}
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
                to="/api/http-api"
                className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-[#005A9C] text-white"
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
