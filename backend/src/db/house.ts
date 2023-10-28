import mongoose from "mongoose";

// House Config
const HouseSchema = new mongoose.Schema({
	title: { type: String, required: true },
	description: { type: String, required: true },
	price: { type: String, required: true },
	location: { type: String, required: true },
	image: { type: String, required: true },
});

export const HouseModel = mongoose.model("House", HouseSchema);
