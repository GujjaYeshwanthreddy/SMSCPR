import PageHeader from "../../components/layout/PageHeader";

const VirtualNumbersPage = () => {
  return (
    <PageHeader
      items={[
        {
          icon: "/navbar/house.svg",
        },
        {
          icon: "/navbar/hashtag.svg",
          label: "Numbers",
        },
        {
          icon: "/navbar/numbers/phone-plus.svg",
          label: "Virtual Numbers",
        },
      ]}
    />
  );
};

export default VirtualNumbersPage;
