import React, { useState } from "react";

function DescriptionListingComponent() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    listedFor: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Here you can replace this with the logic to handle the form submission.
  };

  return (
    <form onSubmit={handleSubmit} className=" my-8 p-4 bg-white">
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-gray-700 text-sm font-bold mb-1"
        >
          Property Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>

      <div className="mb-2">
        <label
          htmlFor="description"
          className="block  text-gray-700 text-sm font-bold mb-2"
        >
          Property Description
        </label>
        <textarea
          name="description"
          id="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="price"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Property Price
        </label>
        <input
          type="number"
          name="price"
          id="price"
          value={formData.price}
          onChange={handleChange}
          className="shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="flex w-full">
        <div className="mb-4 w-full">
          <label
            htmlFor="category"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Property Category
          </label>
          <select
            name="category"
            id="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Select Category</option>
            <option value="condo">Condo</option>
            <option value="apartment">Apartment</option>
            <option value="villa">Villa</option>
            <option value="house">House</option>
          </select>
        </div>

        <div className="mb-4 w-full">
          <label
            htmlFor="listedFor"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Listed For
          </label>
          <select
            name="listedFor"
            id="listedFor"
            value={formData.listedFor}
            onChange={handleChange}
            className="w-full shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Select Listing Type</option>
            <option value="sales">Sales</option>
            <option value="rent">Rent</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Next Step
      </button>
    </form>
  );
}

export default DescriptionListingComponent;
