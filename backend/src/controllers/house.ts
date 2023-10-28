import express from "express";
import mongoose from "mongoose";
import { HouseModel } from "../db/house";

// GET ALL HOUSES
export const getAllHouses = async (
	req: express.Request,
	res: express.Response
) => {
	try {
		const houses = await HouseModel.find();

		return res.status(200).json(houses);
	} catch (error) {
		console.error(error);
		return res.status(500).json({ error: "Internal Server Error" });
	}
};

// GET SINGLE HOUSE
export const getHouse = async (req: express.Request, res: express.Response) => {
	try {
		const { id } = req.params;

		// Find house by id
		const house = await HouseModel.findById(id);

		if (!house) {
			return res.status(404).json({ error: "House not found" });
		}

		return res.status(200).json(house);
	} catch (error) {
		console.error(error);
		return res.status(500).json({ error: "Internal Server Error" });
	}
};

// CREATE NEW HOUSE
export const createNewHouse = async (
	req: express.Request,
	res: express.Response
) => {
	try {
		const { title, description, price, location, image } = req.body;

		if (!title || !description || !price || !location || !image) {
			return res.sendStatus(400);
		}
		// Create new  house
		const newHouse = new HouseModel({
			title,
			description,
			price,
			location,
			image,
		});

		// Save house to db
		await newHouse.save();
		return res.status(200).json(newHouse).end();
	} catch (error) {
		// HANDLE ERRORS THAT MAY OCCUR
		res.sendStatus(500);
	}
};

// UPDATE HOUSE
export const updateHouse = async (
	req: express.Request,
	res: express.Response
) => {
	try {
		const { title, description, price, location, image } = req.body;

		const { id } = req.params;

		// check if id is a valid ObjectId
		if (!mongoose.Types.ObjectId.isValid(id)) {
			return res.sendStatus(400);
		}

		// find house by ID
		const houseToUpdate = await HouseModel.findById(id);

		// Update the house properties if provided
		if (title) {
			houseToUpdate.title = title;
		}
		if (description) {
			houseToUpdate.description = description;
		}
		if (price) {
			houseToUpdate.price = price;
		}
		if (location) {
			houseToUpdate.location = location;
		}
		if (image) {
			houseToUpdate.image = image;
		}

		// save the updated house to the database
		await houseToUpdate.save();

		// Send a success response
		res.status(200).json({
			message: "House updated successfully",
			updatedHouse: houseToUpdate,
		});
	} catch (error) {
		console.log(error);

		return res.sendStatus(400);
	}
};

// DELETE HOUSE
export const deleteHouse = async (
	req: express.Request,
	res: express.Response
) => {
	try {
		const { id } = req.params;

		// Check if user exists
		if (!mongoose.Types.ObjectId.isValid(id)) {
			return res.sendStatus(400);
		}

		// Check if id have a House Model

		const deletedHouse = await HouseModel.findOneAndDelete({ _id: id });

		if (!deleteHouse) {
			return res.status(404).json({ message: "Huuse not found" });
		}

		// Send a success response
		return res.status(200).json({ message: "House deleted successfully" });
	} catch (error) {}
};
