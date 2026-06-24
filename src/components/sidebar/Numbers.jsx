import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Numbers = ({ mainMenuOpen }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <li
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-base px-2 cursor-pointer justify-between py-2 rounded-md hover:bg-[#005A9C]"
      >
        <div className="flex items-center gap-3 text-white ">
          <img src="/navbar/hashtag.svg" alt="hashtag" className="w-6 h-6" />

          {mainMenuOpen && <span>Numbers</span>}
        </div>

        {mainMenuOpen && (
          <motion.img
            src="/cheveron-down.svg"
            alt="chevron"
            className="w-6 h-6"
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
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="overflow-hidden ml-2 mt-2 space-y-1 text-base text-white"
          >
            <li>
              <NavLink
                to="/numbers/virtual-numbers"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-2 py-2 rounded-md ${
                    isActive
                      ? "bg-[#005A9C] text-white"
                      : "text-white hover:bg-[#005A9C]"
                  }`
                }
              >
                <img
                  src="/navbar/numbers/phone-plus.svg"
                  alt="phone-plus-logo" className="w-6 h-6"
                />

                <span>Virtual Numbers</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/numbers/subscribed"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-2 py-2 rounded-md ${
                    isActive
                      ? "bg-[#005A9C] text-white"
                      : "text-white hover:bg-[#005A9C]"
                  }`
                }
              >
                <img src="/navbar/numbers/thumbs-up.svg" alt="thumbs-up-logo" className="w-6 h-6" />

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
