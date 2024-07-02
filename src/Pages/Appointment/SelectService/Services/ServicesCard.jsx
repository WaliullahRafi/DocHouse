import React from "react";
import Img from "../../../../Assets/Appointment/Services/services.png";

function ServicesCard() {
  return (
    <div className="p-14 flex flex-col items-center justify-center space-y-4 shadow-lg rounded-lg">
      <img
        src={Img}
        alt=""
        className="w-[8rem] h-[8rem] object-cover rounded-full overflow-hidden"
      />
      <h2 className="text-2xl font-bold">Title Here</h2>
      <p className="font-semibold">Time Here</p>
      <button className="btn btn-ghost bg-[#F7A582] text-white">
        Book Appointment
      </button>
    </div>
  );
}

export default ServicesCard;
