import express from "express";
import { RegisterUser, UserLogin } from "../controllers/User.js";

const router = express.Router();

// REGISTER USER
router.post("/register", RegisterUser);

// USER LOGIN
router.post("/login", UserLogin);

export { router as authRouter };
