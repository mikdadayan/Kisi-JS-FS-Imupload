import express, { Router } from "express";
import path from "path";
import { fileURLToPath } from "url";

import { upload } from "../../middlewares/uploadImage.js";
import {
  fetchArticlesWithImages,
  handleImageUpload,
} from "../../controllers/articleAndImageController.js";
import {
  fetchArticlesWithImagesLimiter,
  handleImageUploadLimiter,
} from "../../utils/rateLimiter.js";

const router = Router();

const __filename = fileURLToPath(import.meta.url);
const uploadDestination = path.join(path.dirname(__filename), "../../images");

console.log(uploadDestination);

router.use("/images", express.static(uploadDestination));

router.get("/images", fetchArticlesWithImagesLimiter, fetchArticlesWithImages);

router.post(
  "/images",
  handleImageUploadLimiter,
  upload.single("file"),
  handleImageUpload
);

export default router;
