export const sendResponse = (resDetails) => {
  const { res, statusCode, success, msg, data = {}, error = {} } = resDetails;

  return res.status(statusCode).json({
    success,
    msg,
    data,
    error,
  });
};

export const sendSuccessResponse = (
  res,
  msg = "success",
  statusCode = 200,
  data = {}
) => {
  return sendResponse({
    res,
    statusCode,
    success: true,
    msg,
    data,
  });
};

export const sendErrorResponse = (
  _req,
  res,
  statusCode = 500,
  msg = "Server Error.",
  error = {}
) => {
  return sendResponse({
    res,
    statusCode,
    success: false,
    msg,
    error,
  });
};
