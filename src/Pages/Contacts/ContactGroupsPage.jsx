import PageHeader from "../../components/layout/PageHeader";

const ContactGroupsPage = () => {
  return (
    // Render the page header with navigation links for the Contact Groups page
    <PageHeader
      items={[
        // Home navigation
        { icon: "/navbar/house.svg" },

        // Contacts navigation
        {
          icon: "/navbar/address-book.svg",
          label: "Contacts",
        },

        // Contact Groups navigation
        {
          icon: "/navbar/Contacts/layer-group.svg",
          label: "Contact Groups",
        },
      ]}
    />
  );
};

export default ContactGroupsPage;