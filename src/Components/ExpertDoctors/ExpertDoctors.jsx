import React, { useEffect, useState } from "react";
import ExpertDoctorsCard from "./ExpertDoctorsCard";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import SwiperNavigationButtons from "../../Shared/SwiperNavigationButtons";
import useAxiosCommon from "../../Hooks/useAxiosCommon";
import SectionTitle from "../../Shared/SectionTitle";

function ExpertDoctors() {
  const [doctors, setDoctors] = useState([]);
  const axiosCommon = useAxiosCommon();

  useEffect(() => {
    axiosCommon.get(`/doctors`).then((res) => {
      setDoctors(res.data);
    });
  }, []);

  return (
    <div className="max-w-[1140px] mx-auto">
      <SectionTitle
        heading="Our Expert Doctors"
        subHeading="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
      />

      <Swiper
        slidesPerView={3}
        loop={true}
        spaceBetween={20}
        className="mySwiper"
      >
        {doctors.map((doctor, index) => (
          <SwiperSlide key={index}>
            <ExpertDoctorsCard doctor={doctor} />
          </SwiperSlide>
        ))}

        <SwiperNavigationButtons />
      </Swiper>
    </div>
  );
}

export default ExpertDoctors;
