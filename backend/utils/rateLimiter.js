import rateLimit from "express-rate-limit";

// windowsMS - minute
// max = limit each IP to max requests per windowMs

export const fetchArticlesWithImagesLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 50,
  message: "Too many requests from this IP, please try again later.",
});

export const handleImageUploadLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 20,
  message:
    "Too many requests for an image upload operation, please try again later.",
});
