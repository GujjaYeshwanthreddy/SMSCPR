import PageHeader from "../../components/layout/PageHeader";

const TwoWayMessagingPage = () => {
  return (
    // Render the page header with navigation links for the 2-Way Messaging page
    <PageHeader
      items={[
        // Home navigation
        { icon: "/navbar/house.svg" },

        // Campaigns navigation
        {
          icon: "/navbar/bullhorn.svg",
          label: "Campaigns",
        },

        // 2-Way Messaging navigation
        {
          icon: "/navbar/campaigns/arrows-turn-to-dots.svg",
          label: "2-Way Messaging",
        },
      ]}
    />
  );
};

export default TwoWayMessagingPage;