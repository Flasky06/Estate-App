import express from "express";
import { getAllHouses } from "../controllers/house";

export default (router: express.Router) => {
	router.get("/houses", getAllHouses);
};
