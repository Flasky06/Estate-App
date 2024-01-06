import React from "react";
import living from "../../assets/image/living.jpeg";
import home from "../../assets/image/home.jpeg";
import kitchen from "../../assets/image/kitchen.jpeg";
import one from "../../assets/image/one.jpeg";
import two from "../../assets/image/two.jpeg";

import ApartmentCard from "../../components/ApartmentCard.tsx";

function ApartmentTypes() {
  return (
    <div className="flex flex-col mb-8">
      <h3 className="font-bold text-2xl w-full  mb-4">Apartment Types</h3>
      <div>
        <div className="grid grid-cols-4 gap-2">
          <div className="col-span-2 h-[16rem]">
            <ApartmentCard title="Apartment" image={living} />
          </div>
          <div className=" ">
            <ApartmentCard title="Condo" image={home} />
          </div>
          <div className="row-span-2 ">
            <ApartmentCard title="Penthouse" image={kitchen} />
          </div>
          <div className="h-[16rem]">
            <ApartmentCard title="Villa" image={two} />
          </div>
          <div className=" col-span-2 h-[16rem]">
            <ApartmentCard title="Bangalow" image={one} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApartmentTypes;
