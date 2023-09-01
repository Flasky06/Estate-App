import { HouseModel } from "../models/Houses.js";
import { UserModel } from "../models/Users.js";

export const CreateHouse = async (req, res) => {
	const house = new HouseModel(req.body);

	try {
		const response = await house.save();

		res.json(response);
	} catch (err) {
		res.json(err);
	}
};

export const GetAllHouses = async (req, res) => {
	try {
		const response = await HouseModel.find({});
		res.json(response);
	} catch (err) {
		res.json(err);
	}
};
export const GetHouse = async (req, res) => {
	try {
		const houseId = req.params.id; // Extract the house ID from the request parameters

		const house = await HouseModel.findById(houseId); // Fetch the house data from the database
		if (!house) {
			return res.status(404).json({ message: "House not found" });
		}
		res.json(house); // Send the house data as a JSON response
	} catch (err) {
		res.status(500).json({ message: "Internal server error" });
	}
};
export const SaveHouse = async (req, res) => {
	try {
		const house = await HouseModel.findById(req.body.houseId);
		if (!house) {
			return res.status(404).json({ error: "House not found" });
		}

		const user = await UserModel.findById(req.body.userID);
		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}

		user.savedHouses.push(house);
		await user.save();
		res.status(201).json({ savedHouses: user.savedHouses });
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: "Internal server error" });
	}
};
