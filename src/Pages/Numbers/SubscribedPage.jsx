import PageHeader from "../../components/layout/PageHeader";

const SubscribedPage = () => {
  return (
    // Render the page header with navigation links for the Subscribed page
    <PageHeader
      items={[
        // Home navigation
        { icon: "/navbar/house.svg" },

        // Numbers navigation
        {
          icon: "/navbar/hashtag.svg",
          label: "Numbers",
        },

        // Subscribed navigation
        {
          icon: "/navbar/numbers/thumbs-up.svg",
          label: "Subscribed",
        },
      ]}
    />
  );
};

export default SubscribedPage;