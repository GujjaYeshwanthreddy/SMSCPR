import React from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Contacts = ({ mainMenuOpen, activeDropdown, setActiveDropdown }) => {
  // Check whether the Contacts dropdown is expanded
  const open = activeDropdown === "contacts";

  return (
    <>
      {/* Contacts parent menu item */}
      <motion.li
        layout
        onClick={() => setActiveDropdown(open ? null : "contacts")}
        className="flex items-center justify-between gap-2 cursor-pointer text-sm px-2 py-2 rounded-lg hover:bg-[#005A9C]"
      >
        {/* Contacts icon and label */}
        <div className="flex items-center gap-2 text-white">
          <img
            src="/navbar/address-book.svg"
            alt="address-logo"
            className="w-5 h-5"
          />

          {mainMenuOpen && <span>Contacts</span>}
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

      {/* Animated Contacts submenu */}
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
            className="overflow-hidden ml-2 mt-2 space-y-2 text-sm text-white"
          >
            {/* Contact Groups navigation link */}
            <li>
              <NavLink
                to="/contacts/contact-groups"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-2 py-1.5 rounded-lg ${
                    isActive
                      ? "bg-[#005A9C] text-white"
                      : "text-white hover:bg-[#005A9C]"
                  }`
                }
              >
                <img
                  src="/navbar/Contacts/users-medical.svg"
                  alt="users-medical-logo"
                  className="w-5 h-5"
                />
                <span>Contact Groups</span>
              </NavLink>
            </li>

            {/* Segments navigation link */}
            <li>
              <NavLink
                to="/contacts/segments"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-2 py-1.5 rounded-lg ${
                    isActive
                      ? "bg-[#005A9C] text-white"
                      : "text-white hover:bg-[#005A9C]"
                  }`
                }
              >
                <img
                  src="/navbar/Contacts/layer-group.svg"
                  alt="layer-group-logo"
                  className="w-5 h-5"
                />
                <span>Segments</span>
              </NavLink>
            </li>

            {/* Custom Fields navigation link */}
            <li>
              <NavLink
                to="/contacts/custom-fields"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-2 py-1.5 rounded-lg ${
                    isActive
                      ? "bg-[#005A9C] text-white"
                      : "text-white hover:bg-[#005A9C]"
                  }`
                }
              >
                <img
                  src="/navbar/Contacts/list-check.svg"
                  alt="list-check-logo"
                  className="w-5 h-5"
                />
                <span>Custom Fields</span>
              </NavLink>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
};

export default Contacts;