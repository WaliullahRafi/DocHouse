import React from "react";
import Img from "../../Assets/Appointment/Appointment.jpg";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import SelectService from "./SelectService/SelectService";

function AppointmentCard() {
  return (
    <div className="max-w-[1140px] mx-auto">
      <div className="flex items-center justify-between my-16">
        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar className="shadow-lg rounded-xl" />
          </LocalizationProvider>
        </div>

        <div>
          <img src={Img} alt="" />
        </div>
      </div>

      <SelectService />
    </div>
  );
}

export default AppointmentCard;
