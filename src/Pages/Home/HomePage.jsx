import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/layout/PageHeader";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F3F3F3] min-h-screen">
      {/* Header */}
      <PageHeader
        items={[
          {
            icon: "/navbar/house.svg",
          },
        ]}
      />

      {/* Main Section */}
      <div className="m-6">
        {/* Main Card */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-13">
          {/* Close Button */}
          <div className="flex justify-end">
            <button className="text-3xl text-gray-500 hover:text-black">
              &times;
            </button>
          </div>

          {/* Heading */}
          <div className="text-center pt-31">
            <h1 className="text-4xl font-bold text-[#2F3A4F]">
              Get started as a registered sender
            </h1>

            <p className="text-gray-600 text-lg mt-5 max-w-5xl mx-auto leading-8">
              To comply with mobile carrier regulations, all businesses must
              register before sending text messages. Don't worry this process is
              quick and straightforward.
            </p>
          </div>

          {/* Sub Heading */}
          <h2 className="text-center text-2xl font-semibold text-[#2F3A4F] mt-14">
            Here's what you'll need:
          </h2>

          {/* Info Cards */}
          <div className="grid grid-cols-3 gap-6 mt-10">
            {/* Card 1 */}
            <div className="bg-[#FAFAFA] rounded-2xl p-7 flex gap-5 border border-gray-100">
              <div className="border-l-4 border-[#0EA5E9] pl-5 flex items-center">
                <h1 className="text-6xl font-bold text-[#0EA5E9]">1</h1>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#2F3A4F]">
                  Business information
                </h2>

                <p className="text-gray-600 mt-4 text-lg leading-8">
                  Provide essential details like your company's EIN, industry,
                  and registered street address.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#FAFAFA] rounded-2xl p-7 flex gap-5 border border-gray-100">
              <div className="border-l-4 border-[#06B6D4] pl-5 flex items-center">
                <h1 className="text-6xl font-bold text-[#06B6D4]">2</h1>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#2F3A4F]">
                  Use case and consent
                </h2>

                <p className="text-gray-600 mt-4 text-lg leading-8">
                  Share how you plan to use texting and describe your method for
                  collecting customer consent.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#FAFAFA] rounded-2xl p-7 flex gap-5 border border-gray-100">
              <div className="border-l-4 border-[#0F4C81] pl-5 flex items-center">
                <h1 className="text-6xl font-bold text-[#0F4C81]">3</h1>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#2F3A4F]">
                  Approval timeline
                </h2>

                <p className="text-gray-600 mt-4 text-lg leading-8">
                  Approval usually takes less than 1 business day. Errors may
                  extend the process to 3 days.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Buttons */}
          <div className="flex justify-center items-center gap-8 mt-14">
            <button className="text-[#0F4C81] font-semibold text-xl">
              Set up later
            </button>

            <button
              onClick={() => navigate("/begin-registration")}
              className="bg-[#0F4C81] hover:bg-[#0B3B63] text-white px-10 py-4 rounded-xl text-xl font-semibold transition-all duration-300"
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