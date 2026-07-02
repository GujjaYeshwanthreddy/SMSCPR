import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

import PageHeader from "../../components/layout/PageHeader";

const BeginRegistrationPage = ({ onClose }) => {
  const [taxId, setTaxId] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleTaxIdChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");

    value = value.slice(0, 9);

    let formatted = value;

    if (value.length > 2) {
      formatted = value.slice(0, 2) + "-" + value.slice(2);
    }

    setTaxId(formatted);

    if (value.length === 0) {
      setError("");
    } else if (value.length < 9) {
      setError("Tax ID/EIN must contain 9 digits.");
    } else {
      setError("");
    }
  };

  return (
    <>
      <PageHeader
        items={[
          {
            icon: "/navbar/house.svg",
          },
        ]}
      />

      <div className="min-h-[calc(100vh-120px)] bg-[#F3F4F6] py-5">
        <div className="relative bg-white rounded-2xl border border-gray-200 shadow-sm h-[500px] flex flex-col">
          <motion.button
            onClick={onClose}
            className="absolute top-8 right-8 text-3xl text-gray-500 hover:text-black cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            &times;
          </motion.button>

          <div className="flex-1 flex flex-col items-center justify-center py-12">
            <h1 className="text-2xl font-bold text-[#243B5A]">
              Verify your business or organization
            </h1>

            <p className="mt-4 max-w-3xl text-center text-[14px] font-semibold text-[#374151] leading-8">
              A Taxpayer Identification Number (TIN) or Employer Identification
              Number (EIN) is a unique identifier used for tax purposes in the
              United States and other countries.
            </p>

            <div className="mt-8 w-full max-w-md">
              <label className="flex items-center gap-2 text-[16px] font-semibold">
                Enter your Tax ID/EIN
                <div className="relative group">
                  <img
                    src="/circle-question.svg"
                    alt="Help"
                    className="w-5 h-5 cursor-pointer"
                  />

                  {/* Tooltip */}
                  <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden group-hover:block z-50">
  <div className="w-[350px] rounded-xl bg-white border border-gray-200 shadow-lg px-5 py-4">
    <p className="text-[14px] font-semibold leading-6 text-[#4B5563]">
      An Employer Identification Number (EIN) is a unique nine-digit number
      issued by the IRS to identify a business for tax purposes. It's often
      referred to as a federal tax ID and is required for most businesses to
      file taxes, hire employees, and open business bank accounts.
    </p>
  </div>
</div>
                </div>
              </label>
              <input
                type="text"
                value={taxId}
                onChange={handleTaxIdChange}
                placeholder="XX-XXXXXXX"
                className="w-full mt-3 h-14 rounded-lg px-4 text-lg border border-gray-300 hover:border-black focus:border-black focus:outline-none focus:ring-0 transition-colors duration-200"
              />
              {error && (
                <p className="mt-2 text-sm text-red-700 opacity-80">{error}</p>
              )}

              <div className="flex items-center justify-center gap-8 mt-8">
                <button
                  onClick={() => setShowModal(true)}
                  className="text-[#0A4B84] font-semibold text-xl cursor-pointer hover:underline"
                >
                  I don't have a Tax ID/EIN
                </button>

                <button className="bg-[#0A4B84] hover:bg-[#083B69] text-white cursor-pointer px-8 py-3 rounded-lg text-xl font-medium">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/40 flex items-center justify-center p-5 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <motion.div
              className="bg-white w-full max-w-lg h-[580px] rounded-2xl shadow-2xl overflow-hidden"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
            >
              {/* Header */}
              <div className="sticky top-0 z-20 bg-[#003F70] text-white flex justify-between items-center px-6 py-4">
                <h2 className="text-lg font-semibold">Sole Proprietor</h2>

                <button
                  onClick={() => setShowModal(false)}
                  className="text-3xl cursor-pointer"
                >
                  &times;
                </button>
              </div>

              {/* Body */}
              <div className="h-[510px] overflow-y-auto custom-scrollbar">
                <div className="px-4 py-1">
                  <h3 className="text-xl font-semibold mb-1 text-[#374151]">
                    Registering without an EIN as a sole proprietor
                  </h3>

                  <p className="pb-1 text-sm text-[#636B79] leading-5">
                    If your organization does not have a Tax ID or Employer
                    Identification Number (EIN), you can register as a Sole
                    Proprietor. However, please note the following limitations:
                  </p>

                  <div className="mt-2 space-y-2">
                    <div>
                      <h4 className="text-[14px] font-semibold text-[#003F70]">
                        Limited numbers
                      </h4>

                      <p className="mt-2 text-sm text-[#636B79]">
                        You'll be restricted to a single textable number on your
                        account and won't be able to purchase additional
                        numbers.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[14px] font-semibold text-[#003F70]">
                        Longer approval time
                      </h4>

                      <p className="mt-2 text-sm text-[#636B79]">
                        Carrier registration may take up to 5 days compared with
                        1–2 days using an EIN.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[14px] font-semibold text-[#003F70]">
                        Slower sending speeds
                      </h4>

                      <p className="mt-2 text-sm text-[#636B79]">
                        SMS sending speeds may be slower compared with
                        businesses registered using an EIN.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 rounded-xl text-sm bg-blue-100 p-5 text-[#004AC2]">
                    Before proceeding, confirm that you do not have an EIN or
                    Tax ID. Carriers will verify this information, and your
                    registration will be rejected if an EIN or Tax ID is found.
                  </div>

                  <div className="mt-3 pb-6">
                    <button className="w-full bg-[#003F70] hover:bg-[#005A9C] text-white py-3 rounded-lg text-base font-semibold cursor-pointer">
                      Continue as sole proprietor
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BeginRegistrationPage;
