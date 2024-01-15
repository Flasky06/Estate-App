import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdArrowDropUp } from "react-icons/md";
import { IoLocation } from "react-icons/io5";

const SearchComponent: React.FC = () => {
  const [keyword, setKeyword] = useState("");
  const [propertyType, setPropertyType] = useState("Residential");
  const [county, setCounty] = useState("");
  const [location, setLocation] = useState("");
  const [priceLimit, setPriceLimit] = useState("");
  const locations = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
  ];

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    console.log({ keyword, propertyType, county, location, priceLimit });
  };

  return (
    <div className="">
      <form
        onSubmit={handleSearch}
        className="flex space-x-2 justify-center items-center py-2 px-4 rounded-full bg-gray-100"
      >
        <div className="flex flex-col">
          <select
            id="county"
            value={county}
            onChange={(e) => setPropertyType(e.target.value)}
            className="px-2 text-sm  py-1 border border-gray-300 rounded-full bg-white"
          >
            <option value="Residential"> County</option>
            <option value="Residential">Nakuru</option>
            <option value="Commercial">Nairobi</option>
            <option value="Commercial">Mombasa</option>
            <option value="Commercial">Machakos</option>
          </select>
        </div>
        <div className="flex flex-col relative">
          <div className="flex items-center relative">
            <IoLocation className="absolute left-2 text-md" />
            <input
              list="location-list"
              type="text"
              id="location"
              placeholder="Search Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="pl-6 py-1 border border-gray-300 text-sm rounded-full"
            />
          </div>
          <datalist id="location-list">
            {locations.map((loc) => (
              <option key={loc} value={loc} />
            ))}
          </datalist>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <MdArrowDropUp className="text-2xl" />
          </div>
        </div>

        <div className="flex flex-col">
          <select
            id="propertyType"
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="p-2 border border-gray-300 text-sm  bg-white rounded-full "
          >
            <option value="Residential"> PROPERTY TYPE</option>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
            <option value="Villa">Villa</option>
            <option value="Apartment">Apartment</option>
          </select>
        </div>

        <div className="flex ">
          <input
            type="text"
            id="priceLimit"
            placeholder="max price"
            value={priceLimit}
            onChange={(e) => setPriceLimit(e.target.value)}
            className="px-3 w-full text-sm  py-1 border border-gray-300 rounded-full"
          />
        </div>
        <button
          type="submit"
          className="bg-slate-800 rounded-full text-white p-3  flex items-center   hover:bg-green-600"
        >
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchComponent;
