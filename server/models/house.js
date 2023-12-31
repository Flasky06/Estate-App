import mongoose from "mongoose";

const HouseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    rooms: {
      type: String,
      enum: ["studio", "1 bedroom", "2 bedroom", "3 bedroom", "4 bedroom"],
      required: true,
    },
    type: { type: String, enum: ["sale", "rent"], required: true },
    category: {
      type: String,
      enum: ["apartment", "home", "villa"],
      required: true,
    },
    price: { type: Number },
    county: { type: String },
    location: {
      type: String,
      required: true,
    },
    images: [{ type: String, required: true }],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("House", HouseSchema);
