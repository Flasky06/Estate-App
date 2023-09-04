import React, { useState } from "react";
import HouseInfo from "./HouseInfo";
import "./index.css"; // Import the corresponding CSS file

const images = ["image1.jpg", "image2.jpg", "image3.jpg"]; // List of image filenames

const ImageComponent = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const prevImage = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? images.length - 1 : prevIndex - 1
		);
	};

	const nextImage = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === images.length - 1 ? 0 : prevIndex + 1
		);
	};

	return (
		<div className="image-component">
			<div className="slider-container">
				<div className="image-container">
					<img
						className="slider-image"
						src={require(`../../images/${images[currentIndex]}`)}
						alt={`Image ${currentIndex + 1}`}
					/>
					<div className="slider-buttons">
						<button className="slider-button prev" onClick={prevImage}>
							Prev
						</button>
						<button className="slider-button next" onClick={nextImage}>
							Next
						</button>
					</div>
				</div>
				<div className="thumbnail-container">
					{images.map((image, index) => (
						<img
							key={index}
							className={`thumbnail ${currentIndex === index ? "active" : ""}`}
							src={require(`../../images/${image}`)}
							alt={`Thumbnail ${index + 1}`}
							onClick={() => setCurrentIndex(index)}
						/>
					))}
				</div>
			</div>
			<HouseInfo />
		</div>
	);
};

export default ImageComponent;
