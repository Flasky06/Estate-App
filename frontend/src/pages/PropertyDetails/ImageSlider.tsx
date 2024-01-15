import React, { useState, useEffect } from "react";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import { FaRulerCombined } from "react-icons/fa";
import home from "../../assets/image/home.jpeg";
import living from "../../assets/image/living.jpeg";
import { ReactComponent as Bathrooms } from "../../assets/svg/bathrooms.svg";
import { ReactComponent as Bedroom } from "../../assets/svg/bedroom.svg";
import one from "../../assets/image/one.jpeg";
import { ReactComponent as CableTv } from "../../assets/svg/cable-tv.svg";
import { ReactComponent as Wifi } from "../../assets/svg/wifi.svg";
import { ReactComponent as Back } from "../../assets/svg/back.svg";
import { ReactComponent as Furnishing } from "../../assets/svg/back.svg";
import { ReactComponent as Garage } from "../../assets/svg/garage.svg";
import { ReactComponent as Swimming } from "../../assets/svg/swimming-pool.svg";
import { ReactComponent as Elevator } from "../../assets/svg/elevator.svg";
import { ReactComponent as Heating } from "../../assets/svg/heating.svg";

import { Link } from "react-router-dom";

const images = [home, living, one, home, living, one, home];

const ImageSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  return (
    <div className="flex flex-col w-10/12 m-auto ">
      <Link to="/">
        <Back className="text-lg h-5 w-5 font-bold mb-10 " />
      </Link>
      <div className="flex flex-row justify-between mb-4">
        <h2 className="text-3xl font-bold text-slate-800">South Sun House</h2>
        <div className="text-3xl font-bold text-slate-800">
          <span>Price</span>
          <span>:265,000ksh</span>
        </div>
      </div>
      <div className="flex space-x-2 mb-1">
        <span className="bg-slate-800 text-white px-2 py-[1px]  text-sm font-semibold">
          For sale
        </span>
        <span>Apartment</span>
      </div>
      <div className="w-full  relative">
        <img
          src={images[activeIndex]}
          alt={`Slide ${activeIndex}`}
          className="w-full h-[28rem]"
        />
        <button
          onClick={prevSlide}
          className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-white"
        >
          <GrFormPrevious className="text-slate-800 text-3xl" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-white"
        >
          <GrFormNext className="text-slate-800 text-3xl" />
        </button>
      </div>
      <div className="flex space-x-2 mt-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            className={`w-24 h-24 cursor-pointer ${
              index === activeIndex ? "ring-2 ring-blue-500" : ""
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
      <div className="mt-10 flex flex-col">
        <h3 className="text-3xl font-bold text-slate-800">Description</h3>
        <p className="text-sm font-light">
          Lorem ipsum dolor sit amet, wisi nemore fastidii at vis, eos equidem
          admodum disputando ea. An duis dolor appellantur mea, est id zril
          nobis appellantur. Ei sea duis senserit qualisque, te facilisis
          appellantur pri. Id aperiri aliquam interesset mel. Contentiones
          vituperatoribus id est, per prima nihil scripta no. No semper
          forensibus adipiscing quo. Amet deleniti lobortis et eam. In oporteat
          pertinacia quo, cu qui antiopam intellegebat, ei alii paulo has. In
          alia eros ornatus pri, graeci accusata pericula an vix. His ne homero
          dignissim, aliquam dolores scriptorem vis ut. Sit ad suas adhuc
          interesset, nec no essent iuvaret adipiscing ever
        </p>
      </div>
      <div className="mt-10 flex flex-col">
        <h3 className="text-3xl font-bold text-slate-800">Property features</h3>
        <p>
          Lorem ipsum dolor sit amet, homero debitis temporibus in mei, at sit
          voluptua antiopam hendrerit. Lorem epicuri eu per. Mediocrem torquatos
          deseruisse te eum commodo.
        </p>
        <h4 className="text-lg font-thin  text-slate-800 mt-10 mb-6 ">
          Property details
        </h4>
        <div className="grid grid-cols-2 gap-8 max-w-4xl">
          <div className="flex flex-row  justify-between">
            <div className="flex flex-row items-center space-x-4">
              <FaRulerCombined className="text-sm h-4 w-4 " />
              <span className="text-sm font-bold">size</span>
            </div>
            <span className="text-sm">
              290 m<sup>2</sup>
            </span>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center space-x-4">
              <Bedroom className="text-sm h-4 w-4 font-bold" />
              <span className="text-sm font-bold">bedrooms</span>
            </div>
            <span className="text-sm">3 </span>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center space-x-4">
              <Bathrooms className="text-sm h-4 w-4 font-bold" />
              <span className="text-sm font-bold">bathrooms</span>
            </div>
            <span className="text-sm">2 </span>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center space-x-4">
              <FaRulerCombined />
              <span className="text-sm font-bold">floor</span>
            </div>
            <span className="text-sm">Ground </span>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center space-x-4">
              <Furnishing className="text-sm h-4 w-4 font-bold" />
              <span className="text-sm font-bold">furnishing</span>
            </div>
            <span className="text-sm">Furnished </span>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center space-x-4">
              <FaRulerCombined />
              <span className="text-sm font-bold">construction year</span>
            </div>
            <span className="text-sm">2021 </span>
          </div>
        </div>
        <h4 className="text-lg font-thin  text-slate-800 mt-20 mb-6 ">
          Property Utility
        </h4>
        <div className="grid grid-cols-2 gap-8 max-w-4xl">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center space-x-4">
              <Swimming className="text-sm h-4 w-4 " />
              <span className="text-sm font-bold">Swimming pool</span>
            </div>
            <span className=" text-sm">2021 </span>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center space-x-4">
              <Heating className="text-sm h-4 w-4 " />
              <span className="text-sm font-bold">Heating</span>
            </div>
            <span className=" text-sm">Yes </span>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center space-x-4">
              <CableTv className="text-sm h-4 w-4 " />
              <span className="text-sm font-bold">Cable Tv</span>
            </div>
            <span className=" text-sm">Yes </span>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center space-x-4">
              <Wifi className="text-sm h-4 w-4 " />
              <span className="text-sm font-bold">Wifi</span>
            </div>
            <span className=" text-sm">Yes </span>
          </div>
        </div>
        <h4 className="text-lg font-thin  text-slate-800 mt-20 mb-6 ">
          Outdoor features
        </h4>
        <div className="grid grid-cols-2 gap-8 max-w-4xl">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center space-x-4">
              <Garage className="text-sm h-4 w-4 " />
              <span className="text-sm font-bold ">Parking</span>
            </div>
            <span className=" text-sm">Yes </span>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center space-x-4">
              <Swimming className="text-sm h-4 w-4 " />
              <span className="text-sm font-bold">Swimming pool</span>
            </div>
            <span className=" text-sm">2021 </span>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center space-x-4">
              <Swimming className="text-sm h-4 w-4 " />
              <span className="text-sm font-bold">CCTV cameras</span>
            </div>
            <span className=" text-sm">Yes </span>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center space-x-4">
              <Elevator className="text-sm h-5 w-5 " />
              <span className="text-sm font-bold">Elevator</span>
            </div>
            <span className=" text-sm">Yes </span>
          </div>
        </div>
      </div>
      <div>
        <h4 className="text-lg font-thin  text-slate-800 mt-20 mb-6 ">
          Outdoor features
        </h4>
        <p className="my-4 text-sm font-bold">
          The above properties is within the following amenities
        </p>
        <div className="grid grid-cols-2 gap-4 max-w-4xl">
          <p className="text-sm">School : 1.5 Km</p>
          <p className="text-sm">Market : 1.7 Km</p>
          <p className="text-sm">Hospital,Medical : 0.8 Km</p>
          <p className="text-sm">Gym , wellness Center : 0.4 Km</p>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
