import { sendErrorResponse } from "./createResponse.js";

export const errorHandler = (err, req, res, _next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  return sendErrorResponse(req, res, statusCode, err.message, {});
};
