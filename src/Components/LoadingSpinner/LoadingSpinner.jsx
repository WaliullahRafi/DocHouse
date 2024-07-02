import React from "react";
import { TbFidgetSpinner } from "react-icons/tb";

function LoadingSpinner() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <TbFidgetSpinner className="text-3xl text-red-400 animate-spin fixed" />
    </div>
  );
}

export default LoadingSpinner;
