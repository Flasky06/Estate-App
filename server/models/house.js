import mongoose from "mongoose";

const HouseSchema = new mongoose.Schema(
	{
		title: { type: String, required: true },
		description: { type: String, required: true },
		rooms: { type: Number, required: true },
		type: { type: String, enum: ["sale", "rent"], required: true },
		category: { type: String, required: true },
		rent: { type: Number, required: true },
		price: { type: Number, required: true },
		location: { type: String, required: true },
		images: [{ type: String, required: true }],
	},
	{
		timestamps: true,
	}
);

export default mongoose.model("House", HouseSchema);
