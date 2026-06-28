import React from "react";
import { FaTimes, FaQuestionCircle } from "react-icons/fa";
import PageHeader from "../../components/layout/PageHeader";

const BeginRegistrationPage = () => {
  return (
    <>
      <PageHeader
        items={[
          {
            icon: "/navbar/house.svg",
          },
        ]}
      />

      <div className="min-h-[calc(100vh-120px)] bg-[#F3F4F6] p-5">
        <div className="relative bg-white rounded-2xl border border-gray-200 shadow-sm min-h-[520px]">

          {/* Close Icon */}
          <button className="absolute top-8 right-8 text-2xl text-gray-700 hover:text-black">
            <FaTimes />
          </button>

          <div className="flex flex-col items-center justify-center pt-32">

            {/* Heading */}
            <h1 className="text-[28px] font-semibold text-[#243B5A]">
              Verify your business or organization
            </h1>

            {/* Description */}
            <p className="mt-4 max-w-3xl text-center text-[18px] text-[#374151] leading-8">
              A Taxpayer Identification Number (TIN) or Employer Identification
              Number (EIN) is a unique identifier used for tax purposes in the
              United States and other countries.
            </p>

            {/* Form */}
            <div className="mt-14 w-full max-w-xl">

              <label className="flex items-center gap-2 text-[18px] font-semibold text-[#243B5A]">
                Enter your Tax ID/EIN
                <FaQuestionCircle className="text-[#0A74D1]" />
              </label>

              <input
                type="text"
                placeholder="XX-XXXXXXX"
                className="w-full mt-3 h-14 rounded-lg border border-gray-300 px-4 text-lg outline-none focus:border-[#0A74D1]"
              />

              <div className="flex items-center justify-center gap-8 mt-14">

                <button className="text-[#0A4B84] font-semibold text-xl hover:underline">
                  I don't have a Tax ID/EIN
                </button>

                <button className="bg-[#0A4B84] hover:bg-[#083B69] text-white px-8 py-3 rounded-lg text-xl font-medium">
                  Continue
                </button>

              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default BeginRegistrationPage;