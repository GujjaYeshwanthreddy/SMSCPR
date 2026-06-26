import PageHeader from "../../components/layout/PageHeader";

const UrlShortenerPage = () => {
  return (
    // Render the page header with navigation links for the URL Shortener page
    <PageHeader
      items={[
        // Home navigation
        { icon: "/navbar/house.svg" },

        // Tools navigation
        {
          icon: "/navbar/screwdriver-wrench.svg",
          label: "Tools",
        },

        // URL Shortener navigation
        {
          icon: "/navbar/tools/link.svg",
          label: "URL Shortener",
        },
      ]}
    />
  );
};

export default UrlShortenerPage;