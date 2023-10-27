import path from "path";
import { fileURLToPath } from "url";
import {
  getArticlesData,
  getFiles,
  populateArticlesWithImages,
} from "../utils/index.js";

const __filename = fileURLToPath(import.meta.url);
const uploadDestination = path.join(path.dirname(__filename), "../images");
const dataDestination = path.join(path.dirname(__filename), "../data");

export const getDatawithImagePaths = async (req, res) => {
  try {
    const imageFiles = await getFiles(uploadDestination);
    const articlesData = await getArticlesData(
      `${dataDestination}/articles.json`
    );

    const responseData = populateArticlesWithImages(articlesData, imageFiles);
    res.status(200).json(responseData);
  } catch (error) {
    res.status(500).send(error.message || "Error fetching image names.");
  }
};

export const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send("No file uploaded.");
    }

    res.status(200).send("File uploaded successfully.");
  } catch (error) {
    res.status(500).send("File upload failed.");
  }
};
