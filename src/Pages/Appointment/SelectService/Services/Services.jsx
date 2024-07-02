import React from "react";
import ServicesCard from "./ServicesCard";

function Services() {
  return (
    <div className="mt-24">
      <h2 className="text-center text-4xl font-bold">Available slots for Teeth Orthodontics.</h2>

      <div className="grid grid-cols-3 gap-6 my-8">
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
      </div>
    </div>
  );
}

export default Services;
