import React, { useState } from "react";
import Img1 from "../../../Assets/Appointment/1.png";
import Img2 from "../../../Assets/Appointment/2.png";
import Img3 from "../../../Assets/Appointment/3.png";
import Img4 from "../../../Assets/Appointment/4.png";
import Img5 from "../../../Assets/Appointment/5.png";
import Img6 from "../../../Assets/Appointment/6.png";

function SelectServiceCard() {
  const [services, setServices] = useState()
  const handleService = (event) => {
    event.preventDefault();
  };

  return (
    <div className="grid grid-cols-3 gap-6">
      <button className="shadow-xl rounded-xl flex items-center gap-4 p-6">
        <img src={Img1} alt="" />
        <h2 className="tex-5xl font-bold">Teeth Orthodontics</h2>
      </button>
      <button className="shadow-xl rounded-xl flex items-center gap-4 p-6">
        <img src={Img2} alt="" />
        <h2 className="tex-5xl font-bold">Cosmetic Dentists</h2>
      </button>
      <button className="shadow-xl rounded-xl flex items-center gap-4 p-6">
        <img src={Img3} alt="" />
        <h2 className="tex-5xl font-bold">Teeth Cleaning</h2>
      </button>
      <button className="shadow-xl rounded-xl flex items-center gap-4 p-6">
        <img src={Img4} alt="" />
        <h2 className="tex-5xl font-bold">Cavity Protection</h2>
      </button>
      <button className="shadow-xl rounded-xl flex items-center gap-4 p-6">
        <img src={Img5} alt="" />
        <h2 className="tex-5xl font-bold">Pediatric Dental</h2>
      </button>
      <button className="shadow-xl rounded-xl flex items-center gap-4 p-6">
        <img src={Img6} alt="" />
        <h2 className="tex-5xl font-bold">Oral Surgery</h2>
      </button>
    </div>
  );
}

export default SelectServiceCard;
