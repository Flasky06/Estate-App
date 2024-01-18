import React from "react";
import living from "../../assets/image/living.jpeg";
import PropertyCard from "../../components/PropertyCard.tsx";
import Hero from "../../layout/Hero.tsx";

function ForRent() {
  return (
    <div className="bg-[#f7f7f7]">
      <Hero />
      <div className="m-20 mx-auto max-w-6xl">
        <div className="grid grid-cols-4 gap-4">
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
            price="16000"
            title="molohouse"
            location="Ngala"
            county="Nakuru"
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
            price="16000"
            title="molohouse"
            location="Ngala"
            county="Nakuru"
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
            price="16000"
            title="molohouse"
            location="Ngala"
            county="Nakuru"
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
            price="16000"
            title="molohouse"
            location="Ngala"
            county="Nakuru"
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
            price="16000"
            title="molohouse"
            location="Ngala"
            county="Nakuru"
          />
          <PropertyCard
            image={living}
            state="for sale"
            price="16000"
            title="molohouse"
            location="Ngala"
            county="Nakuru"
          />
        </div>
      </div>
    </div>
  );
}

export default ForRent;
