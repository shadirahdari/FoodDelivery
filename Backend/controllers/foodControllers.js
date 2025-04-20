import foodModel from "../models/foodModel.js";

export const addFood = async (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    const image_filename = req.file?.filename;

    const { name, description, price, category } = req.body;

    if (!name || !description || !price || !category || !image_filename) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const food = new foodModel({
      name,
      description,
      price,
      category,
      image: image_filename,
    });

    await food.save();

    res.status(201).json({ success: true, message: "Food Added" });
  } catch (error) {
    console.error("ADD FOOD ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Error",
      error: error.message,
    });
  }
};
