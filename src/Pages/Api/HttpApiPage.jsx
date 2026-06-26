import PageHeader from "../../components/layout/PageHeader";

const HttpApiPage = () => {
  return (
    // Render the page header with navigation links for the HTTP API page
    <PageHeader
      items={[
        // Home navigation
        { icon: "/navbar/house.svg" },

        // API navigation
        {
          icon: "/navbar/code.svg",
          label: "API",
        },

        // HTTP API navigation
        {
          icon: "/navbar/reports/inbox.svg",
          label: "HTTP API",
        },
      ]}
    />
  );
};

export default HttpApiPage;