import React from "react";
import ApartmentImage from "../../assets/image/apartment.jpg";
import LocationCard from "../../components/Locationcard.tsx";

function FeaturedLocations() {
  return (
    <div className="lg:mx-auto lg:max-w-6xl mt-16">
      <h2 className="font-bold text-2xl  mb-4">Featured Locations</h2>
      <div className="flex flex-col space-y-2 lg:space-y-0  lg:flex-row lg:gap-1">
        <LocationCard image={ApartmentImage} city="Nakuru" listings="30" />
        <LocationCard image={ApartmentImage} city="Nairobi" listings="41" />
        <LocationCard image={ApartmentImage} city="Mombasa" listings="27" />
        <LocationCard image={ApartmentImage} city="Kisumu" listings="32" />
      </div>
    </div>
  );
}

export default FeaturedLocations;
