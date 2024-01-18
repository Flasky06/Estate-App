import React, { useState } from "react";

const SearchComponent = () => {
  const [category, setCategory] = useState("");
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [rooms, setRooms] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleMinPriceChange = (e) => setMinPrice(e.target.value);
  const handleMaxPriceChange = (e) => setMaxPrice(e.target.value);

  const handleSearch = () => {
    console.log({ category, city, area, rooms, minPrice, maxPrice });
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col text-sm ">
      <div className="flex">
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
            <option value="">PROPERTY TYPE</option>
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
            <option value="Nakuru">Nakuru</option>
            <option value="Nairobi">Nairobi</option>
            <option value="Mombasa">Mombasa</option>
            <option value="Machakos">Machakos</option>
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
            <option value="Wetlands">Wetlands</option>
            <option value="Kileleshwa">Kileleshwa</option>
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
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
      </div>
      <div className="flex space-x-4 mt-2">
        <input
          type="number"
          className="border px-2 py-1"
          placeholder="Min Price"
          value={minPrice}
          onChange={handleMinPriceChange}
          aria-label="Minimum Price"
        />
        <input
          type="number"
          className="border px-2 py-1"
          placeholder="Max Price"
          value={maxPrice}
          onChange={handleMaxPriceChange}
          aria-label="Maximum Price"
        />
        <button
          className="w-full shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-1 text-sm px-6 rounded"
          type="button "
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

// Optional: Add PropTypes
// SearchComponent.propTypes = {
//   // Define PropTypes here if needed
// };

export default SearchComponent;
