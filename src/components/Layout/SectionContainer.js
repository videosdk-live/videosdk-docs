import React from "react";

const SectionContainer = ({ children, className }) => (
  <div
    className={`container mx-auto px-6 lg:px-16 xl:px-14 2xl:px-20 relative sm:py-4 md:py-8 lg:py-12 xl:py-14 2xl:py-18 ${className}
      `}
  >
    {children}
  </div>
);

export default SectionContainer;
