import express from "express";
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

		// Use `findById` to find a house by its ID
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
	} catch (error) {}
};

// DELETE HOUSE
export const deleteHouse = async (
	req: express.Request,
	res: express.Response
) => {
	try {
	} catch (error) {}
};
