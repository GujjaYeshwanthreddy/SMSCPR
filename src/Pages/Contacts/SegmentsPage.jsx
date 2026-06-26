import PageHeader from "../../components/layout/PageHeader";

const SegmentsPage = () => {
  return (
    // Render the page header with navigation links for the Segments page
    <PageHeader
      items={[
        // Home navigation
        { icon: "/navbar/house.svg" },

        // Contacts navigation
        {
          icon: "/navbar/address-book.svg",
          label: "Contacts",
        },

        // Segments navigation
        {
          icon: "/navbar/Contacts/layer-group.svg",
          label: "Segments",
        },
      ]}
    />
  );
};

export default SegmentsPage;