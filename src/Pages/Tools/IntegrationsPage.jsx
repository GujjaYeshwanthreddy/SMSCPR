import PageHeader from "../../components/layout/PageHeader";

const IntegrationsPage = () => {
  return (
    // Render the page header with navigation links for the Integrations page
    <PageHeader
      items={[
        // Home navigation
        { icon: "/navbar/house.svg" },

        // Tools navigation
        {
          icon: "/navbar/screwdriver-wrench.svg",
          label: "Tools",
        },

        // Integrations navigation
        {
          icon: "/navbar/tools/gear-code.svg",
          label: "Integrations",
        },
      ]}
    />
  );
};

export default IntegrationsPage;