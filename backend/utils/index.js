import fs from "fs/promises";

export const getArticlesData = async (dataDestination) => {
  const dataBuffer = await fs.readFile(dataDestination);
  return JSON.parse(dataBuffer.toString());
};

export const getFiles = async (uploadDestinations) => {
  return await fs.readdir(uploadDestinations);
};

export const populateArticlesWithImages = (data, uploads) => {
  let responseData = [];
  for (let i = 0; i < uploads.length; i++) {
    responseData[i] = { ...data[i] };
    // imageUrl Path to be updated...
    responseData[i].imageUrl = `/${uploads[i]}`;
  }
  return responseData;
};
