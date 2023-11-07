import mongoose from "mongoose";

const HouseSchema = new mongoose.Schema(
	{
		title: { type: String, required: true, unique: true },
		description: { type: String, required: true },
		size: { type: String, required: true },
		rooms: { type: String, required: true },
		propertyType: { type: String, required: true },
		price: { type: String, required: true },
		image: { type: String, required: true },
	},
	{ timestamps: true }
);

export default mongoose.model("House", HouseSchema);
