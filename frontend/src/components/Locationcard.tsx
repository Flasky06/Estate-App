import React from "react";

interface LocationCardProps {
  image: string;
  city: string;
  listings: string;
}

const LocationCard: React.FC<LocationCardProps> = ({
  image,
  city,
  listings,
}) => {
  return (
    <div>
      <div className="lg:w-auto w-full h-auto relative">
        <img src={image} alt={city} className="w-full" />
        <span className="absolute top-1 right-2 bg-slate-800 px-1 py-[1px] text-xs font-bold text-white">
          {city}
        </span>
        <div className="absolute text-sm bottom-0 py-1 px-2 w-full text-white bg-black z-20 opacity-60 font-bold">
          {listings} Listings
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
