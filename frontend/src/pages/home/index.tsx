import React from "react";
import FeaturedProperty from "./FeaturedProperty.tsx";
import FeaturedLocations from "./FeaturedLocations.tsx";
import ApartmentTypes from "./ApartmentTypes.tsx";
import PropertyForRent from "./PropertyForRent.tsx";
import Header from "../../layout/Header.tsx";

function Home() {
  return (
    <div>
      <Header />
      <div className="flex flex-col max-w-6xl mx-auto">
        <FeaturedLocations />
        <FeaturedProperty />
        <ApartmentTypes />
        <PropertyForRent />
      </div>
    </div>
  );
}

export default Home;
