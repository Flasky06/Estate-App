import React from "react";
import PropertyCard from "../../components/PropertyCard.tsx";
import living from "../../assets/image/living.jpeg";

function PropertyForRent() {
  return (
    <div className="m-10">
      <h3 className="font-bold text-2xl w-full  mb-4">Properties For Rent</h3>
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
  );
}

export default PropertyForRent;
