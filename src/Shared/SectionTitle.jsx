import React from "react";

function SectionTitle({ subHeading, heading }) {
  return (
    <div className="text-center max-w-[55rem] mx-auto space-y-4 my-20">
      <h2 className="text-4xl font-bold">{heading}</h2>
      <p>{subHeading}</p>
    </div>
  );
}

export default SectionTitle;
