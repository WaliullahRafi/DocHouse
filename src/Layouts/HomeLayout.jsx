import React from "react";
import Hero from "../Components/Hero/Hero";
import OurServices from "../Components/Our Services/OurServices";
import Cards from "../Components/Our Services/Service3Card/Cards";
import Testimonials from "../Components/Testimonials/Testimonials";
import ExpertDoctors from "../Components/ExpertDoctors/ExpertDoctors";
import ContactUs from "../Components/ContactUs/ContactUs";

function HomeLayout() {
  return (
    <div>
      <Hero />
      <OurServices />
      <Cards />
      <Testimonials />
      <ExpertDoctors />
      <ContactUs />
    </div>
  );
}

export default HomeLayout;
