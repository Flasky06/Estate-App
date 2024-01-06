import React from "react";
import { BiBed } from "react-icons/bi";
import { FaBath } from "react-icons/fa";
import { FaRulerCombined } from "react-icons/fa";

interface PropertyCardProps {
  image: string;
  state: string;
  price: string;
  title: string;
  location: string;
  county: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  image,
  state,
  price,
  title,
  location,
  county,
}) => {
  return (
    <div>
      <div className="border pb-4">
        <div className="w-auto h-auto relative ">
          <img src={image} alt={title} className=" w-full " />
          <span className="absolute top-1 right-2 bg-slate-800 px-1 py-[1px] text-xs font-bold text-white">
            {state}
          </span>
          <span className="absolute bottom-0 py-1 px-2 font-semibold w-full  text-white bg-black z-20 opacity-60">
            <span className="text-xs">ksh </span>
            {price}
          </span>
        </div>
        <div className="px-2 space-y-1">
          <h5 className="font-semibold mt-1">{title}</h5>
          <div className="flex items-center">
            <p className="text-sm italic">{location}</p>&#x2c; &nbsp;
            <p className="text-sm">{county}</p>
          </div>
          <div className="flex space-x-4 font-bold items-center ">
            <div className="flex space-x-1 items-center">
              <BiBed className="text-slate-700" />
              <span className="text-sm">3</span>
            </div>
            <div className="flex space-x-1 items-center">
              <FaBath className="text-slate-700" />
              <span className="text-sm">2</span>
            </div>
            <div className="flex space-x-1 items-center ">
              <FaRulerCombined className="text-slate-700" />
              <span className="text-xs font-normal">12,000 sqft</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
