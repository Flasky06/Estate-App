import React, { useState } from "react";
import Header from "../../layout/Header.tsx";
import DescriptionListingComponent from "./DescriptionListingComponent.tsx";
import MediaListingComponent from "./MediaListingComponent.tsx";
import LocationListingComponent from "./LocationListingComponent.tsx";
import DetailsListingComponent from "./DetailsListingComponent.tsx";
import AmenitiesListingComponent from "./AmenitiesListingComponent.tsx";

function CreateListing() {
  const [activeTab, setActiveTab] = useState("Description");

  const renderComponent = () => {
    switch (activeTab) {
      case "Description":
        return <DescriptionListingComponent />;
      case "Media":
        return <MediaListingComponent />;
      case "Location":
        return <LocationListingComponent />;
      case "Details":
        return <DetailsListingComponent />;
      case "Amenities":
        return <AmenitiesListingComponent />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col">
      <Header />
      <div className=" mt-32">
        <div className=" max-w-4xl mx-auto py-2">
          <div className="flex justify-between space-x-10 mb-10">
            <div
              className="font-bold"
              onClick={() => setActiveTab("Description")}
            >
              1. Description
            </div>
            <div className="font-bold" onClick={() => setActiveTab("Media")}>
              2. Media
            </div>
            <div className="font-bold" onClick={() => setActiveTab("Location")}>
              3. Location
            </div>
            <div className="font-bold" onClick={() => setActiveTab("Details")}>
              4. Details
            </div>
            <div
              className="font-bold"
              onClick={() => setActiveTab("Amenities")}
            >
              5. Amenities
            </div>
          </div>
          <div>{renderComponent()}</div>
        </div>
      </div>
    </div>
  );
}

export default CreateListing;
