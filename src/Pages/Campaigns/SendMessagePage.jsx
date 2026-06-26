import React from "react";
import PageHeader from "../../components/layout/PageHeader";

const SendMessagePage = () => {
  return (
    // Render the page header with navigation links for the Send Message page
    <PageHeader
      items={[
        // Home navigation
        { icon: "/navbar/house.svg" },

        // Campaigns navigation
        {
          icon: "/navbar/bullhorn.svg",
          label: "Campaigns",
        },

        // Send Message navigation
        {
          icon: "/navbar/campaigns/paper-plane.svg",
          label: "Send Message",
        },
      ]}
    />
  );
};

export default SendMessagePage;