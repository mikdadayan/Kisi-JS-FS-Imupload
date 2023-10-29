import fs from "fs/promises";

export const getArticlesData = async (dataDestination) => {
  const dataBuffer = await fs.readFile(dataDestination);
  return JSON.parse(dataBuffer.toString());
};

export const getFiles = async (uploadDestinations) => {
  return await fs.readdir(uploadDestinations);
};

export const populateArticlesWithImages = (data = [], uploads = []) => {
  let responseData = [];
  for (let i = 0; i < uploads.length; i++) {
    if (!data[i]) {
      responseData[i] = { ...data[0] };
    } else {
      responseData[i] = { ...data[i] };
    }
    responseData[i].imageUrl = `/${uploads[i]}`;
  }
  return responseData;
};
