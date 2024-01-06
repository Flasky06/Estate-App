import React from "react";
import PropertyCard from "../../components/PropertyCard.tsx";
import living from "../../assets/image/living.jpeg";

function FeaturedProperty() {
  return (
    <div className="mb-10">
      <h3 className="font-bold text-2xl w-full  mb-4">Featured Properties</h3>
      <div className="flex space-x-2">
        <PropertyCard
          image={living}
          state="for rent"
          price="21000"
          title="Pink house"
          location="Underground"
          county="Machakos"
        />
        <PropertyCard
          image={living}
          state="for sale"
          price="16000"
          title="molohouse"
          location="Ngala"
          county="Nakuru"
        />
        <PropertyCard
          image={living}
          state="for sale"
          price="18500"
          title="lincoln house"
          location="Kitengela"
          county="Kajiado"
        />
        <PropertyCard
          image={living}
          state="for rent"
          price="20000"
          title="socha Apartment"
          location="Gigiri"
          county="Nairobi"
        />
      </div>
    </div>
  );
}

export default FeaturedProperty;
