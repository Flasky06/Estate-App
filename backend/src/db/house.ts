import mongoose from "mongoose";

// House Config
const HouseSchema = new mongoose.Schema({
	title: { type: String, required: true },
	description: { type: String, required: true },
	price: { type: String },
	location: { type: String },
	image: { type: String },
});

export const HouseModel = mongoose.model("House", HouseSchema);
