import House from "../models/house.js";
import { validationResult } from "express-validator";

// Create House Controller
export const CreateHouseController = async (req, res) => {
	const {
		title,
		description,
		rooms,
		type,
		category,
		rent,
		price,
		location,
		image,
	} = req.body;
	try {
		// Validate Input
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		// Create a new House
		const newHouse = new House({
			title,
			description,
			rooms,
			type,
			category,
			rent,
			price,
			location,
			image,
		});

		// Save the new house to the DB
		await newHouse.save();

		res.status(201).json(newHouse);
	} catch (error) {
		console.log("Error:", error);
		res.status(500).json({ message: "Server error" });
	}
};

// Get Houses Controller
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

//GET SINGLE HOUSE
export const GetHouseController = async (req, res) => {
	try {
		// Get the house ID from the request parameters
		const houseId = req.params.id;

		// check if the provided ID is valid
		if (!houseId) {
			return res.status(400).json({ errors: [{ msg: "Invalid house ID" }] });
		}

		// Find the house by ID in the database
		const house = await House.findById(houseId);

		// check if house exists
		if (!house) {
			return res.status(404).json({ error: [{ msg: "House not found" }] });
		}

		// If the house exists, send the house data in the response
		res.json({ house });
	} catch (error) {
		console.error("Error:", error);
		res.status(500).json({ errors: [{ msg: "Server error" }] });
	}
};

// UPDATE HOUSE DETAILS
export const UpdateHouseController = async (req, res) => {
	try {
		// Extract House ID and the fields to update from the request body
		const {
			id,
			title,
			description,
			rooms,
			type,
			category,
			rent,
			price,
			location,
			image,
		} = req.body;

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
