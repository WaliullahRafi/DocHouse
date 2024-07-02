import React from "react";
import img2 from "../../../Assets/Services/3.jpg";

function Tab3() {
  return (
    <div className="space-y-6">
      <img src={img2} alt="" className="w-full rounded-xl" />
      <h2 className="text-3xl font-bold">Oral Surgery Therapy</h2>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Sed ut perspiciatis unde omnis iste natus error
      </p>
      <p>
        Sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
        eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae
        vitae dicta sunt explicabo.
      </p>
      <button className="btn btn-ghost border-1 border-[#F7A582] text-[#F7A582]">
        More Details
      </button>
    </div>
  );
}

export default Tab3;
