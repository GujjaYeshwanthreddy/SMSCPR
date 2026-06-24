import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Api = ({ mainMenuOpen }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <li
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3 cursor-pointer justify-between px-2 py-2 rounded-md hover:bg-[#005A9C]"
      >
        <div className="flex items-center gap-3 text-xl text-white">
          <img src="/navbar/code.svg" alt="code-logo" className="w-8 h-8" />
          {mainMenuOpen && <span>API</span>}
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
            className="overflow-hidden ml-2 mt-2 space-y-2 text-xl"
          >
            <li>
              <Link
                to="/api/http-api"
                className="flex items-center gap-3 px-2 py-2 rounded-md hover:bg-[#005A9C] text-white"
              >
                <img src="/navbar/reports/inbox.svg" alt="http-api-logo" />

                <span>HTTP API</span>
              </Link>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
};

export default Api;
