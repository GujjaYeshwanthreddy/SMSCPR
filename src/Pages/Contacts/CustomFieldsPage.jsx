import PageHeader from "../../components/layout/PageHeader";

const CustomFieldsPage = () => {
  return (
    // Render the page header with navigation links for the Custom Fields page
    <PageHeader
      items={[
        // Home navigation
        {
          icon: "/navbar/house.svg",
        },

        // Contacts navigation
        {
          icon: "/navbar/address-book.svg",
          label: "Contacts",
        },

        // Custom Fields navigation
        {
          icon: "/navbar/Contacts/list-check.svg",
          label: "Custom Fields",
        },
      ]}
    />
  );
};

export default CustomFieldsPage;