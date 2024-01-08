import React from "react";
import FeaturedProperty from "./FeaturedProperty.tsx";
import ApartmentTypes from "./ApartmentTypes.tsx";
import PropertyForRent from "./PropertyForRent.tsx";
import Header from "../../layout/Header.tsx";
import PropertyForSale from "./PropertyForSale.tsx";

function Home() {
  return (
    <div className="bg-[#f7f7f7]">
      <Header />
      <FeaturedProperty />
      <ApartmentTypes />
      <PropertyForRent />
      <PropertyForSale />
    </div>
  );
}

export default Home;
