import express from "express";
import { check } from "express-validator";
import {
  CreateHouseController,
  GetCategoriesController,
  GetHouseByCategories,
  GetHouseController,
  GetHousesController,
  UpdateHouseController,
} from "../controllers/houseControllers.js";

const router = express.Router();
// CREATE  NEW HOUSE
router.post(
  "/create",
  [
    // Update House Details

    check("title", "title cannot be blank").isLength({ min: 3 }),
    check("description", "Description cannot be empty").isLength({ min: 3 }),
  ],
  CreateHouseController
);

// UPDATE HOUSE
router.put(
  "/update/:id",
  [
    check("title", "title cannot be blank").isLength({ min: 3 }),
    check("description", "Description cannot be empty").isLength({ min: 3 }),
  ],
  UpdateHouseController
);

// GET ALL HOUSES
router.get("/all", GetHousesController);

router.get("/:id", GetHouseController);

// GET ALL CATEGORIES
router.get("/categories", GetCategoriesController);

// GET HOUSE BY CATEGORY
router.get("/:category", GetHouseByCategories);

export default router;
