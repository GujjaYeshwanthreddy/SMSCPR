import PageHeader from "../../components/layout/PageHeader";

const MediaLibraryPage = () => {
  return (
    // Render the page header with navigation links for the Media Library page
    <PageHeader
      items={[
        // Home navigation
        { icon: "/navbar/house.svg" },

        // Tools navigation
        {
          icon: "/navbar/screwdriver-wrench.svg",
          label: "Tools",
        },

        // Media Library navigation
        {
          icon: "/navbar/tools/photo-film-music.svg",
          label: "Media Library",
        },
      ]}
    />
  );
};

export default MediaLibraryPage;