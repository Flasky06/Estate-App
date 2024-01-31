import React from "react";

interface ApartmentCardProps {
  title: string;
  image: string;
}

const ApartmentCard: React.FC<ApartmentCardProps> = ({ title, image }) => {
  return (
    <div className="relative w-full h-full">
      <img src={image} alt={title} className="object-cover w-full h-full " />
      <div className="absolute bottom-0 bg-slate-800 bg-opacity-70 w-full text-white text-center py-1 lg:px-4">
        <span className="font-bold text-lg">{title}</span>
      </div>
    </div>
  );
};

export default ApartmentCard;
