import { sendSuccessResponse } from "../utils/createResponse.js";

export const listAvailableRoutes = (req, res) => {
  const availableRoutes = [
    { method: "GET", path: "/api/images" },
    {
      method: "POST",
      path: "/api/images",
      bodyFormat: "image (multipart/form-data)",
    },
  ];
  return sendSuccessResponse(
    res,
    "The list of available routes: ",
    200,
    availableRoutes
  );
};
