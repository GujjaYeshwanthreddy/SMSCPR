import PageHeader from "../../components/layout/PageHeader";

const MessageTemplatePages = () => {
  return (
    // Render the page header with navigation links for the Message Templates page
    <PageHeader
      items={[
        // Home navigation
        {
          icon: "/navbar/house.svg",
        },

        // Tools navigation
        {
          icon: "/navbar/screwdriver-wrench.svg",
          label: "Tools",
        },

        // Message Templates navigation
        {
          icon: "/navbar/tools/envelope-open-text.svg",
          label: "Message Templates",
        },
      ]}
    />
  );
};

export default MessageTemplatePages;