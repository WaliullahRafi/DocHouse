import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useSwiper } from "swiper/react";
import "swiper/css/bundle";

function SwiperNavigationButtons() {
  const swiper = useSwiper();

  return (
    <div className="flex items-center mt-4 gap-4">
      <div className="bg-[#F7A582] w-[3rem] h-[3rem] rounded-full flex items-center justify-center text-white">
        <button
          onClick={() => swiper.slidePrev()}
          className="text-3xl"
        >
          <MdKeyboardArrowLeft />
        </button>
      </div>

      <div className="bg-[#F7A582] w-[3rem] h-[3rem] rounded-full flex items-center justify-center text-white">
        <button
          onClick={() => swiper.slideNext()}
          className="text-3xl"
        >
          <MdKeyboardArrowRight />
        </button>
      </div>
    </div>
  );
}

export default SwiperNavigationButtons;
