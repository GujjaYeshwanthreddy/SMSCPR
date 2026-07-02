import PageHeader from "../../components/layout/PageHeader";
import { useState } from "react";
import BeginRegistrationPage from "./BeginRegistrationPage";

const HomePage = () => {
  const [showRegistration, setShowRegistration] = useState(false);
  if (showRegistration) {
    return <BeginRegistrationPage onClose={() => setShowRegistration(false)} />;
  }

  return (
    <div className=" bg-[#F3F4F6]">
      <PageHeader
        items={[
          {
            icon: "/navbar/house.svg",
          },
        ]}
      />

      <div className="p-5">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm px-5 pt-6 pb-10">
          {/* Close Button */}
          <div className="flex justify-end">
            <button className="text-3xl text-gray-500 hover:text-black cursor-pointer">
              &times;
            </button>
          </div>

          {/* Heading */}
          <div className="text-center ">
            <h1 className="text-2xl font-bold text-[#2F3A4F] mb-2 mt-10">
              Get started as a registered sender
            </h1>

            <p className="mt-4 max-w-[760px] mx-auto text-center text-[14px]  font-medium font-semibold leading-6 text-[#4B5563] font-normal">
              To comply with mobile carrier regulations, all businesses must
              register before sending text messages. Don't worry
              <br />
              -this process is quick and straightforward.
            </p>
          </div>

          {/* Sub Heading */}
          <h2 className="text-center text-[16px] mb-4  font-bold text-[#2F3A4F] mt-14">
            Here's what you'll need:
          </h2>

          {/* Cards */}
          <div className="grid grid-cols-3 gap-x-4 px-2">
            {/* Card 1 */}
            <div className="bg-[#FAFAFA] rounded-2xl border border-gray-100 px-6 py-4 flex gap-6">
              <div className="border-l-4 border-[#0EA5E9] pl-5 flex items-center">
                <h1 className="text-[48px] font-bold text-[#006EC2]">1</h1>
              </div>

              <div className="flex-1">
                <h2 className="text-[18px] font-semibold text-[#2F3A4F]">
                  Business information
                </h2>

                <p className="text-[#374151] font-medium mt-2 text-[14px] leading-6">
                  Provide essential details like your company's EIN, industry,
                  and registered street address.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#FAFAFA] rounded-2xl border border-gray-100 px-6 py-4 flex gap-6">
              <div className="border-l-4 border-[#069EDC] pl-5 flex items-center">
                <h1 className="text-[48px] font-bold text-[#06B6D4]">2</h1>
              </div>

              <div className="flex-1">
                <h2 className="text-[18px] font-semibold text-[#2F3A4F]">
                  Use case and consent
                </h2>

                <p className="text-[#374151]  font-medium mt-2 text-[14px] leading-6">
                  Share how you plan to use texting and describe your method for
                  collecting customer consent.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#FAFAFA] rounded-2xl border border-gray-100 px-6 py-4 flex gap-6">
              <div className="border-l-4 border-[#0F4C81] pl-5 flex items-center">
                <h1 className="text-[48px] font-bold text-[#0F4C81]">3</h1>
              </div>

              <div className="flex-1">
                <h2 className="text-[18px] font-semibold text-[#003F70]">
                  Approval timeline
                </h2>

                <p className="text-[#374151] mt-2 text-[14px]  font-medium leading-6">
                  Approval usually takes less than 1 business day. Errors may
                  extend the process to 3 days, so double-check your information
                  before submitting.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Buttons */}
          <div className="flex justify-center items-center gap-10 mt-12 mb-8">
            <button className="text-[#0F4C81] cursor-pointer font-semibold text-base">
              Set up later
            </button>

            <button
              onClick={() => setShowRegistration(true)}
              className="bg-[#0F4C81] hover:bg-[#0B3B63] text-white px-10 py-4 rounded-xl cursor-pointer text-base font-semibold"
            >
              Begin Registration
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
