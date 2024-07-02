import React from "react";
import { CiBadgeDollar, CiCalendarDate, CiLocationOn } from "react-icons/ci";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";

function ExpertDoctorsCard({ doctor }) {
  const {
    _id,
    doctor_img,
    name,
    doctor_role,
    rating,
    location,
    available_on,
    booking_fees,
  } = doctor;

  return (
    <div className="border-[1px] border-[#E6E6E6] rounded-xl p-5 space-y-4">
      <img src={doctor_img} alt="doctor image" className="w-full rounded-xl" />
      <h2 className="text-[#3B3A3A] text-xl font-bold">{name}</h2>
      <p className="text-[#6C6B6B]">{doctor_role}</p>
      <div className="flex items-center gap-1 text-[#F2871D]">
        <Rating style={{ maxWidth: 120 }} value={rating} readOnly />
      </div>

      <hr />

      <div className="text-[#6C6B6B] space-y-4">
        <div className="flex items-center gap-2">
          <CiLocationOn className="text-[1.4rem]" />
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-2">
          <CiCalendarDate className="text-[1.4rem]" />
          <span>
            {available_on[0]}, {available_on[1]}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <CiBadgeDollar className="text-[1.4rem]" />
          <span>${booking_fees}</span>
        </div>
      </div>
      <Link
        to={`/doctor-profile/${_id}`}
        className="btn btn-ghost border-[#F7A582] text-[#F7A582] w-full"
      >
        View Profile
      </Link>
    </div>
  );
}

export default ExpertDoctorsCard;
