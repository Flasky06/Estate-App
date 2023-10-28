import express from "express";
import {
	createNewHouse,
	deleteHouse,
	getAllHouses,
	updateHouse,
} from "../controllers/house";

export default (router: express.Router) => {
	router.get("/houses", getAllHouses);
	router.post("/houses", createNewHouse);
	router.delete("/houses/:id", deleteHouse);
	router.put("/houses/:id", updateHouse);
};
