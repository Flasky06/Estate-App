import mongoose from "mongoose";

const HouseSchema = mongoose.Schema(
	{
		houseType: {
			type: String,
			required: true,
		},
		price: {
			type: String,
			required: true,
		},

		imageUrl: {
			type: String,
			required: false,
		},
		location: {
			type: String,
			required: true,
		},
		facilities: {
			type: String,
			required: true,
		},
		houseOwner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "users",
			required: true,
		},
		isAdmin: { type: Boolean, required: false },
	},
	{ timestamps: true }
);

export const HouseModel = mongoose.model("Houses", HouseSchema);
