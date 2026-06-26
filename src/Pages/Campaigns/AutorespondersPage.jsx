import PageHeader from "../../components/layout/PageHeader";

const AutorespondersPage = () => {
  return (
    // Render the page header with navigation links for the Autoresponders page
    <PageHeader
      items={[
        // Home navigation
        { icon: "/navbar/house.svg" },

        // Campaigns navigation
        {
          icon: "/navbar/bullhorn.svg",
          label: "Campaigns",
        },

        // Autoresponders navigation
        {
          icon: "/navbar/campaigns/sliders.svg",
          label: "Autoresponders",
        },
      ]}
    />
  );
};

export default AutorespondersPage;