import React from "react";
import living from "../../assets/image/living.jpeg";
import home from "../../assets/image/home.jpeg";
import kitchen from "../../assets/image/kitchen.jpeg";
import one from "../../assets/image/one.jpeg";
import two from "../../assets/image/two.jpeg";

import ApartmentCard from "../../components/ApartmentCard.tsx";

function ApartmentTypes() {
  return (
    <div className="flex flex-col mb-8 lg:mx-auto lg:max-w-6xl ">
      <h3 className="font-bold text-2xl w-full  mb-4">Apartment Types</h3>
      <div>
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-2 bg-white">
          <div className="lg:col-span-2 lg:h-[16rem]">
            <ApartmentCard title="Apartment" image={living} />
          </div>
          <div className=" ">
            <ApartmentCard title="Condo" image={home} />
          </div>
          <div className="lg:row-span-2 ">
            <ApartmentCard title="Penthouse" image={kitchen} />
          </div>
          <div className="lg:h-[16rem]">
            <ApartmentCard title="Villa" image={two} />
          </div>
          <div className=" lg:col-span-2 lg:h-[16rem]">
            <ApartmentCard title="Bangalow" image={one} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApartmentTypes;
