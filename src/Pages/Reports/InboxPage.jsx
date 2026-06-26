import PageHeader from "../../components/layout/PageHeader";

const InboxPage = () => {
  return (
    // Render the page header with navigation links for the Inbox page
    <PageHeader
      items={[
        // Home navigation
        { icon: "/navbar/house.svg" },

        // Reports navigation
        {
          icon: "/navbar/file-chart-column.svg",
          label: "Reports",
        },

        // Inbox navigation
        {
          icon: "/navbar/reports/inbox.svg",
          label: "Inbox",
        },
      ]}
    />
  );
};

export default InboxPage;