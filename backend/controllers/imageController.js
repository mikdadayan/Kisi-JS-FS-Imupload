import path from "path";
import { fileURLToPath } from "url";
import {
  getArticlesData,
  getFiles,
  populateArticlesWithImages,
} from "../utils/functions.js";
import { sendSuccessResponse } from "../utils/createResponse.js";

const __filename = fileURLToPath(import.meta.url);
const uploadDestination = path.join(path.dirname(__filename), "../images");
const dataDestination = path.join(path.dirname(__filename), "../data");

export const getDatawithImagePaths = async (req, res, next) => {
  try {
    const imageFiles = await getFiles(uploadDestination);
    const articlesData = await getArticlesData(
      `${dataDestination}/articles.json`
    );

    const responseData = populateArticlesWithImages(articlesData, imageFiles);

    sendSuccessResponse(
      res,
      "Articles Fetched successfully.",
      200,
      responseData
    );
  } catch (error) {
    let err = error;
    console.error(error);
    next(err);
  }
};

export const uploadImage = async (req, res, next) => {
  try {
    if (!req.file) {
      const error = new Error("No file uploaded.");
      error.status = 400;
      throw error;
    }

    sendSuccessResponse(res, "File uploaded successfully.", 201);
  } catch (error) {
    let err = error;
    console.error("======", error);
    next(err);
  }
};
