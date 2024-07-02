import React, { useState } from "react";
import Overview from "./Tabs/Overview";
import Locations from "./Tabs/Locations";
import Reviews from "./Tabs/Reviews";
import BusinessHours from "./Tabs/BusinessHours";

function ProfileToggleCard() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="max-w-[1140px] mx-auto my-12">
      <div className="p-8 rounded-lg shadow-lg">
        <div
          role="tablist"
          className="h-[5rem] border-b-[1px] border-[#E6E6E6] rounded-xl flex items-center justify-between"
        >
          <button
            role="tab"
            onClick={() => toggleTab(1)}
            className={
              toggleState === 1
                ? "tab tab-active btn btn-ghost h-full w-[20rem] bg-[#F7A582] border-none text-[1.2rem] font-semibold"
                : "tab btn btn-ghost h-full w-[12rem] text-[1.2rem] font-semibold"
            }
          >
            Overview
          </button>

          <button
            role="tab"
            onClick={() => toggleTab(2)}
            className={
              toggleState === 2
                ? "tab tab-active btn btn-ghost h-full w-[20rem] bg-[#F7A582] border-none text-[1.2rem] font-semibold"
                : "tab btn btn-ghost h-full w-[12rem] text-[1.2rem] font-semibold"
            }
          >
            Locations
          </button>

          <button
            role="tab"
            onClick={() => toggleTab(3)}
            className={
              toggleState === 3
                ? "tab tab-active btn btn-ghost h-full w-[20rem] bg-[#F7A582] border-none text-[1.2rem] font-semibold"
                : "tab btn btn-ghost h-full w-[12rem] text-[1.2rem] font-semibold"
            }
          >
            Reviews
          </button>

          <button
            role="tab"
            onClick={() => toggleTab(4)}
            className={
              toggleState === 4
                ? "tab tab-active btn btn-ghost h-full w-[20rem] bg-[#F7A582] border-none text-[1.2rem] font-semibold"
                : "tab btn btn-ghost h-full w-[12rem] text-[1.2rem] font-semibold"
            }
          >
            Business Hours
          </button>
        </div>

        <div className="my-12">
          {toggleState === 1 ? <Overview /> : undefined}
          {toggleState === 2 ? <Locations /> : undefined}
          {toggleState === 3 ? <Reviews /> : undefined}
          {toggleState === 4 ? <BusinessHours /> : undefined}
        </div>
      </div>
    </div>
  );
}

export default ProfileToggleCard;
