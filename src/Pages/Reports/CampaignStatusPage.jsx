import PageHeader from "../../components/layout/PageHeader";

const CampaignStatusPage = () => {
  return (
    // Render the page header with navigation links for the Campaign Status page
    <PageHeader
      items={[
        // Home navigation
        { icon: "/navbar/house.svg" },

        // Reports navigation
        {
          icon: "/navbar/file-chart-column.svg",
          label: "Reports",
        },

        // Campaign Status navigation
        {
          icon: "/navbar/reports/box-archive.svg",
          label: "Campaign Status",
        },
      ]}
    />
  );
};

export default CampaignStatusPage;