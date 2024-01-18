// SearchComponent.tsx
import React, { useState } from "react";

interface SearchComponentProps {
  // Define any props here if needed
}

const SearchComponent: React.FC<SearchComponentProps> = () => {
  const [category, setCategory] = useState("");
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [rooms, setRooms] = useState("");

  const handleSearch = () => {
    // Implement your search logic here
    console.log({ category, city, area, rooms });
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex">
      <div className="mb-4 md:mr-2 md:mb-0">
        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="category"
        >
          Categories
        </label>
        <select
          id="category"
          className="shadow border rounded w-full py-2 px-3 text-gray-700"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Residential"> PROPERTY TYPE</option>
          <option value="Residential">Residential</option>
          <option value="Commercial">Commercial</option>
          <option value="Villa">Villa</option>
          <option value="Apartment">Apartment</option>
        </select>
      </div>

      <div className="mb-4 md:mr-2 md:mb-0">
        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="city"
        >
          City
        </label>
        <select
          id="city"
          className="shadow border rounded w-full py-2 px-3 text-gray-700"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        >
          <option value="">Property City</option>
          <option value="Residentnakuruial">Nakuru</option>
          <option value="nairobi">Nairobi</option>
          <option value="mombasa">Mombasa</option>
          <option value="machakos">Machakos</option>
        </select>
      </div>

      <div className="mb-4 md:mr-2 md:mb-0">
        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="area"
        >
          Area
        </label>
        <select
          id="area"
          className="shadow border rounded w-full py-2 px-3 text-gray-700"
          value={area}
          onChange={(e) => setArea(e.target.value)}
        >
          <option value="">Property Area</option>
          <option value="Ngong">Ngong</option>
          <option value="Kitengela">Kitengela</option>
          <option value="Wetlands"> Wetlands</option>
          <option value="KIleleshwa"> KIleleshwa</option>
        </select>
      </div>

      <div className="mb-4 md:mr-2 md:mb-0">
        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="rooms"
        >
          Rooms
        </label>
        <select
          id="rooms"
          className="shadow border rounded w-full py-2 px-3 text-gray-700"
          value={rooms}
          onChange={(e) => setRooms(e.target.value)}
        >
          <option value="">Rooms Number</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">2</option>
          <option value="4">4</option>
        </select>
      </div>

      <div className="mt-7 md:flex md:justify-center">
        <button
          className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-[1px] text-sm px-4 rounded"
          type="button"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchComponent;
