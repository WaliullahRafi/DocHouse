import React from "react";
import { FaRegClock } from "react-icons/fa";
import { FiPhoneOutgoing } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

function Cards() {
  return (
    <div className="flex items-center gap-6 max-w-[1140px] mx-auto">
      <div className="h-[12rem] flex items-center justify-center gap-3 bg-[#07332F] w-full rounded-xl text-white space-y-2">
        <FaRegClock className="text-3xl" />
        <div>
          <h2 className="text-2xl font-bold">Opening Hours</h2>
          <p>Open 9.00 am to 5.00pm</p>
          <span>Everyday</span>
        </div>
      </div>

      <div className="h-[12rem] flex items-center justify-center gap-3 bg-[#F7A582] w-full rounded-xl text-white space-y-2">
        <HiOutlineLocationMarker className="text-3xl" />
        <div>
          <h2 className="text-2xl font-bold">Our Locations</h2>
          <p>Dhanmondi 17, Dhaka -1200</p>
          <span>Bangladesh</span>
        </div>
      </div>

      <div className="h-[12rem] flex items-center justify-center gap-3 bg-[#07332F] w-full rounded-xl text-white space-y-2">
        <FiPhoneOutgoing className="text-3xl" />
        <div>
          <h2 className="text-2xl font-bold">Contact Us</h2>
          <p>+88 01750 00 00 00</p>
          <span>+88 01750 00 00 00</span>
        </div>
      </div>
    </div>
  );
}

export default Cards;
