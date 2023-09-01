import React from "react";
import HouseInfo from "./HouseInfo";
import ImageComponent from "./ImageComponent";

function HouseDetails() {
	return (
		<div className="house-details">
			<ImageComponent />
			<HouseInfo />
		</div>
	);
}

export default HouseDetails;
