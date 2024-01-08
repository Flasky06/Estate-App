import React, { useState, useEffect } from "react";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import { BiBed } from "react-icons/bi";
import { FaBath } from "react-icons/fa";
import { FaRulerCombined } from "react-icons/fa";
import home from "../../assets/image/home.jpeg";
import living from "../../assets/image/living.jpeg";
import one from "../../assets/image/one.jpeg";

// Array of image URLs for demonstration
const images = [home, living, one, home, living, one, home];

const ImageSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000); // Change image every 10 seconds

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
      <div className="flex flex-row justify-between mb-4">
        <h2 className="text-3xl font-bold text-slate-800">South Sun House</h2>
        <div className="text-3xl font-bold text-slate-800">
          <span>Price</span>
          <span>:265,000ksh</span>
        </div>
      </div>
      <div className="flex space-x-2 mb-1">
        <span className="bg-slate-300 text-white px-2 py-[1px]  text-sm font-semibold">
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
            className={`w-20 h-20 cursor-pointer ${
              index === activeIndex ? "ring-2 ring-blue-500" : ""
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
      <div className="mt-10 flex flex-col">
        <h3 className="text-3xl font-bold text-slate-800">Description</h3>
        <p>
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
        <h4 className="text-xl font-bold my-5 ">Property details</h4>
        <div className="grid grid-cols-2 gap-8 max-w-4xl mb-10">
          <div className="flex flex-row  justify-between">
            <div className="flex flex-row items-center space-x-4">
              <FaRulerCombined />
              <span>size</span>
            </div>
            <span className="font-bold">
              290 m<sup>2</sup>
            </span>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center space-x-4">
              <BiBed />
              <span>bedrooms</span>
            </div>
            <span className="font-bold">3 </span>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center space-x-4">
              <FaBath />
              <span>bathrooms</span>
            </div>
            <span className="font-bold">2 </span>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center space-x-4">
              <FaRulerCombined />
              <span>floor</span>
            </div>
            <span className="font-bold">Ground </span>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center space-x-4">
              <FaRulerCombined />
              <span>furnishing</span>
            </div>
            <span className="font-bold">Furnished </span>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center space-x-4">
              <FaRulerCombined />
              <span>construction year</span>
            </div>
            <span className="font-bold">2021 </span>
          </div>
        </div>
        <h4 className="text-xl font-bold my-5 ">Property Utility</h4>
        <div className="grid grid-cols-2 gap-8 max-w-4xl">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center space-x-4">
              <FaRulerCombined />
              <span>construction year</span>
            </div>
            <span className="font-bold">2021 </span>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center space-x-4">
              <FaRulerCombined />
              <span>construction year</span>
            </div>
            <span className="font-bold">2021 </span>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center space-x-4">
              <FaRulerCombined />
              <span>construction year</span>
            </div>
            <span className="font-bold">2021 </span>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center space-x-4">
              <FaRulerCombined />
              <span>construction year</span>
            </div>
            <span className="font-bold">2021 </span>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center space-x-4">
              <FaRulerCombined />
              <span>construction year</span>
            </div>
            <span className="font-bold">2021 </span>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center space-x-4">
              <FaRulerCombined />
              <span>construction year</span>
            </div>
            <span className="font-bold">2021 </span>
          </div>
        </div>
        <h4 className="text-xl font-bold my-5 "> Outdoor features</h4>
        <div className="grid grid-cols-2 gap-8 max-w-4xl">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center space-x-4">
              <FaRulerCombined />
              <span>construction year</span>
            </div>
            <span className="font-bold">2021 </span>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center space-x-4">
              <FaRulerCombined />
              <span>construction year</span>
            </div>
            <span className="font-bold">2021 </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
