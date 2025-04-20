import express from "express"
import { addFood } from "../controllers/foodControllers.js"
import multer from "multer"
const foodRouter= express.Router();


// Image Storage Engine
const Storage=multer.diskStorage({
    destination:"uploads",
    filename: (req, file, cb) => {
  cb(null, `${Date.now()}-${file.originalname}`);
}

})
const upload= multer({storage:Storage})
foodRouter.post("/add", upload.single("image"), addFood);


export default foodRouter;