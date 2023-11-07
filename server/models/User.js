import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
	{
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		role: {
			type: String,
			enum: ["client", "company", "admin"],
			default: "client",
		},
	},
	{ timestamps: true }
);

export default mongoose.model("User", UserSchema);
