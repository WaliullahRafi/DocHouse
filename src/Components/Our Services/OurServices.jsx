import React, { useState } from "react";
import img1 from "../../Assets/Services/services.jpg";

import "react-tabs/style/react-tabs.css";
import Tab1 from "./Tabs/Tab1";
import Tab2 from "./Tabs/Tab2";
import Tab3 from "./Tabs/Tab3";

function OurServices() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="max-w-[1140px] mx-auto my-[6rem]">
      <div className="flex gap-6">
        <div>
          <img src={img1} alt="service image here" />
        </div>
        <div className="max-w-[36rem] space-y-8">
          <h1 className="text-4xl font-bold">Our Services</h1>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inve ntore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>

          <div
            role="tablist"
            className="h-[5rem] border-[1px] border-[#E6E6E6] rounded-xl flex items-center justify-between"
          >
            <button
              role="tab"
              onClick={() => toggleTab(1)}
              className={
                toggleState === 1
                  ? "tab tab-active btn btn-ghost h-full w-[12rem] bg-[#F7A582] border-none text-[1.2rem] font-semibold"
                  : "tab btn btn-ghost h-full w-[12rem] text-[1.2rem] font-semibold"
              }
            >
              Cavity Protection
            </button>

            <button
              role="tab"
              onClick={() => toggleTab(2)}
              className={
                toggleState === 2
                  ? "tab tab-active btn btn-ghost h-full w-[12rem] bg-[#F7A582] border-none text-[1.2rem] font-semibold"
                  : "tab btn btn-ghost h-full w-[12rem] text-[1.2rem] font-semibold"
              }
            >
              Cosmetic Dentists
            </button>

            <button
              role="tab"
              onClick={() => toggleTab(3)}
              className={
                toggleState === 3
                  ? "tab tab-active btn btn-ghost h-full w-[12rem] bg-[#F7A582] border-none text-[1.2rem] font-semibold"
                  : "tab btn btn-ghost h-full w-[12rem] text-[1.2rem] font-semibold"
              }
            >
              Oral Surgery
            </button>
          </div>

          <div>
            {toggleState === 1 ? <Tab1 /> : undefined}
            {toggleState === 2 ? <Tab2 /> : undefined}
            {toggleState === 3 ? <Tab3 /> : undefined}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
