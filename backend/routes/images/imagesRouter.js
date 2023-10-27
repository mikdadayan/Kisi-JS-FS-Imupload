import express, { Router } from "express";
import path from "path";
import { fileURLToPath } from "url";

import {
  getDatawithImagePaths,
  uploadImage,
} from "../../controllers/imageController.js";
import { upload } from "../../middlewares/uploadImage.js";

const router = Router();

const __filename = fileURLToPath(import.meta.url);
const uploadDestination = path.join(path.dirname(__filename), "../../images");

console.log(uploadDestination);

router.use("/images", express.static(uploadDestination));

router.get("/images", getDatawithImagePaths);

router.post("/images", upload.single("file"), uploadImage);

export default router;
