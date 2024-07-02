import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

function TestimonialsCard({ review }) {
  const { user_img, name, position, review: details } = review;

  return (
    <div className="border-[1px] border-[#E6E6E6] rounded-xl h-[20rem] flex items-center p-12">
      <div className="space-y-6">
        <FaQuoteLeft className="absolute right-14 top-14 text-4xl text-[#F7A582]" />

        <div className="flex items-center gap-4">
          <img
            src={user_img}
            alt="review image"
            className="w-[5rem] h-[5rem] rounded-full border-[1px] border-[#F7A582] object-cover"
          />
          <div>
            <h2 className="text-xl font-bold text-[#3B3A3A]">{name}</h2>
            <span className="text-[#6C6B6B]">{position}</span>
          </div>
        </div>

        <div>
          <p className="text-[#6C6B6B]">{details}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsCard;
