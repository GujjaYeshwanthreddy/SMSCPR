import React from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Numbers = ({ mainMenuOpen, activeDropdown, setActiveDropdown }) => {
  const open = activeDropdown === "numbers";

  return (
    <>
      <motion.li
        layout
        onClick={() => setActiveDropdown(open ? null : "numbers")}
        className="flex items-center justify-between gap-2 text-sm px-2 py-1.5 cursor-pointer rounded-md hover:bg-[#005A9C]"
      >
        <div className="flex items-center gap-2 text-white">
          <img src="/navbar/hashtag.svg" alt="hashtag" className="w-5 h-5" />

          {mainMenuOpen && <span>Numbers</span>}
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
                to="/numbers/virtual-numbers"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-2 py-1.5 rounded-md ${
                    isActive
                      ? "bg-[#005A9C] text-white"
                      : "text-white hover:bg-[#005A9C]"
                  }`
                }
              >
                <img
                  src="/navbar/numbers/phone-plus.svg"
                  alt="phone-plus-logo"
                  className="w-5 h-5"
                />

                <span>Virtual Numbers</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/numbers/subscribed"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-2 py-1.5 rounded-md ${
                    isActive
                      ? "bg-[#005A9C] text-white"
                      : "text-white hover:bg-[#005A9C]"
                  }`
                }
              >
                <img
                  src="/navbar/numbers/thumbs-up.svg"
                  alt="thumbs-up-logo"
                  className="w-5 h-5"
                />

                <span>Subscribed</span>
              </NavLink>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
};

export default Numbers;
