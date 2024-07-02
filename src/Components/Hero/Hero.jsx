import React from "react";
import heroImg from "../../Assets/Hero/hero-img.png";

function Hero() {
  return (
    <div className="bg-[#07332F] min-h-[800px] flex items-center justify-center">
      <div className="max-w-[1140px] mx-auto md:flex items-center justify-between">
        <div className="max-w-[37rem] space-y-6">
          <h1 className="text-6xl font-semibold text-white leading-[120%]">
            Your Best Medical Help Center
          </h1>
          <p className="text-white">
            Lorem Ipsum is simply dummy text they are printing typesetting{" "}
            <br />
            has been the industry's standard.
          </p>
          <button className="btn btn-ghost bg-[#F7A582] text-white hover:bg-gray-700">
            All Services
          </button>
        </div>

        <div>
          <img src={heroImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
