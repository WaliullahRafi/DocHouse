import React, { useEffect, useState } from "react";
import TestimonialsCard from "./TestimonialsCard";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import SwiperNavigationButtons from "../../Shared/SwiperNavigationButtons";
import useAxiosCommon from "../../Hooks/useAxiosCommon";
import SectionTitle from "../../Shared/SectionTitle";

function Testimonials() {
  const [reviews, setReviews] = useState([]);
  const axiosCommon = useAxiosCommon();

  useEffect(() => {
    axiosCommon.get(`/reviews`).then((res) => {
      setReviews(res.data);
    });
  }, []);

  return (
    <div className="max-w-[1140px] mx-auto">
      <SectionTitle
        heading="What Our Patients Says"
        subHeading="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
      />

      <Swiper
        slidesPerView={2}
        loop={true}
        spaceBetween={20}
        className="mySwiper"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <TestimonialsCard review={review} />
          </SwiperSlide>
        ))}

        <SwiperNavigationButtons />
      </Swiper>
    </div>
  );
}

export default Testimonials;
