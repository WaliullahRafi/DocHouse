import React from "react";
import { FiPhoneOutgoing } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

function ContactUs() {
  return (
    <div className="max-w-[1140px] mx-auto my-[6rem] h-[530px] bg-[#07332F] rounded-xl text-white flex items-center justify-between p-24">
      <div className="space-y-6 max-w-[22rem]">
        <h2 className="text-4xl font-bold">Contact With Us</h2>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inve ntore veritatis et quasi.
        </p>
        <div className="flex items-center gap-2">
          <FiPhoneOutgoing />
          <span>+88 01750 14 14 14</span>
        </div>
        <div className="flex items-center gap-2">
          <HiOutlineLocationMarker />
          <span>Diamond, Dhaka, Bangladesh</span>
        </div>
      </div>

      <div>
        <form className="grid grid-cols-2 gap-6">
            <input className="p-5 rounded-xl bg-[#FFFFFF0D] w-[16rem]" type="text" name="name" placeholder="Name" />
            <input className="p-5 rounded-xl bg-[#FFFFFF0D] w-[16rem]" type="email" name="email" id="" placeholder="Email" />
            <input className="p-5 rounded-xl bg-[#FFFFFF0D] w-[16rem]" type="text" name="mobileNumber" id="" placeholder="Mobile Number" />
            <input className="p-5 rounded-xl bg-[#FFFFFF0D] w-[16rem]" type="text" name="doctorName" placeholder="Doctor Name" />
            <input className="p-5 rounded-xl bg-[#FFFFFF0D] w-[16rem]" type="date" name="date" placeholder="Date" />
            <input className="p-5 rounded-xl bg-[#FFFFFF0D] w-[16rem]" type="time" name="time" placeholder="Time" />
            <input className="bg-[#F7A582] btn btn-ghost col-span-2 hover:bg-gray-600" type="submit" value="Book Now" />
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
