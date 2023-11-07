import House from "../models/house.js";
import { validationResult } from "express-validator";

// Create House Controller
export const CreateHouseController = async (req, res) => {
	const { title, description } = req.body;
	try {
		// Validate Input
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		// Create a new House
		const newHouse = new House({ title, description });

		// Save the new house to the DB
		await newHouse.save();

		res.status(201).json(newHouse);
	} catch (error) {
		console.log("Error:", error);
		res.status(500).json({ message: "Server error" });
	}
};

// Get All Houses Controller
export const GetHousesController = async (req, res) => {
	try {
		// Retrieve all Houses From DB
		const houses = await House.find();

		// Check if there no houses
		if (!houses || houses.length === 0) {
			return res.status(404).json({ message: "No houses found" });
		}

		// If houses are found ,send JSON response
		res.json(houses);
	} catch (error) {
		console.error("Error:", error);
		res.status(500).json({ message: "Server error" });
	}
};

export const GetHouseController = async (req, res) => {
	try {
		// Retrieve single house
		const house = await House.findOne();

		// Check if House exists
		if (!house) {
			return res.status(404).json({ message: "house not found" });
		}
	} catch (error) {}
};

// Update House Details
export const UpdateHouseController = async (req, res) => {
	try {
		// Extract House ID and the fields to update from the request body
		const { id, title, description } = req.body;

		// Validate Input
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		// Find House by ID
		const updatedHouse = await House.findByIdAndUpdate(
			req.params.id,
			{ $set: req.body },
			{ new: true }
		);

		// Respond with the updated house
		res.status(200).json(updatedHouse);
	} catch (error) {
		console.error("Error:", error);
		res.status(500).json({ message: "Server error" });
	}
};

// DELETE HOUSE
export const DeleteHouseController = async (req, res) => {
	try {
		const house = await House.findByIdAndDelete(req.params.id);
		res.status(200).json(user);
	} catch (error) {}
};
