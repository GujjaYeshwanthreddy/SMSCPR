import PageHeader from "../../components/layout/PageHeader";

const ScheduleCampaignsPage = () => {
  return (
    // Render the page header with navigation links for the Schedule Campaigns page
    <PageHeader
      items={[
        // Home navigation
        { icon: "/navbar/house.svg" },

        // Campaigns navigation
        {
          icon: "/navbar/bullhorn.svg",
          label: "Campaigns",
        },

        // Schedule Campaigns navigation
        {
          icon: "/navbar/campaigns/calendar-clock.svg",
          label: "Schedule Campaigns",
        },
      ]}
    />
  );
};

export default ScheduleCampaignsPage;