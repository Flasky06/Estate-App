import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { authRouter } from "./routes/users.js";
import { recipesRouter } from "./routes/recipes.js";
import { houseRouter } from "./routes/houses.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", authRouter);
app.use("/recipes", recipesRouter);
app.use("/house", houseRouter);

mongoose.connect(
	"mongodb+srv://recipes:recipes@cluster0.vhpfkxk.mongodb.net/recipes?retryWrites=true&w=majority"
);

app.listen(3700, () => console.log("server started !!"));
