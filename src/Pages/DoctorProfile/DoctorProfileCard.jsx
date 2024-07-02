import React, { useState } from "react";
import Img from "../../Assets/Doctors/Rectangle 15.jpg";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

function DoctorProfileCard() {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();

  const { data: doctorProfile } = useQuery({
    queryKey: ["profile", id],
    queryFn: async () => {
      const { data } = await axiosSecure(`/doctors/${id}`);
      return data;
    },
  });

  return (
    <div className="flex items-center p-6 gap-8 max-w-[1140px] mx-auto shadow-lg rounded-xl my-12">
      <div>
        <img
          src={doctorProfile?.doctor_img}
          className="w-[20rem] h-[20rem] object-cover rounded-xl"
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-5xl font-bold">{doctorProfile?.name}</h2>
        <p className="text-[#6C6B6B]">{doctorProfile?.doctor_role}</p>
        <div className="flex items-center gap-1 text-[#F2871D]">
          <Rating
            style={{ maxWidth: 120 }}
            value={doctorProfile?.rating}
            readOnly
          />
          <span>(334)</span>
        </div>
        <div className="flex items-center gap-2">
          <HiOutlineLocationMarker />
          <p className="text-[#6C6B6B]">{doctorProfile?.location}</p>
        </div>
        <div>
          <button className="btn btn-md btn-ghost rounded-lg border-[1px] border-[#6C6B6B] text-[#6C6B6B] mr-4">
            Dental Filling
          </button>
          <button className="btn btn-md btn-ghost rounded-lg border-[1px] border-[#6C6B6B] text-[#6C6B6B] mr-4">
            Teeth Whitening
          </button>
        </div>
      </div>
    </div>
  );
}

export default DoctorProfileCard;
