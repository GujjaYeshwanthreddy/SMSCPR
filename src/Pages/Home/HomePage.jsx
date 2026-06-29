import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/layout/PageHeader";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F3F3F3]">

      <PageHeader
        items={[
          {
            icon: "/navbar/house.svg",
          },
        ]}
      />


      <div className="m-6">

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-13 min-h-[700px]">

          <div className="flex justify-end">
            <button className="text-3xl text-gray-500 hover:text-black">
              &times;
            </button>
          </div>


          <div className="text-center pt-31">
            <h1 className="text-3xl font-bold text-[#2F3A4F]">
              Get started as a registered sender
            </h1>

            <p className="text-gray-600 text-base mt-5 max-w-4xl mx-auto leading-7">
              To comply with mobile carrier regulations, all businesses must
              register before sending text messages. Don't worry this process is
              quick and straightforward.
            </p>
          </div>

          <h2 className="text-center text-xl font-semibold text-[#2F3A4F] mt-14">
            Here's what you'll need:
          </h2>


          <div className="grid grid-cols-3 gap-6 mt-10">

            <div className="bg-[#FAFAFA] rounded-2xl p-7 flex gap-5 border border-gray-100">
              <div className="border-l-4 border-[#0EA5E9] pl-5 flex items-center">
                <h1 className="text-5xl font-bold text-[#0EA5E9]">1</h1>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[#2F3A4F]">
                  Business information
                </h2>

                <p className="text-gray-600 mt-3 text-lg leading-7">
                  Provide essential details like your company's EIN, industry,
                  and registered street address.
                </p>
              </div>
            </div>


            <div className="bg-[#FAFAFA] rounded-2xl p-7 flex gap-5 border border-gray-100">
              <div className="border-l-4 border-[#06B6D4] pl-5 flex items-center">
                <h1 className="text-5xl font-bold text-[#06B6D4]">2</h1>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[#2F3A4F]">
                  Use case and consent
                </h2>

                <p className="text-gray-600 mt-3 text-lg leading-7">
                  Share how you plan to use texting and describe your method for
                  collecting customer consent.
                </p>
              </div>
            </div>


            <div className="bg-[#FAFAFA] rounded-2xl p-7 flex gap-5 border border-gray-100">
              <div className="border-l-4 border-[#0F4C81] pl-5 flex items-center">
                <h1 className="text-5xl font-bold text-[#0F4C81]">3</h1>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[#2F3A4F]">
                  Approval timeline
                </h2>

                <p className="text-gray-600 mt-3 text-lg leading-7">
                  Approval usually takes less than 1 business day. Errors may
                  extend the process to 3 days.
                </p>
              </div>
            </div>
          </div>


          <div className="flex justify-center items-center gap-8 mt-14">
            <button className="text-[#0F4C81] cursor-pointer font-semibold text-base">
              Set up later
            </button>

            <button
  onClick={() => navigate("/begin-registration")}
  className="bg-[#0F4C81] hover:bg-[#0B3B63] active:bg-[#0F4C81] focus:outline-none focus:ring-0 text-white px-10 py-4 rounded-xl cursor-pointer text-base font-semibold transition-colors duration-300"
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