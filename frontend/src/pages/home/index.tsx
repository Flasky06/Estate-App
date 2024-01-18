import React from "react";
import FeaturedProperty from "./FeaturedProperty.tsx";
import ApartmentTypes from "./ApartmentTypes.tsx";
import PropertyForRent from "./PropertyForRent.tsx";
import PropertyForSale from "./PropertyForSale.tsx";
import Footer from "../../layout/Footer.tsx";
import Hero from "../../layout/Hero.tsx";

function Home() {
  return (
    <div className="bg-[#f7f7f7]">
      <Hero />
      <FeaturedProperty />
      <ApartmentTypes />
      <PropertyForRent />
      <PropertyForSale />
      <Footer />
    </div>
  );
}

export default Home;
