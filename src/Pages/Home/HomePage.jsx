import PageHeader from "../../components/layout/PageHeader";

const HomePage = () => {
  return (
    // Render the page header with navigation links for the Home page
    <PageHeader
      items={[
        // Home navigation
        {
          icon: "/navbar/house.svg",
        },
      ]}
    />
  );
};

export default HomePage;