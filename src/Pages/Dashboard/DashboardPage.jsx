import { label } from "framer-motion/client";
import PageHeader from "../../components/layout/PageHeader";

const DashboardPage = () => {
  return (
    <PageHeader
      items={[
        {
          icon: "/navbar/gauge.svg",
          label: "Dashboard",
        },
      ]}
    />
  );
};

export default DashboardPage;
