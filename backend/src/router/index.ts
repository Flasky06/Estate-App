import express from "express";

import authentication from "./authentication";
import house from "./house";
import users from "./users";

const router = express.Router();

export default (): express.Router => {
	authentication(router);
	users(router);
	house(router);

	return router;
};
