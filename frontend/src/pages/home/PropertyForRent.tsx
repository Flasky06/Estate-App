import React from "react";
import PropertyCard from "../../components/PropertyCard.tsx";
import living from "../../assets/image/living.jpeg";

function PropertyForRent() {
  return (
    <div className="lg:m-20 lg:mx-auto lg:max-w-6xl">
      <h3 className="font-bold text-2xl w-full text-slate-900  mb-4">
        Properties For Rent
      </h3>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-1 lg:gap-4">
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
  );
}

export default PropertyForRent;
