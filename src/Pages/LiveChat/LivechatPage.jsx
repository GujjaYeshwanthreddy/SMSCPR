import PageHeader from "../../components/layout/PageHeader";

const LivechatPage = () => {
  return (
    // Render the page header with navigation links for the Live Chat page
    <PageHeader
      items={[
        // Home navigation
        { icon: "/navbar/house.svg" },

        // Live Chat navigation
        {
          icon: "/navbar/comments.svg",
          label: "Live Chat",
        },
      ]}
    />
  );
};

export default LivechatPage;