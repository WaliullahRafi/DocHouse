import React from "react";
import Breadcrumbs from "./Breadcrumbs";

import DoctorProfileCard from "./DoctorProfileCard";
import ProfileToggleCard from "./ProfileToggleCard";

function DoctorProfile() {
  return (
    <div>
      <div className="h-[500px] w-full bg-[url('./Assets/Banner/Banner.jpg')] bg-cover bg-center">
        <div className="max-w-[1140px] mx-auto h-full flex items-center">
          <Breadcrumbs />
        </div>
      </div>

      <DoctorProfileCard />
      <ProfileToggleCard />
    </div>
  );
}

export default DoctorProfile;
