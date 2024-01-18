import React from "react";
import Header from "./Header.tsx";
import SearchComponent from "../components/SearchComponent.tsx";
import HeroImage from "../assets/image/apartment.jpg";

function Hero() {
  return (
    <div
      className="h-96 flex items-end justify-center"
      style={{
        backgroundImage: `url(${HeroImage})`, // Correct usage of the HeroImage variable
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header />
      <SearchComponent />
    </div>
  );
}

export default Hero;
