import React from "react";

const PageHeader = ({ items }) => {
  return (
    // Page header with navigation links
    <div className="w-full h-[52px] bg-[#069EDC] flex items-center gap-4 px-6">

      {/* Render each navigation item */}
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {/* Navigation icon and label */}
          <div className="flex items-center gap-3">
            <img
              src={item.icon}
              alt={item.label || "icon"}
              className="w-6 h-6"
            />

            {/* Display the navigation label if available */}
            {item.label && (
              <span className="text-white text-sm">{item.label}</span>
            )}
          </div>

          {/* Display separator between navigation items */}
          {items.length > 1 && index !== items.length - 1 && (
            <img
              src="/cheveron-down.svg"
              alt="chevron-right"
              className="w-5 h-5 -rotate-90 opacity-90"
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default PageHeader;