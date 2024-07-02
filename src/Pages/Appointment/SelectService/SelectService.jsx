import React from "react";
import SelectServiceCard from "./SelectServiceCard";
import Services from "./Services/Services";

function SelectService() {
  return (
    <div className="my-12">
      <div className="text-center my-8">
        <p className="text-[#F7A582]">Available Services on April 30, 2022</p>
        <h2 className="text-4xl font-bold">Please select a service.</h2>
      </div>

      <SelectServiceCard />

      <Services />
    </div>
  );
}

export default SelectService;
